import gulp from 'gulp';
import { stylesFix } from './task-styles.js';
import { scriptsFix } from './task-scripts.js';
import { phpFix } from './php.js';

export default gulp.parallel(stylesFix, scriptsFix, phpFix);
