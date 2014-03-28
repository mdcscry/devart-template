divCounter=Math.round(Math.random()*20+5);
var innerHtmlChangeUp;
var scriptCSS = document.createElement('script');
//scriptCSS.src = "./spiral"+(Math.round(Math.random())+8)+".js";
scriptCSS.src = "./css_js/spiral11.js";
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
dropShadowCountB=Math.round(Math.random()*(divCounter-1)+1);
dropShadowCountH=Math.round(Math.random()*(divCounter-1)+1);
dropShadowCountV=Math.round(Math.random()*(divCounter-1)+1);


for (i=1;i<=divCounter;i++){
container[i]= document.createElement("div");

document.body.appendChild(container[i]);

if (i==2){
 bck_container=document.createElement("div");
 document.body.appendChild(bck_container);
 elementName='myid'+i+'_bck';
 bck_container.id=elementName;
}
 elementName='myid'+i;
 container[i].id=elementName;

}


var elem2_bg = document.getElementById("myid2_bck");

}

function initStyle(){
var mycolors=[];
var colNum=6;


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
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);

    innerHtmlStartUp='&nbsp;&#'+myarray[Math.round((myarray.length-1)*Math.random())]+ ';<BR>&nbsp;&#'+ myarray[Math.round((myarray.length-1)*Math.random())]+';';
	bgColChangeRate=200000;
	animationPlayState=50000;
	textChangeRate1=4000;
	fontChangeRate=100;
	fontSizeFactorMultiple=200;
	fontSizeFactorAddOn=150;
	elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];
    bck_container.style.backgroundColor=elem2_bg_color;
    innerHtmlChangeUp=myarray[Math.round((myarray.length-1)*Math.random())];
	window.setInterval(function (){
	  innerHtmlChangeUp=myarray[Math.round((myarray.length-1)*Math.random())];
	},30000);





	for (i=1;i<=divCounter;i++){
		container[i].style.color=mycolors[Math.round((mycolors.length-1)*Math.random())];
		container[i].style.zIndex=10+(1*i);
	//	container[i].style.opacity=.91;
		container[i].innerHTML= '&#'+innerHtmlStartUp+';';
		container[i].background='transparent';
		container[i].style.textShadow=Math.round( Math.random()*10-5 ) + 'px '
									+Math.round( Math.random()*10-5 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
	}


}

function initDisplayState(){

	 originalViewState="display";
	 changeViewState = "noDisplay";

	for (i=1;i<=divCounter;i++){
		container[i].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';<br><br>'+'&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
		container[i].className = changeViewState;
	}
}

function changeColor(){
	 elem2_bg_color_chg=Math.random()*bgColChangeRate+50000;
	 elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];

	window.setInterval(function(){
	   	 elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];
        bck_container.style.backgroundColor=elem2_bg_color;


	   	for (i=1;i<=divCounter;i++){

	    	container[i].style.backgroundColor= elem2_bg_color;


	   		container[i].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
		}
	   },elem2_bg_color_chg);
}


function changeHtmlDisplay(){
	window.setInterval(function (){
		var inHtmlCount=Math.round(Math.random()*(divCounter-1)+1);
			container[inHtmlCount].innerHTML= '&#'+innerHtmlChangeUp+';<br><br>&#'+innerHtmlChangeUp+';';

	},Math.random()*15000+30000 );
}


function changeDropShadowSimpleB(){

		window.setInterval(function(){
			if(window.dropShadowCountB==divCounter){window.dropShadowCountB=1} else {window.dropShadowCountB=window.dropShadowCountB+1};
			container[window.dropShadowCountB].style.textShadow=Math.round( Math.random()*20-10 )+ 'px '
										+Math.round( Math.random()*20-10 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);
	}

function changeDropShadowSimpleH(){

		window.setInterval(function(){
			if(window.dropShadowCountH==divCounter){window.dropShadowCountH=1} else {window.dropShadowCountH=window.dropShadowCountH+1};
			container[window.dropShadowCountH].style.textShadow=Math.round( 0 ) + 'px '
										+Math.round( Math.random()*20-10 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);
	}

function changeDropShadowSimpleV(){

		window.setInterval(function(){
			if(window.dropShadowCountV==divCounter){window.dropShadowCountV=1} else {window.dropShadowCountV=window.dropShadowCountV+1};
			container[window.dropShadowCountV].style.textShadow=Math.round( Math.random()*200-100)+ 'px '
										+ Math.round( 0 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);

	}



jsWait();
