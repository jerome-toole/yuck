import gulp from 'gulp';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import rename from 'gulp-rename';

import config from '../build-config.js';

export default function componentsGeneral() {
    const componentSrc = [
        `${
            config.paths.base.src + config.paths.components.src + config.paths.components.entry
        }**/**/*`,
        '!**/**/*.scss',
        '!**/**/*.js',
    ];

    return gulp
        .src(componentSrc)
        .pipe(
            rename((path) => {
                // Remove 'components-*' from the file directory so that all components end up in assets/components/
                path.dirname = path.dirname.replace(/^component[^/]+/, '');
                return path;
            })
        )
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.base.dest + config.paths.components.dest))
        .pipe(browsersync.stream());
}
