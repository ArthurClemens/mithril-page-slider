var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: [
            '.',
            './node_modules',
            './node_modules/mithril-page-slider/lib/' // include mithril-page-slider-style.js
        ]
    })
    .transform(babelify)
    .transform({
        global: true
    }, 'uglifyify')
    .bundle()
    .on('error', function(err) {
        console.log('Error : ' + err.message);
    })
    .pipe(fs.createWriteStream(outfile));
}

bundle([
    'app/effect/effect.es6.js'
], '../build/app/effect/effect-bundle.js');

bundle([
    'app/index/index.es6.js',
], '../build/app/index/index-bundle.js');

bundle([
    'app/list/list.es6.js'
], '../build/app/list/list-bundle.js');

bundle([
    'app/rtl/rtl.es6.js'
], '../build/app/rtl/rtl-bundle.js');

bundle([
    'app/simple/simple.es6.js'
], '../build/app/simple/simple-bundle.js');
