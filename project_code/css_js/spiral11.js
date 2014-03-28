
var cssSpiral8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssSpiral8);

cssSpiral8.title='cssSpiral10';

//alert (document.styleSheets[0].title);
var cssAnimation = document.styleSheets[0];
var cssRules=cssAnimation.cssRules;
//alert (cssRules);
var newRule='@-' + browserPrefix +'-keyframes fadeOut{0%{opacity:.71;}100%{opacity:0;}}';
cssAnimation.insertRule(newRule,cssRules.length);
var newRule='@-' + browserPrefix +'-keyframes fadeIn{0%{opacity:0;}100%{opacity:.71;}}';
cssAnimation.insertRule(newRule,cssRules.length);

var newRule='DIV { position:absolute; height:100%;width:100%;padding:0%; margin:0%; left:-35%;top:-10%; background-color:transparent; font-size: 200px;; }';
cssAnimation.insertRule(newRule,cssRules.length);

var newRule='#myid2_bck{ -' +  browserPrefix +'-transition-property: background-color,color; -' +  browserPrefix +'-transition-duration: 3s,1.5s; position:absolute; padding-top:0%; left:0%;top:0%;width:100%;height:100%; background:#4000FF; font-size: 500px; color:  #4000FF; text-align:center; vertical-align: middle; opacity: 1; }';
cssAnimation.insertRule(newRule,cssRules.length);

for (i=1;i<=divCounter;i++){
var newRule='#myid'+i+' { -' +  browserPrefix +'-transition-property: all,background-color,color;-' +  browserPrefix +'-transition-duration: 2s,3s,1.5s; padding:0px; margin:0px; height:1px; width:1px;background: transparent; }';
cssAnimation.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.display { -' +  browserPrefix +'-transition-property: all,background-color,color; -' +  browserPrefix +'-transition-duration: 3s,3s,1.5s; -' +  browserPrefix +'-animation-name: fadeIn; -' +  browserPrefix +'-animation-duration: 10s; -' +  browserPrefix +'-animation-timing-function: ease-in-out; -' +  browserPrefix +'-animation-delay: 0s; -' +  browserPrefix +'-animation-iteration-count: 1; -' +  browserPrefix +'-animation-direction: normal; -' +  browserPrefix +'-animation-play-state: running; -' +  browserPrefix +'-animation-fill-mode: both; }';
cssAnimation.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.noDisplay{ -' +  browserPrefix +'-transition-property: background-color,color; -' +  browserPrefix +'-transition-duration: 3s,1.5s; -' +  browserPrefix +'-animation-name: spiral'+i+'; -' +  browserPrefix +'-animation-duration:'+Math.round(Math.random()*25+15)+'s; -' +  browserPrefix +'-animation-timing-function: ease-in-out; -' +  browserPrefix +'-animation-delay:' +Math.random()*7+'s; -' +  browserPrefix +'-animation-iteration-count: infinite; -' +  browserPrefix +'-animation-direction: alternate; -' +  browserPrefix +'-animation-fill-mode: both; }';
cssAnimation.insertRule(newRule,cssRules.length);
}


//spiral function



var newRuleSuffix = '}';
var innerRule='';
var animationPercentArr = [];
var populateCounter=1000;
for (populatePercentArray=1;populatePercentArray<=1000;populatePercentArray++){
    animationPercentArr[populatePercentArray]=populateCounter/10;
populateCounter=populateCounter-1;
}


for (cssAnimationCounter=1;cssAnimationCounter <=divCounter;cssAnimationCounter++){
var constant=Math.random(2)+.6;
var fermatPower=Math.random(1)+1.1;
var newRulePrefix = '@-' +  browserPrefix +'-keyframes spiral'+ cssAnimationCounter + ' {';
var xSeed=Math.random()*30+35;
var ySeed=Math.random()*30+15;

for (u = 1000; u >= 1; u--) {

    angle = u/30 ;

   	 var x = 45 - (Math.pow(angle,fermatPower)*constant * Math.cos(angle)); //fermats
   	 var y = 30 - (Math.pow(angle,fermatPower)*constant * Math.sin(angle)); //fermats

var innerRule=innerRule + animationPercentArr[u] +'% { left:' + x +'%; top:' + y + '%;}';
//var innerRule=innerRule + animationPercentArr[u] +'% { -' +  browserPrefix +'-transform: translate(' + x +'%,' + y + '%);}';




//if (u==1){alert(innerRule);}
}
var newRule=newRulePrefix + innerRule + newRuleSuffix;


cssAnimation.insertRule(newRule,length);

}

var signalArray=[];
