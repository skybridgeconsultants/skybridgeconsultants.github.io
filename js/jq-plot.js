(function(H){var r;H.fn.emptyForce=function(){for(var ab=0,ac;(ac=H(this)[ab])!=null;ab++){if(ac.nodeType===1){H.cleanData(ac.getElementsByTagName("*"))
}if(H.jqplot.use_excanvas){ac.outerHTML=""}else{while(ac.firstChild){ac.removeChild(ac.firstChild)}}ac=null
}return H(this)};H.fn.removeChildForce=function(ab){while(ab.firstChild){this.removeChildForce(ab.firstChild);
ab.removeChild(ab.firstChild)}};H.fn.jqplot=function(){var ab=[];var ad=[];for(var ae=0,ac=arguments.length;
ae<ac;ae++){if(H.isArray(arguments[ae])){ab.push(arguments[ae])}else{if(H.isPlainObject(arguments[ae])){ad.push(arguments[ae])
}}}return this.each(function(ah){var am,al,ak=H(this),ag=ab.length,af=ad.length,aj,ai;if(ah<ag){aj=ab[ah]
}else{aj=ag?ab[ag-1]:null}if(ah<af){ai=ad[ah]}else{ai=af?ad[af-1]:null}am=ak.attr("id");if(am===r){am="jqplot_target_"+H.jqplot.targetCounter++;
ak.attr("id",am)}al=H.jqplot(am,aj,ai);ak.data("jqplot",al)})};H.jqplot=function(ah,ae,ac){var ad=null,ab=null;
if(arguments.length===3){ad=ae;ab=ac}else{if(arguments.length===2){if(H.isArray(ae)){ad=ae}else{if(H.isPlainObject(ae)){ab=ae
}}}}if(ad===null&&ab!==null&&ab.data){ad=ab.data}var ag=new N();H("#"+ah).removeClass("jqplot-error");
if(H.jqplot.config.catchErrors){try{ag.init(ah,ad,ab);ag.draw();ag.themeEngine.init.call(ag);return ag
}catch(af){var ai=H.jqplot.config.errorMessage||af.message;H("#"+ah).append('<div class="jqplot-error-message">'+ai+"</div>");
H("#"+ah).addClass("jqplot-error");document.getElementById(ah).style.background=H.jqplot.config.errorBackground;
document.getElementById(ah).style.border=H.jqplot.config.errorBorder;document.getElementById(ah).style.fontFamily=H.jqplot.config.errorFontFamily;
document.getElementById(ah).style.fontSize=H.jqplot.config.errorFontSize;document.getElementById(ah).style.fontStyle=H.jqplot.config.errorFontStyle;
document.getElementById(ah).style.fontWeight=H.jqplot.config.errorFontWeight}}else{ag.init(ah,ad,ab);
ag.draw();ag.themeEngine.init.call(ag);return ag}};H.jqplot.version="1.0.0";H.jqplot.revision="1095";
H.jqplot.targetCounter=1;H.jqplot.CanvasManager=function(){if(typeof H.jqplot.CanvasManager.canvases=="undefined"){H.jqplot.CanvasManager.canvases=[];
H.jqplot.CanvasManager.free=[]}var ab=[];this.getCanvas=function(){var ae;var ad=true;if(!H.jqplot.use_excanvas){for(var af=0,ac=H.jqplot.CanvasManager.canvases.length;
af<ac;af++){if(H.jqplot.CanvasManager.free[af]===true){ad=false;ae=H.jqplot.CanvasManager.canvases[af];
H.jqplot.CanvasManager.free[af]=false;ab.push(af);break}}}if(ad){ae=document.createElement("canvas");
ab.push(H.jqplot.CanvasManager.canvases.length);H.jqplot.CanvasManager.canvases.push(ae);H.jqplot.CanvasManager.free.push(false)
}return ae};this.initCanvas=function(ac){if(H.jqplot.use_excanvas){return window.G_vmlCanvasManager.initElement(ac)
}return ac};this.freeAllCanvases=function(){for(var ad=0,ac=ab.length;ad<ac;ad++){this.freeCanvas(ab[ad])
}ab=[]};this.freeCanvas=function(ac){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(H.jqplot.CanvasManager.canvases[ac]);
H.jqplot.CanvasManager.canvases[ac]=null}else{var ad=H.jqplot.CanvasManager.canvases[ac];ad.getContext("2d").clearRect(0,0,ad.width,ad.height);
H(ad).unbind().removeAttr("class").removeAttr("style");H(ad).css({left:"",top:"",position:""});ad.width=0;
ad.height=0;H.jqplot.CanvasManager.free[ac]=true}}};H.jqplot.log=function(){if(window.console){window.console.log.apply(window.console,arguments)
}};H.jqplot.config={addDomReference:false,enablePlugins:false,defaultHeight:300,defaultWidth:400,UTCAdjust:false,timezoneOffset:new Date(new Date().getTimezoneOffset()*60000),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:false,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"],dashLength:4,gapLength:4,dotGapLength:2.5,srcLocation:"jqplot/src/",pluginLocation:"jqplot/src/plugins/"};
H.jqplot.arrayMax=function(ab){return Math.max.apply(Math,ab)};H.jqplot.arrayMin=function(ab){return Math.min.apply(Math,ab)
};H.jqplot.enablePlugins=H.jqplot.config.enablePlugins;H.jqplot.support_canvas=function(){if(typeof H.jqplot.support_canvas.result=="undefined"){H.jqplot.support_canvas.result=!!document.createElement("canvas").getContext
}return H.jqplot.support_canvas.result};H.jqplot.support_canvas_text=function(){if(typeof H.jqplot.support_canvas_text.result=="undefined"){if(window.G_vmlCanvasManager!==r&&window.G_vmlCanvasManager._version>887){H.jqplot.support_canvas_text.result=true
}else{H.jqplot.support_canvas_text.result=!!(document.createElement("canvas").getContext&&typeof document.createElement("canvas").getContext("2d").fillText=="function")
}}return H.jqplot.support_canvas_text.result};H.jqplot.use_excanvas=(H.browser.msie&&!H.jqplot.support_canvas())?true:false;
H.jqplot.preInitHooks=[];H.jqplot.postInitHooks=[];H.jqplot.preParseOptionsHooks=[];H.jqplot.postParseOptionsHooks=[];
H.jqplot.preDrawHooks=[];H.jqplot.postDrawHooks=[];H.jqplot.preDrawSeriesHooks=[];H.jqplot.postDrawSeriesHooks=[];
H.jqplot.preDrawLegendHooks=[];H.jqplot.addLegendRowHooks=[];H.jqplot.preSeriesInitHooks=[];H.jqplot.postSeriesInitHooks=[];
H.jqplot.preParseSeriesOptionsHooks=[];H.jqplot.postParseSeriesOptionsHooks=[];H.jqplot.eventListenerHooks=[];
H.jqplot.preDrawSeriesShadowHooks=[];H.jqplot.postDrawSeriesShadowHooks=[];H.jqplot.ElemContainer=function(){this._elem;
this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null}};H.jqplot.ElemContainer.prototype.createElement=function(ae,ag,ac,ad,ah){this._offsets=ag;
var ab=ac||"jqplot";var af=document.createElement(ae);this._elem=H(af);this._elem.addClass(ab);this._elem.css(ad);
this._elem.attr(ah);af=null;return this._elem};H.jqplot.ElemContainer.prototype.getWidth=function(){if(this._elem){return this._elem.outerWidth(true)
}else{return null}};H.jqplot.ElemContainer.prototype.getHeight=function(){if(this._elem){return this._elem.outerHeight(true)
}else{return null}};H.jqplot.ElemContainer.prototype.getPosition=function(){if(this._elem){return this._elem.position()
}else{return{top:null,left:null,bottom:null,right:null}}};H.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top
};H.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left};H.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")
};H.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")};function s(ab){H.jqplot.ElemContainer.call(this);
this.name=ab;this._series=[];this.show=false;this.tickRenderer=H.jqplot.AxisTickRenderer;this.tickOptions={};
this.labelRenderer=H.jqplot.AxisLabelRenderer;this.labelOptions={};this.label=null;this.showLabel=true;
this.min=null;this.max=null;this.autoscale=false;this.pad=1.2;this.padMax=null;this.padMin=null;this.ticks=[];
this.numberTicks;this.tickInterval;this.renderer=H.jqplot.LinearAxisRenderer;this.rendererOptions={};
this.showTicks=true;this.showTickMarks=true;this.showMinorTicks=true;this.drawMajorGridlines=true;this.drawMinorGridlines=false;
this.drawMajorTickMarks=true;this.drawMinorTickMarks=true;this.useSeriesColor=false;this.borderWidth=null;
this.borderColor=null;this.scaleToHiddenSeries=false;this._dataBounds={min:null,max:null};this._intervalStats=[];
this._offsets={min:null,max:null};this._ticks=[];this._label=null;this.syncTicks=null;this.tickSpacing=75;
this._min=null;this._max=null;this._tickInterval=null;this._numberTicks=null;this.__ticks=null;this._options={}
}s.prototype=new H.jqplot.ElemContainer();s.prototype.constructor=s;s.prototype.init=function(){if(H.isFunction(this.renderer)){this.renderer=new this.renderer()
}this.tickOptions.axis=this.name;if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTicks
}if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTickMarks}if(this.tickOptions.showLabel==null){this.tickOptions.showLabel=this.showTicks
}if(this.label==null||this.label==""){this.showLabel=false}else{this.labelOptions.label=this.label}if(this.showLabel==false){this.labelOptions.show=false
}if(this.pad==0){this.pad=1}if(this.padMax==0){this.padMax=1}if(this.padMin==0){this.padMin=1}if(this.padMax==null){this.padMax=(this.pad-1)/2+1
}if(this.padMin==null){this.padMin=(this.pad-1)/2+1}this.pad=this.padMax+this.padMin-1;if(this.min!=null||this.max!=null){this.autoscale=false
}if(this.syncTicks==null&&this.name.indexOf("y")>-1){this.syncTicks=true}else{if(this.syncTicks==null){this.syncTicks=false
}}this.renderer.init.call(this,this.rendererOptions)};s.prototype.draw=function(ab,ac){if(this.__ticks){this.__ticks=null
}return this.renderer.draw.call(this,ab,ac)};s.prototype.set=function(){this.renderer.set.call(this)};
s.prototype.pack=function(ac,ab){if(this.show){this.renderer.pack.call(this,ac,ab)}if(this._min==null){this._min=this.min;
this._max=this.max;this._tickInterval=this.tickInterval;this._numberTicks=this.numberTicks;this.__ticks=this._ticks
}};s.prototype.reset=function(){this.renderer.reset.call(this)};s.prototype.resetScale=function(ab){H.extend(true,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},ab);
this.resetDataBounds()};s.prototype.resetDataBounds=function(){var ai=this._dataBounds;ai.min=null;ai.max=null;
var ac,aj,ag;var ad=(this.show)?true:false;for(var af=0;af<this._series.length;af++){aj=this._series[af];
if(aj.show||this.scaleToHiddenSeries){ag=aj._plotData;if(aj._type==="line"&&aj.renderer.bands.show&&this.name.charAt(0)!=="x"){ag=[[0,aj.renderer.bands._min],[1,aj.renderer.bands._max]]
}var ab=1,ah=1;if(aj._type!=null&&aj._type=="ohlc"){ab=3;ah=2}for(var ae=0,ac=ag.length;ae<ac;ae++){if(this.name=="xaxis"||this.name=="x2axis"){if((ag[ae][0]!=null&&ag[ae][0]<ai.min)||ai.min==null){ai.min=ag[ae][0]
}if((ag[ae][0]!=null&&ag[ae][0]>ai.max)||ai.max==null){ai.max=ag[ae][0]}}else{if((ag[ae][ab]!=null&&ag[ae][ab]<ai.min)||ai.min==null){ai.min=ag[ae][ab]
}if((ag[ae][ah]!=null&&ag[ae][ah]>ai.max)||ai.max==null){ai.max=ag[ae][ah]}}}if(ad&&aj.renderer.constructor!==H.jqplot.BarRenderer){ad=false
}else{if(ad&&this._options.hasOwnProperty("forceTickAt0")&&this._options.forceTickAt0==false){ad=false
}else{if(ad&&aj.renderer.constructor===H.jqplot.BarRenderer){if(aj.barDirection=="vertical"&&this.name!="xaxis"&&this.name!="x2axis"){if(this._options.pad!=null||this._options.padMin!=null){ad=false
}}else{if(aj.barDirection=="horizontal"&&(this.name=="xaxis"||this.name=="x2axis")){if(this._options.pad!=null||this._options.padMin!=null){ad=false
}}}}}}}}if(ad&&this.renderer.constructor===H.jqplot.LinearAxisRenderer&&ai.min>=0){this.padMin=1;this.forceTickAt0=true
}};function n(ab){H.jqplot.ElemContainer.call(this);this.show=false;this.location="ne";this.labels=[];
this.showLabels=true;this.showSwatches=true;this.placement="insideGrid";this.xoffset=0;this.yoffset=0;
this.border;this.background;this.textColor;this.fontFamily;this.fontSize;this.rowSpacing="0.5em";this.renderer=H.jqplot.TableLegendRenderer;
this.rendererOptions={};this.preDraw=false;this.marginTop=null;this.marginRight=null;this.marginBottom=null;
this.marginLeft=null;this.escapeHtml=false;this._series=[];H.extend(true,this,ab)}n.prototype=new H.jqplot.ElemContainer();
n.prototype.constructor=n;n.prototype.setOptions=function(ab){H.extend(true,this,ab);if(this.placement=="inside"){this.placement="insideGrid"
}if(this.xoffset>0){if(this.placement=="insideGrid"){switch(this.location){case"nw":case"w":case"sw":if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"
}this.marginRight="0px";break;case"ne":case"e":case"se":default:if(this.marginRight==null){this.marginRight=this.xoffset+"px"
}this.marginLeft="0px";break}}else{if(this.placement=="outside"){switch(this.location){case"nw":case"w":case"sw":if(this.marginRight==null){this.marginRight=this.xoffset+"px"
}this.marginLeft="0px";break;case"ne":case"e":case"se":default:if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"
}this.marginRight="0px";break}}}this.xoffset=0}if(this.yoffset>0){if(this.placement=="outside"){switch(this.location){case"sw":case"s":case"se":if(this.marginTop==null){this.marginTop=this.yoffset+"px"
}this.marginBottom="0px";break;case"ne":case"n":case"nw":default:if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"
}this.marginTop="0px";break}}else{if(this.placement=="insideGrid"){switch(this.location){case"sw":case"s":case"se":if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"
}this.marginTop="0px";break;case"ne":case"n":case"nw":default:if(this.marginTop==null){this.marginTop=this.yoffset+"px"
}this.marginBottom="0px";break}}}this.yoffset=0}};n.prototype.init=function(){if(H.isFunction(this.renderer)){this.renderer=new this.renderer()
}this.renderer.init.call(this,this.rendererOptions)};n.prototype.draw=function(ac,ad){for(var ab=0;ab<H.jqplot.preDrawLegendHooks.length;
ab++){H.jqplot.preDrawLegendHooks[ab].call(this,ac)}return this.renderer.draw.call(this,ac,ad)};n.prototype.pack=function(ab){this.renderer.pack.call(this,ab)
};function u(ab){H.jqplot.ElemContainer.call(this);this.text=ab;this.show=true;this.fontFamily;this.fontSize;
this.textAlign;this.textColor;this.renderer=H.jqplot.DivTitleRenderer;this.rendererOptions={};this.escapeHtml=false
}u.prototype=new H.jqplot.ElemContainer();u.prototype.constructor=u;u.prototype.init=function(){if(H.isFunction(this.renderer)){this.renderer=new this.renderer()
}this.renderer.init.call(this,this.rendererOptions)};u.prototype.draw=function(ab){return this.renderer.draw.call(this,ab)
};u.prototype.pack=function(){this.renderer.pack.call(this)};function O(){H.jqplot.ElemContainer.call(this);
this.show=true;this.xaxis="xaxis";this._xaxis;this.yaxis="yaxis";this._yaxis;this.gridBorderWidth=2;this.renderer=H.jqplot.LineRenderer;
this.rendererOptions={};this.data=[];this.gridData=[];this.label="";this.showLabel=true;this.color;this.negativeColor;
this.lineWidth=2.5;this.lineJoin="round";this.lineCap="round";this.linePattern="solid";this.shadow=true;
this.shadowAngle=45;this.shadowOffset=1.25;this.shadowDepth=3;this.shadowAlpha="0.1";this.breakOnNull=false;
this.markerRenderer=H.jqplot.MarkerRenderer;this.markerOptions={};this.showLine=true;this.showMarker=true;
this.index;this.fill=false;this.fillColor;this.fillAlpha;this.fillAndStroke=false;this.disableStack=false;
this._stack=false;this.neighborThreshold=4;this.fillToZero=false;this.fillToValue=0;this.fillAxis="y";
this.useNegativeColors=true;this._stackData=[];this._plotData=[];this._plotValues={x:[],y:[]};this._intervals={x:{},y:{}};
this._prevPlotData=[];this._prevGridData=[];this._stackAxis="y";this._primaryAxis="_xaxis";this.canvas=new H.jqplot.GenericCanvas();
this.shadowCanvas=new H.jqplot.GenericCanvas();this.plugins={};this._sumy=0;this._sumx=0;this._type=""
}O.prototype=new H.jqplot.ElemContainer();O.prototype.constructor=O;O.prototype.init=function(ad,ah,af){this.index=ad;
this.gridBorderWidth=ah;var ag=this.data;var ac=[],ae;for(ae=0;ae<ag.length;ae++){if(!this.breakOnNull){if(ag[ae]==null||ag[ae][0]==null||ag[ae][1]==null){continue
}else{ac.push(ag[ae])}}else{ac.push(ag[ae])}}this.data=ac;if(!this.color){this.color=af.colorGenerator.get(this.index)
}if(!this.negativeColor){this.negativeColor=af.negativeColorGenerator.get(this.index)}if(!this.fillColor){this.fillColor=this.color
}if(this.fillAlpha){var ab=H.jqplot.normalize2rgb(this.fillColor);var ab=H.jqplot.getColorComponents(ab);
this.fillColor="rgba("+ab[0]+","+ab[1]+","+ab[2]+","+this.fillAlpha+")"}if(H.isFunction(this.renderer)){this.renderer=new this.renderer()
}this.renderer.init.call(this,this.rendererOptions,af);this.markerRenderer=new this.markerRenderer();
if(!this.markerOptions.color){this.markerOptions.color=this.color}if(this.markerOptions.show==null){this.markerOptions.show=this.showMarker
}this.showMarker=this.markerOptions.show;this.markerRenderer.init(this.markerOptions)};O.prototype.draw=function(ah,ae,ag){var ac=(ae==r)?{}:ae;
ah=(ah==r)?this.canvas._ctx:ah;var ab,af,ad;for(ab=0;ab<H.jqplot.preDrawSeriesHooks.length;ab++){H.jqplot.preDrawSeriesHooks[ab].call(this,ah,ac)
}if(this.show){this.renderer.setGridData.call(this,ag);if(!ac.preventJqPlotSeriesDrawTrigger){H(ah.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData])
}af=[];if(ac.data){af=ac.data}else{if(!this._stack){af=this.data}else{af=this._plotData}}ad=ac.gridData||this.renderer.makeGridData.call(this,af,ag);
if(this._type==="line"&&this.renderer.smooth&&this.renderer._smoothedData.length){ad=this.renderer._smoothedData
}this.renderer.draw.call(this,ah,ad,ac,ag)}for(ab=0;ab<H.jqplot.postDrawSeriesHooks.length;ab++){H.jqplot.postDrawSeriesHooks[ab].call(this,ah,ac,ag)
}ah=ae=ag=ab=af=ad=null};O.prototype.drawShadow=function(ah,ae,ag){var ac=(ae==r)?{}:ae;ah=(ah==r)?this.shadowCanvas._ctx:ah;
var ab,af,ad;for(ab=0;ab<H.jqplot.preDrawSeriesShadowHooks.length;ab++){H.jqplot.preDrawSeriesShadowHooks[ab].call(this,ah,ac)
}if(this.shadow){this.renderer.setGridData.call(this,ag);af=[];if(ac.data){af=ac.data}else{if(!this._stack){af=this.data
}else{af=this._plotData}}ad=ac.gridData||this.renderer.makeGridData.call(this,af,ag);this.renderer.drawShadow.call(this,ah,ad,ac)
}for(ab=0;ab<H.jqplot.postDrawSeriesShadowHooks.length;ab++){H.jqplot.postDrawSeriesShadowHooks[ab].call(this,ah,ac)
}ah=ae=ag=ab=af=ad=null};O.prototype.toggleDisplay=function(ac,ae){var ab,ad;if(ac.data.series){ab=ac.data.series
}else{ab=this}if(ac.data.speed){ad=ac.data.speed}if(ad){if(ab.canvas._elem.is(":hidden")||!ab.show){ab.show=true;
ab.canvas._elem.removeClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.fadeIn(ad)
}ab.canvas._elem.fadeIn(ad,ae);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).fadeIn(ad)
}else{ab.show=false;ab.canvas._elem.addClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.fadeOut(ad)
}ab.canvas._elem.fadeOut(ad,ae);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).fadeOut(ad)
}}else{if(ab.canvas._elem.is(":hidden")||!ab.show){ab.show=true;ab.canvas._elem.removeClass("jqplot-series-hidden");
if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.show()}ab.canvas._elem.show(0,ae);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).show()
}else{ab.show=false;ab.canvas._elem.addClass("jqplot-series-hidden");if(ab.shadowCanvas._elem){ab.shadowCanvas._elem.hide()
}ab.canvas._elem.hide(0,ae);ab.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+ab.index).hide()
}}};function I(){H.jqplot.ElemContainer.call(this);this.drawGridlines=true;this.gridLineColor="#cccccc";
this.gridLineWidth=1;this.background="#fffdf6";this.borderColor="#999999";this.borderWidth=2;this.drawBorder=true;
this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.5;this.shadowWidth=3;this.shadowDepth=3;this.shadowColor=null;
this.shadowAlpha="0.07";this._left;this._top;this._right;this._bottom;this._width;this._height;this._axes=[];
this.renderer=H.jqplot.CanvasGridRenderer;this.rendererOptions={};this._offsets={top:null,bottom:null,left:null,right:null}
}I.prototype=new H.jqplot.ElemContainer();I.prototype.constructor=I;I.prototype.init=function(){if(H.isFunction(this.renderer)){this.renderer=new this.renderer()
}this.renderer.init.call(this,this.rendererOptions)};I.prototype.createElement=function(ab,ac){this._offsets=ab;
return this.renderer.createElement.call(this,ac)};I.prototype.draw=function(){this.renderer.draw.call(this)
};H.jqplot.GenericCanvas=function(){H.jqplot.ElemContainer.call(this);this._ctx};H.jqplot.GenericCanvas.prototype=new H.jqplot.ElemContainer();
H.jqplot.GenericCanvas.prototype.constructor=H.jqplot.GenericCanvas;H.jqplot.GenericCanvas.prototype.createElement=function(af,ad,ac,ag){this._offsets=af;
var ab="jqplot";if(ad!=r){ab=ad}var ae;ae=ag.canvasManager.getCanvas();if(ac!=null){this._plotDimensions=ac
}ae.width=this._plotDimensions.width-this._offsets.left-this._offsets.right;ae.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom;
this._elem=H(ae);this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top});
this._elem.addClass(ab);ae=ag.canvasManager.initCanvas(ae);ae=null;return this._elem};H.jqplot.GenericCanvas.prototype.setContext=function(){this._ctx=this._elem.get(0).getContext("2d");
return this._ctx};H.jqplot.GenericCanvas.prototype.resetCanvas=function(){if(this._elem){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))
}this._elem.emptyForce()}this._ctx=null};H.jqplot.HooksManager=function(){this.hooks=[];this.args=[]};
H.jqplot.HooksManager.prototype.addOnce=function(ae,ac){ac=ac||[];var af=false;for(var ad=0,ab=this.hooks.length;
ad<ab;ad++){if(this.hooks[ad]==ae){af=true}}if(!af){this.hooks.push(ae);this.args.push(ac)}};H.jqplot.HooksManager.prototype.add=function(ac,ab){ab=ab||[];
this.hooks.push(ac);this.args.push(ab)};H.jqplot.EventListenerManager=function(){this.hooks=[]};H.jqplot.EventListenerManager.prototype.addOnce=function(af,ae){var ag=false,ad,ac;
for(var ac=0,ab=this.hooks.length;ac<ab;ac++){ad=this.hooks[ac];if(ad[0]==af&&ad[1]==ae){ag=true}}if(!ag){this.hooks.push([af,ae])
}};H.jqplot.EventListenerManager.prototype.add=function(ac,ab){this.hooks.push([ac,ab])};var Q=["yMidAxis","xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];
function N(){this.animate=false;this.animateReplot=false;this.axes={xaxis:new s("xaxis"),yaxis:new s("yaxis"),x2axis:new s("x2axis"),y2axis:new s("y2axis"),y3axis:new s("y3axis"),y4axis:new s("y4axis"),y5axis:new s("y5axis"),y6axis:new s("y6axis"),y7axis:new s("y7axis"),y8axis:new s("y8axis"),y9axis:new s("y9axis"),yMidAxis:new s("yMidAxis")};
this.baseCanvas=new H.jqplot.GenericCanvas();this.captureRightClick=false;this.data=[];this.dataRenderer;
this.dataRendererOptions;this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{},yMidAxis:{}},seriesDefaults:{},series:[]};
this.defaultAxisStart=1;this.drawIfHidden=false;this.eventCanvas=new H.jqplot.GenericCanvas();this.fillBetween={series1:null,series2:null,color:null,baseSeries:0,fill:true};
this.fontFamily;this.fontSize;this.grid=new I();this.legend=new n();this.negativeSeriesColors=H.jqplot.config.defaultNegativeColors;
this.noDataIndicator={show:false,indicator:"Loading Data...",axes:{xaxis:{min:0,max:10,tickInterval:2,show:true},yaxis:{min:0,max:12,tickInterval:3,show:true}}};
this.options={};this.previousSeriesStack=[];this.plugins={};this.series=[];this.seriesStack=[];this.seriesColors=H.jqplot.config.defaultColors;
this.sortData=true;this.stackSeries=false;this.syncXTicks=true;this.syncYTicks=true;this.target=null;
this.targetId=null;this.textColor;this.title=new u();this._drawCount=0;this._sumy=0;this._sumx=0;this._stackData=[];
this._plotData=[];this._width=null;this._height=null;this._plotDimensions={height:null,width:null};this._gridPadding={top:null,right:null,bottom:null,left:null};
this._defaultGridPadding={top:10,right:10,bottom:23,left:10};this._addDomReference=H.jqplot.config.addDomReference;
this.preInitHooks=new H.jqplot.HooksManager();this.postInitHooks=new H.jqplot.HooksManager();this.preParseOptionsHooks=new H.jqplot.HooksManager();
this.postParseOptionsHooks=new H.jqplot.HooksManager();this.preDrawHooks=new H.jqplot.HooksManager();
this.postDrawHooks=new H.jqplot.HooksManager();this.preDrawSeriesHooks=new H.jqplot.HooksManager();this.postDrawSeriesHooks=new H.jqplot.HooksManager();
this.preDrawLegendHooks=new H.jqplot.HooksManager();this.addLegendRowHooks=new H.jqplot.HooksManager();
this.preSeriesInitHooks=new H.jqplot.HooksManager();this.postSeriesInitHooks=new H.jqplot.HooksManager();
this.preParseSeriesOptionsHooks=new H.jqplot.HooksManager();this.postParseSeriesOptionsHooks=new H.jqplot.HooksManager();
this.eventListenerHooks=new H.jqplot.EventListenerManager();this.preDrawSeriesShadowHooks=new H.jqplot.HooksManager();
this.postDrawSeriesShadowHooks=new H.jqplot.HooksManager();this.colorGenerator=new H.jqplot.ColorGenerator();
this.negativeColorGenerator=new H.jqplot.ColorGenerator();this.canvasManager=new H.jqplot.CanvasManager();
this.themeEngine=new H.jqplot.ThemeEngine();var ad=0;this.init=function(ao,al,aq){aq=aq||{};for(var am=0;
am<H.jqplot.preInitHooks.length;am++){H.jqplot.preInitHooks[am].call(this,ao,al,aq)}for(var am=0;am<this.preInitHooks.hooks.length;
am++){this.preInitHooks.hooks[am].call(this,ao,al,aq)}this.targetId="#"+ao;this.target=H("#"+ao);if(this._addDomReference){this.target.data("jqplot",this)
}this.target.removeClass("jqplot-error");if(!this.target.get(0)){throw"No plot target specified"}if(this.target.css("position")=="static"){this.target.css("position","relative")
}if(!this.target.hasClass("jqplot-target")){this.target.addClass("jqplot-target")}if(!this.target.height()){var an;
if(aq&&aq.height){an=parseInt(aq.height,10)}else{if(this.target.attr("data-height")){an=parseInt(this.target.attr("data-height"),10)
}else{an=parseInt(H.jqplot.config.defaultHeight,10)}}this._height=an;this.target.css("height",an+"px")
}else{this._height=an=this.target.height()}if(!this.target.width()){var ap;if(aq&&aq.width){ap=parseInt(aq.width,10)
}else{if(this.target.attr("data-width")){ap=parseInt(this.target.attr("data-width"),10)}else{ap=parseInt(H.jqplot.config.defaultWidth,10)
}}this._width=ap;this.target.css("width",ap+"px")}else{this._width=ap=this.target.width()}for(var am=0,aj=Q.length;
am<aj;am++){this.axes[Q[am]]=new s(Q[am])}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;
this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;
this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;
if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Canvas dimension not set"}if(aq.dataRenderer&&H.isFunction(aq.dataRenderer)){if(aq.dataRendererOptions){this.dataRendererOptions=aq.dataRendererOptions
}this.dataRenderer=aq.dataRenderer;al=this.dataRenderer(al,this,this.dataRendererOptions)}if(aq.noDataIndicator&&H.isPlainObject(aq.noDataIndicator)){H.extend(true,this.noDataIndicator,aq.noDataIndicator)
}if(al==null||H.isArray(al)==false||al.length==0||H.isArray(al[0])==false||al[0].length==0){if(this.noDataIndicator.show==false){throw"No Data"
}else{for(var af in this.noDataIndicator.axes){for(var ah in this.noDataIndicator.axes[af]){this.axes[af][ah]=this.noDataIndicator.axes[af][ah]
}}this.postDrawHooks.add(function(){var ax=this.eventCanvas.getHeight();var au=this.eventCanvas.getWidth();
var at=H('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(at);
at.height(ax);at.width(au);at.css("top",this.eventCanvas._offsets.top);at.css("left",this.eventCanvas._offsets.left);
var aw=H('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');
at.append(aw);aw.html(this.noDataIndicator.indicator);var av=aw.height();var ar=aw.width();aw.height(av);
aw.width(ar);aw.css("top",(ax-av)/2+"px")})}}this.data=H.extend(true,[],al);this.parseOptions(aq);if(this.textColor){this.target.css("color",this.textColor)
}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)
}this.title.init();this.legend.init();this._sumy=0;this._sumx=0;for(var am=0;am<this.series.length;am++){this.seriesStack.push(am);
this.previousSeriesStack.push(am);this.series[am].shadowCanvas._plotDimensions=this._plotDimensions;this.series[am].canvas._plotDimensions=this._plotDimensions;
for(var ak=0;ak<H.jqplot.preSeriesInitHooks.length;ak++){H.jqplot.preSeriesInitHooks[ak].call(this.series[am],ao,this.data,this.options.seriesDefaults,this.options.series[am],this)
}for(var ak=0;ak<this.preSeriesInitHooks.hooks.length;ak++){this.preSeriesInitHooks.hooks[ak].call(this.series[am],ao,this.data,this.options.seriesDefaults,this.options.series[am],this)
}this.populatePlotData(this.series[am],am);this.series[am]._plotDimensions=this._plotDimensions;this.series[am].init(am,this.grid.borderWidth,this);
for(var ak=0;ak<H.jqplot.postSeriesInitHooks.length;ak++){H.jqplot.postSeriesInitHooks[ak].call(this.series[am],ao,this.data,this.options.seriesDefaults,this.options.series[am],this)
}for(var ak=0;ak<this.postSeriesInitHooks.hooks.length;ak++){this.postSeriesInitHooks.hooks[ak].call(this.series[am],ao,this.data,this.options.seriesDefaults,this.options.series[am],this)
}this._sumy+=this.series[am]._sumy;this._sumx+=this.series[am]._sumx}var ag,ai;for(var am=0,aj=Q.length;
am<aj;am++){ag=Q[am];ai=this.axes[ag];ai._plotDimensions=this._plotDimensions;ai.init();if(this.axes[ag].borderColor==null){if(ag.charAt(0)!=="x"&&ai.useSeriesColor===true&&ai.show){ai.borderColor=ai._series[0].color
}else{ai.borderColor=this.grid.borderColor}}}if(this.sortData){ab(this.series)}this.grid.init();this.grid._axes=this.axes;
this.legend._series=this.series;for(var am=0;am<H.jqplot.postInitHooks.length;am++){H.jqplot.postInitHooks[am].call(this,ao,this.data,aq)
}for(var am=0;am<this.postInitHooks.hooks.length;am++){this.postInitHooks.hooks[am].call(this,ao,this.data,aq)
}};this.resetAxesScale=function(ak,ag){var ai=ag||{};var aj=ak||this.axes;if(aj===true){aj=this.axes}if(H.isArray(aj)){for(var ah=0;
ah<aj.length;ah++){this.axes[aj[ah]].resetScale(ai[aj[ah]])}}else{if(typeof(aj)==="object"){for(var af in aj){this.axes[af].resetScale(ai[af])
}}}};this.reInitialize=function(an,af){var ar=H.extend(true,{},this.options,af);var ap=this.targetId.substr(1);
var al=(an==null)?this.data:an;for(var ao=0;ao<H.jqplot.preInitHooks.length;ao++){H.jqplot.preInitHooks[ao].call(this,ap,al,ar)
}for(var ao=0;ao<this.preInitHooks.hooks.length;ao++){this.preInitHooks.hooks[ao].call(this,ap,al,ar)
}this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set"
}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;
this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;
this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;
var ag,aq,am,ai;for(var ao=0,ak=Q.length;ao<ak;ao++){ag=Q[ao];ai=this.axes[ag];aq=ai._ticks;for(var am=0,aj=aq.length;
am<aj;am++){var ah=aq[am]._elem;if(ah){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(ah.get(0))
}ah.emptyForce();ah=null;aq._elem=null}}aq=null;delete ai.ticks;delete ai._ticks;this.axes[ag]=new s(ag);
this.axes[ag]._plotWidth=this._width;this.axes[ag]._plotHeight=this._height}if(an){if(ar.dataRenderer&&H.isFunction(ar.dataRenderer)){if(ar.dataRendererOptions){this.dataRendererOptions=ar.dataRendererOptions
}this.dataRenderer=ar.dataRenderer;an=this.dataRenderer(an,this,this.dataRendererOptions)}this.data=H.extend(true,[],an)
}if(af){this.parseOptions(ar)}this.title._plotWidth=this._width;if(this.textColor){this.target.css("color",this.textColor)
}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)
}this.title.init();this.legend.init();this._sumy=0;this._sumx=0;this.seriesStack=[];this.previousSeriesStack=[];
for(var ao=0,ak=this.series.length;ao<ak;ao++){this.seriesStack.push(ao);this.previousSeriesStack.push(ao);
this.series[ao].shadowCanvas._plotDimensions=this._plotDimensions;this.series[ao].canvas._plotDimensions=this._plotDimensions;
for(var am=0;am<H.jqplot.preSeriesInitHooks.length;am++){H.jqplot.preSeriesInitHooks[am].call(this.series[ao],ap,this.data,this.options.seriesDefaults,this.options.series[ao],this)
}for(var am=0;am<this.preSeriesInitHooks.hooks.length;am++){this.preSeriesInitHooks.hooks[am].call(this.series[ao],ap,this.data,this.options.seriesDefaults,this.options.series[ao],this)
}this.populatePlotData(this.series[ao],ao);this.series[ao]._plotDimensions=this._plotDimensions;this.series[ao].init(ao,this.grid.borderWidth,this);
for(var am=0;am<H.jqplot.postSeriesInitHooks.length;am++){H.jqplot.postSeriesInitHooks[am].call(this.series[ao],ap,this.data,this.options.seriesDefaults,this.options.series[ao],this)
}for(var am=0;am<this.postSeriesInitHooks.hooks.length;am++){this.postSeriesInitHooks.hooks[am].call(this.series[ao],ap,this.data,this.options.seriesDefaults,this.options.series[ao],this)
}this._sumy+=this.series[ao]._sumy;this._sumx+=this.series[ao]._sumx}for(var ao=0,ak=Q.length;ao<ak;ao++){ag=Q[ao];
ai=this.axes[ag];ai._plotDimensions=this._plotDimensions;ai.init();if(ai.borderColor==null){if(ag.charAt(0)!=="x"&&ai.useSeriesColor===true&&ai.show){ai.borderColor=ai._series[0].color
}else{ai.borderColor=this.grid.borderColor}}}if(this.sortData){ab(this.series)}this.grid.init();this.grid._axes=this.axes;
this.legend._series=this.series;for(var ao=0,ak=H.jqplot.postInitHooks.length;ao<ak;ao++){H.jqplot.postInitHooks[ao].call(this,ap,this.data,ar)
}for(var ao=0,ak=this.postInitHooks.hooks.length;ao<ak;ao++){this.postInitHooks.hooks[ao].call(this,ap,this.data,ar)
}};this.quickInit=function(){this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set"
}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;
this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;
this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;
for(var ak in this.axes){this.axes[ak]._plotWidth=this._width;this.axes[ak]._plotHeight=this._height}this.title._plotWidth=this._width;
if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)
}if(this.fontSize){this.target.css("font-size",this.fontSize)}this._sumy=0;this._sumx=0;for(var ai=0;
ai<this.series.length;ai++){this.populatePlotData(this.series[ai],ai);if(this.series[ai]._type==="line"&&this.series[ai].renderer.bands.show){this.series[ai].renderer.initBands.call(this.series[ai],this.series[ai].renderer.options,this)
}this.series[ai]._plotDimensions=this._plotDimensions;this.series[ai].canvas._plotDimensions=this._plotDimensions;
this._sumy+=this.series[ai]._sumy;this._sumx+=this.series[ai]._sumx}var ag;for(var af=0;af<12;af++){ag=Q[af];
var ah=this.axes[ag]._ticks;for(var ai=0;ai<ah.length;ai++){var aj=ah[ai]._elem;if(aj){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){window.G_vmlCanvasManager.uninitElement(aj.get(0))
}aj.emptyForce();aj=null;ah._elem=null}}ah=null;this.axes[ag]._plotDimensions=this._plotDimensions;this.axes[ag]._ticks=[]
}if(this.sortData){ab(this.series)}this.grid._axes=this.axes;this.legend._series=this.series};function ab(aj){var an,ao,ap,af,am;
for(var ak=0;ak<aj.length;ak++){var ag;var al=[aj[ak].data,aj[ak]._stackData,aj[ak]._plotData,aj[ak]._prevPlotData];
for(var ah=0;ah<4;ah++){ag=true;an=al[ah];if(aj[ak]._stackAxis=="x"){for(var ai=0;ai<an.length;ai++){if(typeof(an[ai][1])!="number"){ag=false;
break}}if(ag){an.sort(function(ar,aq){return ar[1]-aq[1]})}}else{for(var ai=0;ai<an.length;ai++){if(typeof(an[ai][0])!="number"){ag=false;
break}}if(ag){an.sort(function(ar,aq){return ar[0]-aq[0]})}}}}}this.populatePlotData=function(aj,ak){this._plotData=[];
this._stackData=[];aj._stackData=[];aj._plotData=[];var an={x:[],y:[]};if(this.stackSeries&&!aj.disableStack){aj._stack=true;
var al=aj._stackAxis=="x"?0:1;var am=al?0:1;var ao=H.extend(true,[],aj.data);var ap=H.extend(true,[],aj.data);
for(var ah=0;ah<ak;ah++){var af=this.series[ah].data;for(var ag=0;ag<af.length;ag++){ao[ag][0]+=af[ag][0];
ao[ag][1]+=af[ag][1];ap[ag][al]+=af[ag][al]}}for(var ai=0;ai<ap.length;ai++){an.x.push(ap[ai][0]);an.y.push(ap[ai][1])
}this._plotData.push(ap);this._stackData.push(ao);aj._stackData=ao;aj._plotData=ap;aj._plotValues=an}else{for(var ai=0;
ai<aj.data.length;ai++){an.x.push(aj.data[ai][0]);an.y.push(aj.data[ai][1])}this._stackData.push(aj.data);
this.series[ak]._stackData=aj.data;this._plotData.push(aj.data);aj._plotData=aj.data;aj._plotValues=an
}if(ak>0){aj._prevPlotData=this.series[ak-1]._plotData}aj._sumy=0;aj._sumx=0;for(ai=aj.data.length-1;
ai>-1;ai--){aj._sumy+=aj.data[ai][1];aj._sumx+=aj.data[ai][0]}};this.getNextSeriesColor=(function(ag){var af=0;
var ah=ag.seriesColors;return function(){if(af<ah.length){return ah[af++]}else{af=0;return ah[af++]}}
})(this);this.parseOptions=function(aq){for(var al=0;al<this.preParseOptionsHooks.hooks.length;al++){this.preParseOptionsHooks.hooks[al].call(this,aq)
}for(var al=0;al<H.jqplot.preParseOptionsHooks.length;al++){H.jqplot.preParseOptionsHooks[al].call(this,aq)
}this.options=H.extend(true,{},this.defaults,aq);var af=this.options;this.animate=af.animate;this.animateReplot=af.animateReplot;
this.stackSeries=af.stackSeries;if(H.isPlainObject(af.fillBetween)){var ap=["series1","series2","color","baseSeries","fill"],am;
for(var al=0,aj=ap.length;al<aj;al++){am=ap[al];if(af.fillBetween[am]!=null){this.fillBetween[am]=af.fillBetween[am]
}}}if(af.seriesColors){this.seriesColors=af.seriesColors}if(af.negativeSeriesColors){this.negativeSeriesColors=af.negativeSeriesColors
}if(af.captureRightClick){this.captureRightClick=af.captureRightClick}this.defaultAxisStart=(aq&&aq.defaultAxisStart!=null)?aq.defaultAxisStart:this.defaultAxisStart;
this.colorGenerator.setColors(this.seriesColors);this.negativeColorGenerator.setColors(this.negativeSeriesColors);
H.extend(true,this._gridPadding,af.gridPadding);this.sortData=(af.sortData!=null)?af.sortData:this.sortData;
for(var al=0;al<12;al++){var ag=Q[al];var ai=this.axes[ag];ai._options=H.extend(true,{},af.axesDefaults,af.axes[ag]);
H.extend(true,ai,af.axesDefaults,af.axes[ag]);ai._plotWidth=this._width;ai._plotHeight=this._height}var ao=function(av,at,aw){var ar=[];
var au;at=at||"vertical";if(!H.isArray(av[0])){for(au=0;au<av.length;au++){if(at=="vertical"){ar.push([aw+au,av[au]])
}else{ar.push([av[au],aw+au])}}}else{H.extend(true,ar,av)}return ar};var an=0;this.series=[];for(var al=0;
al<this.data.length;al++){var ap=new O();for(var ak=0;ak<H.jqplot.preParseSeriesOptionsHooks.length;ak++){H.jqplot.preParseSeriesOptionsHooks[ak].call(ap,this.options.seriesDefaults,this.options.series[al])
}for(var ak=0;ak<this.preParseSeriesOptionsHooks.hooks.length;ak++){this.preParseSeriesOptionsHooks.hooks[ak].call(ap,this.options.seriesDefaults,this.options.series[al])
}H.extend(true,ap,{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[al],{rendererOptions:{animation:{show:this.animate}}});
var ah="vertical";if(ap.renderer===H.jqplot.BarRenderer&&ap.rendererOptions&&ap.rendererOptions.barDirection=="horizontal"&&ap.transposeData===true){ah="horizontal"
}ap.data=ao(this.data[al],ah,this.defaultAxisStart);switch(ap.xaxis){case"xaxis":ap._xaxis=this.axes.xaxis;
break;case"x2axis":ap._xaxis=this.axes.x2axis;break;default:break}ap._yaxis=this.axes[ap.yaxis];ap._xaxis._series.push(ap);
ap._yaxis._series.push(ap);if(ap.show){ap._xaxis.show=true;ap._yaxis.show=true}else{if(ap._xaxis.scaleToHiddenSeries){ap._xaxis.show=true
}if(ap._yaxis.scaleToHiddenSeries){ap._yaxis.show=true}}if(!ap.label){ap.label="Series "+(al+1).toString()
}this.series.push(ap);for(var ak=0;ak<H.jqplot.postParseSeriesOptionsHooks.length;ak++){H.jqplot.postParseSeriesOptionsHooks[ak].call(this.series[al],this.options.seriesDefaults,this.options.series[al])
}for(var ak=0;ak<this.postParseSeriesOptionsHooks.hooks.length;ak++){this.postParseSeriesOptionsHooks.hooks[ak].call(this.series[al],this.options.seriesDefaults,this.options.series[al])
}}H.extend(true,this.grid,this.options.grid);for(var al=0,aj=Q.length;al<aj;al++){var ag=Q[al];var ai=this.axes[ag];
if(ai.borderWidth==null){ai.borderWidth=this.grid.borderWidth}}if(typeof this.options.title=="string"){this.title.text=this.options.title
}else{if(typeof this.options.title=="object"){H.extend(true,this.title,this.options.title)}}this.title._plotWidth=this._width;
this.legend.setOptions(this.options.legend);for(var al=0;al<H.jqplot.postParseOptionsHooks.length;al++){H.jqplot.postParseOptionsHooks[al].call(this,aq)
}for(var al=0;al<this.postParseOptionsHooks.hooks.length;al++){this.postParseOptionsHooks.hooks[al].call(this,aq)
}};this.destroy=function(){this.canvasManager.freeAllCanvases();if(this.eventCanvas&&this.eventCanvas._elem){this.eventCanvas._elem.unbind()
}this.target.empty();this.target[0].innerHTML=""};this.replot=function(ag){var ah=ag||{};var aj=ah.data||null;
var af=(ah.clear===false)?false:true;var ai=ah.resetAxes||false;delete ah.data;delete ah.clear;delete ah.resetAxes;
this.target.trigger("jqplotPreReplot");if(af){this.destroy()}if(aj||!H.isEmptyObject(ah)){this.reInitialize(aj,ah)
}else{this.quickInit()}if(ai){this.resetAxesScale(ai,ah.axes)}this.draw();this.target.trigger("jqplotPostReplot")
};this.redraw=function(af){af=(af!=null)?af:true;this.target.trigger("jqplotPreRedraw");if(af){this.canvasManager.freeAllCanvases();
this.eventCanvas._elem.unbind();this.target.empty()}for(var ah in this.axes){this.axes[ah]._ticks=[]}for(var ag=0;
ag<this.series.length;ag++){this.populatePlotData(this.series[ag],ag)}this._sumy=0;this._sumx=0;for(ag=0;
ag<this.series.length;ag++){this._sumy+=this.series[ag]._sumy;this._sumx+=this.series[ag]._sumx}this.draw();
this.target.trigger("jqplotPostRedraw")};this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");
var aB,az,ay,ai;for(aB=0,ay=H.jqplot.preDrawHooks.length;aB<ay;aB++){H.jqplot.preDrawHooks[aB].call(this)
}for(aB=0,ay=this.preDrawHooks.length;aB<ay;aB++){this.preDrawHooks.hooks[aB].apply(this,this.preDrawSeriesHooks.args[aB])
}this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas",null,this));
this.baseCanvas.setContext();this.target.append(this.title.draw());this.title.pack({top:0,left:0});var aF=this.legend.draw({},this);
var af={top:0,left:0,bottom:0,right:0};if(this.legend.placement=="outsideGrid"){this.target.append(aF);
switch(this.legend.location){case"n":af.top+=this.legend.getHeight();break;case"s":af.bottom+=this.legend.getHeight();
break;case"ne":case"e":case"se":af.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":af.left+=this.legend.getWidth();
break;default:af.right+=this.legend.getWidth();break}aF=aF.detach()}var al=this.axes;var aG;for(aB=0;
aB<12;aB++){aG=Q[aB];this.target.append(al[aG].draw(this.baseCanvas._ctx,this));al[aG].set()}if(al.yaxis.show){af.left+=al.yaxis.getWidth()
}var aA=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var ar=[0,0,0,0,0,0,0,0];
var av=0;var au;for(au=0;au<8;au++){if(al[aA[au]].show){av+=al[aA[au]].getWidth();ar[au]=av}}af.right+=av;
if(al.x2axis.show){af.top+=al.x2axis.getHeight()}if(this.title.show){af.top+=this.title.getHeight()}if(al.xaxis.show){af.bottom+=al.xaxis.getHeight()
}if(this.options.gridDimensions&&H.isPlainObject(this.options.gridDimensions)){var am=parseInt(this.options.gridDimensions.width,10)||0;
var aC=parseInt(this.options.gridDimensions.height,10)||0;var ah=(this._width-af.left-af.right-am)/2;
var aE=(this._height-af.top-af.bottom-aC)/2;if(aE>=0&&ah>=0){af.top+=aE;af.bottom+=aE;af.left+=ah;af.right+=ah
}}var ag=["top","bottom","left","right"];for(var au in ag){if(this._gridPadding[ag[au]]==null&&af[ag[au]]>0){this._gridPadding[ag[au]]=af[ag[au]]
}else{if(this._gridPadding[ag[au]]==null){this._gridPadding[ag[au]]=this._defaultGridPadding[ag[au]]}}}var at=this._gridPadding;
if(this.legend.placement==="outsideGrid"){at={top:this.title.getHeight(),left:0,right:0,bottom:0};if(this.legend.location==="s"){at.left=this._gridPadding.left;
at.right=this._gridPadding.right}}al.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-al.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});
al.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-al.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});
al.x2axis.pack({position:"absolute",top:this._gridPadding.top-al.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});
for(aB=8;aB>0;aB--){al[aA[aB-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-ar[aB-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top})
}var an=(this._width-this._gridPadding.left-this._gridPadding.right)/2+this._gridPadding.left-al.yMidAxis.getWidth()/2;
al.yMidAxis.pack({position:"absolute",top:0,left:an,zIndex:9,textAlign:"center"},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});
this.target.append(this.grid.createElement(this._gridPadding,this));this.grid.draw();var ak=this.series;
var aD=ak.length;for(aB=0,ay=aD;aB<ay;aB++){az=this.seriesStack[aB];this.target.append(ak[az].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas",null,this));
ak[az].shadowCanvas.setContext();ak[az].shadowCanvas._elem.data("seriesIndex",az)}for(aB=0,ay=aD;aB<ay;
aB++){az=this.seriesStack[aB];this.target.append(ak[az].canvas.createElement(this._gridPadding,"jqplot-series-canvas",null,this));
ak[az].canvas.setContext();ak[az].canvas._elem.data("seriesIndex",az)}this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas",null,this));
this.eventCanvas.setContext();this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)";this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height);
this.bindCustomEvents();if(this.legend.preDraw){this.eventCanvas._elem.before(aF);this.legend.pack(at);
if(this.legend._elem){this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}})
}else{this.drawSeries()}}else{this.drawSeries();if(aD){H(ak[aD-1].canvas._elem).after(aF)}this.legend.pack(at)
}for(var aB=0,ay=H.jqplot.eventListenerHooks.length;aB<ay;aB++){this.eventCanvas._elem.bind(H.jqplot.eventListenerHooks[aB][0],{plot:this},H.jqplot.eventListenerHooks[aB][1])
}for(var aB=0,ay=this.eventListenerHooks.hooks.length;aB<ay;aB++){this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[aB][0],{plot:this},this.eventListenerHooks.hooks[aB][1])
}var aq=this.fillBetween;if(aq.fill&&aq.series1!==aq.series2&&aq.series1<aD&&aq.series2<aD&&ak[aq.series1]._type==="line"&&ak[aq.series2]._type==="line"){this.doFillBetweenLines()
}for(var aB=0,ay=H.jqplot.postDrawHooks.length;aB<ay;aB++){H.jqplot.postDrawHooks[aB].call(this)}for(var aB=0,ay=this.postDrawHooks.hooks.length;
aB<ay;aB++){this.postDrawHooks.hooks[aB].apply(this,this.postDrawHooks.args[aB])}if(this.target.is(":visible")){this._drawCount+=1
}var ao,ap,aw,aj;for(aB=0,ay=aD;aB<ay;aB++){ao=ak[aB];ap=ao.renderer;aw=".jqplot-point-label.jqplot-series-"+aB;
if(ap.animation&&ap.animation._supported&&ap.animation.show&&(this._drawCount<2||this.animateReplot)){aj=this.target.find(aw);
aj.stop(true,true).hide();ao.canvas._elem.stop(true,true).hide();ao.shadowCanvas._elem.stop(true,true).hide();
ao.canvas._elem.jqplotEffect("blind",{mode:"show",direction:ap.animation.direction},ap.animation.speed);
ao.shadowCanvas._elem.jqplotEffect("blind",{mode:"show",direction:ap.animation.direction},ap.animation.speed);
aj.fadeIn(ap.animation.speed*0.8)}}aj=null;this.target.trigger("jqplotPostDraw",[this])}};N.prototype.doFillBetweenLines=function(){var ah=this.fillBetween;
var aq=ah.series1;var ao=ah.series2;var ap=(aq<ao)?aq:ao;var an=(ao>aq)?ao:aq;var al=this.series[ap];
var ak=this.series[an];if(ak.renderer.smooth){var aj=ak.renderer._smoothedData.slice(0).reverse()}else{var aj=ak.gridData.slice(0).reverse()
}if(al.renderer.smooth){var am=al.renderer._smoothedData.concat(aj)}else{var am=al.gridData.concat(aj)
}var ai=(ah.color!==null)?ah.color:this.series[aq].fillColor;var ar=(ah.baseSeries!==null)?ah.baseSeries:ap;
var ag=this.series[ar].renderer.shapeRenderer;var af={fillStyle:ai,fill:true,closePath:true};ag.draw(al.shadowCanvas._ctx,am,af)
};this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick);this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick);
this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown);this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove);
this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter);this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave);
if(this.captureRightClick){this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick);this.eventCanvas._elem.get(0).oncontextmenu=function(){return false
}}else{this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)}};function ac(ao){var am=ao.data.plot;
var ai=am.eventCanvas._elem.offset();var al={x:ao.pageX-ai.left,y:ao.pageY-ai.top};var aj={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null,yMidAxis:null};
var ak=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];
var af=am.axes;var ag,ah;for(ag=11;ag>0;ag--){ah=ak[ag-1];if(af[ah].show){aj[ah]=af[ah].series_p2u(al[ah.charAt(0)])
}}return{offsets:ai,gridPos:al,dataPos:aj}}function ae(af,ag){var ak=ag.series;var aQ,aO,aN,aI,aJ,aD,aC,ap,an,at,au,aE;
var aM,aR,aK,al,aB,aG,aP;var ah,aH;for(aN=ag.seriesStack.length-1;aN>=0;aN--){aQ=ag.seriesStack[aN];aI=ak[aQ];
aP=aI._highlightThreshold;switch(aI.renderer.constructor){case H.jqplot.BarRenderer:aD=af.x;aC=af.y;for(aO=0;
aO<aI._barPoints.length;aO++){aB=aI._barPoints[aO];aK=aI.gridData[aO];if(aD>aB[0][0]&&aD<aB[2][0]&&aC>aB[2][1]&&aC<aB[0][1]){return{seriesIndex:aI.index,pointIndex:aO,gridData:aK,data:aI.data[aO],points:aI._barPoints[aO]}
}}break;case H.jqplot.PyramidRenderer:aD=af.x;aC=af.y;for(aO=0;aO<aI._barPoints.length;aO++){aB=aI._barPoints[aO];
aK=aI.gridData[aO];if(aD>aB[0][0]+aP[0][0]&&aD<aB[2][0]+aP[2][0]&&aC>aB[2][1]&&aC<aB[0][1]){return{seriesIndex:aI.index,pointIndex:aO,gridData:aK,data:aI.data[aO],points:aI._barPoints[aO]}
}}break;case H.jqplot.DonutRenderer:at=aI.startAngle/180*Math.PI;aD=af.x-aI._center[0];aC=af.y-aI._center[1];
aJ=Math.sqrt(Math.pow(aD,2)+Math.pow(aC,2));if(aD>0&&-aC>=0){ap=2*Math.PI-Math.atan(-aC/aD)}else{if(aD>0&&-aC<0){ap=-Math.atan(-aC/aD)
}else{if(aD<0){ap=Math.PI-Math.atan(-aC/aD)}else{if(aD==0&&-aC>0){ap=3*Math.PI/2}else{if(aD==0&&-aC<0){ap=Math.PI/2
}else{if(aD==0&&aC==0){ap=0}}}}}}if(at){ap-=at;if(ap<0){ap+=2*Math.PI}else{if(ap>2*Math.PI){ap-=2*Math.PI
}}}an=aI.sliceMargin/180*Math.PI;if(aJ<aI._radius&&aJ>aI._innerRadius){for(aO=0;aO<aI.gridData.length;
aO++){au=(aO>0)?aI.gridData[aO-1][1]+an:an;aE=aI.gridData[aO][1];if(ap>au&&ap<aE){return{seriesIndex:aI.index,pointIndex:aO,gridData:aI.gridData[aO],data:aI.data[aO]}
}}}break;case H.jqplot.PieRenderer:at=aI.startAngle/180*Math.PI;aD=af.x-aI._center[0];aC=af.y-aI._center[1];
aJ=Math.sqrt(Math.pow(aD,2)+Math.pow(aC,2));if(aD>0&&-aC>=0){ap=2*Math.PI-Math.atan(-aC/aD)}else{if(aD>0&&-aC<0){ap=-Math.atan(-aC/aD)
}else{if(aD<0){ap=Math.PI-Math.atan(-aC/aD)}else{if(aD==0&&-aC>0){ap=3*Math.PI/2}else{if(aD==0&&-aC<0){ap=Math.PI/2
}else{if(aD==0&&aC==0){ap=0}}}}}}if(at){ap-=at;if(ap<0){ap+=2*Math.PI}else{if(ap>2*Math.PI){ap-=2*Math.PI
}}}an=aI.sliceMargin/180*Math.PI;if(aJ<aI._radius){for(aO=0;aO<aI.gridData.length;aO++){au=(aO>0)?aI.gridData[aO-1][1]+an:an;
aE=aI.gridData[aO][1];if(ap>au&&ap<aE){return{seriesIndex:aI.index,pointIndex:aO,gridData:aI.gridData[aO],data:aI.data[aO]}
}}}break;case H.jqplot.BubbleRenderer:aD=af.x;aC=af.y;var az=null;if(aI.show){for(var aO=0;aO<aI.gridData.length;
aO++){aK=aI.gridData[aO];aR=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aR<=aK[2]&&(aR<=aM||aM==null)){aM=aR;
az={seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}if(az!=null){return az}}break;case H.jqplot.FunnelRenderer:aD=af.x;
aC=af.y;var aF=aI._vertices,aj=aF[0],ai=aF[aF.length-1],am,ay,ar;function aL(aU,aW,aV){var aT=(aW[1]-aV[1])/(aW[0]-aV[0]);
var aS=aW[1]-aT*aW[0];var aX=aU+aW[1];return[(aX-aS)/aT,aX]}am=aL(aC,aj[0],ai[3]);ay=aL(aC,aj[1],ai[2]);
for(aO=0;aO<aF.length;aO++){ar=aF[aO];if(aC>=ar[0][1]&&aC<=ar[3][1]&&aD>=am[0]&&aD<=ay[0]){return{seriesIndex:aI.index,pointIndex:aO,gridData:null,data:aI.data[aO]}
}}break;case H.jqplot.LineRenderer:aD=af.x;aC=af.y;aJ=aI.renderer;if(aI.show){if((aI.fill||(aI.renderer.bands.show&&aI.renderer.bands.fill))&&(!ag.plugins.highlighter||!ag.plugins.highlighter.show)){var aq=false;
if(aD>aI._boundingBox[0][0]&&aD<aI._boundingBox[1][0]&&aC>aI._boundingBox[1][1]&&aC<aI._boundingBox[0][1]){var ax=aI._areaPoints.length;
var aA;var aO=ax-1;for(var aA=0;aA<ax;aA++){var aw=[aI._areaPoints[aA][0],aI._areaPoints[aA][1]];var av=[aI._areaPoints[aO][0],aI._areaPoints[aO][1]];
if(aw[1]<aC&&av[1]>=aC||av[1]<aC&&aw[1]>=aC){if(aw[0]+(aC-aw[1])/(av[1]-aw[1])*(av[0]-aw[0])<aD){aq=!aq
}}aO=aA}}if(aq){return{seriesIndex:aQ,pointIndex:null,gridData:aI.gridData,data:aI.data,points:aI._areaPoints}
}break}else{aH=aI.markerRenderer.size/2+aI.neighborThreshold;ah=(aH>0)?aH:0;for(var aO=0;aO<aI.gridData.length;
aO++){aK=aI.gridData[aO];if(aJ.constructor==H.jqplot.OHLCRenderer){if(aJ.candleStick){var ao=aI._yaxis.series_u2p;
if(aD>=aK[0]-aJ._bodyWidth/2&&aD<=aK[0]+aJ._bodyWidth/2&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}else{if(!aJ.hlc){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}else{var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][1])&&aC<=ao(aI.data[aO][2])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}}}else{if(aK[0]!=null&&aK[1]!=null){aR=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aR<=ah&&(aR<=aM||aM==null)){aM=aR;
return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}}}break;default:aD=af.x;aC=af.y;
aJ=aI.renderer;if(aI.show){aH=aI.markerRenderer.size/2+aI.neighborThreshold;ah=(aH>0)?aH:0;for(var aO=0;
aO<aI.gridData.length;aO++){aK=aI.gridData[aO];if(aJ.constructor==H.jqplot.OHLCRenderer){if(aJ.candleStick){var ao=aI._yaxis.series_u2p;
if(aD>=aK[0]-aJ._bodyWidth/2&&aD<=aK[0]+aJ._bodyWidth/2&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}else{if(!aJ.hlc){var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][2])&&aC<=ao(aI.data[aO][3])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}else{var ao=aI._yaxis.series_u2p;if(aD>=aK[0]-aJ._tickLength&&aD<=aK[0]+aJ._tickLength&&aC>=ao(aI.data[aO][1])&&aC<=ao(aI.data[aO][2])){return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}
}}}}else{aR=Math.sqrt((aD-aK[0])*(aD-aK[0])+(aC-aK[1])*(aC-aK[1]));if(aR<=ah&&(aR<=aM||aM==null)){aM=aR;
return{seriesIndex:aQ,pointIndex:aO,gridData:aK,data:aI.data[aO]}}}}}break}}return null}this.onClick=function(ah){var ag=ac(ah);
var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=H.Event("jqplotClick");af.pageX=ah.pageX;af.pageY=ah.pageY;
H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onDblClick=function(ah){var ag=ac(ah);var aj=ah.data.plot;
var ai=ae(ag.gridPos,aj);var af=H.Event("jqplotDblClick");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])
};this.onMouseDown=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=H.Event("jqplotMouseDown");
af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onMouseUp=function(ah){var ag=ac(ah);
var af=H.Event("jqplotMouseUp");af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ah.data.plot])
};this.onRightClick=function(ah){var ag=ac(ah);var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);if(aj.captureRightClick){if(ah.which==3){var af=H.Event("jqplotRightClick");
af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])}else{var af=H.Event("jqplotMouseUp");
af.pageX=ah.pageX;af.pageY=ah.pageY;H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])}}};this.onMouseMove=function(ah){var ag=ac(ah);
var aj=ah.data.plot;var ai=ae(ag.gridPos,aj);var af=H.Event("jqplotMouseMove");af.pageX=ah.pageX;af.pageY=ah.pageY;
H(this).trigger(af,[ag.gridPos,ag.dataPos,ai,aj])};this.onMouseEnter=function(ah){var ag=ac(ah);var ai=ah.data.plot;
var af=H.Event("jqplotMouseEnter");af.pageX=ah.pageX;af.pageY=ah.pageY;af.relatedTarget=ah.relatedTarget;
H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ai])};this.onMouseLeave=function(ah){var ag=ac(ah);var ai=ah.data.plot;
var af=H.Event("jqplotMouseLeave");af.pageX=ah.pageX;af.pageY=ah.pageY;af.relatedTarget=ah.relatedTarget;
H(this).trigger(af,[ag.gridPos,ag.dataPos,null,ai])};this.drawSeries=function(ah,af){var aj,ai,ag;af=(typeof(ah)==="number"&&af==null)?ah:af;
ah=(typeof(ah)==="object")?ah:{};if(af!=r){ai=this.series[af];ag=ai.shadowCanvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);
ai.drawShadow(ag,ah,this);ag=ai.canvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.draw(ag,ah,this);
if(ai.renderer.constructor==H.jqplot.BezierCurveRenderer){if(af<this.series.length-1){this.drawSeries(af+1)
}}}else{for(aj=0;aj<this.series.length;aj++){ai=this.series[aj];ag=ai.shadowCanvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);
ai.drawShadow(ag,ah,this);ag=ai.canvas._ctx;ag.clearRect(0,0,ag.canvas.width,ag.canvas.height);ai.draw(ag,ah,this)
}}ah=af=aj=ai=ag=null};this.moveSeriesToFront=function(ag){ag=parseInt(ag,10);var aj=H.inArray(ag,this.seriesStack);
if(aj==-1){return}if(aj==this.seriesStack.length-1){this.previousSeriesStack=this.seriesStack.slice(0);
return}var af=this.seriesStack[this.seriesStack.length-1];var ai=this.series[ag].canvas._elem.detach();
var ah=this.series[ag].shadowCanvas._elem.detach();this.series[af].shadowCanvas._elem.after(ah);this.series[af].canvas._elem.after(ai);
this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(aj,1);this.seriesStack.push(ag)
};this.moveSeriesToBack=function(ag){ag=parseInt(ag,10);var aj=H.inArray(ag,this.seriesStack);if(aj==0||aj==-1){return
}var af=this.seriesStack[0];var ai=this.series[ag].canvas._elem.detach();var ah=this.series[ag].shadowCanvas._elem.detach();
this.series[af].shadowCanvas._elem.before(ah);this.series[af].canvas._elem.before(ai);this.previousSeriesStack=this.seriesStack.slice(0);
this.seriesStack.splice(aj,1);this.seriesStack.unshift(ag)};this.restorePreviousSeriesOrder=function(){var al,ak,aj,ai,ah,af,ag;
if(this.seriesStack==this.previousSeriesStack){return}for(al=1;al<this.previousSeriesStack.length;al++){af=this.previousSeriesStack[al];
ag=this.previousSeriesStack[al-1];aj=this.series[af].canvas._elem.detach();ai=this.series[af].shadowCanvas._elem.detach();
this.series[ag].shadowCanvas._elem.after(ai);this.series[ag].canvas._elem.after(aj)}ah=this.seriesStack.slice(0);
this.seriesStack=this.previousSeriesStack.slice(0);this.previousSeriesStack=ah};this.restoreOriginalSeriesOrder=function(){var aj,ai,af=[],ah,ag;
for(aj=0;aj<this.series.length;aj++){af.push(aj)}if(this.seriesStack==af){return}this.previousSeriesStack=this.seriesStack.slice(0);
this.seriesStack=af;for(aj=1;aj<this.seriesStack.length;aj++){ah=this.series[aj].canvas._elem.detach();
ag=this.series[aj].shadowCanvas._elem.detach();this.series[aj-1].shadowCanvas._elem.after(ag);this.series[aj-1].canvas._elem.after(ah)
}};this.activateTheme=function(af){this.themeEngine.activate(this,af)}}H.jqplot.computeHighlightColors=function(ac){var ae;
if(H.isArray(ac)){ae=[];for(var ag=0;ag<ac.length;ag++){var af=H.jqplot.getColorComponents(ac[ag]);var ab=[af[0],af[1],af[2]];
var ah=ab[0]+ab[1]+ab[2];for(var ad=0;ad<3;ad++){ab[ad]=(ah>660)?ab[ad]*0.85:0.73*ab[ad]+90;ab[ad]=parseInt(ab[ad],10);
(ab[ad]>255)?255:ab[ad]}ab[3]=0.3+0.35*af[3];ae.push("rgba("+ab[0]+","+ab[1]+","+ab[2]+","+ab[3]+")")
}}else{var af=H.jqplot.getColorComponents(ac);var ab=[af[0],af[1],af[2]];var ah=ab[0]+ab[1]+ab[2];for(var ad=0;
ad<3;ad++){ab[ad]=(ah>660)?ab[ad]*0.85:0.73*ab[ad]+90;ab[ad]=parseInt(ab[ad],10);(ab[ad]>255)?255:ab[ad]
}ab[3]=0.3+0.35*af[3];ae="rgba("+ab[0]+","+ab[1]+","+ab[2]+","+ab[3]+")"}return ae};H.jqplot.ColorGenerator=function(ac){ac=ac||H.jqplot.config.defaultColors;
var ab=0;this.next=function(){if(ab<ac.length){return ac[ab++]}else{ab=0;return ac[ab++]}};this.previous=function(){if(ab>0){return ac[ab--]
}else{ab=ac.length-1;return ac[ab]}};this.get=function(ae){var ad=ae-ac.length*Math.floor(ae/ac.length);
return ac[ad]};this.setColors=function(ad){ac=ad};this.reset=function(){ab=0};this.getIndex=function(){return ab
};this.setIndex=function(ad){ab=ad}};H.jqplot.hex2rgb=function(ad,ab){ad=ad.replace("#","");if(ad.length==3){ad=ad.charAt(0)+ad.charAt(0)+ad.charAt(1)+ad.charAt(1)+ad.charAt(2)+ad.charAt(2)
}var ac;ac="rgba("+parseInt(ad.slice(0,2),16)+", "+parseInt(ad.slice(2,4),16)+", "+parseInt(ad.slice(4,6),16);
if(ab){ac+=", "+ab}ac+=")";return ac};H.jqplot.rgb2hex=function(ag){var ad=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;
var ab=ag.match(ad);var af="#";for(var ae=1;ae<4;ae++){var ac;if(ab[ae].search(/%/)!=-1){ac=parseInt(255*ab[ae]/100,10).toString(16);
if(ac.length==1){ac="0"+ac}}else{ac=parseInt(ab[ae],10).toString(16);if(ac.length==1){ac="0"+ac}}af+=ac
}return af};H.jqplot.normalize2rgb=function(ac,ab){if(ac.search(/^ *rgba?\(/)!=-1){return ac}else{if(ac.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/)!=-1){return H.jqplot.hex2rgb(ac,ab)
}else{throw"invalid color spec"}}};H.jqplot.getColorComponents=function(ag){ag=H.jqplot.colorKeywordMap[ag]||ag;
var ae=H.jqplot.normalize2rgb(ag);var ad=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;
var ab=ae.match(ad);var ac=[];for(var af=1;af<4;af++){if(ab[af].search(/%/)!=-1){ac[af-1]=parseInt(255*ab[af]/100,10)
}else{ac[af-1]=parseInt(ab[af],10)}}ac[3]=parseFloat(ab[4])?parseFloat(ab[4]):1;return ac};H.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"};
H.jqplot.AxisLabelRenderer=function(ab){H.jqplot.ElemContainer.call(this);this.axis;this.show=true;this.label="";
this.fontFamily=null;this.fontSize=null;this.textColor=null;this._elem;this.escapeHTML=false;H.extend(true,this,ab)
};H.jqplot.AxisLabelRenderer.prototype=new H.jqplot.ElemContainer();H.jqplot.AxisLabelRenderer.prototype.constructor=H.jqplot.AxisLabelRenderer;
H.jqplot.AxisLabelRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.AxisLabelRenderer.prototype.draw=function(ab,ac){if(this._elem){this._elem.emptyForce();
this._elem=null}this._elem=H('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');
if(Number(this.label)){this._elem.css("white-space","nowrap")}if(!this.escapeHTML){this._elem.html(this.label)
}else{this._elem.text(this.label)}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)
}if(this.textColor){this._elem.css("color",this.textColor)}return this._elem};H.jqplot.AxisLabelRenderer.prototype.pack=function(){};
H.jqplot.AxisTickRenderer=function(ab){H.jqplot.ElemContainer.call(this);this.mark="outside";this.axis;
this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.size=4;this.markSize=6;this.show=true;
this.showLabel=true;this.label=null;this.value=null;this._styles={};this.formatter=H.jqplot.DefaultTickFormatter;
this.prefix="";this.suffix="";this.formatString="";this.fontFamily;this.fontSize;this.textColor;this.escapeHTML=false;
this._elem;this._breakTick=false;H.extend(true,this,ab)};H.jqplot.AxisTickRenderer.prototype.init=function(ab){H.extend(true,this,ab)
};H.jqplot.AxisTickRenderer.prototype=new H.jqplot.ElemContainer();H.jqplot.AxisTickRenderer.prototype.constructor=H.jqplot.AxisTickRenderer;
H.jqplot.AxisTickRenderer.prototype.setTick=function(ab,ad,ac){this.value=ab;this.axis=ad;if(ac){this.isMinorTick=true
}return this};H.jqplot.AxisTickRenderer.prototype.draw=function(){if(this.label===null){this.label=this.prefix+this.formatter(this.formatString,this.value)+this.suffix
}var ac={position:"absolute"};if(Number(this.label)){ac.whitSpace="nowrap"}if(this._elem){this._elem.emptyForce();
this._elem=null}this._elem=H(document.createElement("div"));this._elem.addClass("jqplot-"+this.axis+"-tick");
if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}this._elem.css(ac);
for(var ab in this._styles){this._elem.css(ab,this._styles[ab])}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)
}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)
}if(this._breakTick){this._elem.addClass("jqplot-breakTick")}return this._elem};H.jqplot.DefaultTickFormatter=function(ab,ac){if(typeof ac=="number"){if(!ab){ab=H.jqplot.config.defaultTickFormatString
}return H.jqplot.sprintf(ab,ac)}else{return String(ac)}};H.jqplot.PercentTickFormatter=function(ab,ac){if(typeof ac=="number"){ac=100*ac;
if(!ab){ab=H.jqplot.config.defaultTickFormatString}return H.jqplot.sprintf(ab,ac)}else{return String(ac)
}};H.jqplot.AxisTickRenderer.prototype.pack=function(){};H.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new H.jqplot.ShadowRenderer()
};H.jqplot.CanvasGridRenderer.prototype.init=function(ac){this._ctx;H.extend(true,this,ac);var ab={lineJoin:"miter",lineCap:"round",fill:false,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:false,strokeStyle:this.shadowColor};
this.renderer.shadowRenderer.init(ab)};H.jqplot.CanvasGridRenderer.prototype.createElement=function(ae){var ad;
if(this._elem){if(H.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==r){ad=this._elem.get(0);
window.G_vmlCanvasManager.uninitElement(ad);ad=null}this._elem.emptyForce();this._elem=null}ad=ae.canvasManager.getCanvas();
var ab=this._plotDimensions.width;var ac=this._plotDimensions.height;ad.width=ab;ad.height=ac;this._elem=H(ad);
this._elem.addClass("jqplot-grid-canvas");this._elem.css({position:"absolute",left:0,top:0});ad=ae.canvasManager.initCanvas(ad);
this._top=this._offsets.top;this._bottom=ac-this._offsets.bottom;this._left=this._offsets.left;this._right=ab-this._offsets.right;
this._width=this._right-this._left;this._height=this._bottom-this._top;ad=null;return this._elem};H.jqplot.CanvasGridRenderer.prototype.draw=function(){this._ctx=this._elem.get(0).getContext("2d");
var am=this._ctx;var ap=this._axes;am.save();am.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height);
am.fillStyle=this.backgroundColor||this.background;am.fillRect(this._left,this._top,this._width,this._height);
am.save();am.lineJoin="miter";am.lineCap="butt";am.lineWidth=this.gridLineWidth;am.strokeStyle=this.gridLineColor;
var at,ar,aj,ak;var ag=["xaxis","yaxis","x2axis","y2axis"];for(var aq=4;aq>0;aq--){var aw=ag[aq-1];var ab=ap[aw];
var au=ab._ticks;var al=au.length;if(ab.show){if(ab.drawBaseline){var av={};if(ab.baselineWidth!==null){av.lineWidth=ab.baselineWidth
}if(ab.baselineColor!==null){av.strokeStyle=ab.baselineColor}switch(aw){case"xaxis":ai(this._left,this._bottom,this._right,this._bottom,av);
break;case"yaxis":ai(this._left,this._bottom,this._left,this._top,av);break;case"x2axis":ai(this._left,this._bottom,this._right,this._bottom,av);
break;case"y2axis":ai(this._right,this._bottom,this._right,this._top,av);break}}for(var an=al;an>0;an--){var ah=au[an-1];
if(ah.show){var ae=Math.round(ab.u2p(ah.value))+0.5;switch(aw){case"xaxis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(ae,this._top,ae,this._bottom)
}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;
ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._bottom;ar=this._bottom+aj;
break;case"inside":at=this._bottom-aj;ar=this._bottom;break;case"cross":at=this._bottom-aj;ar=this._bottom+aj;
break;default:at=this._bottom;ar=this._bottom+aj;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[ae,at],[ae,ar]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})
}ai(ae,at,ae,ar)}break;case"yaxis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(this._right,ae,this._left,ae)
}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;
ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._left-aj;ar=this._left;
break;case"inside":at=this._left;ar=this._left+aj;break;case"cross":at=this._left-aj;ar=this._left+aj;
break;default:at=this._left-aj;ar=this._left;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[at,ae],[ar,ae]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})
}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}break;case"x2axis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(ae,this._bottom,ae,this._top)
}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;
ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._top-aj;ar=this._top;
break;case"inside":at=this._top;ar=this._top+aj;break;case"cross":at=this._top-aj;ar=this._top+aj;break;
default:at=this._top-aj;ar=this._top;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[ae,at],[ae,ar]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})
}ai(ae,at,ae,ar)}break;case"y2axis":if(ah.showGridline&&this.drawGridlines&&((!ah.isMinorTick&&ab.drawMajorGridlines)||(ah.isMinorTick&&ab.drawMinorGridlines))){ai(this._left,ae,this._right,ae)
}if(ah.showMark&&ah.mark&&((!ah.isMinorTick&&ab.drawMajorTickMarks)||(ah.isMinorTick&&ab.drawMinorTickMarks))){aj=ah.markSize;
ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;switch(ak){case"outside":at=this._right;ar=this._right+aj;
break;case"inside":at=this._right-aj;ar=this._right;break;case"cross":at=this._right-aj;ar=this._right+aj;
break;default:at=this._right;ar=this._right+aj;break}if(this.shadow){this.renderer.shadowRenderer.draw(am,[[at,ae],[ar,ae]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})
}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}break;default:break}}}ah=null}ab=null;au=null}ag=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis","yMidAxis"];
for(var aq=7;aq>0;aq--){var ab=ap[ag[aq-1]];var au=ab._ticks;if(ab.show){var ac=au[ab.numberTicks-1];
var af=au[0];var ad=ab.getLeft();var ao=[[ad,ac.getTop()+ac.getHeight()/2],[ad,af.getTop()+af.getHeight()/2+1]];
if(this.shadow){this.renderer.shadowRenderer.draw(am,ao,{lineCap:"butt",fill:false,closePath:false})}ai(ao[0][0],ao[0][1],ao[1][0],ao[1][1],{lineCap:"butt",strokeStyle:ab.borderColor,lineWidth:ab.borderWidth});
for(var an=au.length;an>0;an--){var ah=au[an-1];aj=ah.markSize;ak=ah.mark;var ae=Math.round(ab.u2p(ah.value))+0.5;
if(ah.showMark&&ah.mark){switch(ak){case"outside":at=ad;ar=ad+aj;break;case"inside":at=ad-aj;ar=ad;break;
case"cross":at=ad-aj;ar=ad+aj;break;default:at=ad;ar=ad+aj;break}ao=[[at,ae],[ar,ae]];if(this.shadow){this.renderer.shadowRenderer.draw(am,ao,{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})
}ai(at,ae,ar,ae,{strokeStyle:ab.borderColor})}ah=null}af=null}ab=null;au=null}am.restore();function ai(aB,aA,ay,ax,az){am.save();
az=az||{};if(az.lineWidth==null||az.lineWidth!=0){H.extend(true,am,az);am.beginPath();am.moveTo(aB,aA);
am.lineTo(ay,ax);am.stroke();am.restore()}}if(this.shadow){var ao=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];
this.renderer.shadowRenderer.draw(am,ao)}if(this.borderWidth!=0&&this.drawBorder){ai(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:ap.x2axis.borderColor,lineWidth:ap.x2axis.borderWidth});
ai(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:ap.y2axis.borderColor,lineWidth:ap.y2axis.borderWidth});
ai(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:ap.xaxis.borderColor,lineWidth:ap.xaxis.borderWidth});
ai(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:ap.yaxis.borderColor,lineWidth:ap.yaxis.borderWidth})
}am.restore();am=null;ap=null};H.jqplot.DivTitleRenderer=function(){};H.jqplot.DivTitleRenderer.prototype.init=function(ab){H.extend(true,this,ab)
};H.jqplot.DivTitleRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null
}var ae=this.renderer;var ad=document.createElement("div");this._elem=H(ad);this._elem.addClass("jqplot-title");
if(!this.text){this.show=false;this._elem.height(0);this._elem.width(0)}else{if(this.text){var ab;if(this.color){ab=this.color
}else{if(this.textColor){ab=this.textColor}}var ac={position:"absolute",top:"0px",left:"0px"};if(this._plotWidth){ac.width=this._plotWidth+"px"
}if(this.fontSize){ac.fontSize=this.fontSize}if(typeof this.textAlign==="string"){ac.textAlign=this.textAlign
}else{ac.textAlign="center"}if(ab){ac.color=ab}if(this.paddingBottom){ac.paddingBottom=this.paddingBottom
}if(this.fontFamily){ac.fontFamily=this.fontFamily}this._elem.css(ac);if(this.escapeHtml){this._elem.text(this.text)
}else{this._elem.html(this.text)}}}ad=null;return this._elem};H.jqplot.DivTitleRenderer.prototype.pack=function(){};
var o=0.1;H.jqplot.LinePattern=function(ap,ak){var aj={dotted:[o,H.jqplot.config.dotGapLength],dashed:[H.jqplot.config.dashLength,H.jqplot.config.gapLength],solid:null};
if(typeof ak==="string"){if(ak[0]==="."||ak[0]==="-"){var aq=ak;ak=[];for(var ai=0,af=aq.length;ai<af;
ai++){if(aq[ai]==="."){ak.push(o)}else{if(aq[ai]==="-"){ak.push(H.jqplot.config.dashLength)}else{continue
}}ak.push(H.jqplot.config.gapLength)}}else{ak=aj[ak]}}if(!(ak&&ak.length)){return ap}var ae=0;var al=ak[0];
var an=0;var am=0;var ah=0;var ab=0;var ao=function(ar,at){ap.moveTo(ar,at);an=ar;am=at;ah=ar;ab=at};
var ad=function(ar,ay){var aw=ap.lineWidth;var au=ar-an;var at=ay-am;var av=Math.sqrt(au*au+at*at);if((av>0)&&(aw>0)){au/=av;
at/=av;while(true){var ax=aw*al;if(ax<av){an+=ax*au;am+=ax*at;if((ae&1)==0){ap.lineTo(an,am)}else{ap.moveTo(an,am)
}av-=ax;ae++;if(ae>=ak.length){ae=0}al=ak[ae]}else{an=ar;am=ay;if((ae&1)==0){ap.lineTo(an,am)}else{ap.moveTo(an,am)
}al-=av/aw;break}}}};var ac=function(){ap.beginPath()};var ag=function(){ad(ah,ab)};return{moveTo:ao,lineTo:ad,beginPath:ac,closePath:ag}
};H.jqplot.LineRenderer=function(){this.shapeRenderer=new H.jqplot.ShapeRenderer();this.shadowRenderer=new H.jqplot.ShadowRenderer()
};H.jqplot.LineRenderer.prototype.init=function(ac,ah){ac=ac||{};this._type="line";this.renderer.animation={show:false,direction:"left",speed:2500,_supported:true};
this.renderer.smooth=false;this.renderer.tension=null;this.renderer.constrainSmoothing=true;this.renderer._smoothedData=[];
this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];
this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];this.renderer.bandData=[];
this.renderer.bands={show:false,hiData:[],lowData:[],color:this.color,showLines:false,fill:true,fillColor:null,_min:null,_max:null,interval:"3%"};
var af={highlightMouseOver:ac.highlightMouseOver,highlightMouseDown:ac.highlightMouseDown,highlightColor:ac.highlightColor};
delete (ac.highlightMouseOver);delete (ac.highlightMouseDown);delete (ac.highlightColor);H.extend(true,this.renderer,ac);
this.renderer.options=ac;if(this.renderer.bandData.length>1&&(!ac.bands||ac.bands.show==null)){this.renderer.bands.show=true
}else{if(ac.bands&&ac.bands.show==null&&ac.bands.interval!=null){this.renderer.bands.show=true}}if(this.fill){this.renderer.bands.show=false
}if(this.renderer.bands.show){this.renderer.initBands.call(this,this.renderer.options,ah)}if(this._stack){this.renderer.smooth=false
}var ag={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};
this.renderer.shapeRenderer.init(ag);var ad=ac.shadowOffset;if(ad==null){if(this.lineWidth>2.5){ad=1.25*(1+(Math.atan((this.lineWidth/2.5))/0.785398163-1)*0.6)
}else{ad=1.25*Math.atan((this.lineWidth/2.5))/0.785398163}}var ab={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,angle:this.shadowAngle,offset:ad,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};
this.renderer.shadowRenderer.init(ab);this._areaPoints=[];this._boundingBox=[[],[]];if(!this.isTrendline&&this.fill||this.renderer.bands.show){this.highlightMouseOver=true;
this.highlightMouseDown=false;this.highlightColor=null;if(af.highlightMouseDown&&af.highlightMouseOver==null){af.highlightMouseOver=false
}H.extend(true,this,{highlightMouseOver:af.highlightMouseOver,highlightMouseDown:af.highlightMouseDown,highlightColor:af.highlightColor});
if(!this.highlightColor){var ae=(this.renderer.bands.show)?this.renderer.bands.fillColor:this.fillColor;
this.highlightColor=H.jqplot.computeHighlightColors(ae)}if(this.highlighter){this.highlighter.show=false
}}if(!this.isTrendline&&ah){ah.plugins.lineRenderer={};ah.postInitHooks.addOnce(v);ah.postDrawHooks.addOnce(Z);
ah.eventListenerHooks.addOnce("jqplotMouseMove",g);ah.eventListenerHooks.addOnce("jqplotMouseDown",d);
ah.eventListenerHooks.addOnce("jqplotMouseUp",Y);ah.eventListenerHooks.addOnce("jqplotClick",f);ah.eventListenerHooks.addOnce("jqplotRightClick",p)
}};H.jqplot.LineRenderer.prototype.initBands=function(ae,ao){var af=ae.bandData||[];var ah=this.renderer.bands;
ah.hiData=[];ah.lowData=[];var av=this.data;ah._max=null;ah._min=null;if(af.length==2){if(H.isArray(af[0][0])){var ai;
var ab=0,al=0;for(var ap=0,am=af[0].length;ap<am;ap++){ai=af[0][ap];if((ai[1]!=null&&ai[1]>ah._max)||ah._max==null){ah._max=ai[1]
}if((ai[1]!=null&&ai[1]<ah._min)||ah._min==null){ah._min=ai[1]}}for(var ap=0,am=af[1].length;ap<am;ap++){ai=af[1][ap];
if((ai[1]!=null&&ai[1]>ah._max)||ah._max==null){ah._max=ai[1];al=1}if((ai[1]!=null&&ai[1]<ah._min)||ah._min==null){ah._min=ai[1];
ab=1}}if(al===ab){ah.show=false}ah.hiData=af[al];ah.lowData=af[ab]}else{if(af[0].length===av.length&&af[1].length===av.length){var ad=(af[0][0]>af[1][0])?0:1;
var aw=(ad)?0:1;for(var ap=0,am=av.length;ap<am;ap++){ah.hiData.push([av[ap][0],af[ad][ap]]);ah.lowData.push([av[ap][0],af[aw][ap]])
}}else{ah.show=false}}}else{if(af.length>2&&!H.isArray(af[0][0])){var ad=(af[0][0]>af[0][1])?0:1;var aw=(ad)?0:1;
for(var ap=0,am=af.length;ap<am;ap++){ah.hiData.push([av[ap][0],af[ap][ad]]);ah.lowData.push([av[ap][0],af[ap][aw]])
}}else{var ak=ah.interval;var au=null;var at=null;var ac=null;var an=null;if(H.isArray(ak)){au=ak[0];
at=ak[1]}else{au=ak}if(isNaN(au)){if(au.charAt(au.length-1)==="%"){ac="multiply";au=parseFloat(au)/100+1
}}else{au=parseFloat(au);ac="add"}if(at!==null&&isNaN(at)){if(at.charAt(at.length-1)==="%"){an="multiply";
at=parseFloat(at)/100+1}}else{if(at!==null){at=parseFloat(at);an="add"}}if(au!==null){if(at===null){at=-au;
an=ac;if(an==="multiply"){at+=2}}if(au<at){var aq=au;au=at;at=aq;aq=ac;ac=an;an=aq}for(var ap=0,am=av.length;
ap<am;ap++){switch(ac){case"add":ah.hiData.push([av[ap][0],av[ap][1]+au]);break;case"multiply":ah.hiData.push([av[ap][0],av[ap][1]*au]);
break}switch(an){case"add":ah.lowData.push([av[ap][0],av[ap][1]+at]);break;case"multiply":ah.lowData.push([av[ap][0],av[ap][1]*at]);
break}}}else{ah.show=false}}}var ag=ah.hiData;var aj=ah.lowData;for(var ap=0,am=ag.length;ap<am;ap++){if((ag[ap][1]!=null&&ag[ap][1]>ah._max)||ah._max==null){ah._max=ag[ap][1]
}}for(var ap=0,am=aj.length;ap<am;ap++){if((aj[ap][1]!=null&&aj[ap][1]<ah._min)||ah._min==null){ah._min=aj[ap][1]
}}if(ah.fillColor===null){var ar=H.jqplot.getColorComponents(ah.color);ar[3]=ar[3]*0.5;ah.fillColor="rgba("+ar[0]+", "+ar[1]+", "+ar[2]+", "+ar[3]+")"
}};function G(ac,ab){return(3.4182054+ab)*Math.pow(ac,-0.3534992)}function k(ad,ac){var ab=Math.sqrt(Math.pow((ac[0]-ad[0]),2)+Math.pow((ac[1]-ad[1]),2));
return 5.7648*Math.log(ab)+7.4456}function w(ab){var ac=(Math.exp(2*ab)-1)/(Math.exp(2*ab)+1);return ac
}function F(aD){var am=this.renderer.smooth;var ax=this.canvas.getWidth();var ah=this._xaxis.series_p2u;
var aA=this._yaxis.series_p2u;var az=null;var ag=null;var at=aD.length/ax;var ad=[];var ar=[];if(!isNaN(parseFloat(am))){az=parseFloat(am)
}else{az=G(at,0.5)}var ap=[];var ae=[];for(var ay=0,au=aD.length;ay<au;ay++){ap.push(aD[ay][1]);ae.push(aD[ay][0])
}function ao(aE,aF){if(aE-aF==0){return Math.pow(10,10)}else{return aE-aF}}var aq,al,ak,aj;var ab=aD.length-1;
for(var af=1,av=aD.length;af<av;af++){var ac=[];var an=[];for(var aw=0;aw<2;aw++){var ay=af-1+aw;if(ay==0||ay==ab){ac[aw]=Math.pow(10,10)
}else{if(ap[ay+1]-ap[ay]==0||ap[ay]-ap[ay-1]==0){ac[aw]=0}else{if(((ae[ay+1]-ae[ay])/(ap[ay+1]-ap[ay])+(ae[ay]-ae[ay-1])/(ap[ay]-ap[ay-1]))==0){ac[aw]=0
}else{if((ap[ay+1]-ap[ay])*(ap[ay]-ap[ay-1])<0){ac[aw]=0}else{ac[aw]=2/(ao(ae[ay+1],ae[ay])/(ap[ay+1]-ap[ay])+ao(ae[ay],ae[ay-1])/(ap[ay]-ap[ay-1]))
}}}}}if(af==1){ac[0]=3/2*(ap[1]-ap[0])/ao(ae[1],ae[0])-ac[1]/2}else{if(af==ab){ac[1]=3/2*(ap[ab]-ap[ab-1])/ao(ae[ab],ae[ab-1])-ac[0]/2
}}an[0]=-2*(ac[1]+2*ac[0])/ao(ae[af],ae[af-1])+6*(ap[af]-ap[af-1])/Math.pow(ao(ae[af],ae[af-1]),2);an[1]=2*(2*ac[1]+ac[0])/ao(ae[af],ae[af-1])-6*(ap[af]-ap[af-1])/Math.pow(ao(ae[af],ae[af-1]),2);
aj=1/6*(an[1]-an[0])/ao(ae[af],ae[af-1]);ak=1/2*(ae[af]*an[0]-ae[af-1]*an[1])/ao(ae[af],ae[af-1]);al=(ap[af]-ap[af-1]-ak*(Math.pow(ae[af],2)-Math.pow(ae[af-1],2))-aj*(Math.pow(ae[af],3)-Math.pow(ae[af-1],3)))/ao(ae[af],ae[af-1]);
aq=ap[af-1]-al*ae[af-1]-ak*Math.pow(ae[af-1],2)-aj*Math.pow(ae[af-1],3);var aC=(ae[af]-ae[af-1])/az;var aB,ai;
for(var aw=0,au=az;aw<au;aw++){aB=[];ai=ae[af-1]+aw*aC;aB.push(ai);aB.push(aq+al*ai+ak*Math.pow(ai,2)+aj*Math.pow(ai,3));
ad.push(aB);ar.push([ah(aB[0]),aA(aB[1])])}}ad.push(aD[ay]);ar.push([ah(aD[ay][0]),aA(aD[ay][1])]);return[ad,ar]
}function B(aj){var ai=this.renderer.smooth;var aO=this.renderer.tension;var ab=this.canvas.getWidth();
var aB=this._xaxis.series_p2u;var ak=this._yaxis.series_p2u;var aC=null;var aD=null;var aN=null;var aI=null;
var aG=null;var am=null;var aL=null;var ag=null;var aE,aF,ax,aw,au,ar;var ae,ac,ao,an;var av,at,aH;var ap=[];
var ad=[];var af=aj.length/ab;var aM,aq,az,aA,ay;var al=[];var ah=[];if(!isNaN(parseFloat(ai))){aC=parseFloat(ai)
}else{aC=G(af,0.5)}if(!isNaN(parseFloat(aO))){aO=parseFloat(aO)}for(var aK=0,aJ=aj.length-1;aK<aJ;aK++){if(aO===null){am=Math.abs((aj[aK+1][1]-aj[aK][1])/(aj[aK+1][0]-aj[aK][0]));
aM=0.3;aq=0.6;az=(aq-aM)/2;aA=2.5;ay=-1.4;ag=am/aA+ay;aI=az*w(ag)-az*w(ay)+aM;if(aK>0){aL=Math.abs((aj[aK][1]-aj[aK-1][1])/(aj[aK][0]-aj[aK-1][0]))
}ag=aL/aA+ay;aG=az*w(ag)-az*w(ay)+aM;aN=(aI+aG)/2}else{aN=aO}for(aE=0;aE<aC;aE++){aF=aE/aC;ax=(1+2*aF)*Math.pow((1-aF),2);
aw=aF*Math.pow((1-aF),2);au=Math.pow(aF,2)*(3-2*aF);ar=Math.pow(aF,2)*(aF-1);if(aj[aK-1]){ae=aN*(aj[aK+1][0]-aj[aK-1][0]);
ac=aN*(aj[aK+1][1]-aj[aK-1][1])}else{ae=aN*(aj[aK+1][0]-aj[aK][0]);ac=aN*(aj[aK+1][1]-aj[aK][1])}if(aj[aK+2]){ao=aN*(aj[aK+2][0]-aj[aK][0]);
an=aN*(aj[aK+2][1]-aj[aK][1])}else{ao=aN*(aj[aK+1][0]-aj[aK][0]);an=aN*(aj[aK+1][1]-aj[aK][1])}av=ax*aj[aK][0]+au*aj[aK+1][0]+aw*ae+ar*ao;
at=ax*aj[aK][1]+au*aj[aK+1][1]+aw*ac+ar*an;aH=[av,at];al.push(aH);ah.push([aB(av),ak(at)])}}al.push(aj[aJ]);
ah.push([aB(aj[aJ][0]),ak(aj[aJ][1])]);return[al,ah]}H.jqplot.LineRenderer.prototype.setGridData=function(aj){var af=this._xaxis.series_u2p;
var ab=this._yaxis.series_u2p;var ag=this._plotData;var ak=this._prevPlotData;this.gridData=[];this._prevGridData=[];
this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];
this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];var ae=this.renderer.bands;
var ac=false;for(var ah=0,ad=ag.length;ah<ad;ah++){if(ag[ah][0]!=null&&ag[ah][1]!=null){this.gridData.push([af.call(this._xaxis,ag[ah][0]),ab.call(this._yaxis,ag[ah][1])])
}else{if(ag[ah][0]==null){ac=true;this.gridData.push([null,ab.call(this._yaxis,ag[ah][1])])}else{if(ag[ah][1]==null){ac=true;
this.gridData.push([af.call(this._xaxis,ag[ah][0]),null])}}}if(ak[ah]!=null&&ak[ah][0]!=null&&ak[ah][1]!=null){this._prevGridData.push([af.call(this._xaxis,ak[ah][0]),ab.call(this._yaxis,ak[ah][1])])
}else{if(ak[ah]!=null&&ak[ah][0]==null){this._prevGridData.push([null,ab.call(this._yaxis,ak[ah][1])])
}else{if(ak[ah]!=null&&ak[ah][0]!=null&&ak[ah][1]==null){this._prevGridData.push([af.call(this._xaxis,ak[ah][0]),null])
}}}}if(ac){this.renderer.smooth=false;if(this._type==="line"){ae.show=false}}if(this._type==="line"&&ae.show){for(var ah=0,ad=ae.hiData.length;
ah<ad;ah++){this.renderer._hiBandGridData.push([af.call(this._xaxis,ae.hiData[ah][0]),ab.call(this._yaxis,ae.hiData[ah][1])])
}for(var ah=0,ad=ae.lowData.length;ah<ad;ah++){this.renderer._lowBandGridData.push([af.call(this._xaxis,ae.lowData[ah][0]),ab.call(this._yaxis,ae.lowData[ah][1])])
}}if(this._type==="line"&&this.renderer.smooth&&this.gridData.length>2){var ai;if(this.renderer.constrainSmoothing){ai=F.call(this,this.gridData);
this.renderer._smoothedData=ai[0];this.renderer._smoothedPlotData=ai[1];if(ae.show){ai=F.call(this,this.renderer._hiBandGridData);
this.renderer._hiBandSmoothedData=ai[0];ai=F.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ai[0]
}ai=null}else{ai=B.call(this,this.gridData);this.renderer._smoothedData=ai[0];this.renderer._smoothedPlotData=ai[1];
if(ae.show){ai=B.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ai[0];ai=B.call(this,this.renderer._lowBandGridData);
this.renderer._lowBandSmoothedData=ai[0]}ai=null}}};H.jqplot.LineRenderer.prototype.makeGridData=function(ai,ak){var ag=this._xaxis.series_u2p;
var ab=this._yaxis.series_u2p;var al=[];var ad=[];this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];
this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];
this.renderer._lowBandSmoothedData=[];var af=this.renderer.bands;var ac=false;for(var ah=0;ah<ai.length;
ah++){if(ai[ah][0]!=null&&ai[ah][1]!=null){al.push([ag.call(this._xaxis,ai[ah][0]),ab.call(this._yaxis,ai[ah][1])])
}else{if(ai[ah][0]==null){ac=true;al.push([null,ab.call(this._yaxis,ai[ah][1])])}else{if(ai[ah][1]==null){ac=true;
al.push([ag.call(this._xaxis,ai[ah][0]),null])}}}}if(ac){this.renderer.smooth=false;if(this._type==="line"){af.show=false
}}if(this._type==="line"&&af.show){for(var ah=0,ae=af.hiData.length;ah<ae;ah++){this.renderer._hiBandGridData.push([ag.call(this._xaxis,af.hiData[ah][0]),ab.call(this._yaxis,af.hiData[ah][1])])
}for(var ah=0,ae=af.lowData.length;ah<ae;ah++){this.renderer._lowBandGridData.push([ag.call(this._xaxis,af.lowData[ah][0]),ab.call(this._yaxis,af.lowData[ah][1])])
}}if(this._type==="line"&&this.renderer.smooth&&al.length>2){var aj;if(this.renderer.constrainSmoothing){aj=F.call(this,al);
this.renderer._smoothedData=aj[0];this.renderer._smoothedPlotData=aj[1];if(af.show){aj=F.call(this,this.renderer._hiBandGridData);
this.renderer._hiBandSmoothedData=aj[0];aj=F.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=aj[0]
}aj=null}else{aj=B.call(this,al);this.renderer._smoothedData=aj[0];this.renderer._smoothedPlotData=aj[1];
if(af.show){aj=B.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=aj[0];aj=B.call(this,this.renderer._lowBandGridData);
this.renderer._lowBandSmoothedData=aj[0]}aj=null}}return al};H.jqplot.LineRenderer.prototype.draw=function(aq,aC,ac,av){var aw;
var ak=H.extend(true,{},ac);var ae=(ak.shadow!=r)?ak.shadow:this.shadow;var aD=(ak.showLine!=r)?ak.showLine:this.showLine;
var au=(ak.fill!=r)?ak.fill:this.fill;var ab=(ak.fillAndStroke!=r)?ak.fillAndStroke:this.fillAndStroke;
var al,ar,ao,ay;aq.save();if(aC.length){if(aD){if(au){if(this.fillToZero){var az=this.negativeColor;if(!this.useNegativeColors){az=ak.fillStyle
}var ai=false;var aj=ak.fillStyle;if(ab){var aB=aC.slice(0)}if(this.index==0||!this._stack){var ap=[];
var aF=(this.renderer.smooth)?this.renderer._smoothedPlotData:this._plotData;this._areaPoints=[];var aA=this._yaxis.series_u2p(this.fillToValue);
var ad=this._xaxis.series_u2p(this.fillToValue);ak.closePath=true;if(this.fillAxis=="y"){ap.push([aC[0][0],aA]);
this._areaPoints.push([aC[0][0],aA]);for(var aw=0;aw<aC.length-1;aw++){ap.push(aC[aw]);this._areaPoints.push(aC[aw]);
if(aF[aw][1]*aF[aw+1][1]<0){if(aF[aw][1]<0){ai=true;ak.fillStyle=az}else{ai=false;ak.fillStyle=aj}var ah=aC[aw][0]+(aC[aw+1][0]-aC[aw][0])*(aA-aC[aw][1])/(aC[aw+1][1]-aC[aw][1]);
ap.push([ah,aA]);this._areaPoints.push([ah,aA]);if(ae){this.renderer.shadowRenderer.draw(aq,ap,ak)}this.renderer.shapeRenderer.draw(aq,ap,ak);
ap=[[ah,aA]]}}if(aF[aC.length-1][1]<0){ai=true;ak.fillStyle=az}else{ai=false;ak.fillStyle=aj}ap.push(aC[aC.length-1]);
this._areaPoints.push(aC[aC.length-1]);ap.push([aC[aC.length-1][0],aA]);this._areaPoints.push([aC[aC.length-1][0],aA])
}if(ae){this.renderer.shadowRenderer.draw(aq,ap,ak)}this.renderer.shapeRenderer.draw(aq,ap,ak)}else{var an=this._prevGridData;
for(var aw=an.length;aw>0;aw--){aC.push(an[aw-1])}if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this._areaPoints=aC;
this.renderer.shapeRenderer.draw(aq,aC,ak)}}else{if(ab){var aB=aC.slice(0)}if(this.index==0||!this._stack){var af=aq.canvas.height;
aC.unshift([aC[0][0],af]);var ax=aC.length;aC.push([aC[ax-1][0],af])}else{var an=this._prevGridData;for(var aw=an.length;
aw>0;aw--){aC.push(an[aw-1])}}this._areaPoints=aC;if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this.renderer.shapeRenderer.draw(aq,aC,ak)
}if(ab){var at=H.extend(true,{},ak,{fill:false,closePath:false});this.renderer.shapeRenderer.draw(aq,aB,at);
if(this.markerRenderer.show){if(this.renderer.smooth){aB=this.gridData}for(aw=0;aw<aB.length;aw++){this.markerRenderer.draw(aB[aw][0],aB[aw][1],aq,ak.markerOptions)
}}}}else{if(this.renderer.bands.show){var ag;var aE=H.extend(true,{},ak);if(this.renderer.bands.showLines){ag=(this.renderer.smooth)?this.renderer._hiBandSmoothedData:this.renderer._hiBandGridData;
this.renderer.shapeRenderer.draw(aq,ag,ak);ag=(this.renderer.smooth)?this.renderer._lowBandSmoothedData:this.renderer._lowBandGridData;
this.renderer.shapeRenderer.draw(aq,ag,aE)}if(this.renderer.bands.fill){if(this.renderer.smooth){ag=this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse())
}else{ag=this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse())}this._areaPoints=ag;
aE.closePath=true;aE.fill=true;aE.fillStyle=this.renderer.bands.fillColor;this.renderer.shapeRenderer.draw(aq,ag,aE)
}}if(ae){this.renderer.shadowRenderer.draw(aq,aC,ak)}this.renderer.shapeRenderer.draw(aq,aC,ak)}}var al=ao=ar=ay=null;
for(aw=0;aw<this._areaPoints.length;aw++){var am=this._areaPoints[aw];if(al>am[0]||al==null){al=am[0]
}if(ay<am[1]||ay==null){ay=am[1]}if(ao<am[0]||ao==null){ao=am[0]}if(ar>am[1]||ar==null){ar=am[1]}}if(this.type==="line"&&this.renderer.bands.show){ay=this._yaxis.series_u2p(this.renderer.bands._min);
ar=this._yaxis.series_u2p(this.renderer.bands._max)}this._boundingBox=[[al,ay],[ao,ar]];if(this.markerRenderer.show&&!au){if(this.renderer.smooth){aC=this.gridData
}for(aw=0;aw<aC.length;aw++){if(aC[aw][0]!=null&&aC[aw][1]!=null){this.markerRenderer.draw(aC[aw][0],aC[aw][1],aq,ak.markerOptions)
}}}}aq.restore()};H.jqplot.LineRenderer.prototype.drawShadow=function(ab,ad,ac){};function v(ae,ad,ab){for(var ac=0;
ac<this.series.length;ac++){if(this.series[ac].renderer.constructor==H.jqplot.LineRenderer){if(this.series[ac].highlightMouseOver){this.series[ac].highlightMouseDown=false
}}}}function Z(){if(this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas){this.plugins.lineRenderer.highlightCanvas.resetCanvas();
this.plugins.lineRenderer.highlightCanvas=null}this.plugins.lineRenderer.highlightedSeriesIndex=null;
this.plugins.lineRenderer.highlightCanvas=new H.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions,this));
this.plugins.lineRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind("mouseleave",{plot:this},function(ab){V(ab.data.plot)
})}function X(ah,ag,ae,ad){var ac=ah.series[ag];var ab=ah.plugins.lineRenderer.highlightCanvas;ab._ctx.clearRect(0,0,ab._ctx.canvas.width,ab._ctx.canvas.height);
ac._highlightedPoint=ae;ah.plugins.lineRenderer.highlightedSeriesIndex=ag;var af={fillStyle:ac.highlightColor};
if(ac.type==="line"&&ac.renderer.bands.show){af.fill=true;af.closePath=true}ac.renderer.shapeRenderer.draw(ab._ctx,ad,af);
ab=null}function V(ad){var ab=ad.plugins.lineRenderer.highlightCanvas;ab._ctx.clearRect(0,0,ab._ctx.canvas.width,ab._ctx.canvas.height);
for(var ac=0;ac<ad.series.length;ac++){ad.series[ac]._highlightedPoint=null}ad.plugins.lineRenderer.highlightedSeriesIndex=null;
ad.target.trigger("jqplotDataUnhighlight");ab=null}function g(af,ae,ai,ah,ag){if(ah){var ad=[ah.seriesIndex,ah.pointIndex,ah.data];
var ac=jQuery.Event("jqplotDataMouseOver");ac.pageX=af.pageX;ac.pageY=af.pageY;ag.target.trigger(ac,ad);
if(ag.series[ad[0]].highlightMouseOver&&!(ad[0]==ag.plugins.lineRenderer.highlightedSeriesIndex)){var ab=jQuery.Event("jqplotDataHighlight");
ab.which=af.which;ab.pageX=af.pageX;ab.pageY=af.pageY;ag.target.trigger(ab,ad);X(ag,ah.seriesIndex,ah.pointIndex,ah.points)
}}else{if(ah==null){V(ag)}}}function d(ae,ad,ah,ag,af){if(ag){var ac=[ag.seriesIndex,ag.pointIndex,ag.data];
if(af.series[ac[0]].highlightMouseDown&&!(ac[0]==af.plugins.lineRenderer.highlightedSeriesIndex)){var ab=jQuery.Event("jqplotDataHighlight");
ab.which=ae.which;ab.pageX=ae.pageX;ab.pageY=ae.pageY;af.target.trigger(ab,ac);X(af,ag.seriesIndex,ag.pointIndex,ag.points)
}}else{if(ag==null){V(af)}}}function Y(ad,ac,ag,af,ae){var ab=ae.plugins.lineRenderer.highlightedSeriesIndex;
if(ab!=null&&ae.series[ab].highlightMouseDown){V(ae)}}function f(ae,ad,ah,ag,af){if(ag){var ac=[ag.seriesIndex,ag.pointIndex,ag.data];
var ab=jQuery.Event("jqplotDataClick");ab.which=ae.which;ab.pageX=ae.pageX;ab.pageY=ae.pageY;af.target.trigger(ab,ac)
}}function p(af,ae,ai,ah,ag){if(ah){var ad=[ah.seriesIndex,ah.pointIndex,ah.data];var ab=ag.plugins.lineRenderer.highlightedSeriesIndex;
if(ab!=null&&ag.series[ab].highlightMouseDown){V(ag)}var ac=jQuery.Event("jqplotDataRightClick");ac.which=af.which;
ac.pageX=af.pageX;ac.pageY=af.pageY;ag.target.trigger(ac,ad)}}H.jqplot.LinearAxisRenderer=function(){};
H.jqplot.LinearAxisRenderer.prototype.init=function(ab){this.breakPoints=null;this.breakTickLabel="&asymp;";
this.drawBaseline=true;this.baselineWidth=null;this.baselineColor=null;this.forceTickAt0=false;this.forceTickAt100=false;
this.tickInset=0;this.minorTicks=0;this.alignTicks=false;this._autoFormatString="";this._overrideFormatString=false;
this._scalefact=1;H.extend(true,this,ab);if(this.breakPoints){if(!H.isArray(this.breakPoints)){this.breakPoints=null
}else{if(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0]){this.breakPoints=null}}}if(this.numberTicks!=null&&this.numberTicks<2){this.numberTicks=2
}this.resetDataBounds()};H.jqplot.LinearAxisRenderer.prototype.draw=function(ab,ai){if(this.show){this.renderer.createTicks.call(this,ai);
var ah=0;var ac;if(this._elem){this._elem.emptyForce();this._elem=null}this._elem=H(document.createElement("div"));
this._elem.addClass("jqplot-axis jqplot-"+this.name);this._elem.css("position","absolute");if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)
}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);
if(this._label.show){var ag=this._label.draw(ab,ai);ag.appendTo(this._elem);ag=null}var af=this._ticks;
var ae;for(var ad=0;ad<af.length;ad++){ae=af[ad];if(ae.show&&ae.showLabel&&(!ae.isMinorTick||this.showMinorTicks)){this._elem.append(ae.draw(ab,ai))
}}ae=null;af=null}return this._elem};H.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._options.min;
this.max=this._options.max;this.tickInterval=this._options.tickInterval;this.numberTicks=this._options.numberTicks;
this._autoFormatString="";if(this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString){this.tickOptions.formatString=""
}};H.jqplot.LinearAxisRenderer.prototype.set=function(){var ai=0;var ad;var ac=0;var ah=0;var ab=(this._label==null)?false:this._label.show;
if(this.show){var ag=this._ticks;var af;for(var ae=0;ae<ag.length;ae++){af=ag[ae];if(!af._breakTick&&af.show&&af.showLabel&&(!af.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){ad=af._elem.outerHeight(true)
}else{ad=af._elem.outerWidth(true)}if(ad>ai){ai=ad}}}af=null;ag=null;if(ab){ac=this._label._elem.outerWidth(true);
ah=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){ai=ai+ah;this._elem.css({height:ai+"px",left:"0px",bottom:"0px"})
}else{if(this.name=="x2axis"){ai=ai+ah;this._elem.css({height:ai+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){ai=ai+ac;
this._elem.css({width:ai+"px",left:"0px",top:"0px"});if(ab&&this._label.constructor==H.jqplot.AxisLabelRenderer){this._label._elem.css("width",ac+"px")
}}else{ai=ai+ac;this._elem.css({width:ai+"px",right:"0px",top:"0px"});if(ab&&this._label.constructor==H.jqplot.AxisLabelRenderer){this._label._elem.css("width",ac+"px")
}}}}}};H.jqplot.LinearAxisRenderer.prototype.createTicks=function(ad){var aN=this._ticks;var aE=this.ticks;
var at=this.name;var av=this._dataBounds;var ab=(this.name.charAt(0)==="x")?this._plotDimensions.width:this._plotDimensions.height;
var ah;var a0,aC;var aj,ai;var aY,aU;var aB=this.min;var aZ=this.max;var aQ=this.numberTicks;var a4=this.tickInterval;
var ag=30;this._scalefact=(Math.max(ab,ag+1)-ag)/300;if(aE.length){for(aU=0;aU<aE.length;aU++){var aI=aE[aU];
var aO=new this.tickRenderer(this.tickOptions);if(H.isArray(aI)){aO.value=aI[0];if(this.breakPoints){if(aI[0]==this.breakPoints[0]){aO.label=this.breakTickLabel;
aO._breakTick=true;aO.showGridline=false;aO.showMark=false}else{if(aI[0]>this.breakPoints[0]&&aI[0]<=this.breakPoints[1]){aO.show=false;
aO.showGridline=false;aO.label=aI[1]}else{aO.label=aI[1]}}}else{aO.label=aI[1]}aO.setTick(aI[0],this.name);
this._ticks.push(aO)}else{if(H.isPlainObject(aI)){H.extend(true,aO,aI);aO.axis=this.name;this._ticks.push(aO)
}else{aO.value=aI;if(this.breakPoints){if(aI==this.breakPoints[0]){aO.label=this.breakTickLabel;aO._breakTick=true;
aO.showGridline=false;aO.showMark=false}else{if(aI>this.breakPoints[0]&&aI<=this.breakPoints[1]){aO.show=false;
aO.showGridline=false}}}aO.setTick(aI,this.name);this._ticks.push(aO)}}}this.numberTicks=aE.length;this.min=this._ticks[0].value;
this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1)
}else{if(at=="xaxis"||at=="x2axis"){ab=this._plotDimensions.width}else{ab=this._plotDimensions.height
}var aq=this.numberTicks;if(this.alignTicks){if(this.name==="x2axis"&&ad.axes.xaxis.show){aq=ad.axes.xaxis.numberTicks
}else{if(this.name.charAt(0)==="y"&&this.name!=="yaxis"&&this.name!=="yMidAxis"&&ad.axes.yaxis.show){aq=ad.axes.yaxis.numberTicks
}}}a0=((this.min!=null)?this.min:av.min);aC=((this.max!=null)?this.max:av.max);var ao=aC-a0;var aM,ar;
var am;if(this.tickOptions==null||!this.tickOptions.formatString){this._overrideFormatString=true}if(this.min==null||this.max==null&&this.tickInterval==null&&!this.autoscale){if(this.forceTickAt0){if(a0>0){a0=0
}if(aC<0){aC=0}}if(this.forceTickAt100){if(a0>100){a0=100}if(aC<100){aC=100}}var ay=false,aV=false;if(this.min!=null){ay=true
}else{if(this.max!=null){aV=true}}var aJ=H.jqplot.LinearTickGenerator(a0,aC,this._scalefact,aq,ay,aV);
var ap=(this.min!=null)?a0:a0+ao*(this.padMin-1);var aK=(this.max!=null)?aC:aC-ao*(this.padMax-1);if(a0<ap||aC>aK){ap=(this.min!=null)?a0:a0-ao*(this.padMin-1);
aK=(this.max!=null)?aC:aC+ao*(this.padMax-1);aJ=H.jqplot.LinearTickGenerator(ap,aK,this._scalefact,aq,ay,aV)
}this.min=aJ[0];this.max=aJ[1];this.numberTicks=aJ[2];this._autoFormatString=aJ[3];this.tickInterval=aJ[4]
}else{if(a0==aC){var ac=0.05;if(a0>0){ac=Math.max(Math.log(a0)/Math.LN10,0.05)}a0-=ac;aC+=ac}if(this.autoscale&&this.min==null&&this.max==null){var ae,af,al;
var aw=false;var aH=false;var au={min:null,max:null,average:null,stddev:null};for(var aU=0;aU<this._series.length;
aU++){var aP=this._series[aU];var ax=(aP.fillAxis=="x")?aP._xaxis.name:aP._yaxis.name;if(this.name==ax){var aL=aP._plotValues[aP.fillAxis];
var aA=aL[0];var aW=aL[0];for(var aT=1;aT<aL.length;aT++){if(aL[aT]<aA){aA=aL[aT]}else{if(aL[aT]>aW){aW=aL[aT]
}}}var an=(aW-aA)/aW;if(aP.renderer.constructor==H.jqplot.BarRenderer){if(aA>=0&&(aP.fillToZero||an>0.1)){aw=true
}else{aw=false;if(aP.fill&&aP.fillToZero&&aA<0&&aW>0){aH=true}else{aH=false}}}else{if(aP.fill){if(aA>=0&&(aP.fillToZero||an>0.1)){aw=true
}else{if(aA<0&&aW>0&&aP.fillToZero){aw=false;aH=true}else{aw=false;aH=false}}}else{if(aA<0){aw=false}}}}}if(aw){this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing);
this.min=0;aB=0;af=aC/(this.numberTicks-1);am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)));
if(af/am==parseInt(af/am,10)){af+=am}this.tickInterval=Math.ceil(af/am)*am;this.max=this.tickInterval*(this.numberTicks-1)
}else{if(aH){this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing);var aD=Math.ceil(Math.abs(a0)/ao*(this.numberTicks-1));
var a3=this.numberTicks-1-aD;af=Math.max(Math.abs(a0/aD),Math.abs(aC/a3));am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)));
this.tickInterval=Math.ceil(af/am)*am;this.max=this.tickInterval*a3;this.min=-this.tickInterval*aD}else{if(this.numberTicks==null){if(this.tickInterval){this.numberTicks=3+Math.ceil(ao/this.tickInterval)
}else{this.numberTicks=2+Math.ceil((ab-(this.tickSpacing-1))/this.tickSpacing)}}if(this.tickInterval==null){af=ao/(this.numberTicks-1);
if(af<1){am=Math.pow(10,Math.abs(Math.floor(Math.log(af)/Math.LN10)))}else{am=1}this.tickInterval=Math.ceil(af*am*this.pad)/am
}else{am=1/this.tickInterval}ae=this.tickInterval*(this.numberTicks-1);al=(ae-ao)/2;if(this.min==null){this.min=Math.floor(am*(a0-al))/am
}if(this.max==null){this.max=this.min+ae}}}var az=H.jqplot.getSignificantFigures(this.tickInterval);var aG;
if(az.digitsLeft>=az.significantDigits){aG="%d"}else{var am=Math.max(0,5-az.digitsLeft);am=Math.min(am,az.digitsRight);
aG="%."+am+"f"}this._autoFormatString=aG}else{aM=(this.min!=null)?this.min:a0-ao*(this.padMin-1);ar=(this.max!=null)?this.max:aC+ao*(this.padMax-1);
ao=ar-aM;if(this.numberTicks==null){if(this.tickInterval!=null){this.numberTicks=Math.ceil((ar-aM)/this.tickInterval)+1
}else{if(ab>100){this.numberTicks=parseInt(3+(ab-100)/75,10)}else{this.numberTicks=2}}}if(this.tickInterval==null){this.tickInterval=ao/(this.numberTicks-1)
}if(this.max==null){ar=aM+this.tickInterval*(this.numberTicks-1)}if(this.min==null){aM=ar-this.tickInterval*(this.numberTicks-1)
}var az=H.jqplot.getSignificantFigures(this.tickInterval);var aG;if(az.digitsLeft>=az.significantDigits){aG="%d"
}else{var am=Math.max(0,5-az.digitsLeft);am=Math.min(am,az.digitsRight);aG="%."+am+"f"}this._autoFormatString=aG;
this.min=aM;this.max=ar}if(this.renderer.constructor==H.jqplot.LinearAxisRenderer&&this._autoFormatString==""){ao=this.max-this.min;
var a1=new this.tickRenderer(this.tickOptions);var aF=a1.formatString||H.jqplot.config.defaultTickFormatString;
var aF=aF.match(H.jqplot.sprintf.regex)[0];var aX=0;if(aF){if(aF.search(/[fFeEgGpP]/)>-1){var aS=aF.match(/\%\.(\d{0,})?[eEfFgGpP]/);
if(aS){aX=parseInt(aS[1],10)}else{aX=6}}else{if(aF.search(/[di]/)>-1){aX=0}}var ak=Math.pow(10,-aX);if(this.tickInterval<ak){if(aQ==null&&a4==null){this.tickInterval=ak;
if(aZ==null&&aB==null){this.min=Math.floor(this._dataBounds.min/ak)*ak;if(this.min==this._dataBounds.min){this.min=this._dataBounds.min-this.tickInterval
}this.max=Math.ceil(this._dataBounds.max/ak)*ak;if(this.max==this._dataBounds.max){this.max=this._dataBounds.max+this.tickInterval
}var aR=(this.max-this.min)/this.tickInterval;aR=aR.toFixed(11);aR=Math.ceil(aR);this.numberTicks=aR+1
}else{if(aZ==null){var aR=(this._dataBounds.max-this.min)/this.tickInterval;aR=aR.toFixed(11);this.numberTicks=Math.ceil(aR)+2;
this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(aB==null){var aR=(this.max-this._dataBounds.min)/this.tickInterval;
aR=aR.toFixed(11);this.numberTicks=Math.ceil(aR)+2;this.min=this.max-this.tickInterval*(this.numberTicks-1)
}else{this.numberTicks=Math.ceil((aZ-aB)/this.tickInterval)+1;this.min=Math.floor(aB*Math.pow(10,aX))/Math.pow(10,aX);
this.max=Math.ceil(aZ*Math.pow(10,aX))/Math.pow(10,aX);this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1
}}}}}}}}if(this._overrideFormatString&&this._autoFormatString!=""){this.tickOptions=this.tickOptions||{};
this.tickOptions.formatString=this._autoFormatString}var aO,a2;for(var aU=0;aU<this.numberTicks;aU++){aY=this.min+aU*this.tickInterval;
aO=new this.tickRenderer(this.tickOptions);aO.setTick(aY,this.name);this._ticks.push(aO);if(aU<this.numberTicks-1){for(var aT=0;
aT<this.minorTicks;aT++){aY+=this.tickInterval/(this.minorTicks+1);a2=H.extend(true,{},this.tickOptions,{name:this.name,value:aY,label:"",isMinorTick:true});
aO=new this.tickRenderer(a2);this._ticks.push(aO)}}aO=null}}if(this.tickInset){this.min=this.min-this.tickInset*this.tickInterval;
this.max=this.max+this.tickInset*this.tickInterval}aN=null};H.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(ad){if(H.isArray(ad)&&ad.length==this._ticks.length){var ac;
for(var ab=0;ab<ad.length;ab++){ac=this._ticks[ab];ac.value=ad[ab];ac.label=ac.formatter(ac.formatString,ad[ab]);
ac.label=ac.prefix+ac.label;ac._elem.html(ac.label)}ac=null;this.min=H.jqplot.arrayMin(ad);this.max=H.jqplot.arrayMax(ad);
this.pack()}};H.jqplot.LinearAxisRenderer.prototype.pack=function(ad,ac){ad=ad||{};ac=ac||this._offsets;
var ar=this._ticks;var an=this.max;var am=this.min;var ai=ac.max;var ag=ac.min;var ak=(this._label==null)?false:this._label.show;
for(var al in ad){this._elem.css(al,ad[al])}this._offsets=ac;var ae=ai-ag;var af=an-am;if(this.breakPoints){af=af-this.breakPoints[1]+this.breakPoints[0];
this.p2u=function(au){return(au-ag)*af/ae+am};this.u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]
}if(au<=this.breakPoints[0]){return(au-am)*ae/af+ag}else{return(au-this.breakPoints[1]+this.breakPoints[0]-am)*ae/af+ag
}};if(this.name.charAt(0)=="x"){this.series_u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]
}if(au<=this.breakPoints[0]){return(au-am)*ae/af}else{return(au-this.breakPoints[1]+this.breakPoints[0]-am)*ae/af
}};this.series_p2u=function(au){return au*af/ae+am}}else{this.series_u2p=function(au){if(au>this.breakPoints[0]&&au<this.breakPoints[1]){au=this.breakPoints[0]
}if(au>=this.breakPoints[1]){return(au-an)*ae/af}else{return(au+this.breakPoints[1]-this.breakPoints[0]-an)*ae/af
}};this.series_p2u=function(au){return au*af/ae+an}}}else{this.p2u=function(au){return(au-ag)*af/ae+am
};this.u2p=function(au){return(au-am)*ae/af+ag};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(au){return(au-am)*ae/af
};this.series_p2u=function(au){return au*af/ae+am}}else{this.series_u2p=function(au){return(au-an)*ae/af
};this.series_p2u=function(au){return au*af/ae+an}}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(var ao=0;
ao<ar.length;ao++){var aj=ar[ao];if(aj.show&&aj.showLabel){var ab;if(aj.constructor==H.jqplot.CanvasAxisTickRenderer&&aj.angle){var aq=(this.name=="xaxis")?1:-1;
switch(aj.labelPosition){case"auto":if(aq*aj.angle<0){ab=-aj.getWidth()+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2
}else{ab=-aj._textRenderer.height*Math.sin(aj._textRenderer.angle)/2}break;case"end":ab=-aj.getWidth()+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;
break;case"start":ab=-aj._textRenderer.height*Math.sin(aj._textRenderer.angle)/2;break;case"middle":ab=-aj.getWidth()/2+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;
break;default:ab=-aj.getWidth()/2+aj._textRenderer.height*Math.sin(-aj._textRenderer.angle)/2;break}}else{ab=-aj.getWidth()/2
}var at=this.u2p(aj.value)+ab+"px";aj._elem.css("left",at);aj.pack()}}if(ak){var ah=this._label._elem.outerWidth(true);
this._label._elem.css("left",ag+ae/2-ah/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px")
}else{this._label._elem.css("top","0px")}this._label.pack()}}else{for(var ao=0;ao<ar.length;ao++){var aj=ar[ao];
if(aj.show&&aj.showLabel){var ab;if(aj.constructor==H.jqplot.CanvasAxisTickRenderer&&aj.angle){var aq=(this.name=="yaxis")?1:-1;
switch(aj.labelPosition){case"auto":case"end":if(aq*aj.angle<0){ab=-aj._textRenderer.height*Math.cos(-aj._textRenderer.angle)/2
}else{ab=-aj.getHeight()+aj._textRenderer.height*Math.cos(aj._textRenderer.angle)/2}break;case"start":if(aj.angle>0){ab=-aj._textRenderer.height*Math.cos(-aj._textRenderer.angle)/2
}else{ab=-aj.getHeight()+aj._textRenderer.height*Math.cos(aj._textRenderer.angle)/2}break;case"middle":ab=-aj.getHeight()/2;
break;default:ab=-aj.getHeight()/2;break}}else{ab=-aj.getHeight()/2}var at=this.u2p(aj.value)+ab+"px";
aj._elem.css("top",at);aj.pack()}}if(ak){var ap=this._label._elem.outerHeight(true);this._label._elem.css("top",ai-ae/2-ap/2+"px");
if(this.name=="yaxis"){this._label._elem.css("left","0px")}else{this._label._elem.css("right","0px")}this._label.pack()
}}}ar=null};function h(ac){var ab;ac=Math.abs(ac);if(ac>=10){ab="%d"}else{if(ac>1){if(ac===parseInt(ac,10)){ab="%d"
}else{ab="%.1f"}}else{var ad=-Math.floor(Math.log(ac)/Math.LN10);ab="%."+ad+"f"}}return ab}var a=[0.1,0.2,0.3,0.4,0.5,0.8,1,2,3,4,5];
var b=function(ac){var ab=a.indexOf(ac);if(ab>0){return a[ab-1]}else{return a[a.length-1]/100}};var i=function(ac){var ab=a.indexOf(ac);
if(ab<a.length-1){return a[ab+1]}else{return a[0]*100}};function c(af,an,am){var ak=Math.floor(am/2);
var ac=Math.ceil(am*1.5);var ae=Number.MAX_VALUE;var ab=(an-af);var aq;var aj;var al;var ar=H.jqplot.getSignificantFigures;
var ap;var ah;var ai;var ao;for(var ag=0,ad=ac-ak+1;ag<ad;ag++){ai=ak+ag;aq=ab/(ai-1);aj=ar(aq);aq=Math.abs(am-ai)+aj.digitsRight;
if(aq<ae){ae=aq;al=ai;ao=aj.digitsRight}else{if(aq===ae){if(aj.digitsRight<ao){al=ai;ao=aj.digitsRight
}}}}ap=Math.max(ao,Math.max(ar(af).digitsRight,ar(an).digitsRight));if(ap===0){ah="%d"}else{ah="%."+ap+"f"
}aq=ab/(al-1);return[af,an,al,ah,aq]}function S(ac,af){af=af||7;var ae=ac/(af-1);var ad=Math.pow(10,Math.floor(Math.log(ae)/Math.LN10));
var ag=ae/ad;var ab;if(ad<1){if(ag>5){ab=10*ad}else{if(ag>2){ab=5*ad}else{if(ag>1){ab=2*ad}else{ab=ad
}}}}else{if(ag>5){ab=10*ad}else{if(ag>4){ab=5*ad}else{if(ag>3){ab=4*ad}else{if(ag>2){ab=3*ad}else{if(ag>1){ab=2*ad
}else{ab=ad}}}}}}return ab}function M(ac,ab){ab=ab||1;var ae=Math.floor(Math.log(ac)/Math.LN10);var ag=Math.pow(10,ae);
var af=ac/ag;var ad;af=af/ab;if(af<=0.38){ad=0.1}else{if(af<=1.6){ad=0.2}else{if(af<=4){ad=0.5}else{if(af<=8){ad=1
}else{if(af<=16){ad=2}else{ad=5}}}}}return ad*ag}function t(ad,ac){var af=Math.floor(Math.log(ad)/Math.LN10);
var ah=Math.pow(10,af);var ag=ad/ah;var ab;var ae;ag=ag/ac;if(ag<=0.38){ae=0.1}else{if(ag<=1.6){ae=0.2
}else{if(ag<=4){ae=0.5}else{if(ag<=8){ae=1}else{if(ag<=16){ae=2}else{ae=5}}}}}ab=ae*ah;return[ab,ae,ah]
}H.jqplot.LinearTickGenerator=function(ah,ak,ad,ae,ai,al){ai=(ai===null)?false:ai;al=(al===null||ai)?false:al;
if(ah===ak){ak=(ak)?0:1}ad=ad||1;if(ak<ah){var am=ak;ak=ah;ah=am}var ac=[];var ap=M(ak-ah,ad);var ao=H.jqplot.getSignificantFigures;
if(ae==null){if(!ai&&!al){ac[0]=Math.floor(ah/ap)*ap;ac[1]=Math.ceil(ak/ap)*ap;ac[2]=Math.round((ac[1]-ac[0])/ap+1);
ac[3]=h(ap);ac[4]=ap}else{if(ai){ac[0]=ah;ac[2]=Math.ceil((ak-ah)/ap+1);ac[1]=ah+(ac[2]-1)*ap;var an=ao(ah).digitsRight;
var aj=ao(ap).digitsRight;if(an<aj){ac[3]=h(ap)}else{ac[3]="%."+an+"f"}ac[4]=ap}else{if(al){ac[1]=ak;
ac[2]=Math.ceil((ak-ah)/ap+1);ac[0]=ak-(ac[2]-1)*ap;var af=ao(ak).digitsRight;var aj=ao(ap).digitsRight;
if(af<aj){ac[3]=h(ap)}else{ac[3]="%."+af+"f"}ac[4]=ap}}}}else{var ag=[];ag[0]=Math.floor(ah/ap)*ap;ag[1]=Math.ceil(ak/ap)*ap;
ag[2]=Math.round((ag[1]-ag[0])/ap+1);ag[3]=h(ap);ag[4]=ap;if(ag[2]===ae){ac=ag}else{var ab=S(ag[1]-ag[0],ae);
ac[0]=ag[0];ac[2]=ae;ac[4]=ab;ac[3]=h(ab);ac[1]=ac[0]+(ac[2]-1)*ac[4]}}return ac};H.jqplot.LinearTickGenerator.bestLinearInterval=M;
H.jqplot.LinearTickGenerator.bestInterval=S;H.jqplot.LinearTickGenerator.bestLinearComponents=t;H.jqplot.LinearTickGenerator.bestConstrainedInterval=c;
H.jqplot.MarkerRenderer=function(ab){this.show=true;this.style="filledCircle";this.lineWidth=2;this.size=9;
this.color="#666666";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1;this.shadowDepth=3;this.shadowAlpha="0.07";
this.shadowRenderer=new H.jqplot.ShadowRenderer();this.shapeRenderer=new H.jqplot.ShapeRenderer();H.extend(true,this,ab)
};H.jqplot.MarkerRenderer.prototype.init=function(ab){H.extend(true,this,ab);var ad={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:true};
if(this.style.indexOf("filled")!=-1){ad.fill=true}if(this.style.indexOf("ircle")!=-1){ad.isarc=true;ad.closePath=false
}this.shadowRenderer.init(ad);var ac={fill:false,isarc:false,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:true};
if(this.style.indexOf("filled")!=-1){ac.fill=true}if(this.style.indexOf("ircle")!=-1){ac.isarc=true;ac.closePath=false
}this.shapeRenderer.init(ac)};H.jqplot.MarkerRenderer.prototype.drawDiamond=function(ad,ac,ag,af,ai){var ab=1.2;
var aj=this.size/2/ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac],[ad,ac+ah],[ad+aj,ac],[ad,ac-ah]];if(this.shadow){this.shadowRenderer.draw(ag,ae)
}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawPlus=function(ae,ad,ah,ag,ak){var ac=1;
var al=this.size/2*ac;var ai=this.size/2*ac;var aj=[[ae,ad-ai],[ae,ad+ai]];var af=[[ae+al,ad],[ae-al,ad]];
var ab=H.extend(true,{},this.options,{closePath:false});if(this.shadow){this.shadowRenderer.draw(ah,aj,{closePath:false});
this.shadowRenderer.draw(ah,af,{closePath:false})}this.shapeRenderer.draw(ah,aj,ab);this.shapeRenderer.draw(ah,af,ab)
};H.jqplot.MarkerRenderer.prototype.drawX=function(ae,ad,ah,ag,ak){var ac=1;var al=this.size/2*ac;var ai=this.size/2*ac;
var ab=H.extend(true,{},this.options,{closePath:false});var aj=[[ae-al,ad-ai],[ae+al,ad+ai]];var af=[[ae-al,ad+ai],[ae+al,ad-ai]];
if(this.shadow){this.shadowRenderer.draw(ah,aj,{closePath:false});this.shadowRenderer.draw(ah,af,{closePath:false})
}this.shapeRenderer.draw(ah,aj,ab);this.shapeRenderer.draw(ah,af,ab)};H.jqplot.MarkerRenderer.prototype.drawDash=function(ad,ac,ag,af,ai){var ab=1;
var aj=this.size/2*ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac],[ad+aj,ac]];if(this.shadow){this.shadowRenderer.draw(ag,ae)
}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawLine=function(ag,af,ab,ae,ac){var ad=[ag,af];
if(this.shadow){this.shadowRenderer.draw(ab,ad)}this.shapeRenderer.draw(ab,ad,ac)};H.jqplot.MarkerRenderer.prototype.drawSquare=function(ad,ac,ag,af,ai){var ab=1;
var aj=this.size/2/ab;var ah=this.size/2*ab;var ae=[[ad-aj,ac-ah],[ad-aj,ac+ah],[ad+aj,ac+ah],[ad+aj,ac-ah]];
if(this.shadow){this.shadowRenderer.draw(ag,ae)}this.shapeRenderer.draw(ag,ae,ai)};H.jqplot.MarkerRenderer.prototype.drawCircle=function(ac,ai,ae,ah,af){var ab=this.size/2;
var ad=2*Math.PI;var ag=[ac,ai,ab,0,ad,true];if(this.shadow){this.shadowRenderer.draw(ae,ag)}this.shapeRenderer.draw(ae,ag,af)
};H.jqplot.MarkerRenderer.prototype.draw=function(ab,ae,ac,ad){ad=ad||{};if(ad.show==null||ad.show!=false){if(ad.color&&!ad.fillStyle){ad.fillStyle=ad.color
}if(ad.color&&!ad.strokeStyle){ad.strokeStyle=ad.color}switch(this.style){case"diamond":this.drawDiamond(ab,ae,ac,false,ad);
break;case"filledDiamond":this.drawDiamond(ab,ae,ac,true,ad);break;case"circle":this.drawCircle(ab,ae,ac,false,ad);
break;case"filledCircle":this.drawCircle(ab,ae,ac,true,ad);break;case"square":this.drawSquare(ab,ae,ac,false,ad);
break;case"filledSquare":this.drawSquare(ab,ae,ac,true,ad);break;case"x":this.drawX(ab,ae,ac,true,ad);
break;case"plus":this.drawPlus(ab,ae,ac,true,ad);break;case"dash":this.drawDash(ab,ae,ac,true,ad);break;
case"line":this.drawLine(ab,ae,ac,false,ad);break;default:this.drawDiamond(ab,ae,ac,false,ad);break}}};
H.jqplot.ShadowRenderer=function(ab){this.angle=45;this.offset=1;this.alpha=0.07;this.lineWidth=1.5;this.lineJoin="miter";
this.lineCap="round";this.closePath=false;this.fill=false;this.depth=3;this.strokeStyle="rgba(0,0,0,0.1)";
this.isarc=false;H.extend(true,this,ab)};H.jqplot.ShadowRenderer.prototype.init=function(ab){H.extend(true,this,ab)
};H.jqplot.ShadowRenderer.prototype.draw=function(ao,am,aq){ao.save();var ab=(aq!=null)?aq:{};var an=(ab.fill!=null)?ab.fill:this.fill;
var aj=(ab.fillRect!=null)?ab.fillRect:this.fillRect;var ai=(ab.closePath!=null)?ab.closePath:this.closePath;
var af=(ab.offset!=null)?ab.offset:this.offset;var ad=(ab.alpha!=null)?ab.alpha:this.alpha;var ah=(ab.depth!=null)?ab.depth:this.depth;
var ap=(ab.isarc!=null)?ab.isarc:this.isarc;var ak=(ab.linePattern!=null)?ab.linePattern:this.linePattern;
ao.lineWidth=(ab.lineWidth!=null)?ab.lineWidth:this.lineWidth;ao.lineJoin=(ab.lineJoin!=null)?ab.lineJoin:this.lineJoin;
ao.lineCap=(ab.lineCap!=null)?ab.lineCap:this.lineCap;ao.strokeStyle=ab.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+ad+")";
ao.fillStyle=ab.fillStyle||this.fillStyle||"rgba(0,0,0,"+ad+")";for(var ae=0;ae<ah;ae++){var al=H.jqplot.LinePattern(ao,ak);
ao.translate(Math.cos(this.angle*Math.PI/180)*af,Math.sin(this.angle*Math.PI/180)*af);al.beginPath();
if(ap){ao.arc(am[0],am[1],am[2],am[3],am[4],true)}else{if(aj){if(aj){ao.fillRect(am[0],am[1],am[2],am[3])
}}else{if(am&&am.length){var ac=true;for(var ag=0;ag<am.length;ag++){if(am[ag][0]!=null&&am[ag][1]!=null){if(ac){al.moveTo(am[ag][0],am[ag][1]);
ac=false}else{al.lineTo(am[ag][0],am[ag][1])}}else{ac=true}}}}}if(ai){al.closePath()}if(an){ao.fill()
}else{ao.stroke()}}ao.restore()};H.jqplot.ShapeRenderer=function(ab){this.lineWidth=1.5;this.linePattern="solid";
this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.isarc=false;this.fillRect=false;
this.strokeRect=false;this.clearRect=false;this.strokeStyle="#999999";this.fillStyle="#999999";H.extend(true,this,ab)
};H.jqplot.ShapeRenderer.prototype.init=function(ab){H.extend(true,this,ab)};H.jqplot.ShapeRenderer.prototype.draw=function(am,ak,ao){am.save();
var ab=(ao!=null)?ao:{};var al=(ab.fill!=null)?ab.fill:this.fill;var ag=(ab.closePath!=null)?ab.closePath:this.closePath;
var ah=(ab.fillRect!=null)?ab.fillRect:this.fillRect;var ae=(ab.strokeRect!=null)?ab.strokeRect:this.strokeRect;
var ac=(ab.clearRect!=null)?ab.clearRect:this.clearRect;var an=(ab.isarc!=null)?ab.isarc:this.isarc;var ai=(ab.linePattern!=null)?ab.linePattern:this.linePattern;
var aj=H.jqplot.LinePattern(am,ai);am.lineWidth=ab.lineWidth||this.lineWidth;am.lineJoin=ab.lineJoin||this.lineJoin;
am.lineCap=ab.lineCap||this.lineCap;am.strokeStyle=(ab.strokeStyle||ab.color)||this.strokeStyle;am.fillStyle=ab.fillStyle||this.fillStyle;
am.beginPath();if(an){am.arc(ak[0],ak[1],ak[2],ak[3],ak[4],true);if(ag){am.closePath()}if(al){am.fill()
}else{am.stroke()}am.restore();return}else{if(ac){am.clearRect(ak[0],ak[1],ak[2],ak[3]);am.restore();
return}else{if(ah||ae){if(ah){am.fillRect(ak[0],ak[1],ak[2],ak[3])}if(ae){am.strokeRect(ak[0],ak[1],ak[2],ak[3]);
am.restore();return}}else{if(ak&&ak.length){var ad=true;for(var af=0;af<ak.length;af++){if(ak[af][0]!=null&&ak[af][1]!=null){if(ad){aj.moveTo(ak[af][0],ak[af][1]);
ad=false}else{aj.lineTo(ak[af][0],ak[af][1])}}else{ad=true}}if(ag){aj.closePath()}if(al){am.fill()}else{am.stroke()
}}}}}am.restore()};H.jqplot.TableLegendRenderer=function(){};H.jqplot.TableLegendRenderer.prototype.init=function(ab){H.extend(true,this,ab)
};H.jqplot.TableLegendRenderer.prototype.addrow=function(ak,ae,ab,ai){var af=(ab)?this.rowSpacing+"px":"0px";
var aj;var ad;var ac;var ah;var ag;ac=document.createElement("tr");aj=H(ac);aj.addClass("jqplot-table-legend");
ac=null;if(ai){aj.prependTo(this._elem)}else{aj.appendTo(this._elem)}if(this.showSwatches){ad=H(document.createElement("td"));
ad.addClass("jqplot-table-legend jqplot-table-legend-swatch");ad.css({textAlign:"center",paddingTop:af});
ah=H(document.createElement("div"));ah.addClass("jqplot-table-legend-swatch-outline");ag=H(document.createElement("div"));
ag.addClass("jqplot-table-legend-swatch");ag.css({backgroundColor:ae,borderColor:ae});aj.append(ad.append(ah.append(ag)))
}if(this.showLabels){ad=H(document.createElement("td"));ad.addClass("jqplot-table-legend jqplot-table-legend-label");
ad.css("paddingTop",af);aj.append(ad);if(this.escapeHtml){ad.text(ak)}else{ad.html(ak)}}ad=null;ah=null;
ag=null;aj=null;ac=null};H.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();
this._elem=null}if(this.show){var ag=this._series;var ac=document.createElement("table");this._elem=H(ac);
this._elem.addClass("jqplot-table-legend");var al={position:"absolute"};if(this.background){al.background=this.background
}if(this.border){al.border=this.border}if(this.fontSize){al.fontSize=this.fontSize}if(this.fontFamily){al.fontFamily=this.fontFamily
}if(this.textColor){al.textColor=this.textColor}if(this.marginTop!=null){al.marginTop=this.marginTop}if(this.marginBottom!=null){al.marginBottom=this.marginBottom
}if(this.marginLeft!=null){al.marginLeft=this.marginLeft}if(this.marginRight!=null){al.marginRight=this.marginRight
}var ab=false,ai=false,ak;for(var ah=0;ah<ag.length;ah++){ak=ag[ah];if(ak._stack||ak.renderer.constructor==H.jqplot.BezierCurveRenderer){ai=true
}if(ak.show&&ak.showLabel){var af=this.labels[ah]||ak.label.toString();if(af){var ad=ak.color;if(ai&&ah<ag.length-1){ab=true
}else{if(ai&&ah==ag.length-1){ab=false}}this.renderer.addrow.call(this,af,ad,ab,ai);ab=true}for(var ae=0;
ae<H.jqplot.addLegendRowHooks.length;ae++){var aj=H.jqplot.addLegendRowHooks[ae].call(this,ak);if(aj){this.renderer.addrow.call(this,aj.label,aj.color,ab);
ab=true}}af=null}}}return this._elem};H.jqplot.TableLegendRenderer.prototype.pack=function(ad){if(this.show){if(this.placement=="insideGrid"){switch(this.location){case"nw":var ac=ad.left;
var ab=ad.top;this._elem.css("left",ac);this._elem.css("top",ab);break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;
var ab=ad.top;this._elem.css("left",ac);this._elem.css("top",ab);break;case"ne":var ac=ad.right;var ab=ad.top;
this._elem.css({right:ac,top:ab});break;case"e":var ac=ad.right;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;
this._elem.css({right:ac,top:ab});break;case"se":var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});
break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;var ab=ad.bottom;
this._elem.css({left:ac,bottom:ab});break;case"sw":var ac=ad.left;var ab=ad.bottom;this._elem.css({left:ac,bottom:ab});
break;case"w":var ac=ad.left;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;
this._elem.css({left:ac,top:ab});break;default:var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});
break}}else{if(this.placement=="outside"){switch(this.location){case"nw":var ac=this._plotDimensions.width-ad.left;
var ab=ad.top;this._elem.css("right",ac);this._elem.css("top",ab);break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;
var ab=this._plotDimensions.height-ad.top;this._elem.css("left",ac);this._elem.css("bottom",ab);break;
case"ne":var ac=this._plotDimensions.width-ad.right;var ab=ad.top;this._elem.css({left:ac,top:ab});break;
case"e":var ac=this._plotDimensions.width-ad.right;var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;
this._elem.css({left:ac,top:ab});break;case"se":var ac=this._plotDimensions.width-ad.right;var ab=ad.bottom;
this._elem.css({left:ac,bottom:ab});break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;
var ab=this._plotDimensions.height-ad.bottom;this._elem.css({left:ac,top:ab});break;case"sw":var ac=this._plotDimensions.width-ad.left;
var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break;case"w":var ac=this._plotDimensions.width-ad.left;
var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;this._elem.css({right:ac,top:ab});
break;default:var ac=ad.right;var ab=ad.bottom;this._elem.css({right:ac,bottom:ab});break}}else{switch(this.location){case"nw":this._elem.css({left:0,top:ad.top});
break;case"n":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;this._elem.css({left:ac,top:ad.top});
break;case"ne":this._elem.css({right:0,top:ad.top});break;case"e":var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;
this._elem.css({right:ad.right,top:ab});break;case"se":this._elem.css({right:ad.right,bottom:ad.bottom});
break;case"s":var ac=(ad.left+(this._plotDimensions.width-ad.right))/2-this.getWidth()/2;this._elem.css({left:ac,bottom:ad.bottom});
break;case"sw":this._elem.css({left:ad.left,bottom:ad.bottom});break;case"w":var ab=(ad.top+(this._plotDimensions.height-ad.bottom))/2-this.getHeight()/2;
this._elem.css({left:ad.left,top:ab});break;default:this._elem.css({right:ad.right,bottom:ad.bottom});
break}}}}};H.jqplot.ThemeEngine=function(){this.themes={};this.activeTheme=null};H.jqplot.ThemeEngine.prototype.init=function(){var ae=new H.jqplot.Theme({_name:"Default"});
var ah,ac,ag;for(ah in ae.target){if(ah=="textColor"){ae.target[ah]=this.target.css("color")}else{ae.target[ah]=this.target.css(ah)
}}if(this.title.show&&this.title._elem){for(ah in ae.title){if(ah=="textColor"){ae.title[ah]=this.title._elem.css("color")
}else{ae.title[ah]=this.title._elem.css(ah)}}}for(ah in ae.grid){ae.grid[ah]=this.grid[ah]}if(ae.grid.backgroundColor==null&&this.grid.background!=null){ae.grid.backgroundColor=this.grid.background
}if(this.legend.show&&this.legend._elem){for(ah in ae.legend){if(ah=="textColor"){ae.legend[ah]=this.legend._elem.css("color")
}else{ae.legend[ah]=this.legend._elem.css(ah)}}}var ad;for(ac=0;ac<this.series.length;ac++){ad=this.series[ac];
if(ad.renderer.constructor==H.jqplot.LineRenderer){ae.series.push(new m())}else{if(ad.renderer.constructor==H.jqplot.BarRenderer){ae.series.push(new P())
}else{if(ad.renderer.constructor==H.jqplot.PieRenderer){ae.series.push(new e())}else{if(ad.renderer.constructor==H.jqplot.DonutRenderer){ae.series.push(new C())
}else{if(ad.renderer.constructor==H.jqplot.FunnelRenderer){ae.series.push(new U())}else{if(ad.renderer.constructor==H.jqplot.MeterGaugeRenderer){ae.series.push(new z())
}else{ae.series.push({})}}}}}}for(ah in ae.series[ac]){ae.series[ac][ah]=ad[ah]}}var ab,af;for(ah in this.axes){af=this.axes[ah];
ab=ae.axes[ah]=new L();ab.borderColor=af.borderColor;ab.borderWidth=af.borderWidth;if(af._ticks&&af._ticks[0]){for(ag in ab.ticks){if(af._ticks[0].hasOwnProperty(ag)){ab.ticks[ag]=af._ticks[0][ag]
}else{if(af._ticks[0]._elem){ab.ticks[ag]=af._ticks[0]._elem.css(ag)}}}}if(af._label&&af._label.show){for(ag in ab.label){if(af._label[ag]){ab.label[ag]=af._label[ag]
}else{if(af._label._elem){if(ag=="textColor"){ab.label[ag]=af._label._elem.css("color")}else{ab.label[ag]=af._label._elem.css(ag)
}}}}}}this.themeEngine._add(ae);this.themeEngine.activeTheme=this.themeEngine.themes[ae._name]};H.jqplot.ThemeEngine.prototype.get=function(ab){if(!ab){return this.activeTheme
}else{return this.themes[ab]}};function K(ac,ab){return ac-ab}H.jqplot.ThemeEngine.prototype.getThemeNames=function(){var ab=[];
for(var ac in this.themes){ab.push(ac)}return ab.sort(K)};H.jqplot.ThemeEngine.prototype.getThemes=function(){var ac=[];
var ab=[];for(var ae in this.themes){ac.push(ae)}ac.sort(K);for(var ad=0;ad<ac.length;ad++){ab.push(this.themes[ac[ad]])
}return ab};H.jqplot.ThemeEngine.prototype.activate=function(ao,au){var ab=false;if(!au&&this.activeTheme&&this.activeTheme._name){au=this.activeTheme._name
}if(!this.themes.hasOwnProperty(au)){throw new Error("No theme of that name")}else{var ag=this.themes[au];
this.activeTheme=ag;var at,am=false,al=false;var ac=["xaxis","x2axis","yaxis","y2axis"];for(ap=0;ap<ac.length;
ap++){var ah=ac[ap];if(ag.axesStyles.borderColor!=null){ao.axes[ah].borderColor=ag.axesStyles.borderColor
}if(ag.axesStyles.borderWidth!=null){ao.axes[ah].borderWidth=ag.axesStyles.borderWidth}}for(var ar in ao.axes){var ae=ao.axes[ar];
if(ae.show){var ak=ag.axes[ar]||{};var ai=ag.axesStyles;var af=H.jqplot.extend(true,{},ak,ai);at=(ag.axesStyles.borderColor!=null)?ag.axesStyles.borderColor:af.borderColor;
if(af.borderColor!=null){ae.borderColor=af.borderColor;ab=true}at=(ag.axesStyles.borderWidth!=null)?ag.axesStyles.borderWidth:af.borderWidth;
if(af.borderWidth!=null){ae.borderWidth=af.borderWidth;ab=true}if(ae._ticks&&ae._ticks[0]){for(var ad in af.ticks){at=af.ticks[ad];
if(at!=null){ae.tickOptions[ad]=at;ae._ticks=[];ab=true}}}if(ae._label&&ae._label.show){for(var ad in af.label){at=af.label[ad];
if(at!=null){ae.labelOptions[ad]=at;ab=true}}}}}for(var an in ag.grid){if(ag.grid[an]!=null){ao.grid[an]=ag.grid[an]
}}if(!ab){ao.grid.draw()}if(ao.legend.show){for(an in ag.legend){if(ag.legend[an]!=null){ao.legend[an]=ag.legend[an]
}}}if(ao.title.show){for(an in ag.title){if(ag.title[an]!=null){ao.title[an]=ag.title[an]}}}var ap;for(ap=0;
ap<ag.series.length;ap++){var aj={};var aq=false;for(an in ag.series[ap]){at=(ag.seriesStyles[an]!=null)?ag.seriesStyles[an]:ag.series[ap][an];
if(at!=null){aj[an]=at;if(an=="color"){ao.series[ap].renderer.shapeRenderer.fillStyle=at;ao.series[ap].renderer.shapeRenderer.strokeStyle=at;
ao.series[ap][an]=at}else{if((an=="lineWidth")||(an=="linePattern")){ao.series[ap].renderer.shapeRenderer[an]=at;
ao.series[ap][an]=at}else{if(an=="markerOptions"){R(ao.series[ap].markerOptions,at);R(ao.series[ap].markerRenderer,at)
}else{ao.series[ap][an]=at}}}ab=true}}}if(ab){ao.target.empty();ao.draw()}for(an in ag.target){if(ag.target[an]!=null){ao.target.css(an,ag.target[an])
}}}};H.jqplot.ThemeEngine.prototype._add=function(ac,ab){if(ab){ac._name=ab}if(!ac._name){ac._name=Date.parse(new Date())
}if(!this.themes.hasOwnProperty(ac._name)){this.themes[ac._name]=ac}else{throw new Error("jqplot.ThemeEngine Error: Theme already in use")
}};H.jqplot.ThemeEngine.prototype.remove=function(ab){if(ab=="Default"){return false}return delete this.themes[ab]
};H.jqplot.ThemeEngine.prototype.newTheme=function(ab,ad){if(typeof(ab)=="object"){ad=ad||ab;ab=null}if(ad&&ad._name){ab=ad._name
}else{ab=ab||Date.parse(new Date())}var ac=this.copy(this.themes.Default._name,ab);H.jqplot.extend(ac,ad);
return ac};function x(ad){if(ad==null||typeof(ad)!="object"){return ad}var ab=new ad.constructor();for(var ac in ad){ab[ac]=x(ad[ac])
}return ab}H.jqplot.clone=x;function R(ad,ac){if(ac==null||typeof(ac)!="object"){return}for(var ab in ac){if(ab=="highlightColors"){ad[ab]=x(ac[ab])
}if(ac[ab]!=null&&typeof(ac[ab])=="object"){if(!ad.hasOwnProperty(ab)){ad[ab]={}}R(ad[ab],ac[ab])}else{ad[ab]=ac[ab]
}}}H.jqplot.merge=R;H.jqplot.extend=function(){var ag=arguments[0]||{},ae=1,af=arguments.length,ab=false,ad;
if(typeof ag==="boolean"){ab=ag;ag=arguments[1]||{};ae=2}if(typeof ag!=="object"&&!toString.call(ag)==="[object Function]"){ag={}
}for(;ae<af;ae++){if((ad=arguments[ae])!=null){for(var ac in ad){var ah=ag[ac],ai=ad[ac];if(ag===ai){continue
}if(ab&&ai&&typeof ai==="object"&&!ai.nodeType){ag[ac]=H.jqplot.extend(ab,ah||(ai.length!=null?[]:{}),ai)
}else{if(ai!==r){ag[ac]=ai}}}}}return ag};H.jqplot.ThemeEngine.prototype.rename=function(ac,ab){if(ac=="Default"||ab=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")
}if(this.themes.hasOwnProperty(ab)){throw new Error("jqplot.ThemeEngine Error: New name already in use.")
}else{if(this.themes.hasOwnProperty(ac)){var ad=this.copy(ac,ab);this.remove(ac);return ad}}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")
};H.jqplot.ThemeEngine.prototype.copy=function(ab,ad,af){if(ad=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")
}if(!this.themes.hasOwnProperty(ab)){var ac="jqplot.ThemeEngine Error: Source name invalid";throw new Error(ac)
}if(this.themes.hasOwnProperty(ad)){var ac="jqplot.ThemeEngine Error: Target name invalid";throw new Error(ac)
}else{var ae=x(this.themes[ab]);ae._name=ad;H.jqplot.extend(true,ae,af);this._add(ae);return ae}};H.jqplot.Theme=function(ab,ac){if(typeof(ab)=="object"){ac=ac||ab;
ab=null}ab=ab||Date.parse(new Date());this._name=ab;this.target={backgroundColor:null};this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null};
this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null};this.seriesStyles={};this.series=[];
this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null};
this.axesStyles={label:{},ticks:{}};this.axes={};if(typeof(ac)=="string"){this._name=ac}else{if(typeof(ac)=="object"){H.jqplot.extend(true,this,ac)
}}};var L=function(){this.borderColor=null;this.borderWidth=null;this.ticks=new l();this.label=new q()
};var l=function(){this.show=null;this.showGridline=null;this.showLabel=null;this.showMark=null;this.size=null;
this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null};var q=function(){this.textColor=null;
this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;this.fontWeight=null};var m=function(){this.color=null;
this.lineWidth=null;this.linePattern=null;this.shadow=null;this.fillColor=null;this.showMarker=null;this.markerOptions=new E()
};var E=function(){this.show=null;this.style=null;this.lineWidth=null;this.size=null;this.color=null;
this.shadow=null};var P=function(){this.color=null;this.seriesColors=null;this.lineWidth=null;this.shadow=null;
this.barPadding=null;this.barMargin=null;this.barWidth=null;this.highlightColors=null};var e=function(){this.seriesColors=null;
this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;
this.highlightColors=null};var C=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;
this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.innerDiameter=null;this.thickness=null;
this.ringMargin=null;this.highlightColors=null};var U=function(){this.color=null;this.lineWidth=null;
this.shadow=null;this.padding=null;this.sectionMargin=null;this.seriesColors=null;this.highlightColors=null
};var z=function(){this.padding=null;this.backgroundColor=null;this.ringColor=null;this.tickColor=null;
this.ringWidth=null;this.intervalColors=null;this.intervalInnerRadius=null;this.intervalOuterRadius=null;
this.hubRadius=null;this.needleThickness=null;this.needlePad=null};H.fn.jqplotChildText=function(){return H(this).contents().filter(function(){return this.nodeType==3
}).text()};H.fn.jqplotGetComputedFontStyle=function(){var ae=window.getComputedStyle?window.getComputedStyle(this[0],""):this[0].currentStyle;
var ac=ae["font-style"]?["font-style","font-weight","font-size","font-family"]:["fontStyle","fontWeight","fontSize","fontFamily"];
var af=[];for(var ad=0;ad<ac.length;++ad){var ab=String(ae[ac[ad]]);if(ab&&ab!="normal"){af.push(ab)}}return af.join(" ")
};H.fn.jqplotToImageCanvas=function(ad){ad=ad||{};var ao=(ad.x_offset==null)?0:ad.x_offset;var aq=(ad.y_offset==null)?0:ad.y_offset;
var af=(ad.backgroundColor==null)?"rgb(255,255,255)":ad.backgroundColor;if(H(this).width()==0||H(this).height()==0){return null
}if(H.jqplot.use_excanvas){return null}var ah=document.createElement("canvas");var au=H(this).outerHeight(true);
var am=H(this).outerWidth(true);var ag=H(this).offset();var ai=ag.left;var ak=ag.top;var an=0,al=0;var ar=["jqplot-table-legend","jqplot-xaxis-tick","jqplot-x2axis-tick","jqplot-yaxis-tick","jqplot-y2axis-tick","jqplot-y3axis-tick","jqplot-y4axis-tick","jqplot-y5axis-tick","jqplot-y6axis-tick","jqplot-y7axis-tick","jqplot-y8axis-tick","jqplot-y9axis-tick","jqplot-xaxis-label","jqplot-x2axis-label","jqplot-yaxis-label","jqplot-y2axis-label","jqplot-y3axis-label","jqplot-y4axis-label","jqplot-y5axis-label","jqplot-y6axis-label","jqplot-y7axis-label","jqplot-y8axis-label","jqplot-y9axis-label"];
var aj,ab,ac,av;for(var at=0;at<ar.length;at++){H(this).find("."+ar[at]).each(function(){aj=H(this).offset().top-ak;
ab=H(this).offset().left-ai;av=ab+H(this).outerWidth(true)+an;ac=aj+H(this).outerHeight(true)+al;if(ab<-an){am=am-an-ab;
an=-ab}if(aj<-al){au=au-al-aj;al=-aj}if(av>am){am=av}if(ac>au){au=ac}})}ah.width=am+Number(ao);ah.height=au+Number(aq);
var ae=ah.getContext("2d");ae.save();ae.fillStyle=af;ae.fillRect(0,0,ah.width,ah.height);ae.restore();
ae.translate(an,al);ae.textAlign="left";ae.textBaseline="top";function aw(ay){var az=parseInt(H(ay).css("line-height"),10);
if(isNaN(az)){az=parseInt(H(ay).css("font-size"),10)*1.2}return az}function ax(az,ay,aM,aA,aI,aB){var aK=aw(az);
var aE=H(az).innerWidth();var aF=H(az).innerHeight();var aH=aM.split(/\s+/);var aL=aH.length;var aJ="";
var aG=[];var aO=aI;var aN=aA;for(var aD=0;aD<aL;aD++){aJ+=aH[aD];if(ay.measureText(aJ).width>aE){aG.push(aD);
aJ="";aD--}}if(aG.length===0){if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an
}ay.fillText(aM,aN,aI)}else{aJ=aH.slice(0,aG[0]).join(" ");if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an
}ay.fillText(aJ,aN,aO);aO+=aK;for(var aD=1,aC=aG.length;aD<aC;aD++){aJ=aH.slice(aG[aD-1],aG[aD]).join(" ");
if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an}ay.fillText(aJ,aN,aO);
aO+=aK}aJ=aH.slice(aG[aD-1],aH.length).join(" ");if(H(az).css("textAlign")==="center"){aN=aA+(aB-ay.measureText(aJ).width)/2-an
}ay.fillText(aJ,aN,aO)}}function ap(aA,aD,ay){var aH=aA.tagName.toLowerCase();var az=H(aA).position();
var aE=window.getComputedStyle?window.getComputedStyle(aA,""):aA.currentStyle;var aC=aD+az.left+parseInt(aE.marginLeft,10)+parseInt(aE.borderLeftWidth,10)+parseInt(aE.paddingLeft,10);
var aF=ay+az.top+parseInt(aE.marginTop,10)+parseInt(aE.borderTopWidth,10)+parseInt(aE.paddingTop,10);
var aG=ah.width;if((aH=="div"||aH=="span")&&!H(aA).hasClass("jqplot-highlighter-tooltip")){H(aA).children().each(function(){ap(this,aC,aF)
});var aI=H(aA).jqplotChildText();if(aI){ae.font=H(aA).jqplotGetComputedFontStyle();ae.fillStyle=H(aA).css("color");
ax(aA,ae,aI,aC,aF,aG)}}else{if(aH==="table"&&H(aA).hasClass("jqplot-table-legend")){ae.strokeStyle=H(aA).css("border-top-color");
ae.fillStyle=H(aA).css("background-color");ae.fillRect(aC,aF,H(aA).innerWidth(),H(aA).innerHeight());
if(parseInt(H(aA).css("border-top-width"),10)>0){ae.strokeRect(aC,aF,H(aA).innerWidth(),H(aA).innerHeight())
}H(aA).find("div.jqplot-table-legend-swatch-outline").each(function(){var aO=H(this);ae.strokeStyle=aO.css("border-top-color");
var aK=aC+aO.position().left;var aL=aF+aO.position().top;ae.strokeRect(aK,aL,aO.innerWidth(),aO.innerHeight());
aK+=parseInt(aO.css("padding-left"),10);aL+=parseInt(aO.css("padding-top"),10);var aN=aO.innerHeight()-2*parseInt(aO.css("padding-top"),10);
var aJ=aO.innerWidth()-2*parseInt(aO.css("padding-left"),10);var aM=aO.children("div.jqplot-table-legend-swatch");
ae.fillStyle=aM.css("background-color");ae.fillRect(aK,aL,aJ,aN)});H(aA).find("td.jqplot-table-legend-label").each(function(){var aL=H(this);
var aJ=aC+aL.position().left;var aK=aF+aL.position().top+parseInt(aL.css("padding-top"),10);ae.font=aL.jqplotGetComputedFontStyle();
ae.fillStyle=aL.css("color");ax(aL,ae,aL.text(),aJ,aK,aG)});var aB=null}else{if(aH=="canvas"){ae.drawImage(aA,aC,aF)
}}}}H(this).children().each(function(){ap(this,ao,aq)});return ah};H.fn.jqplotToImageStr=function(ac){var ab=H(this).jqplotToImageCanvas(ac);
if(ab){return ab.toDataURL("image/png")}else{return null}};H.fn.jqplotToImageElem=function(ab){var ac=document.createElement("img");
var ad=H(this).jqplotToImageStr(ab);ac.src=ad;return ac};H.fn.jqplotToImageElemStr=function(ab){var ac="<img src="+H(this).jqplotToImageStr(ab)+" />";
return ac};H.fn.jqplotSaveImage=function(){var ab=H(this).jqplotToImageStr({});if(ab){window.location.href=ab.replace("image/png","image/octet-stream")
}};H.fn.jqplotViewImage=function(){var ac=H(this).jqplotToImageElemStr({});var ad=H(this).jqplotToImageStr({});
if(ac){var ab=window.open("");ab.document.open("image/png");ab.document.write(ac);ab.document.close();
ab=null}};var aa=function(){this.syntax=aa.config.syntax;this._type="jsDate";this.proxy=new Date();this.options={};
this.locale=aa.regional.getLocale();this.formatString="";this.defaultCentury=aa.config.defaultCentury;
switch(arguments.length){case 0:break;case 1:if(j(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var ad=this.options=arguments[0];
this.syntax=ad.syntax||this.syntax;this.defaultCentury=ad.defaultCentury||this.defaultCentury;this.proxy=aa.createDate(ad.date)
}else{this.proxy=aa.createDate(arguments[0])}break;default:var ab=[];for(var ac=0;ac<arguments.length;
ac++){ab.push(arguments[ac])}this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,ab.slice(0,3));
if(ab.slice(3).length){this.proxy.setHours.apply(this.proxy,ab.slice(3))}break}};aa.config={defaultLocale:"en",syntax:"perl",defaultCentury:1900};
aa.prototype.add=function(ad,ac){var ab=A[ac]||A.day;if(typeof ab=="number"){this.proxy.setTime(this.proxy.getTime()+(ab*ad))
}else{ab.add(this,ad)}return this};aa.prototype.clone=function(){return new aa(this.proxy.getTime())};
aa.prototype.getUtcOffset=function(){return this.proxy.getTimezoneOffset()*60000};aa.prototype.diff=function(ac,af,ab){ac=new aa(ac);
if(ac===null){return null}var ad=A[af]||A.day;if(typeof ad=="number"){var ae=(this.proxy.getTime()-ac.proxy.getTime())/ad
}else{var ae=ad.diff(this.proxy,ac.proxy)}return(ab?ae:Math[ae>0?"floor":"ceil"](ae))};aa.prototype.getAbbrDayName=function(){return aa.regional[this.locale]["dayNamesShort"][this.proxy.getDay()]
};aa.prototype.getAbbrMonthName=function(){return aa.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()]
};aa.prototype.getAMPM=function(){return this.proxy.getHours()>=12?"PM":"AM"};aa.prototype.getAmPm=function(){return this.proxy.getHours()>=12?"pm":"am"
};aa.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10)};aa.prototype.getDate=function(){return this.proxy.getDate()
};aa.prototype.getDay=function(){return this.proxy.getDay()};aa.prototype.getDayOfWeek=function(){var ab=this.proxy.getDay();
return ab===0?7:ab};aa.prototype.getDayOfYear=function(){var ac=this.proxy;var ab=ac-new Date(""+ac.getFullYear()+"/1/1 GMT");
ab+=ac.getTimezoneOffset()*60000;ac=null;return parseInt(ab/60000/60/24,10)+1};aa.prototype.getDayName=function(){return aa.regional[this.locale]["dayNames"][this.proxy.getDay()]
};aa.prototype.getFullWeekOfYear=function(){var ae=this.proxy;var ab=this.getDayOfYear();var ad=6-ae.getDay();
var ac=parseInt((ab+ad)/7,10);return ac};aa.prototype.getFullYear=function(){return this.proxy.getFullYear()
};aa.prototype.getGmtOffset=function(){var ab=this.proxy.getTimezoneOffset()/60;var ac=ab<0?"+":"-";ab=Math.abs(ab);
return ac+J(Math.floor(ab),2)+":"+J((ab%1)*60,2)};aa.prototype.getHours=function(){return this.proxy.getHours()
};aa.prototype.getHours12=function(){var ab=this.proxy.getHours();return ab>12?ab-12:(ab==0?12:ab)};aa.prototype.getIsoWeek=function(){var ae=this.proxy;
var ad=ae.getWeekOfYear();var ab=(new Date(""+ae.getFullYear()+"/1/1")).getDay();var ac=ad+(ab>4||ab<=1?0:1);
if(ac==53&&(new Date(""+ae.getFullYear()+"/12/31")).getDay()<4){ac=1}else{if(ac===0){ae=new aa(new Date(""+(ae.getFullYear()-1)+"/12/31"));
ac=ae.getIsoWeek()}}ae=null;return ac};aa.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds()
};aa.prototype.getMinutes=function(){return this.proxy.getMinutes()};aa.prototype.getMonth=function(){return this.proxy.getMonth()
};aa.prototype.getMonthName=function(){return aa.regional[this.locale]["monthNames"][this.proxy.getMonth()]
};aa.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1};aa.prototype.getSeconds=function(){return this.proxy.getSeconds()
};aa.prototype.getShortYear=function(){return this.proxy.getYear()%100};aa.prototype.getTime=function(){return this.proxy.getTime()
};aa.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,"$1")
};aa.prototype.getTimezoneName=function(){var ab=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return ab[1]||ab[2]||"GMT"+this.getGmtOffset()
};aa.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset()};aa.prototype.getWeekOfYear=function(){var ab=this.getDayOfYear();
var ad=7-this.getDayOfWeek();var ac=parseInt((ab+ad)/7,10);return ac};aa.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1000,0)
};aa.prototype.getYear=function(){return this.proxy.getYear()};aa.prototype.next=function(ab){ab=ab||"day";
return this.clone().add(1,ab)};aa.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date();
break;case 1:if(j(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var ad=this.options=arguments[0];
this.syntax=ad.syntax||this.syntax;this.defaultCentury=ad.defaultCentury||this.defaultCentury;this.proxy=aa.createDate(ad.date)
}else{this.proxy=aa.createDate(arguments[0])}break;default:var ab=[];for(var ac=0;ac<arguments.length;
ac++){ab.push(arguments[ac])}this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,ab.slice(0,3));
if(ab.slice(3).length){this.proxy.setHours.apply(this.proxy,ab.slice(3))}break}return this};aa.prototype.setDate=function(ab){this.proxy.setDate(ab);
return this};aa.prototype.setFullYear=function(){this.proxy.setFullYear.apply(this.proxy,arguments);return this
};aa.prototype.setHours=function(){this.proxy.setHours.apply(this.proxy,arguments);return this};aa.prototype.setMilliseconds=function(ab){this.proxy.setMilliseconds(ab);
return this};aa.prototype.setMinutes=function(){this.proxy.setMinutes.apply(this.proxy,arguments);return this
};aa.prototype.setMonth=function(){this.proxy.setMonth.apply(this.proxy,arguments);return this};aa.prototype.setSeconds=function(){this.proxy.setSeconds.apply(this.proxy,arguments);
return this};aa.prototype.setTime=function(ab){this.proxy.setTime(ab);return this};aa.prototype.setYear=function(){this.proxy.setYear.apply(this.proxy,arguments);
return this};aa.prototype.strftime=function(ab){ab=ab||this.formatString||aa.regional[this.locale]["formatString"];
return aa.strftime(this,ab,this.syntax)};aa.prototype.toString=function(){return this.proxy.toString()
};aa.prototype.toYmdInt=function(){return(this.proxy.getFullYear()*10000)+(this.getMonthNumber()*100)+this.proxy.getDate()
};aa.regional={en:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],formatString:"%Y-%m-%d %H:%M:%S"},fr:{monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],formatString:"%Y-%m-%d %H:%M:%S"},de:{monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],formatString:"%Y-%m-%d %H:%M:%S"},es:{monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesShort:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},ru:{monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],formatString:"%Y-%m-%d %H:%M:%S"},ar:{monthNames:["كانون الثاني","شباط","آذار","نيسان","آذار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],monthNamesShort:["1","2","3","4","5","6","7","8","9","10","11","12"],dayNames:["السبت","الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة"],dayNamesShort:["سبت","أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة"],formatString:"%Y-%m-%d %H:%M:%S"},pt:{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"},"pt-BR":{monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],formatString:"%Y-%m-%d %H:%M:%S"}};
aa.regional["en-US"]=aa.regional["en-GB"]=aa.regional.en;aa.regional.getLocale=function(){var ab=aa.config.defaultLocale;
if(document&&document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){ab=document.getElementsByTagName("html")[0].lang;
if(!aa.regional.hasOwnProperty(ab)){ab=aa.config.defaultLocale}}return ab};var y=24*60*60*1000;var J=function(ab,ae){ab=String(ab);
var ac=ae-ab.length;var ad=String(Math.pow(10,ac)).slice(1);return ad.concat(ab)};var A={millisecond:1,second:1000,minute:60*1000,hour:60*60*1000,day:y,week:7*y,month:{add:function(ad,ab){A.year.add(ad,Math[ab>0?"floor":"ceil"](ab/12));
var ac=ad.getMonth()+(ab%12);if(ac==12){ac=0;ad.setYear(ad.getFullYear()+1)}else{if(ac==-1){ac=11;ad.setYear(ad.getFullYear()-1)
}}ad.setMonth(ac)},diff:function(af,ad){var ab=af.getFullYear()-ad.getFullYear();var ac=af.getMonth()-ad.getMonth()+(ab*12);
var ae=af.getDate()-ad.getDate();return ac+(ae/30)}},year:{add:function(ac,ab){ac.setYear(ac.getFullYear()+Math[ab>0?"floor":"ceil"](ab))
},diff:function(ac,ab){return A.month.diff(ac,ab)/12}}};for(var T in A){if(T.substring(T.length-1)!="s"){A[T+"s"]=A[T]
}}var D=function(af,ae,ac){if(aa.formats[ac]["shortcuts"][ae]){return aa.strftime(af,aa.formats[ac]["shortcuts"][ae],ac)
}else{var ab=(aa.formats[ac]["codes"][ae]||"").split(".");var ad=af["get"+ab[0]]?af["get"+ab[0]]():"";
if(ab[1]){ad=J(ad,ab[1])}return ad}};aa.strftime=function(ah,ae,ad,ai){var ac="perl";var ag=aa.regional.getLocale();
if(ad&&aa.formats.hasOwnProperty(ad)){ac=ad}else{if(ad&&aa.regional.hasOwnProperty(ad)){ag=ad}}if(ai&&aa.formats.hasOwnProperty(ai)){ac=ai
}else{if(ai&&aa.regional.hasOwnProperty(ai)){ag=ai}}if(j(ah)!="[object Object]"||ah._type!="jsDate"){ah=new aa(ah);
ah.locale=ag}if(!ae){ae=ah.formatString||aa.regional[ag]["formatString"]}var ab=ae||"%Y-%m-%d",aj="",af;
while(ab.length>0){if(af=ab.match(aa.formats[ac].codes.matcher)){aj+=ab.slice(0,af.index);aj+=(af[1]||"")+D(ah,af[2],ac);
ab=ab.slice(af.index+af[0].length)}else{aj+=ab;ab=""}}return aj};aa.formats={ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S"};
aa.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AMPM",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"},shortcuts:{F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};
aa.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:"AbbrDayName",A:"DayName",d:"Date.2",e:"Date",j:"DayOfYear.3",u:"DayOfWeek",w:"Day",U:"FullWeekOfYear.2",V:"IsoWeek.2",W:"WeekOfYear.2",b:"AbbrMonthName",B:"MonthName",m:"MonthNumber.2",h:"AbbrMonthName",C:"Century.2",y:"ShortYear.2",Y:"FullYear",H:"Hours.2",I:"Hours12.2",l:"Hours12",p:"AMPM",P:"AmPm",M:"Minutes.2",S:"Seconds.2",s:"Unix",O:"TimezoneOffset",z:"GmtOffset",Z:"TimezoneAbbr"},shortcuts:{D:"%m/%d/%y",F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"}};
aa.createDate=function(ad){if(ad==null){return new Date()}if(ad instanceof Date){return ad}if(typeof ad=="number"){return new Date(ad)
}var ai=String(ad).replace(/^\s*(.+)\s*$/g,"$1");ai=ai.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3");
ai=ai.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var ah=ai.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);
if(ah&&ah.length>3){var am=parseFloat(ah[3]);var ag=aa.config.defaultCentury+am;ag=String(ag);ai=ai.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,ah[1]+" "+ah[2]+" "+ag)
}ah=ai.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);function al(aq,ap){var aw=parseFloat(ap[1]);
var av=parseFloat(ap[2]);var au=parseFloat(ap[3]);var at=aa.config.defaultCentury;var ao,an,ax,ar;if(aw>31){an=au;
ax=av;ao=at+aw}else{an=av;ax=aw;ao=at+au}ar=ax+"/"+an+"/"+ao;return aq.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,ar)
}if(ah&&ah.length>3){ai=al(ai,ah)}var ah=ai.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);
if(ah&&ah.length>3){ai=al(ai,ah)}var af=0;var ac=aa.matchers.length;var ak,ab,aj=ai,ae;while(af<ac){ab=Date.parse(aj);
if(!isNaN(ab)){return new Date(ab)}ak=aa.matchers[af];if(typeof ak=="function"){ae=ak.call(aa,aj);if(ae instanceof Date){return ae
}}else{aj=ai.replace(ak[0],ak[1])}af++}return NaN};aa.daysInMonth=function(ab,ac){if(ac==2){return new Date(ab,1,29).getDate()==29?29:28
}return[r,31,r,31,30,31,30,31,31,30,31,30,31][ac]};aa.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(ae){var ac=ae.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);
if(ac){if(ac[1]){var ad=this.createDate(ac[1]);if(isNaN(ad)){return}}else{var ad=new Date();ad.setMilliseconds(0)
}var ab=parseFloat(ac[2]);if(ac[6]){ab=ac[6].toLowerCase()=="am"?(ab==12?0:ab):(ab==12?12:ab+12)}ad.setHours(ab,parseInt(ac[3]||0,10),parseInt(ac[4]||0,10),((parseFloat(ac[5]||0))||0)*1000);
return ad}else{return ae}},function(ae){var ac=ae.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);
if(ac){if(ac[1]){var ad=this.createDate(ac[1]);if(isNaN(ad)){return}}else{var ad=new Date();ad.setMilliseconds(0)
}var ab=parseFloat(ac[2]);ad.setHours(ab,parseInt(ac[3],10),parseInt(ac[4],10),parseFloat(ac[5])*1000);
return ad}else{return ae}},function(af){var ad=af.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);
if(ad){var ae=new Date();var ag=aa.config.defaultCentury;var ai=parseFloat(ad[1]);var ah=parseFloat(ad[3]);
var ac,ab,aj;if(ai>31){ab=ah;ac=ag+ai}else{ab=ai;ac=ag+ah}var aj=W(ad[2],aa.regional[aa.regional.getLocale()]["monthNamesShort"]);
if(aj==-1){aj=W(ad[2],aa.regional[aa.regional.getLocale()]["monthNames"])}ae.setFullYear(ac,aj,ab);ae.setHours(0,0,0,0);
return ae}else{return af}}];function W(ad,ae){if(ae.indexOf){return ae.indexOf(ad)}for(var ab=0,ac=ae.length;
ab<ac;ab++){if(ae[ab]===ad){return ab}}return -1}function j(ab){if(ab===null){return"[object Null]"}return Object.prototype.toString.call(ab)
}H.jsDate=aa;H.jqplot.sprintf=function(){function ah(an,aj,ak,am){var al=(an.length>=aj)?"":Array(1+aj-an.length>>>0).join(ak);
return am?an+al:al+an}function ae(al){var ak=new String(al);for(var aj=10;aj>0;aj--){if(ak==(ak=ak.replace(/^(\d+)(\d{3})/,"$1"+H.jqplot.sprintf.thousandsSeparator+"$2"))){break
}}return ak}function ad(ao,an,aq,al,am,ak){var ap=al-ao.length;if(ap>0){var aj=" ";if(ak){aj="&nbsp;"
}if(aq||!am){ao=ah(ao,al,aj,aq)}else{ao=ao.slice(0,an.length)+ah("",ap,"0",true)+ao.slice(an.length)}}return ao
}function ai(ar,ak,ap,al,aj,ao,aq,an){var am=ar>>>0;ap=ap&&am&&{"2":"0b","8":"0","16":"0x"}[ak]||"";ar=ap+ah(am.toString(ak),ao||0,"0",false);
return ad(ar,ap,al,aj,aq,an)}function ab(an,ao,al,aj,am,ak){if(aj!=null){an=an.slice(0,aj)}return ad(an,"",ao,al,am,ak)
}var ac=arguments,af=0,ag=ac[af++];return ag.replace(H.jqplot.sprintf.regex,function(aG,aq,ar,av,aI,aD,ao){if(aG=="%%"){return"%"
}var ax=false,at="",au=false,aF=false,ap=false,an=false;for(var aC=0;ar&&aC<ar.length;aC++){switch(ar.charAt(aC)){case" ":at=" ";
break;case"+":at="+";break;case"-":ax=true;break;case"0":au=true;break;case"#":aF=true;break;case"&":ap=true;
break;case"'":an=true;break}}if(!av){av=0}else{if(av=="*"){av=+ac[af++]}else{if(av.charAt(0)=="*"){av=+ac[av.slice(1,-1)]
}else{av=+av}}}if(av<0){av=-av;ax=true}if(!isFinite(av)){throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")
}if(!aD){aD="fFeE".indexOf(ao)>-1?6:(ao=="d")?0:void (0)}else{if(aD=="*"){aD=+ac[af++]}else{if(aD.charAt(0)=="*"){aD=+ac[aD.slice(1,-1)]
}else{aD=+aD}}}var az=aq?ac[aq.slice(0,-1)]:ac[af++];switch(ao){case"s":if(az==null){return""}return ab(String(az),ax,av,aD,au,ap);
case"c":return ab(String.fromCharCode(+az),ax,av,aD,au,ap);case"b":return ai(az,2,aF,ax,av,aD,au,ap);
case"o":return ai(az,8,aF,ax,av,aD,au,ap);case"x":return ai(az,16,aF,ax,av,aD,au,ap);case"X":return ai(az,16,aF,ax,av,aD,au,ap).toUpperCase();
case"u":return ai(az,10,aF,ax,av,aD,au,ap);case"i":var al=parseInt(+az,10);if(isNaN(al)){return""}var aB=al<0?"-":at;
var aE=an?ae(String(Math.abs(al))):String(Math.abs(al));az=aB+ah(aE,aD,"0",false);return ad(az,aB,ax,av,au,ap);
case"d":var al=Math.round(+az);if(isNaN(al)){return""}var aB=al<0?"-":at;var aE=an?ae(String(Math.abs(al))):String(Math.abs(al));
az=aB+ah(aE,aD,"0",false);return ad(az,aB,ax,av,au,ap);case"e":case"E":case"f":case"F":case"g":case"G":var al=+az;
if(isNaN(al)){return""}var aB=al<0?"-":at;var am=["toExponential","toFixed","toPrecision"]["efg".indexOf(ao.toLowerCase())];
var aH=["toString","toUpperCase"]["eEfFgG".indexOf(ao)%2];var aE=Math.abs(al)[am](aD);aE=an?ae(aE):aE;
az=aB+aE;var aw=ad(az,aB,ax,av,au,ap)[aH]();if(H.jqplot.sprintf.decimalMark!=="."&&H.jqplot.sprintf.decimalMark!==H.jqplot.sprintf.thousandsSeparator){return aw.replace(/\./,H.jqplot.sprintf.decimalMark)
}else{return aw}case"p":case"P":var al=+az;if(isNaN(al)){return""}var aB=al<0?"-":at;var ay=String(Number(Math.abs(al)).toExponential()).split(/e|E/);
var ak=(ay[0].indexOf(".")!=-1)?ay[0].length-1:ay[0].length;var aA=(ay[1]<0)?-ay[1]-1:0;if(Math.abs(al)<1){if(ak+aA<=aD){az=aB+Math.abs(al).toPrecision(ak)
}else{if(ak<=aD-1){az=aB+Math.abs(al).toExponential(ak-1)}else{az=aB+Math.abs(al).toExponential(aD-1)
}}}else{var aj=(ak<=aD)?ak:aD;az=aB+Math.abs(al).toPrecision(aj)}var aH=["toString","toUpperCase"]["pP".indexOf(ao)%2];
return ad(az,aB,ax,av,au,ap)[aH]();case"n":return"";default:return aG}})};H.jqplot.sprintf.thousandsSeparator=",";
H.jqplot.sprintf.decimalMark=".";H.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;
H.jqplot.getSignificantFigures=function(af){var ah=String(Number(Math.abs(af)).toExponential()).split(/e|E/);
var ag=(ah[0].indexOf(".")!=-1)?ah[0].length-1:ah[0].length;var ac=(ah[1]<0)?-ah[1]-1:0;var ab=parseInt(ah[1],10);
var ad=(ab+1>0)?ab+1:0;var ae=(ag<=ad)?0:ag-ab-1;return{significantDigits:ag,digitsLeft:ad,digitsRight:ae,zeros:ac,exponent:ab}
};H.jqplot.getPrecision=function(ab){return H.jqplot.getSignificantFigures(ab).digitsRight}})(jQuery);
var backCompat=$.uiBackCompat!==false;$.jqplot.effects={effect:{}};var dataSpace="jqplot.storage.";$.extend($.jqplot.effects,{version:"1.9pre",save:function(b,c){for(var a=0;
a<c.length;a++){if(c[a]!==null){b.data(dataSpace+c[a],b[0].style[c[a]])}}},restore:function(b,c){for(var a=0;
a<c.length;a++){if(c[a]!==null){b.css(c[a],b.data(dataSpace+c[a]))}}},setMode:function(a,b){if(b==="toggle"){b=a.is(":hidden")?"show":"hide"
}return b},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper")){return b.parent()}var c={width:b.outerWidth(true),height:b.outerHeight(true),"float":b.css("float")},e=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),a={width:b.width(),height:b.height()},d=document.activeElement;
b.wrap(e);if(b[0]===d||$.contains(b[0],d)){$(d).focus()}e=b.parent();if(b.css("position")==="static"){e.css({position:"relative"});
b.css({position:"relative"})}else{$.extend(c,{position:b.css("position"),zIndex:b.css("z-index")});$.each(["top","left","bottom","right"],function(f,g){c[g]=b.css(g);
if(isNaN(parseInt(c[g],10))){c[g]="auto"}});b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}b.css(a);return e.css(c).show()},removeWrapper:function(a){var b=document.activeElement;if(a.parent().is(".ui-effects-wrapper")){a.parent().replaceWith(a);
if(a[0]===b||$.contains(a[0],b)){$(b).focus()}}return a}});function _normalizeArguments(b,a,c,d){if($.isPlainObject(b)){return b
}b={effect:b};if(a===undefined){a={}}if($.isFunction(a)){d=a;c=null;a={}}if($.type(a)==="number"||$.fx.speeds[a]){d=c;
c=a;a={}}if($.isFunction(c)){d=c;c=null}if(a){$.extend(b,a)}c=c||a.duration;b.duration=$.fx.off?0:typeof c==="number"?c:c in $.fx.speeds?$.fx.speeds[c]:$.fx.speeds._default;
b.complete=d||a.complete;return b}function standardSpeed(a){if(!a||typeof a==="number"||$.fx.speeds[a]){return true
}if(typeof a==="string"&&!$.jqplot.effects.effect[a]){if(backCompat&&$.jqplot.effects[a]){return false
}return true}return false}$.fn.extend({jqplotEffect:function(i,j,b,h){var g=_normalizeArguments.apply(this,arguments),d=g.mode,e=g.queue,f=$.jqplot.effects.effect[g.effect],a=!f&&backCompat&&$.jqplot.effects[g.effect];
if($.fx.off||!(f||a)){if(d){return this[d](g.duration,g.complete)}else{return this.each(function(){if(g.complete){g.complete.call(this)
}})}}function c(m){var n=$(this),l=g.complete,o=g.mode;function k(){if($.isFunction(l)){l.call(n[0])}if($.isFunction(m)){m()
}}if(n.is(":hidden")?o==="hide":o==="show"){k()}else{f.call(n[0],g,k)}}if(f){return e===false?this.each(c):this.queue(e||"fx",c)
}else{return a.call(this,{options:g,duration:g.duration,callback:g.complete,mode:g.mode})}}});var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;
$.jqplot.effects.effect.blind=function(c,h){var d=$(this),k=["position","top","bottom","left","right","height","width"],i=$.jqplot.effects.setMode(d,c.mode||"hide"),m=c.direction||"up",f=rvertical.test(m),e=f?"height":"width",j=f?"top":"left",p=rpositivemotion.test(m),g={},n=i==="show",b,a,l;
if(d.parent().is(".ui-effects-wrapper")){$.jqplot.effects.save(d.parent(),k)}else{$.jqplot.effects.save(d,k)
}d.show();l=parseInt(d.css("top"),10);b=$.jqplot.effects.createWrapper(d).css({overflow:"hidden"});a=f?b[e]()+l:b[e]();
g[e]=n?String(a):"0";if(!p){d.css(f?"bottom":"right",0).css(f?"top":"left","").css({position:"absolute"});
g[j]=n?"0":String(a)}if(n){b.css(e,0);if(!p){b.css(j,a)}}b.animate(g,{duration:c.duration,easing:c.easing,queue:false,complete:function(){if(i==="hide"){d.hide()
}$.jqplot.effects.restore(d,k);$.jqplot.effects.removeWrapper(d);h()}})};(function(d){d.jqplot.BarRenderer=function(){d.jqplot.LineRenderer.call(this)
};d.jqplot.BarRenderer.prototype=new d.jqplot.LineRenderer();d.jqplot.BarRenderer.prototype.constructor=d.jqplot.BarRenderer;
d.jqplot.BarRenderer.prototype.init=function(n,p){this.barPadding=8;this.barMargin=10;this.barDirection="vertical";
this.barWidth=null;this.shadowOffset=2;this.shadowDepth=5;this.shadowAlpha=0.08;this.waterfall=false;
this.groups=1;this.varyBarColor=false;this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColors=[];
this.transposedData=true;this.renderer.animation={show:false,direction:"down",speed:3000,_supported:true};
this._type="bar";if(n.highlightMouseDown&&n.highlightMouseOver==null){n.highlightMouseOver=false}d.extend(true,this,n);
d.extend(true,this.renderer,n);this.fill=true;if(this.barDirection==="horizontal"&&this.rendererOptions.animation&&this.rendererOptions.animation.direction==null){this.renderer.animation.direction="left"
}if(this.waterfall){this.fillToZero=false;this.disableStack=true}if(this.barDirection=="vertical"){this._primaryAxis="_xaxis";
this._stackAxis="y";this.fillAxis="y"}else{this._primaryAxis="_yaxis";this._stackAxis="x";this.fillAxis="x"
}this._highlightedPoint=null;this._plotSeriesInfo=null;this._dataColors=[];this._barPoints=[];var o={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,strokeStyle:this.color,fillStyle:this.color,closePath:this.fill};
this.renderer.shapeRenderer.init(o);var m={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,closePath:this.fill};
this.renderer.shadowRenderer.init(m);p.postInitHooks.addOnce(h);p.postDrawHooks.addOnce(i);p.eventListenerHooks.addOnce("jqplotMouseMove",b);
p.eventListenerHooks.addOnce("jqplotMouseDown",a);p.eventListenerHooks.addOnce("jqplotMouseUp",k);p.eventListenerHooks.addOnce("jqplotClick",e);
p.eventListenerHooks.addOnce("jqplotRightClick",l)};function g(s,o,n,v){if(this.rendererOptions.barDirection=="horizontal"){this._stackAxis="x";
this._primaryAxis="_yaxis"}if(this.rendererOptions.waterfall==true){this._data=d.extend(true,[],this.data);
var r=0;var t=(!this.rendererOptions.barDirection||this.rendererOptions.barDirection==="vertical"||this.transposedData===false)?1:0;
for(var p=0;p<this.data.length;p++){r+=this.data[p][t];if(p>0){this.data[p][t]+=this.data[p-1][t]}}this.data[this.data.length]=(t==1)?[this.data.length+1,r]:[r,this.data.length+1];
this._data[this._data.length]=(t==1)?[this._data.length+1,r]:[r,this._data.length+1]}if(this.rendererOptions.groups>1){this.breakOnNull=true;
var m=this.data.length;var u=parseInt(m/this.rendererOptions.groups,10);var q=0;for(var p=u;p<m;p+=u){this.data.splice(p+q,0,[null,null]);
q++}for(p=0;p<this.data.length;p++){if(this._primaryAxis=="_xaxis"){this.data[p][0]=p+1}else{this.data[p][1]=p+1
}}}}d.jqplot.preSeriesInitHooks.push(g);d.jqplot.BarRenderer.prototype.calcSeriesNumbers=function(){var q=0;
var r=0;var p=this[this._primaryAxis];var o,n,t;for(var m=0;m<p._series.length;m++){n=p._series[m];if(n===this){t=m
}if(n.renderer.constructor==d.jqplot.BarRenderer){q+=n.data.length;r+=1}}return[q,r,t]};d.jqplot.BarRenderer.prototype.setBarWidth=function(){var p;
var m=0;var n=0;var r=this[this._primaryAxis];var w,q,u;var v=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);
m=v[0];n=v[1];var t=r.numberTicks;var o=(t-1)/2;if(r.name=="xaxis"||r.name=="x2axis"){if(this._stack){this.barWidth=(r._offsets.max-r._offsets.min)/m*n-this.barMargin
}else{this.barWidth=((r._offsets.max-r._offsets.min)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}else{if(this._stack){this.barWidth=(r._offsets.min-r._offsets.max)/m*n-this.barMargin
}else{this.barWidth=((r._offsets.min-r._offsets.max)/o-this.barPadding*(n-1)-this.barMargin*2)/n}}return[m,n]
};function f(n){var p=[];for(var r=0;r<n.length;r++){var q=d.jqplot.getColorComponents(n[r]);var m=[q[0],q[1],q[2]];
var s=m[0]+m[1]+m[2];for(var o=0;o<3;o++){m[o]=(s>570)?m[o]*0.8:m[o]+0.3*(255-m[o]);m[o]=parseInt(m[o],10)
}p.push("rgb("+m[0]+","+m[1]+","+m[2]+")")}return p}d.jqplot.BarRenderer.prototype.draw=function(D,J,p){var G;
var z=d.extend({},p);var u=(z.shadow!=undefined)?z.shadow:this.shadow;var M=(z.showLine!=undefined)?z.showLine:this.showLine;
var E=(z.fill!=undefined)?z.fill:this.fill;var o=this.xaxis;var H=this.yaxis;var x=this._xaxis.series_u2p;
var I=this._yaxis.series_u2p;var C,B;this._dataColors=[];this._barPoints=[];if(this.barWidth==null){this.renderer.setBarWidth.call(this)
}var L=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);var w=L[0];var v=L[1];var r=L[2];
var F=[];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(v/2-0.5)+r)*(this.barWidth+this.barPadding)
}if(M){var t=new d.jqplot.ColorGenerator(this.negativeSeriesColors);var A=new d.jqplot.ColorGenerator(this.seriesColors);
var K=t.get(this.index);if(!this.useNegativeColors){K=z.fillStyle}var s=z.fillStyle;var q;var N;var n;
if(this.barDirection=="vertical"){for(var G=0;G<J.length;G++){if(!this._stack&&this.data[G][1]==null){continue
}F=[];q=J[G][0]+this._barNudge;n;if(this._stack&&this._prevGridData.length){n=this._prevGridData[G][1];
if(n===null){n=this._yaxis.series_u2p(0)}}else{if(this.fillToZero){n=this._yaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){n=this.gridData[G-1][1]
}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)
}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){n=this._yaxis.series_u2p(0)
}else{if(this._yaxis.min>0){n=D.canvas.height}else{n=0}}}else{n=D.canvas.height}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()
}else{z.fillStyle=A.next()}}else{z.fillStyle=K}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()
}else{z.fillStyle=s}}if(!this.fillToZero||this._plotData[G][1]>=0){F.push([q-this.barWidth/2,n]);F.push([q-this.barWidth/2,J[G][1]]);
F.push([q+this.barWidth/2,J[G][1]]);F.push([q+this.barWidth/2,n])}else{F.push([q-this.barWidth/2,J[G][1]]);
F.push([q-this.barWidth/2,n]);F.push([q+this.barWidth/2,n]);F.push([q+this.barWidth/2,J[G][1]])}this._barPoints.push(F);
if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)
}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}else{if(this.barDirection=="horizontal"){for(var G=0;
G<J.length;G++){if(this.data[G][0]==null){continue}F=[];q=J[G][1]-this._barNudge;N;if(this._stack&&this._prevGridData.length){N=this._prevGridData[G][0]
}else{if(this.fillToZero){N=this._xaxis.series_u2p(0)}else{if(this.waterfall&&G>0&&G<this.gridData.length-1){N=this.gridData[G-1][1]
}else{if(this.waterfall&&G==0&&G<this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)
}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{if(this.waterfall&&G==this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){N=this._xaxis.series_u2p(0)
}else{if(this._xaxis.min>0){N=0}else{N=D.canvas.width}}}else{N=0}}}}}if((this.fillToZero&&this._plotData[G][1]<0)||(this.waterfall&&this._data[G][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){z.fillStyle=t.next()
}else{z.fillStyle=A.next()}}}else{if(this.varyBarColor&&!this._stack){z.fillStyle=A.next()}else{z.fillStyle=s
}}if(!this.fillToZero||this._plotData[G][0]>=0){F.push([N,q+this.barWidth/2]);F.push([N,q-this.barWidth/2]);
F.push([J[G][0],q-this.barWidth/2]);F.push([J[G][0],q+this.barWidth/2])}else{F.push([J[G][0],q+this.barWidth/2]);
F.push([J[G][0],q-this.barWidth/2]);F.push([N,q-this.barWidth/2]);F.push([N,q+this.barWidth/2])}this._barPoints.push(F);
if(u&&!this._stack){var y=d.extend(true,{},z);delete y.fillStyle;this.renderer.shadowRenderer.draw(D,F,y)
}var m=z.fillStyle||this.color;this._dataColors.push(m);this.renderer.shapeRenderer.draw(D,F,z)}}}}if(this.highlightColors.length==0){this.highlightColors=d.jqplot.computeHighlightColors(this._dataColors)
}else{if(typeof(this.highlightColors)=="string"){var L=this.highlightColors;this.highlightColors=[];for(var G=0;
G<this._dataColors.length;G++){this.highlightColors.push(L)}}}};d.jqplot.BarRenderer.prototype.drawShadow=function(y,E,o){var B;
var v=(o!=undefined)?o:{};var r=(v.shadow!=undefined)?v.shadow:this.shadow;var G=(v.showLine!=undefined)?v.showLine:this.showLine;
var z=(v.fill!=undefined)?v.fill:this.fill;var n=this.xaxis;var C=this.yaxis;var u=this._xaxis.series_u2p;
var D=this._yaxis.series_u2p;var x,A,w,t,s,q;if(this._stack&&this.shadow){if(this.barWidth==null){this.renderer.setBarWidth.call(this)
}var F=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);t=F[0];s=F[1];q=F[2];if(this._stack){this._barNudge=0
}else{this._barNudge=(-Math.abs(s/2-0.5)+q)*(this.barWidth+this.barPadding)}if(G){if(this.barDirection=="vertical"){for(var B=0;
B<E.length;B++){if(this.data[B][1]==null){continue}A=[];var p=E[B][0]+this._barNudge;var m;if(this._stack&&this._prevGridData.length){m=this._prevGridData[B][1]
}else{if(this.fillToZero){m=this._yaxis.series_u2p(0)}else{m=y.canvas.height}}A.push([p-this.barWidth/2,m]);
A.push([p-this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,E[B][1]]);A.push([p+this.barWidth/2,m]);
this.renderer.shadowRenderer.draw(y,A,v)}}else{if(this.barDirection=="horizontal"){for(var B=0;B<E.length;
B++){if(this.data[B][0]==null){continue}A=[];var p=E[B][1]-this._barNudge;var H;if(this._stack&&this._prevGridData.length){H=this._prevGridData[B][0]
}else{H=0}A.push([H,p+this.barWidth/2]);A.push([E[B][0],p+this.barWidth/2]);A.push([E[B][0],p-this.barWidth/2]);
A.push([H,p-this.barWidth/2]);this.renderer.shadowRenderer.draw(y,A,v)}}}}}};function h(p,o,m){for(var n=0;
n<this.series.length;n++){if(this.series[n].renderer.constructor==d.jqplot.BarRenderer){if(this.series[n].highlightMouseOver){this.series[n].highlightMouseDown=false
}}}}function i(){if(this.plugins.barRenderer&&this.plugins.barRenderer.highlightCanvas){this.plugins.barRenderer.highlightCanvas.resetCanvas();
this.plugins.barRenderer.highlightCanvas=null}this.plugins.barRenderer={highlightedSeriesIndex:null};
this.plugins.barRenderer.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-barRenderer-highlight-canvas",this._plotDimensions,this));
this.plugins.barRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind("mouseleave",{plot:this},function(m){j(m.data.plot)
})}function c(t,r,p,o){var n=t.series[r];var m=t.plugins.barRenderer.highlightCanvas;m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);
n._highlightedPoint=p;t.plugins.barRenderer.highlightedSeriesIndex=r;var q={fillStyle:n.highlightColors[p]};
n.renderer.shapeRenderer.draw(m._ctx,o,q);m=null}function j(o){var m=o.plugins.barRenderer.highlightCanvas;
m._ctx.clearRect(0,0,m._ctx.canvas.width,m._ctx.canvas.height);for(var n=0;n<o.series.length;n++){o.series[n]._highlightedPoint=null
}o.plugins.barRenderer.highlightedSeriesIndex=null;o.target.trigger("jqplotDataUnhighlight");m=null}function b(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];
var n=jQuery.Event("jqplotDataMouseOver");n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o);if(r.series[o[0]].highlightMouseOver&&!(o[0]==r.plugins.barRenderer.highlightedSeriesIndex&&o[1]==r.series[o[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");
m.which=q.which;m.pageX=q.pageX;m.pageY=q.pageY;r.target.trigger(m,o);c(r,s.seriesIndex,s.pointIndex,s.points)
}}else{if(s==null){j(r)}}}function a(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];if(q.series[n[0]].highlightMouseDown&&!(n[0]==q.plugins.barRenderer.highlightedSeriesIndex&&n[1]==q.series[n[0]]._highlightedPoint)){var m=jQuery.Event("jqplotDataHighlight");
m.which=p.which;m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n);c(q,r.seriesIndex,r.pointIndex,r.points)
}}else{if(r==null){j(q)}}}function k(o,n,r,q,p){var m=p.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&p.series[m].highlightMouseDown){j(p)
}}function e(p,o,s,r,q){if(r){var n=[r.seriesIndex,r.pointIndex,r.data];var m=jQuery.Event("jqplotDataClick");
m.which=p.which;m.pageX=p.pageX;m.pageY=p.pageY;q.target.trigger(m,n)}}function l(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];
var m=r.plugins.barRenderer.highlightedSeriesIndex;if(m!=null&&r.series[m].highlightMouseDown){j(r)}var n=jQuery.Event("jqplotDataRightClick");
n.which=q.which;n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o)}}})(jQuery);(function(a){a.jqplot.CanvasAxisTickRenderer=function(b){this.mark="outside";
this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.angle=0;this.markSize=4;this.show=true;
this.showLabel=true;this.labelPosition="auto";this.label="";this.value=null;this._styles={};this.formatter=a.jqplot.DefaultTickFormatter;
this.formatString="";this.prefix="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';this.fontSize="10pt";
this.fontWeight="normal";this.fontStretch=1;this.textColor="#ffffff";this.enableFontSupport=true;this.pt2px=null;
this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};a.extend(true,this,b);
var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};
if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){if(a.jqplot.support_canvas_text()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)
}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)
}};a.jqplot.CanvasAxisTickRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})
};a.jqplot.CanvasAxisTickRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)
}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);
return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)
}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);
return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;
return b};a.jqplot.CanvasAxisTickRenderer.prototype.setTick=function(b,d,c){this.value=b;if(c){this.isMinorTick=true
}return this};a.jqplot.CanvasAxisTickRenderer.prototype.draw=function(c,f){if(!this.label){this.label=this.prefix+this.formatter(this.formatString,this.value)
}if(this._elem){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))
}this._elem.emptyForce();this._elem=null}var e=f.canvasManager.getCanvas();this._textRenderer.setText(this.label,c);
var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;
e.style.textAlign="left";e.style.position="absolute";e=f.canvasManager.initCanvas(e);this._elem=a(e);
this._elem.css(this._styles);this._elem.addClass("jqplot-"+this.axis+"-tick");e=null;return this._elem
};a.jqplot.CanvasAxisTickRenderer.prototype.pack=function(){this._textRenderer.draw(this._elem.get(0).getContext("2d"),this.label)
}})(jQuery);(function(a){a.jqplot.CanvasTextRenderer=function(b){this.fontStyle="normal";this.fontVariant="normal";
this.fontWeight="normal";this.fontSize="10px";this.fontFamily="sans-serif";this.fontStretch=1;this.fillStyle="#666666";
this.angle=0;this.textAlign="start";this.textBaseline="alphabetic";this.text;this.width;this.height;this.pt2px=1.28;
a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);this.setHeight()};
a.jqplot.CanvasTextRenderer.prototype.init=function(b){a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);
this.setHeight()};a.jqplot.CanvasTextRenderer.prototype.normalizeFontSize=function(b){b=String(b);var c=parseFloat(b);
if(b.indexOf("px")>-1){return c/this.pt2px}else{if(b.indexOf("pt")>-1){return c}else{if(b.indexOf("em")>-1){return c*12
}else{if(b.indexOf("%")>-1){return c*12/100}else{return c/this.pt2px}}}}};a.jqplot.CanvasTextRenderer.prototype.fontWeight2Float=function(b){if(Number(b)){return b/400
}else{switch(b){case"normal":return 1;break;case"bold":return 1.75;break;case"bolder":return 2.25;break;
case"lighter":return 0.75;break;default:return 1;break}}};a.jqplot.CanvasTextRenderer.prototype.getText=function(){return this.text
};a.jqplot.CanvasTextRenderer.prototype.setText=function(c,b){this.text=c;this.setWidth(b);return this
};a.jqplot.CanvasTextRenderer.prototype.getWidth=function(b){return this.width};a.jqplot.CanvasTextRenderer.prototype.setWidth=function(c,b){if(!b){this.width=this.measure(c,this.text)
}else{this.width=b}return this};a.jqplot.CanvasTextRenderer.prototype.getHeight=function(b){return this.height
};a.jqplot.CanvasTextRenderer.prototype.setHeight=function(b){if(!b){this.height=this.normalizedFontSize*this.pt2px
}else{this.height=b}return this};a.jqplot.CanvasTextRenderer.prototype.letter=function(b){return this.letters[b]
};a.jqplot.CanvasTextRenderer.prototype.ascent=function(){return this.normalizedFontSize};a.jqplot.CanvasTextRenderer.prototype.descent=function(){return 7*this.normalizedFontSize/25
};a.jqplot.CanvasTextRenderer.prototype.measure=function(d,g){var f=0;var b=g.length;for(var e=0;e<b;
e++){var h=this.letter(g.charAt(e));if(h){f+=h.width*this.normalizedFontSize/25*this.fontStretch}}return f
};a.jqplot.CanvasTextRenderer.prototype.draw=function(s,n){var r=0;var o=this.height*0.72;var p=0;var l=n.length;
var k=this.normalizedFontSize/25;s.save();var h,f;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){h=0;
f=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){h=Math.sin(this.angle)*this.height;
f=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){h=-Math.cos(this.angle)*this.width;
f=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){h=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;
f=-Math.cos(this.angle)*this.height}}}}s.strokeStyle=this.fillStyle;s.fillStyle=this.fillStyle;s.translate(h,f);
s.rotate(this.angle);s.lineCap="round";var t=(this.normalizedFontSize>30)?2:2+(30-this.normalizedFontSize)/20;
s.lineWidth=t*k*this.fontWeight2Float(this.fontWeight);for(var g=0;g<l;g++){var m=this.letter(n.charAt(g));
if(!m){continue}s.beginPath();var e=1;var b=0;for(var d=0;d<m.points.length;d++){var q=m.points[d];if(q[0]==-1&&q[1]==-1){e=1;
continue}if(e){s.moveTo(r+q[0]*k*this.fontStretch,o-q[1]*k);e=false}else{s.lineTo(r+q[0]*k*this.fontStretch,o-q[1]*k)
}}s.stroke();r+=m.width*k*this.fontStretch}s.restore();return p};a.jqplot.CanvasTextRenderer.prototype.letters={" ":{width:16,points:[]},"!":{width:10,points:[[5,21],[5,7],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},'"':{width:16,points:[[4,21],[4,14],[-1,-1],[12,21],[12,14]]},"#":{width:21,points:[[11,25],[4,-7],[-1,-1],[17,25],[10,-7],[-1,-1],[4,12],[18,12],[-1,-1],[3,6],[17,6]]},"$":{width:20,points:[[8,25],[8,-4],[-1,-1],[12,25],[12,-4],[-1,-1],[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},"%":{width:24,points:[[21,21],[3,0],[-1,-1],[8,21],[10,19],[10,17],[9,15],[7,14],[5,14],[3,16],[3,18],[4,20],[6,21],[8,21],[10,20],[13,19],[16,19],[19,20],[21,21],[-1,-1],[17,7],[15,6],[14,4],[14,2],[16,0],[18,0],[20,1],[21,3],[21,5],[19,7],[17,7]]},"&":{width:26,points:[[23,12],[23,13],[22,14],[21,14],[20,13],[19,11],[17,6],[15,3],[13,1],[11,0],[7,0],[5,1],[4,2],[3,4],[3,6],[4,8],[5,9],[12,13],[13,14],[14,16],[14,18],[13,20],[11,21],[9,20],[8,18],[8,16],[9,13],[11,10],[16,3],[18,1],[20,0],[22,0],[23,1],[23,2]]},"'":{width:10,points:[[5,19],[4,20],[5,21],[6,20],[6,18],[5,16],[4,15]]},"(":{width:14,points:[[11,25],[9,23],[7,20],[5,16],[4,11],[4,7],[5,2],[7,-2],[9,-5],[11,-7]]},")":{width:14,points:[[3,25],[5,23],[7,20],[9,16],[10,11],[10,7],[9,2],[7,-2],[5,-5],[3,-7]]},"*":{width:16,points:[[8,21],[8,9],[-1,-1],[3,18],[13,12],[-1,-1],[13,18],[3,12]]},"+":{width:26,points:[[13,18],[13,0],[-1,-1],[4,9],[22,9]]},",":{width:10,points:[[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"-":{width:18,points:[[6,9],[12,9]]},".":{width:10,points:[[5,2],[4,1],[5,0],[6,1],[5,2]]},"/":{width:22,points:[[20,25],[2,-7]]},"0":{width:20,points:[[9,21],[6,20],[4,17],[3,12],[3,9],[4,4],[6,1],[9,0],[11,0],[14,1],[16,4],[17,9],[17,12],[16,17],[14,20],[11,21],[9,21]]},"1":{width:20,points:[[6,17],[8,18],[11,21],[11,0]]},"2":{width:20,points:[[4,16],[4,17],[5,19],[6,20],[8,21],[12,21],[14,20],[15,19],[16,17],[16,15],[15,13],[13,10],[3,0],[17,0]]},"3":{width:20,points:[[5,21],[16,21],[10,13],[13,13],[15,12],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"4":{width:20,points:[[13,21],[3,7],[18,7],[-1,-1],[13,21],[13,0]]},"5":{width:20,points:[[15,21],[5,21],[4,12],[5,13],[8,14],[11,14],[14,13],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"6":{width:20,points:[[16,18],[15,20],[12,21],[10,21],[7,20],[5,17],[4,12],[4,7],[5,3],[7,1],[10,0],[11,0],[14,1],[16,3],[17,6],[17,7],[16,10],[14,12],[11,13],[10,13],[7,12],[5,10],[4,7]]},"7":{width:20,points:[[17,21],[7,0],[-1,-1],[3,21],[17,21]]},"8":{width:20,points:[[8,21],[5,20],[4,18],[4,16],[5,14],[7,13],[11,12],[14,11],[16,9],[17,7],[17,4],[16,2],[15,1],[12,0],[8,0],[5,1],[4,2],[3,4],[3,7],[4,9],[6,11],[9,12],[13,13],[15,14],[16,16],[16,18],[15,20],[12,21],[8,21]]},"9":{width:20,points:[[16,14],[15,11],[13,9],[10,8],[9,8],[6,9],[4,11],[3,14],[3,15],[4,18],[6,20],[9,21],[10,21],[13,20],[15,18],[16,14],[16,9],[15,4],[13,1],[10,0],[8,0],[5,1],[4,3]]},":":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},";":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"<":{width:24,points:[[20,18],[4,9],[20,0]]},"=":{width:26,points:[[4,12],[22,12],[-1,-1],[4,6],[22,6]]},">":{width:24,points:[[4,18],[20,9],[4,0]]},"?":{width:18,points:[[3,16],[3,17],[4,19],[5,20],[7,21],[11,21],[13,20],[14,19],[15,17],[15,15],[14,13],[13,12],[9,10],[9,7],[-1,-1],[9,2],[8,1],[9,0],[10,1],[9,2]]},"@":{width:27,points:[[18,13],[17,15],[15,16],[12,16],[10,15],[9,14],[8,11],[8,8],[9,6],[11,5],[14,5],[16,6],[17,8],[-1,-1],[12,16],[10,14],[9,11],[9,8],[10,6],[11,5],[-1,-1],[18,16],[17,8],[17,6],[19,5],[21,5],[23,7],[24,10],[24,12],[23,15],[22,17],[20,19],[18,20],[15,21],[12,21],[9,20],[7,19],[5,17],[4,15],[3,12],[3,9],[4,6],[5,4],[7,2],[9,1],[12,0],[15,0],[18,1],[20,2],[21,3],[-1,-1],[19,16],[18,8],[18,6],[19,5]]},A:{width:18,points:[[9,21],[1,0],[-1,-1],[9,21],[17,0],[-1,-1],[4,7],[14,7]]},B:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[-1,-1],[4,11],[13,11],[16,10],[17,9],[18,7],[18,4],[17,2],[16,1],[13,0],[4,0]]},C:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5]]},D:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[11,21],[14,20],[16,18],[17,16],[18,13],[18,8],[17,5],[16,3],[14,1],[11,0],[4,0]]},E:{width:19,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11],[-1,-1],[4,0],[17,0]]},F:{width:18,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11]]},G:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[18,8],[-1,-1],[13,8],[18,8]]},H:{width:22,points:[[4,21],[4,0],[-1,-1],[18,21],[18,0],[-1,-1],[4,11],[18,11]]},I:{width:8,points:[[4,21],[4,0]]},J:{width:16,points:[[12,21],[12,5],[11,2],[10,1],[8,0],[6,0],[4,1],[3,2],[2,5],[2,7]]},K:{width:21,points:[[4,21],[4,0],[-1,-1],[18,21],[4,7],[-1,-1],[9,12],[18,0]]},L:{width:17,points:[[4,21],[4,0],[-1,-1],[4,0],[16,0]]},M:{width:24,points:[[4,21],[4,0],[-1,-1],[4,21],[12,0],[-1,-1],[20,21],[12,0],[-1,-1],[20,21],[20,0]]},N:{width:22,points:[[4,21],[4,0],[-1,-1],[4,21],[18,0],[-1,-1],[18,21],[18,0]]},O:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21]]},P:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,14],[17,12],[16,11],[13,10],[4,10]]},Q:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21],[-1,-1],[12,4],[18,-2]]},R:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[4,11],[-1,-1],[11,11],[18,0]]},S:{width:20,points:[[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},T:{width:16,points:[[8,21],[8,0],[-1,-1],[1,21],[15,21]]},U:{width:22,points:[[4,21],[4,6],[5,3],[7,1],[10,0],[12,0],[15,1],[17,3],[18,6],[18,21]]},V:{width:18,points:[[1,21],[9,0],[-1,-1],[17,21],[9,0]]},W:{width:24,points:[[2,21],[7,0],[-1,-1],[12,21],[7,0],[-1,-1],[12,21],[17,0],[-1,-1],[22,21],[17,0]]},X:{width:20,points:[[3,21],[17,0],[-1,-1],[17,21],[3,0]]},Y:{width:18,points:[[1,21],[9,11],[9,0],[-1,-1],[17,21],[9,11]]},Z:{width:20,points:[[17,21],[3,0],[-1,-1],[3,21],[17,21],[-1,-1],[3,0],[17,0]]},"[":{width:14,points:[[4,25],[4,-7],[-1,-1],[5,25],[5,-7],[-1,-1],[4,25],[11,25],[-1,-1],[4,-7],[11,-7]]},"\\":{width:14,points:[[0,21],[14,-3]]},"]":{width:14,points:[[9,25],[9,-7],[-1,-1],[10,25],[10,-7],[-1,-1],[3,25],[10,25],[-1,-1],[3,-7],[10,-7]]},"^":{width:16,points:[[6,15],[8,18],[10,15],[-1,-1],[3,12],[8,17],[13,12],[-1,-1],[8,17],[8,0]]},_:{width:16,points:[[0,-2],[16,-2]]},"`":{width:10,points:[[6,21],[5,20],[4,18],[4,16],[5,15],[6,16],[5,17]]},a:{width:19,points:[[15,14],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},b:{width:19,points:[[4,21],[4,0],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},c:{width:18,points:[[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},d:{width:19,points:[[15,21],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},e:{width:18,points:[[3,8],[15,8],[15,10],[14,12],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},f:{width:12,points:[[10,21],[8,21],[6,20],[5,17],[5,0],[-1,-1],[2,14],[9,14]]},g:{width:19,points:[[15,14],[15,-2],[14,-5],[13,-6],[11,-7],[8,-7],[6,-6],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},h:{width:19,points:[[4,21],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},i:{width:8,points:[[3,21],[4,20],[5,21],[4,22],[3,21],[-1,-1],[4,14],[4,0]]},j:{width:10,points:[[5,21],[6,20],[7,21],[6,22],[5,21],[-1,-1],[6,14],[6,-3],[5,-6],[3,-7],[1,-7]]},k:{width:17,points:[[4,21],[4,0],[-1,-1],[14,14],[4,4],[-1,-1],[8,8],[15,0]]},l:{width:8,points:[[4,21],[4,0]]},m:{width:30,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0],[-1,-1],[15,10],[18,13],[20,14],[23,14],[25,13],[26,10],[26,0]]},n:{width:19,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},o:{width:19,points:[[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3],[16,6],[16,8],[15,11],[13,13],[11,14],[8,14]]},p:{width:19,points:[[4,14],[4,-7],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},q:{width:19,points:[[15,14],[15,-7],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},r:{width:13,points:[[4,14],[4,0],[-1,-1],[4,8],[5,11],[7,13],[9,14],[12,14]]},s:{width:17,points:[[14,11],[13,13],[10,14],[7,14],[4,13],[3,11],[4,9],[6,8],[11,7],[13,6],[14,4],[14,3],[13,1],[10,0],[7,0],[4,1],[3,3]]},t:{width:12,points:[[5,21],[5,4],[6,1],[8,0],[10,0],[-1,-1],[2,14],[9,14]]},u:{width:19,points:[[4,14],[4,4],[5,1],[7,0],[10,0],[12,1],[15,4],[-1,-1],[15,14],[15,0]]},v:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0]]},w:{width:22,points:[[3,14],[7,0],[-1,-1],[11,14],[7,0],[-1,-1],[11,14],[15,0],[-1,-1],[19,14],[15,0]]},x:{width:17,points:[[3,14],[14,0],[-1,-1],[14,14],[3,0]]},y:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0],[6,-4],[4,-6],[2,-7],[1,-7]]},z:{width:17,points:[[14,14],[3,0],[-1,-1],[3,14],[14,14],[-1,-1],[3,0],[14,0]]},"{":{width:14,points:[[9,25],[7,24],[6,23],[5,21],[5,19],[6,17],[7,16],[8,14],[8,12],[6,10],[-1,-1],[7,24],[6,22],[6,20],[7,18],[8,17],[9,15],[9,13],[8,11],[4,9],[8,7],[9,5],[9,3],[8,1],[7,0],[6,-2],[6,-4],[7,-6],[-1,-1],[6,8],[8,6],[8,4],[7,2],[6,1],[5,-1],[5,-3],[6,-5],[7,-6],[9,-7]]},"|":{width:8,points:[[4,25],[4,-7]]},"}":{width:14,points:[[5,25],[7,24],[8,23],[9,21],[9,19],[8,17],[7,16],[6,14],[6,12],[8,10],[-1,-1],[7,24],[8,22],[8,20],[7,18],[6,17],[5,15],[5,13],[6,11],[10,9],[6,7],[5,5],[5,3],[6,1],[7,0],[8,-2],[8,-4],[7,-6],[-1,-1],[8,8],[6,6],[6,4],[7,2],[8,1],[9,-1],[9,-3],[8,-5],[7,-6],[5,-7]]},"~":{width:24,points:[[3,6],[3,8],[4,11],[6,12],[8,12],[10,11],[14,8],[16,7],[18,7],[20,8],[21,10],[-1,-1],[3,8],[4,10],[6,11],[8,11],[10,10],[14,7],[16,6],[18,6],[20,7],[21,10],[21,12]]}};
a.jqplot.CanvasFontRenderer=function(b){b=b||{};if(!b.pt2px){b.pt2px=1.5}a.jqplot.CanvasTextRenderer.call(this,b)
};a.jqplot.CanvasFontRenderer.prototype=new a.jqplot.CanvasTextRenderer({});a.jqplot.CanvasFontRenderer.prototype.constructor=a.jqplot.CanvasFontRenderer;
a.jqplot.CanvasFontRenderer.prototype.measure=function(c,e){var d=this.fontSize+" "+this.fontFamily;c.save();
c.font=d;var b=c.measureText(e).width;c.restore();return b};a.jqplot.CanvasFontRenderer.prototype.draw=function(e,g){var c=0;
var h=this.height*0.72;e.save();var d,b;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){d=0;
b=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){d=Math.sin(this.angle)*this.height;
b=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){d=-Math.cos(this.angle)*this.width;
b=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){d=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;
b=-Math.cos(this.angle)*this.height}}}}e.strokeStyle=this.fillStyle;e.fillStyle=this.fillStyle;var f=this.fontSize+" "+this.fontFamily;
e.font=f;e.translate(d,b);e.rotate(this.angle);e.fillText(g,c,h);e.restore()}})(jQuery);(function(a){a.jqplot.CanvasAxisLabelRenderer=function(b){this.angle=0;
this.axis;this.show=true;this.showLabel=true;this.label="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';
this.fontSize="11pt";this.fontWeight="normal";this.fontStretch=1;this.textColor="#666666";this.enableFontSupport=true;
this.pt2px=null;this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};
a.extend(true,this,b);if(b.angle==null&&this.axis!="xaxis"&&this.axis!="x2axis"){this.angle=-90}var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};
if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){if(a.jqplot.support_canvas_text()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)
}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)
}};a.jqplot.CanvasAxisLabelRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})
};a.jqplot.CanvasAxisLabelRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)
}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);
return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)
}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);
return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;
return b};a.jqplot.CanvasAxisLabelRenderer.prototype.draw=function(c,f){if(this._elem){if(a.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(this._elem.get(0))
}this._elem.emptyForce();this._elem=null}var e=f.canvasManager.getCanvas();this._textRenderer.setText(this.label,c);
var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;
e=f.canvasManager.initCanvas(e);this._elem=a(e);this._elem.css({position:"absolute"});this._elem.addClass("jqplot-"+this.axis+"-label");
e=null;return this._elem};a.jqplot.CanvasAxisLabelRenderer.prototype.pack=function(){this._textRenderer.draw(this._elem.get(0).getContext("2d"),this.label)
}})(jQuery);(function(d){d.jqplot.eventListenerHooks.push(["jqplotMouseMove",f]);d.jqplot.Highlighter=function(h){this.show=d.jqplot.config.enablePlugins;
this.markerRenderer=new d.jqplot.MarkerRenderer({shadow:false});this.showMarker=true;this.lineWidthAdjust=2.5;
this.sizeAdjust=5;this.showTooltip=true;this.tooltipLocation="nw";this.fadeTooltip=true;this.tooltipFadeSpeed="fast";
this.tooltipOffset=2;this.tooltipAxes="both";this.tooltipSeparator=", ";this.tooltipContentEditor=null;
this.useAxesFormatters=true;this.tooltipFormatString="%.5P";this.formatString=null;this.yvalues=1;this.bringSeriesToFront=false;
this._tooltipElem;this.isHighlighting=false;this.currentNeighbor=null;d.extend(true,this,h)};var b=["nw","n","ne","e","se","s","sw","w"];
var e={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var c=["se","s","sw","w","nw","n","ne","e"];d.jqplot.Highlighter.init=function(k,j,i){var h=i||{};
this.plugins.highlighter=new d.jqplot.Highlighter(h.highlighter)};d.jqplot.Highlighter.parseOptions=function(i,h){this.showHighlight=true
};d.jqplot.Highlighter.postPlotDraw=function(){if(this.plugins.highlighter&&this.plugins.highlighter.highlightCanvas){this.plugins.highlighter.highlightCanvas.resetCanvas();
this.plugins.highlighter.highlightCanvas=null}if(this.plugins.highlighter&&this.plugins.highlighter._tooltipElem){this.plugins.highlighter._tooltipElem.emptyForce();
this.plugins.highlighter._tooltipElem=null}this.plugins.highlighter.highlightCanvas=new d.jqplot.GenericCanvas();
this.eventCanvas._elem.before(this.plugins.highlighter.highlightCanvas.createElement(this._gridPadding,"jqplot-highlight-canvas",this._plotDimensions,this));
this.plugins.highlighter.highlightCanvas.setContext();var h=document.createElement("div");this.plugins.highlighter._tooltipElem=d(h);
h=null;this.plugins.highlighter._tooltipElem.addClass("jqplot-highlighter-tooltip");this.plugins.highlighter._tooltipElem.css({position:"absolute",display:"none"});
this.eventCanvas._elem.before(this.plugins.highlighter._tooltipElem)};d.jqplot.preInitHooks.push(d.jqplot.Highlighter.init);
d.jqplot.preParseSeriesOptionsHooks.push(d.jqplot.Highlighter.parseOptions);d.jqplot.postDrawHooks.push(d.jqplot.Highlighter.postPlotDraw);
function a(m,o){var j=m.plugins.highlighter;var p=m.series[o.seriesIndex];var h=p.markerRenderer;var i=j.markerRenderer;
i.style=h.style;i.lineWidth=h.lineWidth+j.lineWidthAdjust;i.size=h.size+j.sizeAdjust;var l=d.jqplot.getColorComponents(h.color);
var n=[l[0],l[1],l[2]];var k=(l[3]>=0.6)?l[3]*0.6:l[3]*(2-l[3]);i.color="rgba("+n[0]+","+n[1]+","+n[2]+","+k+")";
i.init();i.draw(p.gridData[o.pointIndex][0],p.gridData[o.pointIndex][1],j.highlightCanvas._ctx)}function g(A,q,m){var k=A.plugins.highlighter;
var D=k._tooltipElem;var r=q.highlighter||{};var t=d.extend(true,{},k,r);if(t.useAxesFormatters){var w=q._xaxis._ticks[0].formatter;
var h=q._yaxis._ticks[0].formatter;var E=q._xaxis._ticks[0].formatString;var s=q._yaxis._ticks[0].formatString;
var z;var u=w(E,m.data[0]);var l=[];for(var B=1;B<t.yvalues+1;B++){l.push(h(s,m.data[B]))}if(typeof t.formatString==="string"){switch(t.tooltipAxes){case"both":case"xy":l.unshift(u);
l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"yx":l.push(u);l.unshift(t.formatString);
z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;case"x":z=d.jqplot.sprintf.apply(d.jqplot.sprintf,[t.formatString,u]);
break;case"y":l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break;default:l.unshift(u);
l.unshift(t.formatString);z=d.jqplot.sprintf.apply(d.jqplot.sprintf,l);break}}else{switch(t.tooltipAxes){case"both":case"xy":z=u;
for(var B=0;B<l.length;B++){z+=t.tooltipSeparator+l[B]}break;case"yx":z="";for(var B=0;B<l.length;B++){z+=l[B]+t.tooltipSeparator
}z+=u;break;case"x":z=u;break;case"y":z=l.join(t.tooltipSeparator);break;default:z=u;for(var B=0;B<l.length;
B++){z+=t.tooltipSeparator+l[B]}break}}}else{var z;if(typeof t.formatString==="string"){z=d.jqplot.sprintf.apply(d.jqplot.sprintf,[t.formatString].concat(m.data))
}else{if(t.tooltipAxes=="both"||t.tooltipAxes=="xy"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[0])+t.tooltipSeparator+d.jqplot.sprintf(t.tooltipFormatString,m.data[1])
}else{if(t.tooltipAxes=="yx"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[1])+t.tooltipSeparator+d.jqplot.sprintf(t.tooltipFormatString,m.data[0])
}else{if(t.tooltipAxes=="x"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[0])}else{if(t.tooltipAxes=="y"){z=d.jqplot.sprintf(t.tooltipFormatString,m.data[1])
}}}}}}if(d.isFunction(t.tooltipContentEditor)){z=t.tooltipContentEditor(z,m.seriesIndex,m.pointIndex,A)
}D.html(z);var C={x:m.gridData[0],y:m.gridData[1]};var v=0;var j=0.707;if(q.markerRenderer.show==true){v=(q.markerRenderer.size+t.sizeAdjust)/2
}var o=b;if(q.fillToZero&&q.fill&&m.data[1]<0){o=c}switch(o[e[t.tooltipLocation]]){case"nw":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;
var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break;case"n":var p=C.x+A._gridPadding.left-D.outerWidth(true)/2;
var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-v;break;case"ne":var p=C.x+A._gridPadding.left+t.tooltipOffset+j*v;
var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break;case"e":var p=C.x+A._gridPadding.left+t.tooltipOffset+v;
var n=C.y+A._gridPadding.top-D.outerHeight(true)/2;break;case"se":var p=C.x+A._gridPadding.left+t.tooltipOffset+j*v;
var n=C.y+A._gridPadding.top+t.tooltipOffset+j*v;break;case"s":var p=C.x+A._gridPadding.left-D.outerWidth(true)/2;
var n=C.y+A._gridPadding.top+t.tooltipOffset+v;break;case"sw":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;
var n=C.y+A._gridPadding.top+t.tooltipOffset+j*v;break;case"w":var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-v;
var n=C.y+A._gridPadding.top-D.outerHeight(true)/2;break;default:var p=C.x+A._gridPadding.left-D.outerWidth(true)-t.tooltipOffset-j*v;
var n=C.y+A._gridPadding.top-t.tooltipOffset-D.outerHeight(true)-j*v;break}D.css("left",p);D.css("top",n);
if(t.fadeTooltip){D.stop(true,true).fadeIn(t.tooltipFadeSpeed)}else{D.show()}D=null}function f(k,j,n,m,l){var h=l.plugins.highlighter;
var o=l.plugins.cursor;if(h.show){if(m==null&&h.isHighlighting){var i=h.highlightCanvas._ctx;i.clearRect(0,0,i.canvas.width,i.canvas.height);
if(h.fadeTooltip){h._tooltipElem.fadeOut(h.tooltipFadeSpeed)}else{h._tooltipElem.hide()}if(h.bringSeriesToFront){l.restorePreviousSeriesOrder()
}h.isHighlighting=false;h.currentNeighbor=null;i=null}else{if(m!=null&&l.series[m.seriesIndex].showHighlight&&!h.isHighlighting){h.isHighlighting=true;
h.currentNeighbor=m;if(h.showMarker){a(l,m)}if(h.showTooltip&&(!o||!o._zoom.started)){g(l,l.series[m.seriesIndex],m)
}if(h.bringSeriesToFront){l.moveSeriesToFront(m.seriesIndex)}}else{if(m!=null&&h.isHighlighting&&h.currentNeighbor!=m){if(l.series[m.seriesIndex].showHighlight){var i=h.highlightCanvas._ctx;
i.clearRect(0,0,i.canvas.width,i.canvas.height);h.isHighlighting=true;h.currentNeighbor=m;if(h.showMarker){a(l,m)
}if(h.showTooltip&&(!o||!o._zoom.started)){g(l,l.series[m.seriesIndex],m)}if(h.bringSeriesToFront){l.moveSeriesToFront(m.seriesIndex)
}}}}}}}})(jQuery);