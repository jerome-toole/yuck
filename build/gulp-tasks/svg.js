import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin, { svgo } from 'gulp-imagemin';

import config from '../build-config.js';

export default function svg() {
    return gulp
        .src(`${config.paths.base.src + config.paths.svg.src}**/*.svg`)
        .pipe(plumber())
        .pipe(
            imagemin([svgo(config.plugins.imagemin.svgdeep)], {
                verbose: false,
                silent: true,
            })
        )
        .pipe(gulp.dest(config.paths.base.dest + config.paths.svg.dest));
}
