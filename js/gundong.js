/*function _InitScroll(_S1, _S2, _W, _H, _T) {
	return "var marqueesHeight" + _S1 + "=" + _H + ";var stopscroll" + _S1 + "=false;var scrollElem" + _S1 + "=document.getElementById('" + _S1 + "');with(scrollElem" + _S1 + "){style.width=" + _W + ";style.height=marqueesHeight" + _S1 + ";style.overflow='hidden';noWrap=true;}scrollElem" + _S1 + ".onmouseover=new Function('stopscroll" + _S1 + "=true');scrollElem" + _S1 + ".onmouseout=new Function('stopscroll" + _S1 + "=false');var preTop" + _S1 + "=0; var currentTop" + _S1 + "=0; var stoptime" + _S1 + "=0;var leftElem" + _S2 + "=document.getElementById('" + _S2 + "');scrollElem" + _S1 + ".appendChild(leftElem" + _S2 + ".cloneNode(true));setTimeout('init_srolltext" + _S1 + "()'," + _T + ");function init_srolltext" + _S1 + "(){scrollElem" + _S1 + ".scrollTop=0;setInterval('scrollUp" + _S1 + "()',50);}function scrollUp" + _S1 + "(){if(stopscroll" + _S1 + "){return;}currentTop" + _S1 + "+=1;if(currentTop" + _S1 + "==(marqueesHeight" + _S1 + "+1)) {stoptime" + _S1 + "+=1;currentTop" + _S1 + "-=1;if(stoptime" + _S1 + "==" + _T / 50 + ") {currentTop" + _S1 + "=0;stoptime" + _S1 + "=0;}}else{preTop" + _S1 + "=scrollElem" + _S1 + ".scrollTop;scrollElem" + _S1 + ".scrollTop +=1;if(preTop" + _S1 + "==scrollElem" + _S1 + ".scrollTop){scrollElem" + _S1 + ".scrollTop=0;scrollElem" + _S1 + ".scrollTop +=1;}}}";
}*/

var preTopA1,currentTopA1 ,stoptimeA1,leftElemA2,marqueesHeightA1 ,stopscrollA1 ,scrollElemA1;
function initgd(){
marqueesHeightA1 = 171;
stopscrollA1 = false;
scrollElemA1 = document.getElementById('A1');
with(scrollElemA1) { 
	style.width = 550;
	style.height = marqueesHeightA1;
	style.overflow = 'hidden';
	noWrap = true; 
} 
scrollElemA1.onmouseover = new Function('stopscrollA1=true');
scrollElemA1.onmouseout = new Function('stopscrollA1=false');
preTopA1 = 0;currentTopA1 = 0;
stoptimeA1 = 0;
leftElemA2 = document.getElementById('A2');
scrollElemA1.appendChild(leftElemA2.cloneNode(true));
setTimeout('init_srolltextA1()', 4000);
}

function init_srolltextA1() { 
	scrollElemA1.scrollTop = 0;
	setInterval('scrollUpA1()', 50);
}

function scrollUpA1() { 
	if(stopscrollA1) { return; } 
	currentTopA1 += 1; 
	if(currentTopA1 == (marqueesHeightA1 + 1)) {
		stoptimeA1 += 1;
		currentTopA1 -= 1;
		if(stoptimeA1 == 20) {
			currentTopA1 = 0;
			stoptimeA1 = 0; 
		} 
	} else { 
		preTopA1 = scrollElemA1.scrollTop;
		scrollElemA1.scrollTop += 1;
		if(preTopA1 == scrollElemA1.scrollTop) {
			scrollElemA1.scrollTop = 0;
			scrollElemA1.scrollTop += 1; 
		} 
	}
}