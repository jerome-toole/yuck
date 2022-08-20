export default {
    base: {
        src: '_src/',
        dest: 'assets/',
    },
    manifest: 'manifest.json',
    scripts: {
        src: 'scripts/',
        dest: 'scripts/',
        entry: '**/*.js',
    },
    styles: {
        src: 'styles/',
        dest: 'styles/',
        entry: '**/*.scss',
    },
    staticAssets: {
        src: 'static/',
        dest: 'static/',
        entry: '**/*',
    },
    images: {
        src: 'images/',
        dest: 'images/',
        entry: '**/*',
    },
    svg: {
        src: 'images/',
        dest: 'svgs/',
        entry: '**/*.svg',
    },
    components: {
        src: 'components*/',
        dest: 'components/',
        entry: '[^_]',
    },
    php: [
        '*.php',
        '**/*.php',
        '!assets/components/**/*.*',
        '!vendor/**/*.*',
        '!node_modules/**/*.*',
    ],
    includePaths: ['node_modules/'],
};
