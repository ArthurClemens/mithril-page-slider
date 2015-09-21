var j2c = require('j2c');

var styleFn = require('../lib/mithril-page-slider-style.js');
var sliderStyle = require('../lib/mithril-page-slider-transition-style.js');
var style = styleFn(sliderStyle);
var sheet = j2c.sheet(style);

process.stdout.write(sheet);
