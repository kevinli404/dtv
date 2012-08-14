// JavaScript Document
(function(){
	var obj=document.getElementById("goTopBtn");
	var initObjTop = obj.offsetTop;
	function getScrollTop() {
		return document.documentElement.scrollTop || document.body.scrollTop || 0;
	}
	function setScrollTop(value){
		if(document.documentElement.scrollTop)
			document.documentElement.scrollTop = value;
		else
			document.body.scrollTop = value;
	}
	obj.onclick=function(){
		var goTop=setInterval(scrollMove,1);
		function scrollMove(){
			setScrollTop(getScrollTop()/1.1);
			if(getScrollTop()<1)
				clearInterval(goTop);
		}
	}
	var btmHeight = (-[1,])?463:473;
	window.onscroll=function(){
		getScrollTop()>0?obj.style.display="":obj.style.display="none";
		obj.style.bottom=0+"px";
		if(getDisFromBottom() <= btmHeight){
			obj.style.bottom=getDisFromBottom() + "px";
			obj.style.top="auto";
		}
	}
	function getDisFromBottom() {
		var dis = getScrollTop() +getClientHeight() + btmHeight - getScrollHeight();
		return  dis > 0 ? dis : 0;
	}
	function getScrollHeight() {
		return getDocEle().scrollHeight;
	}
	function getClientHeight() {
		return getDocEle().clientHeight;
	}
	function getDocEle() {
		return document.compatMode == 'CSS1Compat' ? document.documentElement : document.body;
	}
})();