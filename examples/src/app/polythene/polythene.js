"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_mithrilPageSlider=require("mithril-page-slider"),_mithrilPageSlider2=_interopRequireDefault(_mithrilPageSlider),_toolbar=require("polythene/toolbar/toolbar"),_toolbar2=_interopRequireDefault(_toolbar),_list=require("polythene/list/list"),_list2=_interopRequireDefault(_list),_card=require("polythene/card/card"),_card2=_interopRequireDefault(_card),_listTile=require("polythene/list-tile/list-tile"),_listTile2=_interopRequireDefault(_listTile),_iconButton=require("polythene/icon-button/icon-button"),_iconButton2=_interopRequireDefault(_iconButton),_github=require("app/app/github"),_github2=_interopRequireDefault(_github),_mithrilPageSliderStyle=require("mithril-page-slider-style"),_mithrilPageSliderStyle2=_interopRequireDefault(_mithrilPageSliderStyle),_mithrilPageSliderTransitionStyle=require("mithril-page-slider-transition-style"),_mithrilPageSliderTransitionStyle2=_interopRequireDefault(_mithrilPageSliderTransitionStyle),_styler=require("app/app/styler"),_styler2=_interopRequireDefault(_styler),_commonStyle=require("app/app/common-style"),_commonStyle2=_interopRequireDefault(_commonStyle),_polytheneStyle=require("./polythene-style"),_polytheneStyle2=_interopRequireDefault(_polytheneStyle),style=(0,_mithrilPageSliderStyle2["default"])(_mithrilPageSliderTransitionStyle2["default"]);_styler2["default"].add("mithril-page-slider",style),_styler2["default"].add("common",_commonStyle2["default"]),_styler2["default"].add("polythene",_polytheneStyle2["default"]);var home={},page1={},page2={},iconBackSVG=_mithril2["default"].trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>'),iconMenuSVG=_mithril2["default"].trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>'),header=function(title,url){return _mithril2["default"].component(_toolbar2["default"],{content:[url?_mithril2["default"].component(_iconButton2["default"],{key:"back",icon:{svg:{content:iconBackSVG}},url:{href:url.href,config:_mithrilPageSlider2["default"].slideOutConfig({page:url.page})}}):_mithril2["default"].component(_iconButton2["default"],{key:"menu",icon:{svg:{content:iconMenuSVG}},url:{href:"/"}}),(0,_mithril2["default"])("span",title)]})},slider=function(page){return _mithril2["default"].component(_mithrilPageSlider2["default"],{page:page,"class":"toolbar"})},imageUrl=function(filename){return"http://arthurclemens.github.io/assets/mithril-page-slider/img/"+filename},card=function(name,image){return _mithril2["default"].component(_card2["default"],{content:[{header:{title:name,icon:{type:"large","class":"pe-icon--avatar",src:imageUrl(image)}}}]})};home.view=function(){return(0,_mithril2["default"])("div",(0,_mithril2["default"])(".content",[header("Page Slider for Mithril - Polythene"),_mithril2["default"].component(_list2["default"],{"class":"menu",borders:!0,tiles:[_mithril2["default"].component(_listTile2["default"],{content:(0,_mithril2["default"])("a",{href:"/page1",config:_mithril2["default"].route},"Page 1")}),_mithril2["default"].component(_listTile2["default"],{content:(0,_mithril2["default"])("a",{href:"/page2",config:_mithril2["default"].route},"Page 2")})]}),(0,_github2["default"])()]))},page1.view=function(){return(0,_mithril2["default"])(".card-page",(0,_mithril2["default"])(".content",[header("Page 1",{href:"/",page:home}),(0,_mithril2["default"])(".cards",card("Susan","1.png"))]))},page2.view=function(){return(0,_mithril2["default"])(".card-page",(0,_mithril2["default"])(".content",[header("Page 2",{href:"/",page:home}),(0,_mithril2["default"])(".cards",card("Amy","2.png"))]))},_mithril2["default"].route.mode="hash",_mithril2["default"].route(document.body,"/",{"/":slider(home),"/page1":slider(page1),"/page2":slider(page2)});
//# sourceMappingURL=polythene.js.map