import gulp from 'gulp';
import clean from './clean.js';
import create from './create.js';
import report from './report.js';
import images from './images.js';
import staticAssets from './staticAssets.js';
import svg from './svg.js';
import { stylesTheme, stylesComponents } from './task-styles.js';
import { scriptsTheme, scriptsComponents } from './task-scripts.js';
import pot from './pot.js';
import { phpLint } from './php.js';
import assetManifest from './assetManifest.js';

// ACF Blocks
import componentsGeneral from './componentsGeneral.js';

export default gulp.series(
    clean,
    create,
    gulp.parallel(
        componentsGeneral,
        staticAssets,
        images,
        svg,
        stylesTheme,
        stylesComponents,
        scriptsTheme,
        scriptsComponents
    ),
    gulp.parallel(assetManifest, report)
);
