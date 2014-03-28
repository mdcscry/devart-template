divCounter=350;



var cssStandard8 = document.createElement('style');
document.getElementsByTagName('head')[0].appendChild(cssStandard8);

var cssStyle = document.styleSheets[0];
var cssRules=cssStyle.cssRules;

var newRule='DIV {-webkit-transition-property: all;-webkit-transition-duration: 4s;padding:0%;margin:0%;font-size: 10px;left: 0%;top:0%;-moz-transition-property: all;-moz-transition-duration: 4s;}';
cssStyle.insertRule(newRule,cssRules.length);


 function jsWait() {
        if (typeof signalArray =="undefined")
        {

            window.setTimeout(jsWait, 100);

        }
        else
        {
            initDiv();
			initStyle();

			changeHtmlDisplay();

			changeColor();
			changeColor();
			changeDropShadowSimple();
			changeRotate();
			changeRotate();
			changeRotate();
			changeRotate();
			//changeRotate();
			//changeRotate();
			changeDropShadowSimpleH()
			changeDropShadowSimpleV()

        }
    }


function initDiv(){
container=[];


for (i=0;i<=divCounter;i++){



//container[i].style.opacity=.61;
if (i==0){
//	container[i].style.background='transparent';
container[i]= document.createElement("div");
	document.body.appendChild(container[i]);
}
else {
	container[i]= document.createElement("div");
 container[0].appendChild(container[i]);
}

container[i].style.zIndex=0;
elementName='myid'+i;
container[i].id=elementName;
}
}

function initStyle(){

bgColChangeRate=200000;



var mycolors=[];
var colNum=350;



function setColor(hue,sat,light,opa){

for (colorCounter=1;colorCounter<=colNum;colorCounter++){
var toSpliceColor='hsla('
+  Math.round(40*Math.random()+hue-20) + ','
+  Math.round(40*Math.random()+sat-20)+ '%,'
+ (Math.round(Math.random()*20)+light) + '%,'
+ (Math.random(opa)+.6	)
+ ')';
//alert (toSpliceColor);

mycolors.splice(1,0,toSpliceColor);
}
}

setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
//setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
//setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
//setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
document.body.style.background=mycolors[Math.round((mycolors.length-1)*Math.random())];

container[0].style.position='fixed';
container[0].style.top=0;
container[0].style.left='0%';

	for (i=1;i<=divCounter;i++){
		container[i].style.textShadow=Math.round( Math.random()*10-5 ) + 'px '
									+Math.round( Math.random()*10-5 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
			container[i].innerHTML= '&#65792;';
			container[i].style.position='relative';
			container[i].style.cssFloat='left';
			container[i].style.fontSize= '90px';

			container[i].style.textAlign='center';
			container[i].style.verticalAlign='middle';
			container[i].style.borderRadius='10px';
			container[i].style.borderColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
			container[i].style.display='inline-block';
			container[i].style.lineHeight='3.5em';
			container[i].style.background= mycolors[Math.round((mycolors.length-1)*Math.random())];
			container[i].style.width=Math.round(1.5	) +'%';
			container[i].style.height=Math.round(Math.random()*5+140) +'%';
			container[i].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
			container[i].style.textShadow=Math.round( Math.random()*1-1 ) + 'px '
												+Math.round( Math.random()*2-1 ) + 'px '
						+ mycolors[Math.round((mycolors.length-1)*Math.random())];
			if (browserPrefix=='webkit'){
			container[i].style.webkitFilter= 'sepia('+ Math.round(Math.random()*500) +'%)';
			container[i].style.webkitFilter= 'grayscale('+ Math.round(Math.random()*500) +'%)';
			container[i].style.webkitFilter= 'saturate('+ Math.round(Math.random()*1000) +'%)';
			container[i].style.webkitTransform = 'rotate(' + Math.round(Math.random()*4)*90 + 'deg)';
			container[i].style.webkitTextStrokeWidth=1 +"px";
  		    container[i].style.webkitTextStrokeColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
  		    }
  		    else {
				container[i].style.MozTransform = 'rotate(' + Math.round(Math.random()*4)*90 + 'deg)';
  		    	container[i].style.MozFilter= 'saturate('+ Math.round(Math.random()*1000) +'%)';
  		    	container[i].style.MozFilter= 'sepia('+ Math.round(Math.random()*500) +'%)';
			    container[i].style.MozFilter= 'grayscale('+ Math.round(Math.random()*500) +'%)';
  		    }




	}
}

function changeHtmlDisplay(){
	window.setInterval(function (){

		var inHtmlCount=Math.round(Math.random()*(divCounter-1)+1);
		//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*180) +'deg)';
			container[i].style.textShadow=Math.round( Math.random()*1-1 ) + 'px '
												+Math.round( Math.random()*2-1 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
			container[i].style.webkitTextStrokeWidth=5 +"px";
  		    container[i].style.webkitTextStrokeColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
	},100000 );
}

function changeColor(){
	var elem0_bg_color_chg=Math.random()*bgColChangeRate+40000;
	var elem0_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];

	window.setInterval(function(){
	   	for (i=1;i<=divCounter;i++){
	    	container[i].style.backgroundColor= mycolors[Math.round((mycolors.length-1)*Math.random())];
	    	container[0].style.backgroundColor= mycolors[Math.round((mycolors.length-1)*Math.random())];
	   		container[i].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
	   				container[i].style.textShadow=Math.round( Math.random()*10-5 ) + 'px '
												+Math.round( Math.random()*10-5 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
		}
	   },elem0_bg_color_chg);
}




function changeDropShadowSimple(){

		window.setInterval(function(){
			dropShadowCount=Math.round(Math.random()*(divCounter-1)+1);
			container[dropShadowCount].style.textShadow=Math.round( 0 ) + 'px '
										+Math.round( Math.random()*400-200 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
		,Math.random()*5000+1);
	}


function changeDropShadowSimpleV(){

		window.setInterval(function(){
			dropShadowCount=Math.round(Math.random()*(divCounter-1)+1);
			container[window.dropShadowCount].style.textShadow=Math.round( Math.random()*10-5 )+ 'px '
										+ Math.round( 0 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}

		,Math.random()*5000+5000);

	}


function changeDropShadowSimpleH(){

		window.setInterval(function(){
			dropShadowCount=Math.round(Math.random()*(divCounter-1)+1);
			container[window.dropShadowCount].style.textShadow=Math.round( 0 )+ 'px '
										+ Math.round( Math.random()*10-5 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}

		,Math.random()*5000+5000);

	}


function changeRotate(){

		window.setInterval(function(){
		var inHtmlCount=Math.round(Math.random()*(divCounter-1)+1);
		if (browserPrefix=='webkit'){
		container[inHtmlCount].style.webkitTransform = 'rotate(' + Math.round(Math.random()*180) + 'deg)';
	} else {
		container[inHtmlCount].style.MozTransform = 'rotate(' + Math.round(Math.random()*180) + 'deg)';
}
		},Math.random()*250);
	}

jsWait();


signalArray=[];






