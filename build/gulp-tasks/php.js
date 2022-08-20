import gulp from 'gulp';
import phpcs from 'gulp-phpcs';
import phpcbf from 'gulp-phpcbf';

import config from '../build-config.js';

function phpLint() {
    return (
        gulp
            .src(config.paths.php)
            // Compares all PHP files with PSR-12
            .pipe(
                phpcs({
                    bin: 'vendor/bin/phpcs',
                    standard: 'PSR12',
                    severity: 5,
                    warningSeverity: 1,
                    report: 'summary',
                })
            )
            // Log all problems that was found
            .pipe(phpcs.reporter('log'))
    );
}

function phpLintFull() {
    return (
        gulp
            .src(config.paths.php)
            // Compares all PHP files with PSR-12
            .pipe(
                phpcs({
                    bin: 'vendor/bin/phpcs',
                    standard: 'PSR12',
                    severity: 5,
                    warningSeverity: 0,
                    showSniffCode: true,
                })
            )
            // Log all problems that was found
            .pipe(phpcs.reporter('log'))
    );
}

function phpFix() {
    return (
        gulp
            .src(config.paths.php)
            // Updates all code to follow PSR-12
            .pipe(
                phpcbf({
                    bin: 'vendor/bin/phpcbf',
                    standard: 'PSR12',
                    warningSeverity: 0,
                })
            )
            // Outputs all files
            .pipe(gulp.dest('./'))
    );
}

export { phpLint, phpLintFull, phpFix };
