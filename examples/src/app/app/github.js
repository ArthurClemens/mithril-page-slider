"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_styler=require("app/app/styler"),_styler2=_interopRequireDefault(_styler),_githubStyle=require("./github-style"),_githubStyle2=_interopRequireDefault(_githubStyle);_styler2["default"].add("github",_githubStyle2["default"]);var content=function(){var opts=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return(0,_mithril2["default"])(".github",{dir:"ltr"},[opts.home?null:(0,_mithril2["default"])("a",{href:"index.html",config:null},"All examples"),(0,_mithril2["default"])("hr"),_mithril2["default"].trust('mithril-page-slider, page slider for Mithril on mobile and desktop. Project page on <a href="https://github.com/ArthurClemens/mithril-page-slider">Github</a>.')])};exports["default"]=content;
//# sourceMappingURL=github.js.map