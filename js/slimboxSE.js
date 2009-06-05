(function($){
var _2=$(window),_3,_4,_5=-1,_6,_7,_8,_9,_a,_b,_c,_d=!window.XMLHttpRequest,_e=window.opera&&(document.compatMode=="CSS1Compat")&&($.browser.version>=9.3),_f=document.documentElement,_10=false,_11={},_12=new Image(),_13=new Image(),_14,_15,_16,_17,swf,_19,_1a,_1b,_1c,_1d,_1e;
$(function(){
$("body").append($([_14=$("<div id=\"lbOverlay\" />")[0],_15=$("<div id=\"lbCenter\" />")[0],_1b=$("<div id=\"lbBottomContainer\" />")[0]]).css("display","none"));
_16=$("<div id=\"lbImage\" />").appendTo(_15).append(_17=$("<div style=\"position: relative;\" />").append([swf=$("<div id=\"swf\" />")[0],_19=$("<a id=\"lbPrevLink\" href=\"#\" />").click(_1f)[0],_1a=$("<a id=\"lbNextLink\" href=\"#\" />").click(_20)[0]])[0])[0];
_1c=$("<div id=\"lbBottom\" />").appendTo(_1b).append([$("<a id=\"lbCloseLink\" href=\"#\" />").add(_14).click(_21)[0],_1d=$("<div id=\"lbCaption\" />")[0],_1e=$("<div id=\"lbNumber\" />")[0],$("<div style=\"clear: both;\" />")[0]])[0];
});
$.slimbox=function(_22,_23,_24){
_3=$.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},_24);
if(typeof _22=="string"){
_22=[[_22,_23]];
_23=0;
}
_a=_2.scrollTop()+((_e?_f.clientHeight:_2.height())/2);
_b=_3.initialWidth;
_c=_3.initialHeight;
$(_15).css({top:Math.max(0,_a-(_c/2)),width:_b,height:_c,marginLeft:-_b/2}).show();
_9=_d||(_14.currentStyle&&(_14.currentStyle.position!="fixed"));
if(_9){
_14.style.position="absolute";
}
$(_14).css("opacity",_3.overlayOpacity).fadeIn(_3.overlayFadeDuration);
_25();
_26(1);
_4=_22;
_3.loop=_3.loop&&(_4.length>1);
return _27(_23);
};
$.fn.slimbox=function(_28,_29,_2a){
_29=_29||function(el){
return [el.href,el.title];
};
_2a=_2a||function(){
return true;
};
var _2c=this;
return _2c.unbind("click").click(function(){
var _2d=this,_2e=0,_2f,i=0,_31;
_2f=$.grep(_2c,function(el,i){
return _2a.call(_2d,el,i);
});
for(_31=_2f.length;i<_31;++i){
if(_2f[i]==_2d){
_2e=i;
}
_2f[i]=_29(_2f[i],i);
}
return $.slimbox(_2f,_2e,_28);
});
};
function _25(){
var l=_2.scrollLeft(),w=_e?_f.clientWidth:_2.width();
$([_15,_1b]).css("left",l+(w/2));
if(_9){
$(_14).css({left:l,top:_2.scrollTop(),width:w,height:_2.height()});
}
};
function _26(_36){
$("object").add(_d?"select":"embed").each(function(_37,el){
if(_36){
$.data(el,"slimbox",el.style.visibility);
}
el.style.visibility=_36?"hidden":$.data(el,"slimbox");
});
var fn=_36?"bind":"unbind";
_2[fn]("scroll resize",_25);
$(document)[fn]("keydown",_3a);
};
function _3a(_3b){
var _3c=_3b.keyCode,fn=$.inArray;
return (fn(_3c,_3.closeKeys)>=0)?_21():(fn(_3c,_3.nextKeys)>=0)?_20():(fn(_3c,_3.previousKeys)>=0)?_1f():false;
};
function _1f(){
return _27(_7);
};
function _20(){
return _27(_8);
};
function _27(_3e){
if(_3e>=0){
_5=_3e;
_6=_4[_5][0];
_7=(_5||(_3.loop?_4.length:0))-1;
_8=((_5+1)%_4.length)||(_3.loop?0:-1);
_3f();
_15.className="lbLoading";
var top=Math.max(0,_a-(_3.initialHeight/2));
$(_1b).css({width:_3.initialWidth,top:top+_3.initialHeight,marginLeft:-_3.initialWidth/2,visibility:"",display:""});
var _41=(_6.search(/\.(?:jpg|jpeg|jpe|gif|png|tif)$/)===-1)?"undefined":"image";
if(_41==="undefined"){
_41=(_6.search(/\.(?:swf)$/)===-1)?_41:"swf";
}
if(_41==="image"){
_11=new Image();
_11.onload=_42;
_11.onerror=_43;
_11.src=_6;
}
if(_41==="swf"){
var _44=0,_45=0,_1d="";
var _46=_4[_5][1].split(/;/);
for(var i in _46){
if(typeof _46[i]==="string"){
if(_46[i].split(/:/)[0]==="width"){
_44=_46[i].split(/:/)[1];
}
if(_46[i].split(/:/)[0]==="height"){
_45=_46[i].split(/:/)[1];
}
if(_46[i].split(/:/)[0]==="caption"){
_1d=_46[i].split(/:/)[1];
}
}
}
_11=new Object();
_11.width=parseInt(_44);
_11.height=parseInt(_45);
_11.caption=_1d;
swfobject.embedSWF(_6,"swf",_44,_45,"10.0.0","swf/expressInstall.swf",null,null,null,_42);
}
if(_41==="undefined"){
_43();
}
}
return false;
};
function _43(){
$(_1d).html(_4[_5][1]||"");
_15.className="lb404";
};
function _42(e){
_15.className="";
if(e.success){
_10=true;
$(_1d).html(_11.caption);
$(_16).css({visibility:"hidden",display:""});
}else{
$(_1d).html(_4[_5][1]||"");
$(_16).css({backgroundImage:"url("+_6+")",visibility:"hidden",display:""});
}
$(_17).width(_11.width);
$([_17,_19,_1a]).height(_11.height);
$(_1e).html((((_4.length>1)&&_3.counterText)||"").replace(/{x}/,_5+1).replace(/{y}/,_4.length));
if(_7>=0){
_12.src=_4[_7][0];
}
if(_8>=0){
_13.src=_4[_8][0];
}
_b=_16.offsetWidth;
_c=_16.offsetHeight;
var top=Math.max(0,_a-(_c/2));
var _4a=(_10)?0:_3.resizeDuration;
if(_15.offsetHeight!=_c){
$(_15).animate({height:_c,top:top},_4a,_3.resizeEasing);
$(_1b).animate({top:top+_c},_4a);
}
if(_15.offsetWidth!=_b){
$(_15).animate({width:_b,marginLeft:-_b/2},_4a,_3.resizeEasing);
$(_1b).animate({width:_b,marginLeft:-_b/2},_4a);
}
$(_15).queue(function(){
$(_16).css({display:"none",visibility:"",opacity:""}).fadeIn(_3.imageFadeDuration,_4b);
});
};
function _4b(){
if(_7>=0){
$(_19).show();
}
if(_8>=0){
$(_1a).show();
}
_1b.style.visibility="";
};
function _3f(){
_11.onload=null;
_11.onerror=null;
_11.src=_12.src=_13.src="";
$([_15,_16,_1c]).stop(true);
$([_19,_1a,_16,_1b]).hide();
};
function _21(){
if(_5>=0){
_3f();
_5=_7=_8=-1;
$(_15).hide();
$(_14).stop().fadeOut(_3.overlayFadeDuration,_26);
$(_16).css({background:"none"});
if(_10){
_10=false;
}
_11={};
}
return false;
};
})(jQuery);

