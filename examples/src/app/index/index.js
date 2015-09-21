"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);var _appAppStyler=require("app/app/styler");var _appAppStyler2=_interopRequireDefault(_appAppStyler);var _appAppCommonStyle=require("app/app/common-style");var _appAppCommonStyle2=_interopRequireDefault(_appAppCommonStyle);var _indexStyle=require("./index-style");var _indexStyle2=_interopRequireDefault(_indexStyle);_appAppStyler2["default"].add("common",_appAppCommonStyle2["default"]);_appAppStyler2["default"].add("index",_indexStyle2["default"]);var menuData=[{href:"simple.html",title:"Simple",subtitle:"Mithril version of ccoenraets/pageslider-react"},{href:"list.html",title:"List with 3 levels",subtitle:"Try with the browser's back and forward buttons"},{href:"rtl.html",title:"Right-to-left",subtitle:"Languages like Arabic, Hebrew, ..."},{href:"effect.html",title:"Transition effects",subtitle:"Custom transition style"}];var menu=(0,_mithril2["default"])("ul.menu",[(0,_mithril2["default"])("li.header","Examples"),menuData.map(function(menuItem){return(0,_mithril2["default"])("li",(0,_mithril2["default"])("a",{href:menuItem.href,config:null},[(0,_mithril2["default"])("span.title",menuItem.title),(0,_mithril2["default"])("span.subtitle",menuItem.subtitle)]))})]);var index={};index.view=function(){return(0,_mithril2["default"])("div",[(0,_mithril2["default"])("h1","Page Slider for Mithril"),menu,(0,_appAppGithub2["default"])({home:true})])};_mithril2["default"].mount(document.body,index);