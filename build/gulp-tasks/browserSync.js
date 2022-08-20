import browsersync from 'browser-sync';

export default function browserSync(cb) {
    browsersync.init({
        proxy: process.env.BROWSERSYNC_PROXY,
    });

    cb();
}
