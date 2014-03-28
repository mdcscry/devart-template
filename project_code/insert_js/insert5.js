containerId=[];
containerCount=1;
divId=[];
totDivCounter=5;

var cssStandard8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandard8);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

var newRule='DIV {-webkit-transition-property: all; -webkit-transition-duration: 7s;';
newRule+='-moz-transition-property: all; -moz-transition-duration: 7s;';
newRule+='font-size: 800px;z-index:0; left: 0%;top:-0%;overflow: hidden;}';


cssStyle.insertRule(newRule,cssRules.length);
var cssRules=cssStyle.cssRules;

 function jsWait() {
        if (typeof msucdArraySignal =="undefined")
        {
            window.setTimeout(jsWait, 100);

        }
        else
        {
			initOuterDiv();
			initOuterStyle();
            initDiv();
			initStyle();

			//changeHtmlDisplay();

			changeColor();
			changeSkewRotation();
			//changeColor();
		//	changeSkewRotation();
			//changeDropShadowSimple();
			//changeRotate();
			//changeDropShadowSimpleH()
			//changeDropShadowSimpleV()

        }
    }




var fontChangeRate=10000;

var mycolors=[];
var colNum=6;

function setColor(hue,sat,light,opa){

for (colorCounter=1;colorCounter<=colNum;colorCounter++){
var toSpliceColor='hsla('
+  Math.round(40*Math.random()+hue-20) + ','
+  Math.round(20*Math.random()+sat-20)+ '%,'
+ (Math.round(Math.random()*20)+light) + '%,'
+ (Math.random(opa)+.6	)
+ ')';
//alert (toSpliceColor);

mycolors.splice(1,0,toSpliceColor);
}
}
mycolors.length=0;
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
document.body.style.background=mycolors[Math.round((mycolors.length-1)*Math.random())];


var myarray=[
65826,65827,65828,65829,65830,65831,65832,65833,65834,65835,65836,65837,65838,65839
,65840,65841,65842,65843,65823,65822,65821,65820,65819,65818,65817,65816,65815,65814
,65813,65812,65811,65810,65809,65808,65807,65806,65805,65804,65803,65802,65801,65800
,65799,65794,65792

,5761,5762,5763,5764,5765,5766,5767,5768,5769,5770,5780,5779,5778,5777
,6278,8762,8886,8887,8942,8943,9007,9107,9739,9738,10568,10746,10747,10714
,10715,10856,10857,10872,10871,11623,10202,10203

];

document.body.style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];

//container div

function initOuterDiv(){



for (containerCounter=1;containerCounter<=containerCount;containerCounter++){
	containerName='container' + containerCounter;
	containerId[containerCounter] = document.createElement("div");
	document.body.appendChild(containerId[containerCounter]);
	containerId[containerCounter].id=containerName+'-div0';
	//containerId[containerCounter].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
 }
}
function initOuterStyle(){
	//style
	for (containerCounter=1;containerCounter<=containerCount;containerCounter++){
	containerId[containerCounter].style.position='absolute';
	containerId[containerCounter].style.cssFloat='left';
	containerId[containerCounter].style.opacity=1;
	containerId[containerCounter].style.width='100%';
	containerId[containerCounter].style.height='100%';
	containerId[containerCounter].style.left='0%';
	containerId[containerCounter].style.textAlign='center';
	containerId[containerCounter].style.verticalAlign='middle';
	containerId[containerCounter].style.borderRadius='20px';
	containerId[containerCounter].style.zIndex=-1;
	containerId[containerCounter].style.background= mycolors[Math.round((mycolors.length-1)*Math.random())];
	containerId[containerCounter].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
	containerId[containerCounter].style.webkitFilter= 'saturate('+ Math.round(Math.random()*1000) +'%)';
	}
}

function initDiv(){

for (containerCounter=1;containerCounter<=containerCount;containerCounter++){
 containerName='container'+containerCounter;

for (divCounter=1;divCounter<=totDivCounter;divCounter++){


 elementName=containerName + '-div'+divCounter;
 divId[divCounter] = document.createElement("div");
 divId[divCounter].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';

 //alert(divId[divCounter].id);
divId[divCounter].id=elementName;
containerId[containerCounter].appendChild(divId[divCounter]);
}
}
}

function initStyle(){
for (containerCounter=1;containerCounter<=containerCount;containerCounter++){
 containerName='container'+containerCounter;

for (divCounter=1;divCounter<=totDivCounter;divCounter++){


 elementName=containerName + '-div'+divCounter;

divId[divCounter].style.opacity=.3;
divId[divCounter].style.top='-20%';
divId[divCounter].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
divId[divCounter].style.background=mycolors[Math.round((mycolors.length-1)*Math.random())];

if (browserPrefix=='webkit'){
divId[divCounter].style.webkitTransform = 'rotateX(' + Math.round(Math.random()*60-60) + 'deg)';
divId[divCounter].style.webkitTransform = 'rotateY(' + Math.round(Math.random()*60-60) + 'deg)';
divId[divCounter].style.webkitTransform= 'skew('+ Math.round(Math.random()*45-22.5) +'deg,'+ Math.round(Math.random()*60-30+180) +'deg)';
divId[divCounter].style.webkitFilter= 'saturate('+ Math.round(Math.random()*3000) +'%)';
} else {
divId[divCounter].style.MozTransform = 'rotateX(' + Math.round(Math.random()*180) + 'deg)';
divId[divCounter].style.MozTransform = 'rotateY(' + Math.round(Math.random()*180) + 'deg)';
divId[divCounter].style.MozTransform= 'skew('+ Math.round(Math.random()*60-30) +'deg,'+ Math.round(Math.random()*60-30+180) +'deg)';
}




divId[divCounter].style.zIndex=-1;

divId[divCounter].style.position='absolute';
divId[divCounter].style.cssFloat='none';
divId[divCounter].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
divId[divCounter].style.top=Math.random()*30-10+'%';
divId[divCounter].style.left=Math.random()*85-10+'%';
//divId[divCounter].style.background='transparent';
divId[divCounter].style.width='365px';
divId[divCounter].style.borderRadius='100px';
divId[divCounter].style.textShadow=Math.round(Math.random()*100 + 10) + 'px '
								+Math.round(Math.random()*100 + 10) + 'px '
					+ mycolors[Math.round((mycolors.length-1)*Math.random())];

}
}
}

function changeColor(){
			window.setInterval(function(){

				rndDivContainer=(Math.round(Math.random()*(containerCount-1)))+1;
				rndDivChild=(Math.round(Math.random()*(totDivCounter-1)))+1;

				containerElementName='container' + rndDivContainer+'-div0';
				baseElementName='container' + rndDivContainer+'-div'+rndDivChild;

				 container=document.getElementById(containerElementName);
			     baseNode=document.getElementById(baseElementName);

				  try {
				  	  container.style.backgroundColor= mycolors[Math.round((mycolors.length-1)*Math.random())];
				  	  container.style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
				  	  baseNode.style.backgroundColor= mycolors[Math.round((mycolors.length-1)*Math.random())];
				  	  //container.innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
				   } catch ( e ) {
				      alert("Error: " + e.description + 'Value container: ' + containerElementName+'||'+ baseElementName);
		  			 }
		},Math.random()*fontChangeRate+20000);
}



//////////////////////skew and rotation
function changeSkewRotation(){
				window.setInterval(function(){
										rndDivContainer=(Math.round(Math.random()*(containerCount-1)))+1;
										rndDivChild=(Math.round(Math.random()*(totDivCounter-1)))+1;
										 elementName='container' + rndDivContainer+ '-div'+ rndDivChild;
						 node=document.getElementById(elementName);
				 		  try {
		   //node.style.webkitTransform = 'rotate(' + Math.round(Math.random()*180) + 'deg)';
           //node.style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*180) +'deg)';


           if (browserPrefix=='webkit'){
		   node.style.webkitTransform = 'rotateX(' + Math.round(Math.random()*360-180) + 'deg)';
		   node.style.webkitTransform = 'rotateY(' + Math.round(Math.random()*180) + 'deg)';
		   node.style.webkitTransform= 'skew('+ Math.round(Math.random()*60-30) +'deg,'+ Math.round(Math.random()*360) +'deg)';
		 //  node.style.webkitFilter= 'saturate('+ Math.round(Math.random()*1) +'%)';
		   } else {
		   node.style.MozTransform = 'rotateX(' + Math.round(Math.random()*180) + 'deg)';
		   node.style.MozTransform = 'rotateY(' + Math.round(Math.random()*180) + 'deg)';
		   node.style.MozTransform= 'skew('+ Math.round(Math.random()*360) +'deg,'+ Math.round(Math.random()*360) +'deg)';
			}



		   node.style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
		   node.style.width= Math.round(Math.random()*75) + '%';
		   node.style.left=Math.round(Math.random()*50) +'%';
								   } catch ( e ) {
								      alert("Error: " + e.description + 'Value skew rotation: ' + node );
				  			 }
			},Math.random()*20000+5000);
}

jsWait();









