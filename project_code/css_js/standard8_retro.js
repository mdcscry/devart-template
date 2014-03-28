
var cssStandard8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandard8);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

var newRule='@-' + browserPrefix +'-keyframes fadeOut{0%{opacity:.71;}100%{opacity:0;}}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='@-' + browserPrefix +'-keyframes fadeIn{0%{opacity:0;}100%{opacity:.71;}}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='BODY {-' +  browserPrefix +'-transition-property:background;-' +  browserPrefix +'-transition-duration:3s;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='DIV {padding:0%;margin:0%;top:-25%;left:-2.5%;width:100%;height:100%;font-size:1400px;text-align:center;vertical-align:middle;background:transparent;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='#myid2_bck{-' +  browserPrefix +'-transition-property:background,color,textShadow;-' +  browserPrefix +'-transition-duration:3s,3s,5s;position:absolute;padding-top:0%;left:0%;top:0%;width:100%;height:100%;font-size:1400px;text-align:center;vertical-align:middle;opacity:0;}';
cssStyle.insertRule(newRule,cssRules.length);
for (i=1;i<=window.divCounter;i++){
var newRule='#myid'+i+' {-' +  browserPrefix +'-transition-property:color,textShadow;-' +  browserPrefix +'-transition-duration:3s,5s;background:transparent;padding:0px;margin:0px; text-align:center;height:100%;width:100%;position:absolute;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.display {-' +  browserPrefix +'-transition-property:color,textShadow;-' +  browserPrefix +'-transition-duration:3s,5s;-' +  browserPrefix +'-animation-name:fadeIn; -' +  browserPrefix +'-animation-duration:.25s;-' +  browserPrefix +'-animation-timing-function:ease-in-out;-' +  browserPrefix +'-animation-delay:0s;-' +  browserPrefix +'-animation-iteration-count:1; -' +  browserPrefix +'-animation-direction:normal;-' +  browserPrefix +'-animation-play-state:running;-' +  browserPrefix +'-animation-fill-mode:both;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.noDisplay{-' +  browserPrefix +'-transition-property:color,textShadow;-' +  browserPrefix +'-transition-duration:3s,5s;-' +  browserPrefix +'-animation-name:fadeOut; -' +  browserPrefix +'-animation-duration:.25s;-' +  browserPrefix +'-animation-timing-function:ease-in-out;-' +  browserPrefix +'-animation-delay:0s;-' +  browserPrefix +'-animation-iteration-count:1; -' +  browserPrefix +'-animation-direction:normal;-' +  browserPrefix +'-animation-play-state:running;-' +  browserPrefix +'-animation-fill-mode:both;}';
cssStyle.insertRule(newRule,cssRules.length);
}

var signalArray=[];
