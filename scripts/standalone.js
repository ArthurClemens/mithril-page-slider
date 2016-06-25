const fs = require('fs');
const browserify = require('browserify');
const sh = require('shelljs');

const libComponents = ['mithril-page-slider', 'mithril-page-slider-transition-style', 'mithril-page-slider-style'];

const formatRequire = (path) => (`require('${path}');`);

const requires = (formatFn) => {
    formatFn = formatFn || ((str) => (str));
    const components = [formatFn('mithril')].concat(libComponents.map((cmp) => {
        return formatFn(`${cmp}`);
    }));
    return components;
};

const writeRequires = (callback) => {
    console.log('standalone writeRequires');
    fs.writeFile('standalone-src.js', requires(formatRequire).join('\r'), 'utf8', () => (console.log('standalone writeRequires done'), callback()));
};

const prepare = () => {
    //
};

const teardown = () => {
    sh.rm('-rf', 'standalone-src.js');
    console.log('standalone teardown done');
};

const build = () => {
    console.log('standalone build');
    const createBundle = (entries, outfile) => {
        try {
            browserify({
                entries: entries,
                paths: ['.', 'lib', 'node_modules'],
                require: requires()
            })
            // .external('mithril')
            .transform({
                global: true
            }, 'uglifyify')
            .bundle()
            .on('error', function(err) {
                console.log('Error : ' + err.message);
            })
            .pipe(fs.createWriteStream(outfile).on('finish', teardown))
            ;
        }
        catch (e) {
            teardown();
        }
    };

    createBundle([
        'standalone-src.js'
    ], 'mithril-page-slider-standalone.js');
};

writeRequires(() => {
    prepare();
    build();
});
