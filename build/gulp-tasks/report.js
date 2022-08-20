import gulp from 'gulp';
import sizereport from 'gulp-sizereport';

import config from '../build-config.js';

export default function report() {
    return gulp
        .src([
            `${config.paths.base.dest}**/*`,
            `!${config.paths.base.dest}timestamp.txt`,
            '!**/*.php',
            '!**/group_*.json',
        ])
        .pipe(
            sizereport({
                gzip: true,
            })
        );
}
