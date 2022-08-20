// Core
import gulp from 'gulp';

// General
import staticAssets from './staticAssets.js';
import assetManifest from './assetManifest.js';

// Assets
import images from './images.js';
import svg from './svg.js';
import { stylesTheme, stylesComponents, stylesLint } from './task-styles.js';
import { scriptsTheme, scriptsComponents, scriptsLint } from './task-scripts.js';

// Components
import componentsGeneral from './componentsGeneral.js';

// Config
import config from '../build-config.js';

// Admin
// import report from './report';

export default function watch() {
    // Styles
    gulp.watch(
        `${config.paths.base.src}**/*.scss`,
        gulp.parallel(gulp.series(stylesTheme, stylesComponents, assetManifest), stylesLint)
    );

    // Scripts
    gulp.watch(
        `${config.paths.base.src}**/*.js`,
        gulp.parallel(gulp.series(scriptsTheme, scriptsComponents, assetManifest), scriptsLint)
    );

    // Static
    gulp.watch(
        `${config.paths.staticAssets.src}**/*`,
        { cwd: config.paths.base.src },
        staticAssets
    );

    // Images
    gulp.watch(
        `${config.paths.base.src + config.paths.images.src}**/*`,
        gulp.series(images, assetManifest)
    );

    // SVGs
    gulp.watch(
        `${config.paths.base.src + config.paths.images.src}**/*.svg`,
        gulp.series(svg, assetManifest)
    );

    // Components
    gulp.watch(
        [`${config.paths.base.src + config.paths.components.src}**/*`, '!**/*.scss', '!**/*.js'],
        gulp.series(componentsGeneral, assetManifest)
    );
}
