var Builder = require('systemjs-builder');

var DESTINATION = process.argv[2];
var SRC_DIR = [DESTINATION, '/', 'src'].join('');
var BUILD_DIR = [DESTINATION, '/', 'build'].join('');
var appDir = [BUILD_DIR, '/', 'app'].join('');

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
    'cp', '-R', SRC_DIR + '/lib/mithril', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/ratchet', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/lib/mithril-page-slider', BUILD_DIR + '/lib/',
    '&&',
    'cp', '-R', SRC_DIR + '/app', BUILD_DIR,
    '&&',
    'rm', appDir + '/**/*.scss',
    '&&',
    'rm', appDir + '/**/*.es6.js',
    '&&',
    'rm', '-R', appDir + '**/.sass-cache'
];

execute(cmds.join(' '));

filesToMinify.map(function(file) {
    execute([__dirname + '/../node_modules/.bin/uglifyjs', '-o', file, file].join(' '));
});

var builder = new Builder({
    'baseURL': SRC_DIR,
    'paths': {
        '*': '*.js'
    },
    'map': {
        'mithril': 'lib/mithril/mithril.min',
        'ratchet': 'lib/ratchet',
        'mithril-page-slider': 'lib/mithril-page-slider/mithril-page-slider'
    }
});

var buildOpts = {
    minify: true,
    sourceMaps: false
};

builder.build('app/index/index', BUILD_DIR + '/app/index/index.js', buildOpts).then(function() {
    console.log('Build complete');
})
.catch(function(err) {
    console.error(err);
});
