import gulp from 'gulp';
import browsersync from './build/gulp-tasks/browserSync.js';
import buildTask from './build/gulp-tasks/build.js';
import watchTask from './build/gulp-tasks/watch.js';
import clean from './build/gulp-tasks/clean.js';
import report from './build/gulp-tasks/report.js';
import images from './build/gulp-tasks/images.js';
import fix from './build/gulp-tasks/fix.js';
import { phpLint, phpLintFull, phpFix } from './build/gulp-tasks/php.js';
import svg from './build/gulp-tasks/svg.js';
import componentsGeneral from './build/gulp-tasks/componentsGeneral.js';
import {
    stylesLint,
    stylesFix,
    stylesTheme,
    stylesComponents,
} from './build/gulp-tasks/task-styles.js';
import {
    scriptsLint,
    scriptsFix,
    scriptsTheme,
    scriptsComponents,
} from './build/gulp-tasks/task-scripts.js';
import pot from './build/gulp-tasks/pot.js';

const watch = gulp.series(buildTask, gulp.parallel(browsersync, watchTask));
const build = buildTask;

const taskName = process.argv[2];

if (taskName === 'watch') {
    const env = await import('./.env.js');

    Object.entries(env.default).forEach((item) => {
        const [key, value] = item;
        process.env[key] = value;
    });
}

export {
    build,
    watch,
    clean,
    componentsGeneral,
    report,
    images,
    svg,
    stylesLint,
    stylesFix,
    stylesTheme,
    stylesComponents,
    scriptsLint,
    scriptsFix,
    scriptsTheme,
    scriptsComponents,
    pot,
    phpLint,
    phpLintFull,
    phpFix,
    fix,
};

export default build;
