import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import stylelint from '@ronilaukkarinen/gulp-stylelint';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

import config from '../build-config.js';

const sass = gulpSass(dartSass);

// ---------------------------------------------------------------------
// Task functions - reusable gulp tasks.
// ---------------------------------------------------------------------

/**
 * Compile the source style files into the destination directory.
 */
function taskStyles(src, dest) {
    const timestamp = Math.floor(Date.now() / 1000);
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
        .pipe(gulpif(!isProduction, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(
            sass({
                includePaths: config.paths.includePaths,
            })
        )
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(
            gulpif(
                isProduction,
                rename({
                    suffix: `.${timestamp}`,
                })
            )
        )
        .pipe(
            rename((path) => {
                // Remove 'components-*' from the file directory so that all components end up in assets/components/
                path.dirname = path.dirname.replace(/^component[^/]+/, '');
                return path;
            })
        )
        .pipe(gulpif(!isProduction, sourcemaps.write('./')))
        .pipe(gulp.dest(dest))
        .pipe(browsersync.stream());
}

/**
 * Lint the source style files to detect any problems.
 */
function taskStylesLint(src) {
    return gulp.src(src).pipe(plumber()).pipe(stylelint(config.plugins.stylelint));
}

/**
 * Auto-fix problems in the source style files and (over)write them in the destination directory.
 */
function taskStylesFix(src, dest) {
    config.plugins.stylelint.fix = true;

    return gulp
        .src(src)
        .pipe(plumber())
        .pipe(stylelint(config.plugins.stylelint))
        .pipe(gulp.dest(dest));
}

// ---------------------------------------------------------------------
// Export functions - run reusable gulp tasks on specific source files.
// ---------------------------------------------------------------------

/**
 * Lint all style files to detect any problems.
 */
function stylesLint() {
    const src = config.paths.base.src + config.paths.styles.entry;

    return taskStylesLint(src);
}

/**
 * Auto-fix problems in all style files, overwriting the files in place.
 */
function stylesFix() {
    const src = config.paths.base.src + config.paths.styles.entry;
    const dest = config.paths.base.src;

    return taskStylesFix(src, dest);
}

/**
 * Compile all theme style files into the /assets/ directory (but ignore components' style files).
 *
 * When compiling all theme styles, only the _src/ directory root files (_src/main.scss, _src/editor-styles.scss, etc)
 * need to be compiled since they import their required style files anyway.
 *
 * This means the _src/styles/ directory should also be ignored when compiling, which feels unintuitive but is correct.
 */
function stylesTheme() {
    const src = [
        config.paths.base.src + config.paths.styles.entry,
        `!${config.paths.base.src}${config.paths.styles.src}${config.paths.styles.entry}`, // ignore _src/styles/.
        `!${config.paths.base.src}${config.paths.components.src}${config.paths.styles.entry}`, // ignore components.
    ];
    const { dest } = config.paths.base;

    return taskStyles(src, dest);
}

/**
 * Compile all component style files to the /assets/components/ directory.
 *
 * When compiling all components' styles, any `styles-main.js` files should be ignored as these will automatically be
 * compiled into the main theme styles file.
 */
function stylesComponents() {
    const src = [
        config.paths.base.src + config.paths.components.src + config.paths.styles.entry,
        `!${config.paths.base.src}${config.paths.components.src}**/styles-main.scss`,
        `!${config.paths.base.src}${config.paths.components.src}**/styles-editor.scss`,
    ];
    const dest = config.paths.base.dest + config.paths.components.dest;

    return taskStyles(src, dest);
}

export { stylesLint, stylesFix, stylesTheme, stylesComponents };
