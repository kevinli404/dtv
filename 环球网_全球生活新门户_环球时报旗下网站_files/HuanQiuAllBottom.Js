<!-- 百度统计代码 begin -->
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
if(document.location.host=="msn.huanqiu.com"){
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F39bc489ef8ff23ec5dc12cd120d4f2b8' type='text/javascript'%3E%3C/script%3E"));
}else{
	document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F1fc983b4c305d209e7e05d96e713939f' type='text/javascript'%3E%3C/script%3E"));
}
<!-- 百度统计代码 end -->

<!-- webTerren -->
document.write(unescape("%3Cscript id='tr_statobj' src='http://cl2.webterren.com/webdig.js?z=17' type='text/javascript'%3E%3C/script%3E"));

var obj=document.getElementById("tr_statobj");
if(window.ActiveXObject){
	run();
}
else
	document.write(unescape("%3Cscript type='text/javascript'%3E wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');%3C/script%3E"));

function run(){
	if(obj.readyState=='complete'){
		wd_paramtracker('_wdxid=000000000000000000000000000000000000000000');
	}
	else{
		window.setTimeout(run,50);
	}
}
<!-- webTerren -->
