"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _mithrilPageSlider=require("mithril-page-slider");var _mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);var _mithrilPageSliderStyle=require("mithril-page-slider-style");var _mithrilPageSliderStyle2=_interopRequireDefault(_mithrilPageSliderStyle);var _mithrilPageSliderTransitionStyle=require("mithril-page-slider-transition-style");var _mithrilPageSliderTransitionStyle2=_interopRequireDefault(_mithrilPageSliderTransitionStyle);var _appAppStyler=require("app/app/styler");var _appAppStyler2=_interopRequireDefault(_appAppStyler);var _appAppCommonStyle=require("app/app/common-style");var _appAppCommonStyle2=_interopRequireDefault(_appAppCommonStyle);var _rtlStyle=require("./rtl-style");var _rtlStyle2=_interopRequireDefault(_rtlStyle);var style=(0,_mithrilPageSliderStyle2["default"])(_mithrilPageSliderTransitionStyle2["default"]);_appAppStyler2["default"].add("mithril-page-slider",style);_appAppStyler2["default"].add("common",_appAppCommonStyle2["default"]);_appAppStyler2["default"].add("rtl",_rtlStyle2["default"]);var home={};var page1={};var page2={};var TITLE_PAGE1="اليوم";var TITLE_PAGE2="واجب اليوم";var NAME_1="سوزان";var NAME_2="ايمي";var slider=function slider(page){return _mithril2["default"].component(_mithrilPageSlider2["default"],{page:page,rtl:true,"class":"rtl"})};var header=function header(text,back){return(0,_mithril2["default"])("header.bar.bar-nav",back?(0,_mithril2["default"])("a",{href:back.href,"class":"icon icon-right-nav pull-right",config:_mithrilPageSlider2["default"].slideOutConfig({page:back.page,rtl:true})}):null,(0,_mithril2["default"])("h1.title",text))};var imageUrl=function imageUrl(filename){return"http://arthurclemens.github.io/assets/mithril-page-slider/img/"+filename};var card=function card(name,image){return(0,_mithril2["default"])(".card",(0,_mithril2["default"])("ul.table-view",(0,_mithril2["default"])("li.table-view-cell media",(0,_mithril2["default"])("a",(0,_mithril2["default"])("img.media-object.pull-right.avatar",{style:{"background-image":"url("+imageUrl(image)+")"}}),(0,_mithril2["default"])(".media-body",name)))))};home.view=function(){return(0,_mithril2["default"])("div",header("Page Slider for Mithril - Right-to-left"),(0,_mithril2["default"])(".content",[(0,_mithril2["default"])("ul.table-view",(0,_mithril2["default"])("li.table-view-cell.media",(0,_mithril2["default"])("a",{href:"/page1",config:_mithril2["default"].route},TITLE_PAGE1)),(0,_mithril2["default"])("li.table-view-cell.media",(0,_mithril2["default"])("a",{href:"/page2",config:_mithril2["default"].route},TITLE_PAGE2))),(0,_appAppGithub2["default"])()]))};page1.view=function(){return(0,_mithril2["default"])(".card-page",header(TITLE_PAGE1,{href:"/",page:home}),(0,_mithril2["default"])(".content",card(NAME_1,"1.png")))};page2.view=function(){return(0,_mithril2["default"])(".card-page",header(TITLE_PAGE2,{href:"/",page:home}),(0,_mithril2["default"])(".content",card(NAME_2,"2.png")))};_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",{"/":slider(home),"/page1":slider(page1),"/page2":slider(page2)});