System.config({
    baseURL: '.',
    defaultJSExtensions: true,
    transpiler: 'babel',
    babelOptions: {
        'optional': [
            'runtime',
            'optimisation.modules.system'
        ]
    },
    'map': {
        'j2c': 'node_modules/j2c/dist/j2c.global.min',
        'mithril': 'node_modules/mithril/mithril.min',
        'mithril-page-slider': 'node_modules/mithril-page-slider/lib/mithril-page-slider',
        'mithril-page-slider-style': 'node_modules/mithril-page-slider/lib/mithril-page-slider-style',
        'mithril-page-slider-transition-style': 'node_modules/mithril-page-slider/lib/mithril-page-slider-transition-style'
    }
});
