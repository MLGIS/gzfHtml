var area ;
 var speed = 50;
 var con1,con2 ;
function startscroll(){
	area = document.getElementById('moocBox');
 con1 = document.getElementById('con1');
 con2 = document.getElementById('con2');

 area.scrollTop = 0;
 con2.innerHTML = con1.innerHTML;
 var myScroll = setInterval("scrollUp()",speed);
area.onmouseover = function(){
	 clearInterval(myScroll);
	}
area.onmouseout = function(){
	 myScroll = setInterval("scrollUp()",speed);
	}
}
 function scrollUp(){
	 if(area.scrollTop >= con1.scrollHeight/2) {
		 area.scrollTop = 0;
	 }else{
	   area.scrollTop++ ; 
	 } 
}
