"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _mithrilPageSlider=require("mithril-page-slider");var _mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("./simple.css!");require("app/app/common.css!");require("ratchet/css/ratchet.min.css!");require("ratchet/css/ratchet-theme-ios.min.css!");var home={};var page1={};var page2={};var slider=function slider(page){return _mithril2["default"].component(_mithrilPageSlider2["default"],{page:page})};var header=function header(text,back){return(0,_mithril2["default"])("header.bar.bar-nav",back?(0,_mithril2["default"])("a",{href:back.href,"class":"icon icon-left-nav pull-left",config:_mithrilPageSlider2["default"].slideOutConfig({page:back.page})}):null,(0,_mithril2["default"])("h1.title",text))};var imageUrl=function imageUrl(filename){return"http://arthurclemens.github.io/assets/mithril-page-slider/img/"+filename};var card=function card(name,image){return(0,_mithril2["default"])(".card",(0,_mithril2["default"])("ul.table-view",(0,_mithril2["default"])("li.table-view-cell media",(0,_mithril2["default"])("a",(0,_mithril2["default"])("img.media-object.pull-left.avatar",{style:{"background-image":"url("+imageUrl(image)+")"}}),(0,_mithril2["default"])(".media-body",name)))))};home.view=function(){return(0,_mithril2["default"])("div",header("Page Slider for Mithril - Simple"),(0,_mithril2["default"])(".content",[(0,_mithril2["default"])("ul.table-view",(0,_mithril2["default"])("li.table-view-cell.media",(0,_mithril2["default"])("a",{href:"/page1",config:_mithril2["default"].route},"Page 1")),(0,_mithril2["default"])("li.table-view-cell.media",(0,_mithril2["default"])("a",{href:"/page2",config:_mithril2["default"].route},"Page 2"))),(0,_appAppGithub2["default"])()]))};page1.view=function(){return(0,_mithril2["default"])(".card-page",header("Page 1",{href:"/",page:home}),(0,_mithril2["default"])(".content",card("Susan","1.png")))};page2.view=function(){return(0,_mithril2["default"])(".card-page",header("Page 2",{href:"/",page:home}),(0,_mithril2["default"])(".content",card("Amy","2.png")))};_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",{"/":slider(home),"/page1":slider(page1),"/page2":slider(page2)});