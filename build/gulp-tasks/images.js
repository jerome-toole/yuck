import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';

import config from '../build-config.js';

export default function images() {
    const destination = config.paths.base.dest + config.paths.images.dest;

    return gulp
        .src(`${config.paths.base.src + config.paths.images.src}**/*`)
        .pipe(plumber())
        .pipe(
            imagemin(
                [
                    gifsicle(config.plugins.imagemin.gif),
                    mozjpeg(config.plugins.imagemin.jpg),
                    optipng(config.plugins.imagemin.png),
                    svgo(config.plugins.imagemin.svg),
                ],
                {
                    verbose: false,
                    silent: true,
                }
            )
        )
        .pipe(gulp.dest(destination));
}
