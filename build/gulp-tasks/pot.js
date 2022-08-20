import gulp from 'gulp';
import plumber from 'gulp-plumber';
import wpPot from 'gulp-wp-pot';

import config from '../build-config.js';

export default function pot() {
    const destination = `./${config.wordpress['Text Domain']}.pot`;

    return gulp
        .src(config.paths.php, { cwd: './' })
        .pipe(plumber())
        .pipe(
            wpPot({
                domain: config.wordpress['Text Domain'],
                package: config.wordpress['Text Domain'],
            })
        )
        .pipe(gulp.dest(destination));
}
