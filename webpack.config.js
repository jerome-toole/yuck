import ESLintPlugin from 'eslint-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// -----------------------------------------------------------------------------
// Options currently supports one property, production.
//
// Production is a boolean and if true will configure webpack for a production
// build (minify, strip, etc) and will also add a hash to the filename.
//
// To see what explicit polyfills are added to each build, add debug to the
// options for babel.
// -----------------------------------------------------------------------------
export default (options) => {
    // ---------------------------------------------------------------------
    // Lets build the filename of the scripts we are creating
    // ---------------------------------------------------------------------
    let filename = '[name]';
    const eslintOptions = {
        fix: true,
    };

    // if (options.production === true) {
    //     filename += '.[chunkhash]';
    // }

    filename += '.js';

    // ---------------------------------------------------------------------
    // Begin the config
    // ---------------------------------------------------------------------
    const config = {
        mode: options.production === true ? 'production' : 'development',
        output: {
            filename,
        },
        optimization: {
            minimize: false,
        },
        plugins: [new ESLintPlugin(eslintOptions)],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: 'import-glob',
                        },
                    ],
                },
            ],
        },
        externals: {
            jquery: 'jQuery',
            $: 'jQuery',
            jQuery: 'jQuery',
        },
        // ---------------------------------------------------------------------
        // Don't output webpack statistics
        // ---------------------------------------------------------------------
        // stats: 'errors-only',
    };

    // config.plugins = [
    //     new BundleAnalyzerPlugin({
    //         defaultSizes: 'gzip',
    //         analyzerMode: 'static',
    //         openAnalyzer: false,
    //     }),
    // ];

    // ---------------------------------------------------------------------
    // Ship it
    // ---------------------------------------------------------------------
    return config;
};
