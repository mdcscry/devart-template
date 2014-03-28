
var cssStandard8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandard8);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;



if (insertArrayRnd==10){

var newRule='@-' +  browserPrefix + '-keyframes fadeOut{0%{opacity:.31;}100%{opacity:0;}} ';
	cssStyle.insertRule(newRule,cssRules.length);

var newRule='@-' +  browserPrefix + '-keyframes fadeIn{0%{opacity:0;}100%{opacity:.31;}}';
	cssStyle.insertRule(newRule,cssRules.length);
} else {
var newRule='@-' +  browserPrefix + '-keyframes fadeOut{0% {opacity:.71;}100%{opacity:0;}} ';
	cssStyle.insertRule(newRule,cssRules.length);

var newRule='@-' +  browserPrefix + '-keyframes fadeIn{0%{opacity:0;}100%{opacity:.71;}}';
	cssStyle.insertRule(newRule,cssRules.length);
}



if(insertArrayRnd==9){
var newRule='DIV {position:absolute; top:-10%; width:100%;height:100%; background:#FFFFFF; font-size: 750px; color:  blue; text-align:center; vertical-align: middle;}';
cssStyle.insertRule(newRule,cssRules.length);
}else if (insertArrayRnd==10){
var newRule='DIV {position:absolute;  top:10%;left:-10%; width:100%;height:100%;overflow:visible;background:transparent; font-size: 400px; color:  blue; text-align:center; vertical-align: middle; }';
cssStyle.insertRule(newRule,cssRules.length);
} else {
var newRule='DIV {position:absolute;  top:40%;left:-10%; width:100%;height:100%; overflow:visible;background:transparent; font-size: 500px; color:  blue; text-align:center; vertical-align: middle; }';
cssStyle.insertRule(newRule,cssRules.length);
}

var newRule='#myid2_bck{-' +  browserPrefix + '-transition-property: background,color; -' +  browserPrefix + '-transition-duration: 3s,3s,3s; position:absolute; padding-top:0%; left:0%;top:0%; width:100%;height:100%; background:#FFFFFF; font-size: 250px; color:  #FFFFFF; text-align:center; vertical-align: middle; opacity: 1;}';
cssStyle.insertRule(newRule,cssRules.length);
for (i=1;i<=window.divCounter;i++){

if(insertArrayRnd==9){
var newRule='#myid'+i+' {-' +  browserPrefix + '-transition-property: all,background,color; -' +  browserPrefix + '-transition-duration:3s, 3s,3s;background:transparent;margin:1%; text-align: center; height:100%; width:100%;left:-0%;top:-10%;}';
cssStyle.insertRule(newRule,cssRules.length);
} else if (insertArrayRnd==8) {
var newRule='#myid'+i+' {-' +  browserPrefix + '-transition-property: all,background,color; -' +  browserPrefix + '-transition-duration: 3s,3s,3s;overflow:visible;font-size: 700px;left:11%;top:0%; text-align: center; height:1200px;width:1200px;}';
cssStyle.insertRule(newRule,cssRules.length);
}
else {
var newRule='#myid'+i+' {-' +  browserPrefix + '-transition-property: all,background,color; -' +  browserPrefix + '-transition-duration: 3s,3s,3s;  margin:15%; text-align: center; height:100%; width:100%;left:-17%;}';
cssStyle.insertRule(newRule,cssRules.length);
}



var newRule='#myid'+i+'.display { -' +  browserPrefix + '-transition-property:all, background,color; -' +  browserPrefix + '-transition-duration: 21s,3s,3s; -' +  browserPrefix + '-animation-name: fadeIn; -' +  browserPrefix + '-animation-duration: 7s; -' +  browserPrefix + '-animation-timing-function: ease-out; -' +  browserPrefix + '-animation-delay: 0s; -' +  browserPrefix + '-animation-iteration-count: 1; -' +  browserPrefix + '-animation-direction: normal; -' +  browserPrefix + '-animation-play-state: running; -' +  browserPrefix + '-animation-fill-mode: both;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.noDisplay{-' +  browserPrefix + '-transition-property:all, background,color; -' +  browserPrefix + '-transition-duration: 21s,3s,3s; -' +  browserPrefix + '-animation-name: fadeOut; -' +  browserPrefix + '-animation-duration: 7s; -' +  browserPrefix + '-animation-timing-function: ease-in; -' +  browserPrefix + '-animation-delay: 0s; -' +  browserPrefix + '-animation-iteration-count: 1; -' +  browserPrefix + '-animation-direction: normal; -' +  browserPrefix + '-animation-play-state: running; -' +  browserPrefix + '-animation-fill-mode: both;}';
cssStyle.insertRule(newRule,cssRules.length);
}

var signalArray=[];
