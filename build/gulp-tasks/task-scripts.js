import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import named from 'vinyl-named-with-path';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import eslint from 'gulp-eslint-new';

import config from '../build-config.js';
import webpackConfig from '../../webpack.config.js';

// ---------------------------------------------------------------------
// Task functions - reusable gulp tasks.
// ---------------------------------------------------------------------

/**
 * Compile the source script files into the destination directory.
 */
function taskScripts(src, dest) {
    const isProduction = process.env.NODE_ENV !== 'development';

    return gulp
        .src(src)
        .pipe(
            gulpif(
                !isProduction,
                plumber({
                    errorHandler(err) {
                        console.log(err.message);
                        this.emit('end');
                    },
                })
            )
        )
        .pipe(named())
        .pipe(
            webpackStream(
                {
                    config: [
                        webpackConfig({
                            production: isProduction,
                        }),
                    ],
                },
                webpack
            )
        )
        .pipe(
            rename((path) => {
                // Remove 'components-*' from the file directory so that all components end up in assets/components/
                path.dirname = path.dirname.replace(/^component[^/]+/, '');
                return path;
            })
        )
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
}

/**
 * Lint the source script files to detect any problems.
 */
function taskScriptsLint(src) {
    return gulp.src(src).pipe(plumber()).pipe(eslint()).pipe(eslint.format());
}

/**
 * Auto-fix problems in the source script files and (over)write them in the destination directory.
 */
function taskScriptsFix(src, dest) {
    return gulp
        .src(src)
        .pipe(plumber())
        .pipe(eslint({ fix: true }))
        .pipe(gulp.dest(dest));
}

// ---------------------------------------------------------------------
// Export functions - run reusable gulp tasks on specific source files.
// ---------------------------------------------------------------------

/**
 * Lint all script files to detect any problems.
 */
function scriptsLint() {
    const src = config.paths.base.src + config.paths.scripts.entry;

    return taskScriptsLint(src);
}

/**
 * Auto-fix problems in all script files, overwriting the files in place.
 */
function scriptsFix() {
    const src = config.paths.base.src + config.paths.scripts.entry;
    const dest = config.paths.base.src;

    return taskScriptsFix(src, dest);
}

/**
 * Compile all theme script files into the /assets/ directory (but ignore components' script files).
 *
 * When compiling all theme scripts, only the _src/ directory root files (_src/main.js, _src/editor-scripts.js, etc)
 * need to be compiled since they import their required script files anyway.
 *
 * This means the _src/scripts/ directory should also be ignored when compiling, which feels unintuitive but is correct.
 */
function scriptsTheme() {
    const src = [
        config.paths.base.src + config.paths.scripts.entry,
        `!${config.paths.base.src}${config.paths.scripts.src}${config.paths.scripts.entry}`, // ignore _src/scripts/.
        `!${config.paths.base.src}${config.paths.components.src}${config.paths.scripts.entry}`, // ignore components.
    ];

    const { dest } = config.paths.base;

    return taskScripts(src, dest);
}

/**
 * Compile all component script files to the /assets/components/ directory.
 *
 * When compiling all components' scripts, any `scripts-main.js` files should be ignored as these will automatically be
 * compiled into the main theme scripts file.
 */
function scriptsComponents() {
    const src = [
        config.paths.base.src + config.paths.components.src + config.paths.scripts.entry,
        `!${config.paths.base.src + config.paths.components.src}**/scripts-main.js`,
    ];
    const dest = config.paths.base.dest + config.paths.components.dest;

    return taskScripts(src, dest);
}

export { scriptsLint, scriptsFix, scriptsTheme, scriptsComponents };
