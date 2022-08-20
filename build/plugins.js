export default {
    stylelint: {
        failAfterError: false,
        reporters: [
            {
                formatter: 'string',
                console: true,
            },
        ],
    },
    imagemin: {
        gif: {
            interlaced: true,
            optimizationLevel: 3,
        },
        jpg: {
            quality: 80,
            progressive: true,
        },
        png: {
            optimizationLevel: 7,
        },
        svg: {
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            removeViewBox: false,
                        },
                    },
                },
                'removeDimensions',
            ],
        },
        svgdeep: {
            plugins: [
                {
                    name: 'preset-default',
                    params: {
                        overrides: {
                            removeViewBox: false,
                        },
                    },
                },
                'removeDimensions',
            ],
        },
    },
};
