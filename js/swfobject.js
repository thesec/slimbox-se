var swfobject=function(){
var _1="undefined",_2="object",_3="Shockwave Flash",_4="ShockwaveFlash.ShockwaveFlash",_5="application/x-shockwave-flash",_6="SWFObjectExprInst",_7="onreadystatechange",_8=window,_9=document,_a=navigator,_b=false,_c=[_d],_e=[],_f=[],_10=[],_11,_12,_13,_14,_15=false,_16=false,_17,_18,_19=true,ua=function(){
var _1b=typeof _9.getElementById!=_1&&typeof _9.getElementsByTagName!=_1&&typeof _9.createElement!=_1,u=_a.userAgent.toLowerCase(),p=_a.platform.toLowerCase(),_1e=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),_20=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=!+"\v1",_22=[0,0,0],d=null;
if(typeof _a.plugins!=_1&&typeof _a.plugins[_3]==_2){
d=_a.plugins[_3].description;
if(d&&!(typeof _a.mimeTypes!=_1&&_a.mimeTypes[_5]&&!_a.mimeTypes[_5].enabledPlugin)){
_b=true;
ie=false;
d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
_22[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);
_22[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);
_22[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;
}
}else{
if(typeof _8.ActiveXObject!=_1){
try{
var a=new ActiveXObject(_4);
if(a){
d=a.GetVariable("$version");
if(d){
ie=true;
d=d.split(" ")[1].split(",");
_22=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];
}
}
}
catch(e){
}
}
}
return {w3:_1b,pv:_22,wk:_20,ie:ie,win:_1e,mac:mac};
}(),_25=function(){
if(!ua.w3){
return;
}
if((typeof _9.readyState!=_1&&_9.readyState=="complete")||(typeof _9.readyState==_1&&(_9.getElementsByTagName("body")[0]||_9.body))){
_26();
}
if(!_15){
if(typeof _9.addEventListener!=_1){
_9.addEventListener("DOMContentLoaded",_26,false);
}
if(ua.ie&&ua.win){
_9.attachEvent(_7,function(){
if(_9.readyState=="complete"){
_9.detachEvent(_7,arguments.callee);
_26();
}
});
if(_8==top){
(function(){
if(_15){
return;
}
try{
_9.documentElement.doScroll("left");
}
catch(e){
setTimeout(arguments.callee,0);
return;
}
_26();
})();
}
}
if(ua.wk){
(function(){
if(_15){
return;
}
if(!/loaded|complete/.test(_9.readyState)){
setTimeout(arguments.callee,0);
return;
}
_26();
})();
}
_27(_26);
}
}();
function _26(){
if(_15){
return;
}
try{
var t=_9.getElementsByTagName("body")[0].appendChild(_29("span"));
t.parentNode.removeChild(t);
}
catch(e){
return;
}
_15=true;
var dl=_c.length;
for(var i=0;i<dl;i++){
_c[i]();
}
};
function _2c(fn){
if(_15){
fn();
}else{
_c[_c.length]=fn;
}
};
function _27(fn){
if(typeof _8.addEventListener!=_1){
_8.addEventListener("load",fn,false);
}else{
if(typeof _9.addEventListener!=_1){
_9.addEventListener("load",fn,false);
}else{
if(typeof _8.attachEvent!=_1){
_2f(_8,"onload",fn);
}else{
if(typeof _8.onload=="function"){
var _30=_8.onload;
_8.onload=function(){
_30();
fn();
};
}else{
_8.onload=fn;
}
}
}
}
};
function _d(){
if(_b){
_31();
}else{
_32();
}
};
function _31(){
var b=_9.getElementsByTagName("body")[0];
var o=_29(_2);
o.setAttribute("type",_5);
var t=b.appendChild(o);
if(t){
var _36=0;
(function(){
if(typeof t.GetVariable!=_1){
var d=t.GetVariable("$version");
if(d){
d=d.split(" ")[1].split(",");
ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];
}
}else{
if(_36<10){
_36++;
setTimeout(arguments.callee,10);
return;
}
}
b.removeChild(o);
t=null;
_32();
})();
}else{
_32();
}
};
function _32(){
var rl=_e.length;
if(rl>0){
for(var i=0;i<rl;i++){
var id=_e[i].id;
var cb=_e[i].callbackFn;
var _3c={success:false,id:id};
if(ua.pv[0]>0){
var obj=_3e(id);
if(obj){
if(_3f(_e[i].swfVersion)&&!(ua.wk&&ua.wk<312)){
_40(id,true);
if(cb){
_3c.success=true;
_3c.ref=_41(id);
cb(_3c);
}
}else{
if(_e[i].expressInstall&&_42()){
var att={};
att.data=_e[i].expressInstall;
att.width=obj.getAttribute("width")||"0";
att.height=obj.getAttribute("height")||"0";
if(obj.getAttribute("class")){
att.styleclass=obj.getAttribute("class");
}
if(obj.getAttribute("align")){
att.align=obj.getAttribute("align");
}
var par={};
var p=obj.getElementsByTagName("param");
var pl=p.length;
for(var j=0;j<pl;j++){
if(p[j].getAttribute("name").toLowerCase()!="movie"){
par[p[j].getAttribute("name")]=p[j].getAttribute("value");
}
}
_48(att,par,id,cb);
}else{
_49(obj);
if(cb){
cb(_3c);
}
}
}
}
}else{
_40(id,true);
if(cb){
var o=_41(id);
if(o&&typeof o.SetVariable!=_1){
_3c.success=true;
_3c.ref=o;
}
cb(_3c);
}
}
}
}
};
function _41(_4b){
var r=null;
var o=_3e(_4b);
if(o&&o.nodeName=="OBJECT"){
if(typeof o.SetVariable!=_1){
r=o;
}else{
var n=o.getElementsByTagName(_2)[0];
if(n){
r=n;
}
}
}
return r;
};
function _42(){
return !_16&&_3f("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312);
};
function _48(att,par,_51,_52){
_16=true;
_13=_52||null;
_14={success:false,id:_51};
var obj=_3e(_51);
if(obj){
if(obj.nodeName=="OBJECT"){
_11=_54(obj);
_12=null;
}else{
_11=obj;
_12=_51;
}
att.id=_6;
if(typeof att.width==_1||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){
att.width="310";
}
if(typeof att.height==_1||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){
att.height="137";
}
_9.title=_9.title.slice(0,47)+" - Flash Player Installation";
var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+_8.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+_9.title;
if(typeof par.flashvars!=_1){
par.flashvars+="&"+fv;
}else{
par.flashvars=fv;
}
if(ua.ie&&ua.win&&obj.readyState!=4){
var _57=_29("div");
_51+="SWFObjectNew";
_57.setAttribute("id",_51);
obj.parentNode.insertBefore(_57,obj);
obj.style.display="none";
(function(){
if(obj.readyState==4){
obj.parentNode.removeChild(obj);
}else{
setTimeout(arguments.callee,10);
}
})();
}
_58(att,par,_51);
}
};
function _49(obj){
if(ua.ie&&ua.win&&obj.readyState!=4){
var el=_29("div");
obj.parentNode.insertBefore(el,obj);
el.parentNode.replaceChild(_54(obj),el);
obj.style.display="none";
(function(){
if(obj.readyState==4){
obj.parentNode.removeChild(obj);
}else{
setTimeout(arguments.callee,10);
}
})();
}else{
obj.parentNode.replaceChild(_54(obj),obj);
}
};
function _54(obj){
var ac=_29("div");
if(ua.win&&ua.ie){
ac.innerHTML=obj.innerHTML;
}else{
var _5d=obj.getElementsByTagName(_2)[0];
if(_5d){
var c=_5d.childNodes;
if(c){
var cl=c.length;
for(var i=0;i<cl;i++){
if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){
ac.appendChild(c[i].cloneNode(true));
}
}
}
}
}
return ac;
};
function _58(_61,_62,id){
var r,el=_3e(id);
if(ua.wk&&ua.wk<312){
return r;
}
if(el){
if(typeof _61.id==_1){
_61.id=id;
}
if(ua.ie&&ua.win){
var att="";
for(var i in _61){
if(_61[i]!=Object.prototype[i]){
if(i.toLowerCase()=="data"){
_62.movie=_61[i];
}else{
if(i.toLowerCase()=="styleclass"){
att+=" class=\""+_61[i]+"\"";
}else{
if(i.toLowerCase()!="classid"){
att+=" "+i+"=\""+_61[i]+"\"";
}
}
}
}
}
var par="";
for(var j in _62){
if(_62[j]!=Object.prototype[j]){
par+="<param name=\""+j+"\" value=\""+_62[j]+"\" />";
}
}
el.outerHTML="<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\""+att+">"+par+"</object>";
_f[_f.length]=_61.id;
r=_3e(_61.id);
}else{
var o=_29(_2);
o.setAttribute("type",_5);
for(var m in _61){
if(_61[m]!=Object.prototype[m]){
if(m.toLowerCase()=="styleclass"){
o.setAttribute("class",_61[m]);
}else{
if(m.toLowerCase()!="classid"){
o.setAttribute(m,_61[m]);
}
}
}
}
for(var n in _62){
if(_62[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){
_6d(o,n,_62[n]);
}
}
el.parentNode.replaceChild(o,el);
r=o;
}
}
return r;
};
function _6d(el,_6f,_70){
var p=_29("param");
p.setAttribute("name",_6f);
p.setAttribute("value",_70);
el.appendChild(p);
};
function _72(id){
var obj=_3e(id);
if(obj&&obj.nodeName=="OBJECT"){
if(ua.ie&&ua.win){
obj.style.display="none";
(function(){
if(obj.readyState==4){
_75(id);
}else{
setTimeout(arguments.callee,10);
}
})();
}else{
obj.parentNode.removeChild(obj);
}
}
};
function _75(id){
var obj=_3e(id);
if(obj){
for(var i in obj){
if(typeof obj[i]=="function"){
obj[i]=null;
}
}
obj.parentNode.removeChild(obj);
}
};
function _3e(id){
var el=null;
try{
el=_9.getElementById(id);
}
catch(e){
}
return el;
};
function _29(el){
return _9.createElement(el);
};
function _2f(_7c,_7d,fn){
_7c.attachEvent(_7d,fn);
_10[_10.length]=[_7c,_7d,fn];
};
function _3f(rv){
var pv=ua.pv,v=rv.split(".");
v[0]=parseInt(v[0],10);
v[1]=parseInt(v[1],10)||0;
v[2]=parseInt(v[2],10)||0;
return (pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;
};
function _82(sel,_84,_85,_86){
if(ua.ie&&ua.mac){
return;
}
var h=_9.getElementsByTagName("head")[0];
if(!h){
return;
}
var m=(_85&&typeof _85=="string")?_85:"screen";
if(_86){
_17=null;
_18=null;
}
if(!_17||_18!=m){
var s=_29("style");
s.setAttribute("type","text/css");
s.setAttribute("media",m);
_17=h.appendChild(s);
if(ua.ie&&ua.win&&typeof _9.styleSheets!=_1&&_9.styleSheets.length>0){
_17=_9.styleSheets[_9.styleSheets.length-1];
}
_18=m;
}
if(ua.ie&&ua.win){
if(_17&&typeof _17.addRule==_2){
_17.addRule(sel,_84);
}
}else{
if(_17&&typeof _9.createTextNode!=_1){
_17.appendChild(_9.createTextNode(sel+" {"+_84+"}"));
}
}
};
function _40(id,_8b){
if(!_19){
return;
}
var v=_8b?"visible":"hidden";
if(_15&&_3e(id)){
_3e(id).style.visibility=v;
}else{
_82("#"+id,"visibility:"+v);
}
};
function _8d(s){
var _8f=/[\\\"<>\.;]/;
var _90=_8f.exec(s)!=null;
return _90&&typeof encodeURIComponent!=_1?encodeURIComponent(s):s;
};
var _91=function(){
if(ua.ie&&ua.win){
window.attachEvent("onunload",function(){
var ll=_10.length;
for(var i=0;i<ll;i++){
_10[i][0].detachEvent(_10[i][1],_10[i][2]);
}
var il=_f.length;
for(var j=0;j<il;j++){
_72(_f[j]);
}
for(var k in ua){
ua[k]=null;
}
ua=null;
for(var l in swfobject){
swfobject[l]=null;
}
swfobject=null;
});
}
}();
return {registerObject:function(_98,_99,_9a,_9b){
if(ua.w3&&_98&&_99){
var _9c={};
_9c.id=_98;
_9c.swfVersion=_99;
_9c.expressInstall=_9a;
_9c.callbackFn=_9b;
_e[_e.length]=_9c;
_40(_98,false);
}else{
if(_9b){
_9b({success:false,id:_98});
}
}
},getObjectById:function(_9d){
if(ua.w3){
return _41(_9d);
}
},embedSWF:function(_9e,_9f,_a0,_a1,_a2,_a3,_a4,_a5,_a6,_a7){
var _a8={success:false,id:_9f};
if(ua.w3&&!(ua.wk&&ua.wk<312)&&_9e&&_9f&&_a0&&_a1&&_a2){
_40(_9f,false);
_2c(function(){
_a0+="";
_a1+="";
var att={};
if(_a6&&typeof _a6===_2){
for(var i in _a6){
att[i]=_a6[i];
}
}
att.data=_9e;
att.width=_a0;
att.height=_a1;
var par={};
if(_a5&&typeof _a5===_2){
for(var j in _a5){
par[j]=_a5[j];
}
}
if(_a4&&typeof _a4===_2){
for(var k in _a4){
if(typeof par.flashvars!=_1){
par.flashvars+="&"+k+"="+_a4[k];
}else{
par.flashvars=k+"="+_a4[k];
}
}
}
if(_3f(_a2)){
var obj=_58(att,par,_9f);
if(att.id==_9f){
_40(_9f,true);
}
_a8.success=true;
_a8.ref=obj;
}else{
if(_a3&&_42()){
att.data=_a3;
_48(att,par,_9f,_a7);
return;
}else{
_40(_9f,true);
}
}
if(_a7){
_a7(_a8);
}
});
}else{
if(_a7){
_a7(_a8);
}
}
},switchOffAutoHideShow:function(){
_19=false;
},ua:ua,getFlashPlayerVersion:function(){
return {major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};
},hasFlashPlayerVersion:_3f,createSWF:function(_af,_b0,_b1){
if(ua.w3){
return _58(_af,_b0,_b1);
}else{
return undefined;
}
},showExpressInstall:function(att,par,_b4,_b5){
if(ua.w3&&_42()){
_48(att,par,_b4,_b5);
}
},removeSWF:function(_b6){
if(ua.w3){
_72(_b6);
}
},createCSS:function(_b7,_b8,_b9,_ba){
if(ua.w3){
_82(_b7,_b8,_b9,_ba);
}
},addDomLoadEvent:_2c,addLoadEvent:_27,getQueryParamValue:function(_bb){
var q=_9.location.search||_9.location.hash;
if(q){
if(/\?/.test(q)){
q=q.split("?")[1];
}
if(_bb==null){
return _8d(q);
}
var _bd=q.split("&");
for(var i=0;i<_bd.length;i++){
if(_bd[i].substring(0,_bd[i].indexOf("="))==_bb){
return _8d(_bd[i].substring((_bd[i].indexOf("=")+1)));
}
}
}
return "";
},expressInstallCallback:function(){
if(_16){
var obj=_3e(_6);
if(obj&&_11){
obj.parentNode.replaceChild(_11,obj);
if(_12){
_40(_12,true);
if(ua.ie&&ua.win){
_11.style.display="block";
}
}
if(_13){
_13(_14);
}
}
_16=false;
}
}};
}();

