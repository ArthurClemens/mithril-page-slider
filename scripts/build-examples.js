var Builder = require('systemjs-builder');

var DESTINATION = process.argv[2];
var DESTINATION_DIR = [DESTINATION, '/'].join('');
var SRC_DIR = [DESTINATION, '/', 'src'].join('');
var BUILD_DIR = [DESTINATION, '/', 'build'].join('');
var appDir = [BUILD_DIR, '/', 'app'].join('');

var SUB_DIRS = [
    'effect',
    'index',
    'list',
    'rtl',
    'simple'
];

var getSubDirPath = function(name) {
    return ['app', name, name].join('/');
};

var filesToMinify = [
    BUILD_DIR + '/lib/systemjs/es6-module-loader.js',
    BUILD_DIR + '/lib/systemjs/system.js'
];

var execute = function(command) {
    var exec = require('child_process').exec;
    var logError = function(error, stdout) {
        if (error && stdout) {
            console.log(error, stdout);
        }
    };
    exec(command, logError);
};

var cmds = [
    'rm', '-fR', BUILD_DIR,
    '&&',
    'mkdir', '-p', BUILD_DIR,
    '&&',
    'mkdir', '-p', BUILD_DIR + '/lib',
    '&&',
    'mkdir', '-p', BUILD_DIR + '/app',
    '&&',
    'cp', SRC_DIR + '/config-build.js', BUILD_DIR + '/config.js',
    '&&',
    'cp', SRC_DIR + '/*.html', BUILD_DIR,
    '&&',
    'cp', '-R', SRC_DIR + '/lib/systemjs', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/j2c', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/mithril', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/ratchet', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/mithril-page-slider', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/app', BUILD_DIR,
    // clean up
    '&&',
    'rm', appDir + '/**/*.es6.js'
];

execute(cmds.join(' '));

filesToMinify.map(function(file) {
    execute([__dirname + '/../node_modules/.bin/uglifyjs', '-o', file, file].join(' '));
});

var builder = new Builder({
    'defaultJSExtensions': true,
    'baseURL': SRC_DIR,
    'paths': {
        '*': '*.js'
    },
    'map': {
        'mithril': 'lib/mithril/mithril.min',
        'ratchet': 'lib/ratchet',
        'mithril-page-slider': 'lib/mithril-page-slider/mithril-page-slider',
        'mithril-page-slider-style': 'lib/mithril-page-slider/mithril-page-slider-style',
        'mithril-page-slider-transition-style': 'lib/mithril-page-slider/mithril-page-slider-transition-style',
        'j2c': 'lib/j2c/j2c.global.min'
    }
});

var buildOpts = {
    minify: true,
    sourceMaps: false
};

Promise.all(SUB_DIRS.map(function(dir) {
        return builder.trace(getSubDirPath(dir));
    })).then(function(trees) {
        var commonTree = builder.intersectTrees.apply(this, trees);
        return Promise.all([
            builder.bundle(commonTree, BUILD_DIR + '/app/common.js', buildOpts)
        ].concat(trees.map(function(tree, index) {
            return builder.bundle(builder.subtractTrees(tree, commonTree), BUILD_DIR + '/' + getSubDirPath(SUB_DIRS[index]) + '.js', buildOpts);
        })));
    }).then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.error(err);
    });
