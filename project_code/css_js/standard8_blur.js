
var cssStandard8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandard8);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

var newRule='@-' +  browserPrefix +'-keyframes blurState1{0%{-' +  browserPrefix +'-filter:blur(80px);}50%{-' +  browserPrefix +'-filter:blur(100px);}100%{-' +  browserPrefix +'-filter:blur(80px);}} ';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='@-' +  browserPrefix +'-keyframes blurState2{0%{-' +  browserPrefix +'-filter:blur(90px);}50%{-' +  browserPrefix +'-filter:blur(110px);}100%{-' +  browserPrefix +'-filter:blur(90px);}} ';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='DIV {padding:0%;margin:0%;top:-70%;left:-12.5%;width:100%;height:100%;word-spacing:-0em;font-size:1400px;text-align:center;vertical-align:middle;z-index:-1;background:transparent;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='#myid2_bck{-' +  browserPrefix +'-transition-property:background-color,color,textShadow,skew;-' +  browserPrefix +'-transition-duration:3s,3s,3s,3s;position:absolute;padding-top:0%;left:0%;top:0%;width:100%;height:100%;font-size:700px;color:#FFFFFF;text-align:center;vertical-align:middle;opacity:1;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);
for (i=1;i<=window.divCounter;i++){
var newRule='#myid'+i+' {-' +  browserPrefix +'-transition-property:background-color,color,textShadow,skew;-' +  browserPrefix +'-transition-duration:3s,3s,3s,3s;background:transparent;padding:0px;margin:0px; text-align:center;height:100%;width:100%;position:absolute;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.display {-' +  browserPrefix +'-transition-property:background-color,color,textShadow,skew;-' +  browserPrefix +'-transition-duration:3s,3s,3s,3s;-' +  browserPrefix +'-animation-name:blurState1; -' +  browserPrefix +'-animation-duration:5s;-' +  browserPrefix +'-animation-timing-function:ease-in-out;-' +  browserPrefix +'-animation-delay:0s;-' +  browserPrefix +'-animation-iteration-count:15; -' +  browserPrefix +'-animation-direction:normal;-' +  browserPrefix +'-animation-play-state:running;-' +  browserPrefix +'-animation-fill-mode:both;position:absolute;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.noDisplay{-' +  browserPrefix +'-transition-property:background-color,color,textShadow,skew;-' +  browserPrefix +'-transition-duration:3s,3s,3s,3s;-' +  browserPrefix +'-animation-name:blurState2; -' +  browserPrefix +'-animation-duration:5s;-' +  browserPrefix +'-animation-timing-function:ease-in-out;-' +  browserPrefix +'-animation-delay:0s;-' +  browserPrefix +'-animation-iteration-count:10; -' +  browserPrefix +'-animation-direction:normal;-' +  browserPrefix +'-animation-play-state:running;-' +  browserPrefix +'-animation-fill-mode:both;position:absolute;z-index:-1;}';
cssStyle.insertRule(newRule,cssRules.length);
}

var signalArray=[];
