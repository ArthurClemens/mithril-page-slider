"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _appAppStyler=require("app/app/styler");var _appAppStyler2=_interopRequireDefault(_appAppStyler);var _githubStyle=require("./github-style");var _githubStyle2=_interopRequireDefault(_githubStyle);_appAppStyler2["default"].add("github",_githubStyle2["default"]);var content=function content(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];return(0,_mithril2["default"])(".github",{dir:"ltr"},[!opts.home?(0,_mithril2["default"])("a",{href:"index.html",config:null},"All examples"):null,(0,_mithril2["default"])("hr"),_mithril2["default"].trust('mithril-page-slider, Page Slider for Mithril on mobile and desktop. Project page on <a href="https://github.com/ArthurClemens/mithril-page-slider">Github</a>.')])};exports["default"]=content;module.exports=exports["default"];