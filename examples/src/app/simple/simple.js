"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_mithrilPageSlider=require("mithril-page-slider"),_mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider),_appAppGithub=require("app/app/github"),_appAppGithub2=_interopRequireDefault(_appAppGithub),_mithrilPageSliderStyle=require("mithril-page-slider-style"),_mithrilPageSliderStyle2=_interopRequireDefault(_mithrilPageSliderStyle),_mithrilPageSliderTransitionStyle=require("mithril-page-slider-transition-style"),_mithrilPageSliderTransitionStyle2=_interopRequireDefault(_mithrilPageSliderTransitionStyle),_appAppStyler=require("app/app/styler"),_appAppStyler2=_interopRequireDefault(_appAppStyler),_appAppCommonStyle=require("app/app/common-style"),_appAppCommonStyle2=_interopRequireDefault(_appAppCommonStyle),_simpleStyle=require("./simple-style"),_simpleStyle2=_interopRequireDefault(_simpleStyle),style=(0,_mithrilPageSliderStyle2.default)(_mithrilPageSliderTransitionStyle2.default);_appAppStyler2.default.add("mithril-page-slider",style),_appAppStyler2.default.add("common",_appAppCommonStyle2.default),_appAppStyler2.default.add("simple",_simpleStyle2.default);var home={},page1={},page2={},slider=function(e){return _mithril2.default.component(_mithrilPageSlider2.default,{page:e,class:"simple"})},header=function(i,e){return(0,_mithril2.default)("header.bar.bar-nav",e?(0,_mithril2.default)("a",{href:e.href,class:"icon icon-left-nav pull-left",config:_mithrilPageSlider2.default.slideOutConfig({page:e.page})}):null,(0,_mithril2.default)("h1.title",i))},imageUrl=function(e){return"http://arthurclemens.github.io/assets/mithril-page-slider/img/"+e},card=function(e,i){return(0,_mithril2.default)(".card",(0,_mithril2.default)("ul.table-view",(0,_mithril2.default)("li.table-view-cell media",(0,_mithril2.default)("a",(0,_mithril2.default)("img.media-object.pull-left.avatar",{style:{"background-image":"url("+imageUrl(i)+")"}}),(0,_mithril2.default)(".media-body",e)))))};home.view=function(){return(0,_mithril2.default)("div",header("Page Slider for Mithril - Simple"),(0,_mithril2.default)(".content",[(0,_mithril2.default)("ul.table-view",(0,_mithril2.default)("li.table-view-cell.media",(0,_mithril2.default)("a",{href:"/page1",config:_mithril2.default.route},"Page 1")),(0,_mithril2.default)("li.table-view-cell.media",(0,_mithril2.default)("a",{href:"/page2",config:_mithril2.default.route},"Page 2"))),(0,_appAppGithub2.default)()]))},page1.view=function(){return(0,_mithril2.default)(".card-page",header("Page 1",{href:"/",page:home}),(0,_mithril2.default)(".content",card("Susan","1.png")))},page2.view=function(){return(0,_mithril2.default)(".card-page",header("Page 2",{href:"/",page:home}),(0,_mithril2.default)(".content",card("Amy","2.png")))},_mithril2.default.route.mode="hash",_mithril2.default.route(document.body,"/",{"/":slider(home),"/page1":slider(page1),"/page2":slider(page2)});