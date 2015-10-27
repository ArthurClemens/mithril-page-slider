"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_mithrilPageSlider=require("mithril-page-slider"),_mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider),_appAppGithub=require("app/app/github"),_appAppGithub2=_interopRequireDefault(_appAppGithub),_mithrilPageSliderStyle=require("mithril-page-slider-style"),_mithrilPageSliderStyle2=_interopRequireDefault(_mithrilPageSliderStyle),_mithrilPageSliderTransitionStyle=require("mithril-page-slider-transition-style"),_mithrilPageSliderTransitionStyle2=_interopRequireDefault(_mithrilPageSliderTransitionStyle),_appAppStyler=require("app/app/styler"),_appAppStyler2=_interopRequireDefault(_appAppStyler),_appAppCommonStyle=require("app/app/common-style"),_appAppCommonStyle2=_interopRequireDefault(_appAppCommonStyle),_rtlStyle=require("./rtl-style"),_rtlStyle2=_interopRequireDefault(_rtlStyle),style=(0,_mithrilPageSliderStyle2.default)(_mithrilPageSliderTransitionStyle2.default);_appAppStyler2.default.add("mithril-page-slider",style),_appAppStyler2.default.add("common",_appAppCommonStyle2.default),_appAppStyler2.default.add("rtl",_rtlStyle2.default);var home={},page1={},page2={},TITLE_PAGE1="اليوم",TITLE_PAGE2="واجب اليوم",NAME_1="سوزان",NAME_2="ايمي",slider=function(e){return _mithril2.default.component(_mithrilPageSlider2.default,{page:e,rtl:!0,class:"rtl"})},header=function(i,e){return(0,_mithril2.default)("header.bar.bar-nav",e?(0,_mithril2.default)("a",{href:e.href,class:"icon icon-right-nav pull-right",config:_mithrilPageSlider2.default.slideOutConfig({page:e.page,rtl:!0})}):null,(0,_mithril2.default)("h1.title",i))},imageUrl=function(e){return"http://arthurclemens.github.io/assets/mithril-page-slider/img/"+e},card=function(e,i){return(0,_mithril2.default)(".card",(0,_mithril2.default)("ul.table-view",(0,_mithril2.default)("li.table-view-cell media",(0,_mithril2.default)("a",(0,_mithril2.default)("img.media-object.pull-right.avatar",{style:{"background-image":"url("+imageUrl(i)+")"}}),(0,_mithril2.default)(".media-body",e)))))};home.view=function(){return(0,_mithril2.default)("div",header("Page Slider for Mithril - Right-to-left"),(0,_mithril2.default)(".content",[(0,_mithril2.default)("ul.table-view",(0,_mithril2.default)("li.table-view-cell.media",(0,_mithril2.default)("a",{href:"/page1",config:_mithril2.default.route},TITLE_PAGE1)),(0,_mithril2.default)("li.table-view-cell.media",(0,_mithril2.default)("a",{href:"/page2",config:_mithril2.default.route},TITLE_PAGE2))),(0,_appAppGithub2.default)()]))},page1.view=function(){return(0,_mithril2.default)(".card-page",header(TITLE_PAGE1,{href:"/",page:home}),(0,_mithril2.default)(".content",card(NAME_1,"1.png")))},page2.view=function(){return(0,_mithril2.default)(".card-page",header(TITLE_PAGE2,{href:"/",page:home}),(0,_mithril2.default)(".content",card(NAME_2,"2.png")))},_mithril2.default.route.mode="hash",_mithril2.default.route(document.body,"/",{"/":slider(home),"/page1":slider(page1),"/page2":slider(page2)});