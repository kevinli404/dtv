// JavaScript Document
function chkdiv(divid){ 
	var chkid=getId(divid); 
	if(chkid != null)
		{ return true; } 
	else 
		{ return false; } 
}

function getId(id) {
	 return typeof id === "string" ? document.getElementById(id) : id;
}

function adHandle(id){
	var orgObj = getId(id);
	var targetObj = getId(id+"_con");
	if (orgObj && targetObj){
		orgObj.innerHTML = targetObj.innerHTML;
		targetObj.innerHTML = "";
	}
}
//********配置**********
//顶通:adDt|通栏01:adBa_1|通栏02:adBa_2|通栏03:adBa_3|通栏04:adBa_4|焦点图01:adFm_1|焦点图02:adFm_2|焦点图03:adFm_3|焦点图04:adFm_4	|小通栏01:adSba_1|小通栏02:adSba_2|小通栏03:adSba_3|小通栏04:adSba_4|画中画:adPp|图文混排:adPt|文字链:adTe|按钮01:adBtn_1|按钮02:adBtn_2|广告也精彩:adAe|联盟01:adUn_1|联盟02:adUn_2|联盟03:adUn_3|每日推荐小通栏:adSba_daily	|每日推荐按钮:adBtn_daily|每日推荐焦点图:adFm_daily|魔图广告:moTu
var arrAdData = ["adDt","adBa_1","adBa_2","adBa_3","adBa_4","adFm_1","adFm_2","adFm_3","adFm_4","adSba_1","adSba_2","adSba_3","adSba_4","adPp","adPt","adTe","adBtn_1","adBtn_2","adBtn_3","adAe","adUn_1","adUn_2","adUn_3","adSba_daily","adBtn_daily","adFm_daily","moTu"];
//利用循环来遍历广告
var adLen = arrAdData.length;
for(var i=0;i<adLen;i++){
	adHandle(arrAdData[i]);
}