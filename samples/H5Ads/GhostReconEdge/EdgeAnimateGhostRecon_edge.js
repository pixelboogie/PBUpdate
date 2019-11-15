/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'circles',
            type:'rect',
            rect:['47px','13px','auto','auto','auto','auto']
         },
         {
            id:'characterAnim',
            type:'rect',
            rect:['63px','3px','auto','auto','auto','auto']
         },
         {
            id:'characterAnimCopy',
            type:'rect',
            rect:['63px','3px','auto','auto','auto','auto']
         },
         {
            id:'TitleIntro',
            type:'rect',
            rect:['59','76','auto','auto','auto','auto']
         },
         {
            id:'quote1',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/quote1.png','0px','0px']
         },
         {
            id:'quote1blur',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/quote1blur.png','0px','0px']
         },
         {
            id:'quote2',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/quote2.png','0px','0px']
         },
         {
            id:'quote2-blur',
            type:'image',
            rect:['0','0','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/quote2-blur.png','0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','300px','244px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'cta',
            type:'rect',
            rect:['-187','-30','auto','auto','auto','auto']
         },
         {
            id:'LightDirt',
            type:'image',
            rect:['0','0','500px','348px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/LightDirt.png','0px','0px']
         },
         {
            id:'Character',
            type:'image',
            rect:['63px','6px','184px','244px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/Character.png','0px','0px']
         },
         {
            id:'availableNow',
            type:'image',
            rect:['0','-4px','300px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/availableNow.png','0px','0px']
         },
         {
            id:'Title',
            type:'image',
            rect:['-3px','25px','182px','92px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/Title.png','0px','0px']
         },
         {
            id:'pack_shot_wPC',
            type:'image',
            rect:['153px','137px','124px','110px','auto','auto'],
            opacity:0.015625,
            fill:["rgba(0,0,0,0)",'img/pack_shot_wPC.png','0px','0px'],
            boxShadow:["",3,3,3,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'Bitmap-1-1-1',
            type:'image',
            rect:['6px','177px','48px','70px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img/Bitmap-1-1-1.png','0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['58px','194px','auto','auto','auto','auto'],
            text:"Blood<br>Intense Violence<br>Strong Language<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',9,"rgba(0,0,0,1.00)","300","none","normal"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','0px','298px','248px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(177,80,80,0.00)"],
            stroke:[1,"rgba(0,0,0,1.00)","solid"]
         }],
         symbolInstances: [
         {
            id:'circles',
            symbolName:'circles'
         },
         {
            id:'TitleIntro',
            symbolName:'TitleIntro'
         },
         {
            id:'characterAnimCopy',
            symbolName:'characterAnim'
         },
         {
            id:'characterAnim',
            symbolName:'characterAnim'
         },
         {
            id:'cta',
            symbolName:'cta'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(177,80,80,0.00)'],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "height", '248px'],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '298.20080321285px']
         ],
         "${_cta}": [
            ["style", "left", '-247px'],
            ["style", "opacity", '0']
         ],
         "${_characterAnimCopy}": [
            ["style", "top", '3px'],
            ["style", "opacity", '1'],
            ["style", "left", '63px']
         ],
         "${_availableNow}": [
            ["style", "top", '-4px'],
            ["style", "opacity", '0']
         ],
         "${_Text2Copy2}": [
            ["style", "left", '31px'],
            ["style", "top", '71px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '250px']
         ],
         "${_quote2-blur}": [
            ["transform", "scaleX", '1.92'],
            ["style", "opacity", '0'],
            ["style", "top", '-31px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_circles}": [
            ["style", "top", '13px'],
            ["transform", "skewY", '0deg'],
            ["transform", "skewX", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["transform", "scaleY", '1']
         ],
         "${_quote1}": [
            ["style", "opacity", '0']
         ],
         "${_Character}": [
            ["style", "top", '6px'],
            ["style", "opacity", '0'],
            ["style", "left", '63px']
         ],
         "${_Bitmap-1-1-1}": [
            ["style", "top", '177.45px'],
            ["style", "height", '69.565217391304px'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '48px']
         ],
         "${_characterAnim}": [
            ["style", "top", '3px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '63px']
         ],
         "${_TitleIntro}": [
            ["style", "opacity", '1']
         ],
         "${_pack_shot_wPC}": [
            ["style", "top", '137px'],
            ["subproperty", "boxShadow.blur", '13px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.offsetH", '14px'],
            ["subproperty", "boxShadow.spread", '4px'],
            ["subproperty", "boxShadow.offsetV", '-1px'],
            ["style", "left", '153px'],
            ["style", "opacity", '0']
         ],
         "${_quote2}": [
            ["style", "opacity", '0']
         ],
         "${_quote1blur}": [
            ["transform", "scaleX", '1.49'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '250px'],
            ["style", "width", '300px']
         ],
         "${_Title}": [
            ["style", "top", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '58px'],
            ["style", "font-size", '9px'],
            ["style", "top", '194px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '0']
         ],
         "${_LightDirt}": [
            ["style", "top", '3px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '213.09333333333px'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "width", '262px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16180,
         autoPlay: true,
         timeline: [
            { id: "eid93", tween: [ "style", "${_quote1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_quote1}", "opacity", '1', { fromValue: '0'}], position: 3633, duration: 0 },
            { id: "eid98", tween: [ "style", "${_quote1}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 0 },
            { id: "eid40", tween: [ "style", "${_TitleIntro}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_TitleIntro}", "opacity", '0', { fromValue: '1'}], position: 2770, duration: 0 },
            { id: "eid207", tween: [ "style", "${_circles}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid278", tween: [ "style", "${_circles}", "opacity", '1', { fromValue: '0'}], position: 10984, duration: 2845, easing: "swing" },
            { id: "eid103", tween: [ "style", "${_quote2-blur}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_quote2-blur}", "opacity", '1', { fromValue: '0.000000'}], position: 6587, duration: 128 },
            { id: "eid106", tween: [ "style", "${_quote2-blur}", "opacity", '0.02', { fromValue: '1'}], position: 6728, duration: 0 },
            { id: "eid113", tween: [ "style", "${_quote2-blur}", "opacity", '0', { fromValue: '1'}], position: 10020, duration: 215 },
            { id: "eid227", tween: [ "style", "${_LightDirt}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid236", tween: [ "style", "${_LightDirt}", "opacity", '1', { fromValue: '0'}], position: 12960, duration: 0, easing: "easeInCubic" },
            { id: "eid249", tween: [ "style", "${_LightDirt}", "opacity", '0', { fromValue: '1'}], position: 13478, duration: 0, easing: "swing" },
            { id: "eid305", tween: [ "style", "${_cta}", "left", '-247px', { fromValue: '-247px'}], position: 0, duration: 0, easing: "easeOutSine" },
            { id: "eid309", tween: [ "style", "${_cta}", "left", '-179px', { fromValue: '-247px'}], position: 13460, duration: 369, easing: "easeOutSine" },
            { id: "eid163", tween: [ "transform", "${_circles}", "skewX", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "transform", "${_circles}", "skewX", '20deg', { fromValue: '0deg'}], position: 10344, duration: 586, easing: "easeInCubic" },
            { id: "eid325", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutSine" },
            { id: "eid355", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 14000, duration: 340 },
            { id: "eid127", tween: [ "transform", "${_quote1blur}", "scaleX", '1', { fromValue: '1.49'}], position: 3427, duration: 155 },
            { id: "eid102", tween: [ "transform", "${_quote1blur}", "scaleX", '2.04999', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid124", tween: [ "style", "${_quote1blur}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_quote1blur}", "opacity", '1', { fromValue: '0'}], position: 3427, duration: 155 },
            { id: "eid141", tween: [ "style", "${_quote1blur}", "opacity", '0.05', { fromValue: '1'}], position: 3633, duration: 0 },
            { id: "eid100", tween: [ "style", "${_quote1blur}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid303", tween: [ "style", "${_cta}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutSine" },
            { id: "eid308", tween: [ "style", "${_cta}", "opacity", '1', { fromValue: '0'}], position: 13478, duration: 351, easing: "easeOutSine" },
            { id: "eid312", tween: [ "style", "${_pack_shot_wPC}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_pack_shot_wPC}", "opacity", '1', { fromValue: '0'}], position: 14250, duration: 333 },
            { id: "eid212", tween: [ "style", "${_LightDirt}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid245", tween: [ "style", "${_LightDirt}", "top", '-257.13px', { fromValue: '210.92px'}], position: 12960, duration: 500, easing: "swing" },
            { id: "eid252", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 13542, duration: 0 },
            { id: "eid109", tween: [ "style", "${_quote2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_quote2}", "opacity", '1', { fromValue: '0'}], position: 6728, duration: 0 },
            { id: "eid111", tween: [ "style", "${_quote2}", "opacity", '0', { fromValue: '1'}], position: 10020, duration: 0 },
            { id: "eid235", tween: [ "transform", "${_quote2-blur}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 435, duration: 0, easing: "easeInCubic" },
            { id: "eid251", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 12930, duration: 0 },
            { id: "eid264", tween: [ "transform", "${_characterAnim}", "scaleY", '0.57999', { fromValue: '1'}], position: 2835, duration: 592, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "style", "${_LightDirt}", "height", '400.16px', { fromValue: '213.09333333333px'}], position: 12960, duration: 500, easing: "swing" },
            { id: "eid350", tween: [ "subproperty", "${_pack_shot_wPC}", "boxShadow.blur", '13px', { fromValue: '13px'}], position: 14583, duration: 0 },
            { id: "eid197", tween: [ "style", "${_characterAnimCopy}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "style", "${_characterAnimCopy}", "opacity", '0', { fromValue: '1'}], position: 2980, duration: 0 },
            { id: "eid369", tween: [ "style", "${_characterAnimCopy}", "opacity", '1', { fromValue: '0'}], position: 10685, duration: 245, easing: "easeInCubic" },
            { id: "eid234", tween: [ "transform", "${_LightDirt}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 0, duration: 0, easing: "easeInCubic" },
            { id: "eid246", tween: [ "style", "${_LightDirt}", "width", '492px', { fromValue: '262px'}], position: 12960, duration: 500, easing: "swing" },
            { id: "eid272", tween: [ "style", "${_Character}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid331", tween: [ "style", "${_Character}", "opacity", '1', { fromValue: '1'}], position: 12930, duration: 0, easing: "easeOutSine" },
            { id: "eid332", tween: [ "style", "${_Character}", "opacity", '1', { fromValue: '1'}], position: 13829, duration: 0, easing: "easeOutSine" },
            { id: "eid353", tween: [ "subproperty", "${_pack_shot_wPC}", "boxShadow.spread", '4px', { fromValue: '4px'}], position: 14583, duration: 0 },
            { id: "eid352", tween: [ "subproperty", "${_pack_shot_wPC}", "boxShadow.offsetH", '14px', { fromValue: '14px'}], position: 14583, duration: 0 },
            { id: "eid314", tween: [ "style", "${_Bitmap-1-1-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "style", "${_Bitmap-1-1-1}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 290 },
            { id: "eid187", tween: [ "style", "${_circles}", "left", '47px', { fromValue: '47px'}], position: 0, duration: 0 },
            { id: "eid193", tween: [ "style", "${_circles}", "left", '84.47px', { fromValue: '47px'}], position: 10344, duration: 586, easing: "easeInOutQuad" },
            { id: "eid263", tween: [ "transform", "${_characterAnim}", "scaleX", '0.57999', { fromValue: '1'}], position: 2835, duration: 592, easing: "easeOutQuad" },
            { id: "eid247", tween: [ "style", "${_LightDirt}", "left", '-126px', { fromValue: '18px'}], position: 12960, duration: 500, easing: "swing" },
            { id: "eid254", tween: [ "style", "${_quote2-blur}", "top", '-31px', { fromValue: '-31px'}], position: 6824, duration: 0 },
            { id: "eid161", tween: [ "transform", "${_circles}", "scaleX", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "transform", "${_circles}", "scaleX", '0.49723', { fromValue: '1'}], position: 10344, duration: 586, easing: "easeInCubic" },
            { id: "eid162", tween: [ "transform", "${_circles}", "scaleY", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "transform", "${_circles}", "scaleY", '0.53275', { fromValue: '1'}], position: 10344, duration: 586, easing: "easeInCubic" },
            { id: "eid188", tween: [ "style", "${_circles}", "top", '13px', { fromValue: '13px'}], position: 0, duration: 0 },
            { id: "eid194", tween: [ "style", "${_circles}", "top", '-34.75px', { fromValue: '13px'}], position: 10344, duration: 586, easing: "easeInCubic" },
            { id: "eid164", tween: [ "transform", "${_circles}", "skewY", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "transform", "${_circles}", "skewY", '-12deg', { fromValue: '0deg'}], position: 10344, duration: 586, easing: "easeInCubic" },
            { id: "eid255", tween: [ "style", "${_Rectangle}", "height", '250px', { fromValue: '250px'}], position: 6000, duration: 0 },
            { id: "eid311", tween: [ "style", "${_Title}", "opacity", '1', { fromValue: '0.000000'}], position: 13311, duration: 369, easing: "easeOutSine" },
            { id: "eid351", tween: [ "subproperty", "${_pack_shot_wPC}", "boxShadow.offsetV", '-1px', { fromValue: '-1px'}], position: 14583, duration: 0 },
            { id: "eid131", tween: [ "transform", "${_quote2-blur}", "scaleX", '1', { fromValue: '1.92'}], position: 6587, duration: 128 },
            { id: "eid136", tween: [ "transform", "${_quote2-blur}", "scaleX", '1.5', { fromValue: '1'}], position: 10020, duration: 215 },
            { id: "eid360", tween: [ "style", "${_availableNow}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "style", "${_availableNow}", "opacity", '1', { fromValue: '0.000000'}], position: 13117, duration: 273 },
            { id: "eid43", tween: [ "style", "${_characterAnim}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "style", "${_characterAnim}", "opacity", '0', { fromValue: '1'}], position: 2835, duration: 592, easing: "easeOutQuad" },
            { id: "eid276", tween: [ "style", "${_Character}", "left", '158px', { fromValue: '63px'}], position: 12930, duration: 583, easing: "easeOutQuart" },
            { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_circles}', [] ], ""], position: 0 },
            { id: "eid38", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TitleIntro}', [] ], ""], position: 0 },
            { id: "eid267", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_characterAnimCopy}', [] ], ""], position: 0 },
            { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_circles}', [] ], ""], position: 2770 },
            { id: "eid201", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_characterAnimCopy}', [] ], ""], position: 10500 },
            { id: "eid206", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_circles}', [] ], ""], position: 10762.899858107 },
            { id: "eid202", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_characterAnimCopy}', [] ], ""], position: 16180 }         ]
      }
   }
},
"characterAnim": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Character2',
      type: 'image',
      rect: ['0px','0px','184px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/Character.png','0px','0px']
   },
   {
      id: 'Soilder_Tech-1',
      type: 'image',
      rect: ['0','0','184px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/Soilder_Tech-1.png','0px','0px']
   },
   {
      id: 'Soilder_Tech-0',
      type: 'image',
      rect: ['0px','0px','184px','244px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/Soilder_Tech-0.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Soilder_Tech-1}": [
            ["style", "opacity", '0']
         ],
         "${_Soilder_Tech-0}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Character2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '244px'],
            ["style", "width", '184px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1885,
         autoPlay: true,
         timeline: [
            { id: "eid12", tween: [ "style", "${_Soilder_Tech-0}", "opacity", '0.99', { fromValue: '0'}], position: 55, duration: 125 },
            { id: "eid15", tween: [ "style", "${_Soilder_Tech-0}", "opacity", '0', { fromValue: '0.99'}], position: 250, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Soilder_Tech-0}", "opacity", '1', { fromValue: '0.000000'}], position: 875, duration: 125 },
            { id: "eid18", tween: [ "style", "${_Soilder_Tech-0}", "opacity", '0', { fromValue: '1'}], position: 1040, duration: 0 },
            { id: "eid19", tween: [ "style", "${_Soilder_Tech-1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid366", tween: [ "style", "${_Soilder_Tech-1}", "opacity", '0', { fromValue: '0'}], position: 300, duration: 0, easing: "easeInCubic" },
            { id: "eid367", tween: [ "style", "${_Soilder_Tech-1}", "opacity", '0', { fromValue: '0'}], position: 455, duration: 0, easing: "easeInCubic" },
            { id: "eid23", tween: [ "style", "${_Soilder_Tech-1}", "opacity", '0', { fromValue: '1'}], position: 1115, duration: 135 },
            { id: "eid25", tween: [ "style", "${_Soilder_Tech-1}", "opacity", '0', { fromValue: '1'}], position: 1715, duration: 170 },
            { id: "eid26", tween: [ "style", "${_Character2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Character2}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 0 }         ]
      }
   }
},
"TitleIntro": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Title',
      type: 'image',
      rect: ['0px','0px','182px','92px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/Title.png','0px','0px']
   },
   {
      rect: ['-146px','-116px','364px','213px','auto','auto'],
      id: 'logoblur',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','img/logoblur.png','0px','0px']
   },
   {
      id: 'tomclancy',
      type: 'image',
      rect: ['0','0','124px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/tomclancy.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Title}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_logoblur}": [
            ["style", "top", '-116px'],
            ["style", "opacity", '0'],
            ["style", "left", '-146px']
         ],
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '182px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1590,
         autoPlay: true,
         labels: {
            "logoStart": 0
         },
         timeline: [
            { id: "eid86", tween: [ "style", "${_Title}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Title}", "opacity", '0.01', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Title}", "opacity", '1', { fromValue: '0.01'}], position: 1142, duration: 0 },
            { id: "eid140", tween: [ "style", "${_Title}", "opacity", '0.01', { fromValue: '1'}], position: 1309, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Title}", "opacity", '1', { fromValue: '0.01'}], position: 1451, duration: 0 },
            { id: "eid84", tween: [ "style", "${_logoblur}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_logoblur}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_logoblur}", "opacity", '0', { fromValue: '1'}], position: 1104, duration: 0 },
            { id: "eid137", tween: [ "style", "${_logoblur}", "opacity", '1', { fromValue: '0'}], position: 1309, duration: 0 },
            { id: "eid138", tween: [ "style", "${_logoblur}", "opacity", '0', { fromValue: '1'}], position: 1413, duration: 0 }         ]
      }
   }
},
"circles": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'circle3',
      type: 'rect',
      transform: [{1:0,0:0},{},{},['2.23','2.23']],
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'circle2',
      type: 'rect',
      transform: [{1:0,0:0},{},{},['2.23','2.23']],
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'circle1',
      type: 'rect',
      transform: [{1:0,0:0},{},{},['2.23','2.23']],
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'circle1',
      symbolName: 'circle3'
   },
   {
      id: 'circle2',
      symbolName: 'circle3'
   },
   {
      id: 'circle3',
      symbolName: 'circle3'
   }   ]
   },
   states: {
      "Base State": {
         "${_circle1}": [
            ["transform", "scaleX", '2.17'],
            ["transform", "scaleY", '2.17'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_circle2}": [
            ["transform", "scaleX", '2.17'],
            ["transform", "scaleY", '2.17'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '210px'],
            ["style", "width", '199px']
         ],
         "${_circle3}": [
            ["transform", "scaleX", '2.2'],
            ["transform", "scaleY", '2.2'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14385,
         autoPlay: true,
         timeline: [
            { id: "eid51", tween: [ "transform", "${_circle1}", "scaleY", '2.17', { fromValue: '2.17'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "transform", "${_circle1}", "scaleY", '1.2', { fromValue: '2.2'}], position: 500, duration: 515, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "transform", "${_circle3}", "rotateZ", '130deg', { fromValue: '0deg'}], position: 500, duration: 3500 },
            { id: "eid327", tween: [ "transform", "${_circle3}", "rotateZ", '360deg', { fromValue: '130deg'}], position: 4000, duration: 10385 },
            { id: "eid48", tween: [ "transform", "${_circle2}", "scaleY", '2.17', { fromValue: '2.17'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "transform", "${_circle2}", "scaleY", '0.8', { fromValue: '2.2'}], position: 250, duration: 515, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "transform", "${_circle1}", "rotateZ", '20deg', { fromValue: '0deg'}], position: 1453, duration: 2547, easing: "easeOutSine" },
            { id: "eid329", tween: [ "transform", "${_circle1}", "rotateZ", '40deg', { fromValue: '20deg'}], position: 4000, duration: 10384, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "transform", "${_circle3}", "scaleX", '2.2', { fromValue: '2.2'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "transform", "${_circle3}", "scaleX", '0.54', { fromValue: '2'}], position: 100, duration: 400, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "transform", "${_circle1}", "scaleX", '2.17', { fromValue: '2.17'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "transform", "${_circle1}", "scaleX", '1.2', { fromValue: '2.2'}], position: 500, duration: 515, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "transform", "${_circle3}", "scaleY", '2.2', { fromValue: '2.2'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "transform", "${_circle3}", "scaleY", '0.54', { fromValue: '2'}], position: 100, duration: 400, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "transform", "${_circle2}", "scaleX", '2.17', { fromValue: '2.17'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_circle2}", "scaleX", '0.8', { fromValue: '2.2'}], position: 250, duration: 515, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "transform", "${_circle2}", "rotateZ", '-20deg', { fromValue: '0deg'}], position: 991, duration: 3009, easing: "easeOutSine" },
            { id: "eid328", tween: [ "transform", "${_circle2}", "rotateZ", '-31deg', { fromValue: '-20deg'}], position: 4000, duration: 10385, easing: "easeOutQuad" }         ]
      }
   }
},
"circle3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Bitmap-1',
      type: 'image',
      rect: ['0px','0px','199px','210px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/Bitmap-1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Bitmap-1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '210px'],
            ["style", "width", '199px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"quoteMaxim": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['22px','5px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'KICK-ASS<br>MULTIPLAYER',
      align: 'center',
      font: ['Lucida Console, Monaco, monospace',30,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Quote',
      text: '\"',
      align: 'center',
      font: ['\'Lucida Console\', Monaco, monospace',30,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['232px','32px','auto','auto','auto','auto'],
      id: 'qhote2',
      text: '\"',
      align: 'center',
      font: ['\'Lucida Console\', Monaco, monospace',30,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['185px','71px','auto','auto','auto','auto'],
      id: 'Text3',
      text: '-Maxim',
      align: 'center',
      font: ['\'Lucida Console\', Monaco, monospace',17,'rgba(164,255,228,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '5px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Lucida Console, Monaco, monospace'],
            ["style", "left", '22px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '250px']
         ],
         "${_Text3}": [
            ["style", "top", '71px'],
            ["color", "color", 'rgba(164,255,228,1.00)'],
            ["style", "left", '185px'],
            ["style", "font-size", '17px']
         ],
         "${_Quote}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_qhote2}": [
            ["style", "left", '232px'],
            ["style", "top", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"cta": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cta_back',
      type: 'image',
      rect: ['85px','153px','262px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/cta_back.png','0px','0px']
   },
   {
      id: 'cta_fx',
      type: 'image',
      rect: ['85px','153px','262px','44px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/cta_fx.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',24,'rgba(8,110,138,1.00)','900','none',''],
      id: 'Text',
      text: 'BUY NOW',
      type: 'text',
      rect: ['204px','158px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      rect: ['184px','155px','163px','42px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cta_fx}": [
            ["style", "top", '153px'],
            ["style", "opacity", '0'],
            ["style", "left", '85px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '42px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(8,110,138,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '193px'],
            ["style", "width", '148px'],
            ["style", "top", '160px'],
            ["style", "height", '33px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '24px'],
            ["style", "font-weight", '900']
         ],
         "${symbolSelector}": [
            ["style", "height", '197px'],
            ["style", "width", '347px']
         ],
         "${_cta_back}": [
            ["style", "left", '85px'],
            ["style", "top", '153px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 973,
         autoPlay: false,
         labels: {
            "start": 0,
            "anim": 344
         },
         timeline: [
            { id: "eid319", tween: [ "style", "${_Text}", "height", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid324", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutSine" },
            { id: "eid298", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 423, duration: 387, easing: "easeOutSine" },
            { id: "eid321", tween: [ "style", "${_Text}", "width", '148px', { fromValue: '148px'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "style", "${_Text}", "left", '191px', { fromValue: '0'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid390", tween: [ "style", "${_Text}", "left", '191px', { fromValue: '-7px'}], position: 423, duration: 387, easing: "easeOutSine" },
            { id: "eid393", tween: [ "style", "${_cta_fx}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutSine" },
            { id: "eid403", tween: [ "style", "${_cta_fx}", "opacity", '0', { fromValue: '1'}], position: 423, duration: 387, easing: "easeOutSine" },
            { id: "eid320", tween: [ "style", "${_Text}", "top", '160px', { fromValue: '160px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-119681725");
