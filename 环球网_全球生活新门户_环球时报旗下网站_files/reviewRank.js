$(function(){
if(typeof(json) != 'undefined'){
json = json.replace(/([\u4e00-\u9fa5]+)"([\u4e00-\u9fa5]+)"([\u4e00-\u9fa5]*)/g,"$1“$2”");
obj = $.parseJSON(json);
//alert(obj);
var res = "";
if(obj!=null && obj!=undefined ){
$.each(obj, function(idx, item){
var count = parseInt(idx);
if(item.title!=undefined){
res += "<li>";
if(count==0){
res += " <em class='cur'>"+(count+1)+"</em>";
}else{
res += " <em>"+(count+1)+"</em>";
}
res += " <a href='" + item.url + "' target='_blank' title='" + item.title + "'>" + item.title + "</a>";
res += "</li>";
}
})
}
$("ul#box2").append(res);
}
})