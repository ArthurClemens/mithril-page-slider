"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _mithrilPageSlider=require("mithril-page-slider");var _mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("app/app/common.css!");require("ratchet/css/ratchet.min.css!");require("ratchet/css/ratchet-theme-ios.min.css!");require("./list.css!");var people=["Alexis","Betty","Caroline","Denise","Elsa","Francesca","Grace","Hannah","Irene","Jackie","Kate","Laureen","Madelyn","Nadine","Olive","Paula","Rebecca","Sara","Tina","Una","Vera","Wendy","Yvonne","Zoe"];var home={};var person={};var detail={};var TYPE_HOME="home";var TYPE_PERSON="person";var TYPE_DETAIL="detail";var createTitle=function createTitle(type){var name=_mithril2["default"].route.param("person");switch(type){case TYPE_HOME:return"Page Slider for Mithril - List";case TYPE_PERSON:return name;case TYPE_DETAIL:return"About "+name}};var setDocumentTitle=function setDocumentTitle(type){document.title=createTitle(type)};var slider=function slider(page,type){function _ref(){return setDocumentTitle(type)}return{view:function view(){return _mithril2["default"].component(_mithrilPageSlider2["default"],{page:_mithril2["default"].component(page,{name:_mithril2["default"].route.param("person")}),"class":"list",done:_ref})}}};var slide=function slide(direction,page,type){var fn=direction==="out"?_mithrilPageSlider2["default"].slideOutConfig:_mithrilPageSlider2["default"].slideInConfig;return fn({page:page,done:function done(){return setDocumentTitle(type)}})};function _ref2(name){var personRoute="/"+name;return(0,_mithril2["default"])("li.table-view-cell media",(0,_mithril2["default"])("a",{href:personRoute,config:slide("in",_mithril2["default"].component(person,{name:name}),TYPE_PERSON)},name))}home.view=function(){var pageTitle=createTitle(TYPE_HOME);return(0,_mithril2["default"])("div",[(0,_mithril2["default"])("header.bar.bar-nav",(0,_mithril2["default"])("h1.title",pageTitle)),(0,_mithril2["default"])(".content",(0,_mithril2["default"])("ul.table-view",people.map(_ref2)),(0,_appAppGithub2["default"])())])};person.view=function(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];var name=opts.name||_mithril2["default"].route.param("person");var pageTitle=name;var homeRoute="/";var detailsRoute="/"+name+"/details";return(0,_mithril2["default"])("div",[(0,_mithril2["default"])("header.bar.bar-nav",(0,_mithril2["default"])("a",{href:homeRoute,"class":"icon icon-left-nav pull-left",config:slide("out",home,TYPE_HOME)}),(0,_mithril2["default"])("h1.title",pageTitle)),(0,_mithril2["default"])(".content",[(0,_mithril2["default"])("a.large",{href:detailsRoute,config:slide("in",_mithril2["default"].component(detail,{name:name}),TYPE_DETAIL)},name[0]),(0,_mithril2["default"])("a",{href:detailsRoute,config:slide("in",_mithril2["default"].component(detail,{name:name}),TYPE_DETAIL)},"More about "+name)])])};detail.view=function(ctrl){var opts=arguments[1]===undefined?{}:arguments[1];var name=opts.name||_mithril2["default"].route.param("person");var pageTitle="About "+name;var personRoute="/"+name;return(0,_mithril2["default"])("div",[(0,_mithril2["default"])("header.bar.bar-nav",(0,_mithril2["default"])("a",{href:personRoute,"class":"icon icon-left-nav pull-left",config:slide("out",_mithril2["default"].component(person,{name:name}),TYPE_PERSON)}),(0,_mithril2["default"])("h1.title",pageTitle)),(0,_mithril2["default"])(".content",(0,_mithril2["default"])(".more","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))])};_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",{"/":slider(home,TYPE_HOME),"/:person.../details":slider(detail,TYPE_DETAIL),"/:person...":slider(person,TYPE_PERSON)});