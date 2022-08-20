import gulp from 'gulp';
import plumber from 'gulp-plumber';

import config from '../build-config.js';

export default function staticAssets() {
    const destination = config.paths.base.dest + config.paths.staticAssets.dest;

    return gulp
        .src(`${config.paths.base.src + config.paths.staticAssets.src}*.*`)
        .pipe(plumber())
        .pipe(gulp.dest(destination));
}
