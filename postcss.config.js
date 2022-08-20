module.exports = {
    plugins: [
        require('cssnano')({
            preset: [
                'default',
                {
                    safe: true,
                    zindex: false,
                    discardComments: {
                        removeAll: true,
                    },
                    autoprefixer: false,
                    calc: false,
                    mergeIdents: false,
                    reduceIdents: false,
                },
            ],
        }),
    ],
};
