
var cssStandardQuad = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandardQuad);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

var newRule='@-webkit-keyframes fadeOut{0%{-webkit-filter:opacity(.71);}100%{-webkit-filter:opacity(0);}} ';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='@-webkit-keyframes fadeIn{0%{-webkit-filter:opacity(0);}100%{-webkit-filter:opacity(.71);}}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='DIV {padding:0%;top:0%;left:0%;width:100%;height:100%;font-size:910px;line-height:1.1em;text-align:center;vertical-align:middle;z-index=-1;}';
cssStyle.insertRule(newRule,cssRules.length);

quadPosArray=[];
quadPosArray[1]=[0,0];
quadPosArray[2]=[0,50];
quadPosArray[3]=[50,0];
quadPosArray[4]=[50,50];

for (i=1;i<=window.divCounter;i++){
var newRule='#myid'+i+' {-webkit-transition-property:background-color,color,textShadow,skew;-webkit-transition-duration:3s,3s,3s,3s;';
newRule+= 'top:'+quadPosArray[i][0]+'%;left:'+quadPosArray[i][1]+'%;';

if (i==1){

newRule+='background:transparent;overflow:visible;line-height:1em;font-size:370px; text-align:center;font-family:"B e s m e l l a h 1","jameel noori nastaleeq";';
}else if  (i==2){
newRule+='background:transparent;overflow:visible;line-height:1em;font-size:370px; text-align:center;font-family:"B e s m e l l a h 2","Paktype Tehreer";';
}else if  (i==3){
newRule+='background:transparent;overflow:visible;line-height:1em;font-size:370px; text-align:center;font-family:"B e s m e l l a h 1","Pak nastaleeq";';
}else if  (i==4){
newRule+='background:transparent;overflow:visible;line-height:1em;font-size:370px; text-align:center;font-family:"B e s m e l l a h 2","fajer noori nastalique","paktype naqsh";';
}



newRule+='vertical-align:middle;height:50%;width:50%;';
newRule+='position:relative;z-index=-1;letter-spacing:0em;}';
cssStyle.insertRule(newRule,cssRules.length);

var newRule='#myid'+i+'.display {-webkit-transition-property:background-color,color,textShadow,lineHeight;-webkit-transition-duration:3s,3s,3s,6s;-webkit-animation-name:fadeIn; -webkit-animation-duration:1s;-webkit-animation-timing-function:ease-in-out;-webkit-animation-delay:0s;-webkit-animation-iteration-count:1; -webkit-animation-direction:normal;-webkit-animation-play-state:running;-webkit-animation-fill-mode:both;position:absolute;z-index=-1;}';
cssStyle.insertRule(newRule,cssRules.length);
var newRule='#myid'+i+'.noDisplay{-webkit-transition-property:background-color,color,textShadow,lineHeight;-webkit-transition-duration:3s,3s,3s,6s;-webkit-animation-name:fadeOut; -webkit-animation-duration:1s;-webkit-animation-timing-function:ease-in-out;-webkit-animation-delay:0s;-webkit-animation-iteration-count:1; -webkit-animation-direction:normal;-webkit-animation-play-state:running;-webkit-animation-fill-mode:both;position:absolute;z-index=-1;}';
cssStyle.insertRule(newRule,cssRules.length);
}

var signalArray=[];


