divCounter=24;


var scriptCSS = document.createElement('script');
scriptCSS.src = "./css_js/standard8_retro.js";
document.getElementsByTagName('body')[0].appendChild(scriptCSS);


 function jsWait() {
        if (typeof signalArray =="undefined")
        {

            window.setTimeout(jsWait, 100);

        }
        else
        {
            initDiv();
			initStyle();
			initDisplayState();
			changeHtmlDisplay();
			changeHtmlDisplay();
			changeColor();
			changeColor();
			changeDropShadowSimpleB();
			changeDropShadowSimpleV();
			changeDropShadowSimpleH();


        }
    }


function initDiv(){
container=[];

//used to track which div is getting the changes  not random
dropShadowCountB=Math.round(Math.random()*(divCounter-1)+1);
dropShadowCountH=Math.round(Math.random()*(divCounter-1)+1);
dropShadowCountV=Math.round(Math.random()*(divCounter-1)+1);
inHtmlCount=Math.round(Math.random()*(divCounter-1)+1);



for (i=1;i<=divCounter;i++){
container[i]= document.createElement("div");
document.body.appendChild(container[i]);


if (i==2){
 bck_container=document.createElement("div");
 document.body.appendChild(bck_container);
 elementName='myid'+i+'_bck';
 bck_container.id=elementName;
 bck_container.style.zIndex=-10;
}

elementName='myid'+i;
container[i].id=elementName;
}

 elem2_bg = document.getElementById("myid2_bck");

}

function initStyle(){

	bgColChangeRate=100000;
	animationPlayState=50000;


var mycolors=[];
var colNum=6;

function setColor(hue,sat,light,opa){

for (colorCounter=1;colorCounter<=colNum;colorCounter++){
var toSpliceColor='hsla('
+  Math.round(40*Math.random()+hue-20) + ','
+  Math.round(20*Math.random()+sat-20)+ '%,'
+ (Math.round(Math.random()*20)+light) + '%,'
+ (Math.random(opa)+1	)
+ ')';
//alert (toSpliceColor);

mycolors.splice(1,0,toSpliceColor);
}
}
mycolors.length=0;
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),1);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),1);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),1);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),1);


elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];

document.body.style.background=elem2_bg_color;

	for (i=1;i<=divCounter;i++){


		container[i].style.textShadow=Math.round( Math.random()*10-5 ) + 'px '
									+Math.round( Math.random()*10-5 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
		container[i].style.color=elem2_bg_color;
		container[i].style.background='transparent';
	}
}


function initDisplayState(){

	 originalViewState="display";
	 changeViewState = "noDisplay";

	for (i=1;i<=divCounter;i++){
		container[i].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';'+'&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
		container[i].className = originalViewState;
	}
}

function changeHtmlDisplay(){
	window.setInterval(function (){

		var inHtmlCount=Math.round(Math.random()*(divCounter-1)+1);

		if(window.inHtmlCount==divCounter){window.inHtmlCount=1} else {window.inHtmlCount=window.inHtmlCount+1};
		if (
		 container[inHtmlCount].className==originalViewState) {
			 container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*30-15) +'deg,'+ Math.round(Math.random()*0) +'deg)';
			 container[inHtmlCount].className =changeViewState;

			}
		else {

			container[inHtmlCount].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
			container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*30-15) +'deg,'+ Math.round(Math.random()*0) +'deg)';
			container[inHtmlCount].className =originalViewState;

		}

	},Math.random()*15000+15000 );
}

function changeColor(){
	 elem2_bg_color_chg=Math.random()*bgColChangeRate+5000;


	window.setInterval(function(){
	   	 elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];
	   	for (i=1;i<=divCounter;i++){
	    	container[i].style.background= 'transparent';
	    	elem2_bg.style.background= elem2_bg_color;
	   		container[i].style.color= elem2_bg_color;
	   		document.body.style.background= elem2_bg_color;
		}
	   },elem2_bg_color_chg);
}

function changeDropShadowSimpleB(){

		window.setInterval(function(){
			if(window.dropShadowCountB==divCounter){window.dropShadowCountB=1} else {window.dropShadowCountB=window.dropShadowCountB+1};
			container[window.dropShadowCountB].style.textShadow=Math.round( Math.random()*10-5 )+ 'px '
										+Math.round( Math.random()*10-5 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);
	}

function changeDropShadowSimpleH(){

		window.setInterval(function(){
			if(window.dropShadowCountH==divCounter){window.dropShadowCountH=1} else {window.dropShadowCountH=window.dropShadowCountH+1};
			container[window.dropShadowCountH].style.textShadow=Math.round( 0 ) + 'px '
										+Math.round( Math.random()*10-5 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);
	}

function changeDropShadowSimpleV(){

		window.setInterval(function(){
			if(window.dropShadowCountV==divCounter){window.dropShadowCountV=1} else {window.dropShadowCountV=window.dropShadowCountV+1};
			container[window.dropShadowCountV].style.textShadow=Math.round( Math.random()*10-5 )+ 'px '
										+ Math.round( 0 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);

	}





jsWait();








