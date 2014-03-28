divCounter=8;
//even only for crossfader


var scriptCSS = document.createElement('script');
scriptCSS.src = "./css_js/standard8_mandala.js";
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
//			changeHtmlDisplay();
//			changeColor();
			changeColor();
			//changeDropShadowSimpleB();
			//changeDropShadowSimpleV();
//			changeDropShadowSimpleH();


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

	bgColChangeRate=50000;
	animationPlayState=50000;

var mycolors=[];
var colNum=10;



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
mycolors.length=0;
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
//setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
//setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);
setColor(Math.round(Math.random()*340),Math.round(Math.random()*800),Math.round(Math.random()*80),.3);


	for (i=1;i<=divCounter;i++){
		//container[i].style.zIndex=1;
		container[i].style.opacity=.71;
		container[i].style.color=mycolors[Math.round((mycolors.length-1)*Math.random())];
		//container[i].style.flex='1';
		//container[i].style.flex.basis='4000px';

		//if (Math.round(Math.random()*1)==0){
		//container[i].style.webkitTransform= 'rotate(' + Math.round(Math.random()*360-180) + 'deg)';}
		//else{
		//container[i].style.webkitTransform='skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*180) +'deg)';
	//	container[i].style.webkitTransform= 'rotate(' + Math.round(Math.random()*360-180) + 'deg)';
//}
		container[i].style.textShadow=Math.round( Math.random()*3 ) + 'px '
									+Math.round( Math.random()*400-280 ) + 'px '
									+ mycolors[Math.round((mycolors.length-1)*Math.random())];
		  container[i].style.webkitTextFillColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
		  container[i].style.webkitTextStrokeWidth=Math.round(Math.random()*50+5) +"px";
  		  container[i].style.webkitTextStrokeColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
  		    		  container[i].style.border='1px';
		    		  container[i].style.borderRadius='400px';
		    		  container[i].style.borderColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
  		  container[i].style.overflow='hidden';
	}
 elem2_bg = document.getElementById("myid2_bck");
elem2_bg.style.backgroundColor= mycolors[Math.round((mycolors.length-1)*Math.random())];

}


function initDisplayState(){

	 originalViewState="display";
	 changeViewState = "noDisplay";

	for (i=1;i<=divCounter;i++){
		container[i].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
		if (i<= divCounter/2) {
		container[i].className = originalViewState;
	    } else {container[i].className = changeViewState;}

	}

}

function changeHtmlDisplay(){
	window.setInterval(function (){

		var inHtmlCount=Math.round(Math.random()*(divCounter/2-1)+1);

		if (
		 container[inHtmlCount].className==originalViewState) {
			 container[inHtmlCount].className =changeViewState;
			// alert(inHtmlCount+(divCounter/2));
			 container[inHtmlCount+(divCounter/2)].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
			container[inHtmlCount+(divCounter/2)].style.textShadow=Math.round( Math.random()*0 )+ 'px '
							+Math.round( Math.random()*400-280 ) + 'px '
				+mycolors[Math.round((mycolors.length-1)*Math.random())];
			 container[inHtmlCount+(divCounter/2)].className =originalViewState;





			}
		else {

			container[inHtmlCount].innerHTML= '&#'+myarray[Math.round((myarray.length-1)*Math.random())]+';';
			container[inHtmlCount].className =originalViewState;
			container[inHtmlCount+(divCounter/2)].className =changeViewState;

		}

	},7000 );
}

function changeColor(){
	 elem2_bg_color_chg=Math.random()*bgColChangeRate+30000;
	 elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];

	window.setInterval(function(){
	   	 elem2_bg_color=mycolors[Math.round((mycolors.length-1)*Math.random())];
	   	for (i=1;i<=divCounter;i++){

	    	container[i].style.background= 'transparent';

	    	elem2_bg.style.background= mycolors[Math.round((mycolors.length-1)*Math.random())];
	   		container[i].style.color= mycolors[Math.round((mycolors.length-1)*Math.random())];
		}
	   },elem2_bg_color_chg);
}


function changeDropShadowSimpleH(){

		window.setInterval(function(){
			if(window.dropShadowCountH==divCounter){window.dropShadowCountH=1} else {window.dropShadowCountH=window.dropShadowCountH+1};
			container[window.dropShadowCountH].style.textShadow=Math.round( 0 ) + 'px '
										+Math.round( Math.random()*400-200 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];
			//container[window.dropShadowCountH].style.webkitTextFillColor=mycolors[Math.round((mycolors.length-1)*Math.random())];
			//container[window.dropShadowCountH].style.webkitTextStrokeWidth=Math.round(Math.random()*50+5) +"px";
  		    //container[window.dropShadowCountH].style.webkitTextStrokeColor=mycolors[Math.round((mycolors.length-1)*Math.random())];

										}

			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);
	}

function changeDropShadowSimpleV(){

		window.setInterval(function(){
			if(window.dropShadowCountV==divCounter){window.dropShadowCountV=1} else {window.dropShadowCountV=window.dropShadowCountV+1};
			container[window.dropShadowCountV].style.textShadow=Math.round( 0)+ 'px '
										+ Math.round( Math.random()*400-200 ) + 'px '
										+mycolors[Math.round((mycolors.length-1)*Math.random())];}
			//container[inHtmlCount].style.webkitTransform= 'skew('+ Math.round(Math.random()*180) +'deg,'+ Math.round(Math.random()*0) +'deg)';
		,Math.random()*5000+5000);

	}





jsWait();








