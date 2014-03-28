
var cssStandardQuad = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandardQuad);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

if(browserPrefix != 'msie'){
var newRule='@-' + browserPrefix +'-keyframes fadeOut{0%{opacity:.71;}100%{opacity:0;}}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='@-' + browserPrefix +'-keyframes fadeIn{0%{opacity:0;}100%{opacity:.71;}}';
cssStyle.insertRule(newRule,cssRules.length);
}


var newRule='DIV {padding:0%;margin:0%;top:0%;left:0%;width:100%;height:100%;font-size:10px;text-align:center;vertical-align:middle;z-index:-1;}';

if(browserPrefix != 'msie'){
cssStyle.insertRule(newRule,cssRules.length);}
else {cssStyle.insertRule("DIV","padding:0%;",cssRules.length);}

quadPosArray=[];
quadPosArray[1]=[0,0];
quadPosArray[2]=[0,50];
quadPosArray[3]=[50,0];
quadPosArray[4]=[50,50];

for (i=1;i<=window.divCounter;i++){
var newRule='#myid'+i+' {-' + browserPrefix +'-transition-property:background,color,textShadow;-' + browserPrefix +'-transition-duration:3s,3s,3s,3s;top:'+quadPosArray[i][0]+'%;left:'+quadPosArray[i][1]+'%;background:transparent;overflow:hidden;font-size:225px;text-align:center;letter-spacing:.25em; word-wrap:normal;line-height:1.8em;vertical-align:middle;height:50%;width:50%;position:relative;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='#myid'+i+'.display {-' + browserPrefix +'-transition-property:background,color,textShadow;-' + browserPrefix +'-transition-duration:3s,3s,3s,3s;-' + browserPrefix +'-animation-name:fadeIn; -' + browserPrefix +'-animation-duration:1s;-' + browserPrefix +'-animation-timing-function:ease-in-out;-' + browserPrefix +'-animation-delay:0s;-' + browserPrefix +'-animation-iteration-count:1; -' + browserPrefix +'-animation-direction:normal;-' + browserPrefix +'-animation-play-state:running;-' + browserPrefix +'-animation-fill-mode:both;position:absolute;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='#myid'+i+'.noDisplay{-' + browserPrefix +'-transition-property:background,color,textShadow;-' + browserPrefix +'-transition-duration:3s,3s,3s,3s;-' + browserPrefix +'-animation-name:fadeOut; -' + browserPrefix +'-animation-duration:1s;-' + browserPrefix +'-animation-timing-function:ease-in-out;-' + browserPrefix +'-animation-delay:0s;-' + browserPrefix +'-animation-iteration-count:1; -' + browserPrefix +'-animation-direction:normal;-' + browserPrefix +'-animation-play-state:running;-' + browserPrefix +'-animation-fill-mode:both;position:absolute;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);

}

var signalArray=[];


