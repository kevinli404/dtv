//焦点图
$(".details li img").css("opacity","0.3");
var $fIndex = 0;
var picInterval = picTimer = null;
$(".items ul li").hover(function(){
		$fIndex = $(this).index();
		clearInterval(picInterval);
		playFocus($fIndex);
	},function(){
		clearInterval(picInterval);
		picInterval = setInterval(play,5000);
}).eq(0).trigger("mouseover");
$(".details").hover(function() {
		clearInterval(picInterval);
	},function(){
		clearInterval(picInterval);
		picInterval = setInterval(play,5000);
}).trigger("mouseleave");
function playFocus(index){
	//$(".details>ul>li>a").eq(index).html('<img src="'+$(".items li").eq(index).find("img").attr("bigPic")+'" />');
	var $thisBigPic = $(".details li img.detailImg").eq(index);
	$thisBigPic.attr("src",$thisBigPic.attr("bigPic"));
	$(".details li").eq(index).show().siblings().hide();
	$thisBigPic.css("opacity","0.3");
	$thisBigPic.animate({"opacity":1},400);
	$(".items li").eq(index).addClass("cur").siblings().removeClass("cur");
}
function play(){
	if($fIndex <= 4)
		$fIndex++;
	$fIndex = ($fIndex>4)?0:$fIndex;
	playFocus($fIndex);
}
//首页功能
$(function(){
	//ie6 png fixed
	//$("ul.vdImgList li").pngFix();
	//导航条下拉菜单
	$("#aDropBtn").toggle(function(event){
		$("#downList").css({"right":($(window).width() - 960)/2,"index":99});
		if($("#downList")[0].style.display == "none")
			$("#downList").slideDown();
		else
			$("#downList").slideUp();
		if ($(this).hasClass("up"))
			$(this).removeClass("up");
		else
			$(this).addClass("up");
		event.cancelBubble = true;
		event.stopPropagation();

	},function(event){
		if($("#downList")[0].style.display == "none")
			$("#downList").slideDown();
		else
			$("#downList").slideUp();
		if ($(this).hasClass("up"))
			$(this).removeClass("up");
		else
			$(this).addClass("up");
		event.cancelBubble = true;
		event.stopPropagation();
	});

	$(document).click(function(){
		$("#downList").slideUp();
		$("#aDropBtn").removeClass("up");
	});

	$("#downList").click(function(event){
		event.cancelBubble = true;
		event.stopPropagation();
	});

	//加入收藏和设为首页
	var oIndex = $("#madeIndex");
	var oAddMark = $("#addMark");
	oIndex.click(function(){
		try{
			oIndex.css("behavior","url(#default#homepage)");
			oIndex[0].setHomePage('http://www.huanqiu.com/');
		}catch(e){
			if(window.netscape){
				try{
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				}catch(e){
					alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
				};
			}else{
				alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将'http://www.huanqiu.com/'设置为首页。");
			};
		};
	});

	//收藏
	oAddMark.click(function(){
		var title = $("title").text();
		if(window.sidebar){
			window.sidebar.addPanel(title,"http://www.huanqiu.com","")
		}
		else{
			if(document.all){
				window.external.AddFavorite("http://www.huanqiu.com",title);
			}
			else{
				if(window.opera&&window.print){
					return true;
				}
			}
		}
	});
	//环球视觉
	var oVisualChildA = $("#visual a");
	var oVisualChildP = $("#visual a p");
	oVisualChildA.hover(function(){
			$(this).children("p").stop();
			$(this).children("p").animate({height:'37px'},300);
		},function(){
			$(this).children("p").stop();
			$(this).children("p").animate({height:'0px'},300);
		});
	/*oVisualChildP.live("mouseover",function(){
		$(this).show();
	});*/
	//视频图标渐变效果
	$("img.vdIcon").parents("li").hover(function(){
		$(this).find("img.vdIcon").attr("src","http://himg2.huanqiu.com/statics/images/index/vdBtnHover.png");
	},function(){
		$(this).find("img.vdIcon").attr("src","http://himg2.huanqiu.com/statics/images/index/vdBtnNormal.png");
	});	
	//回到顶部按钮Hover效果
	$("#goTopBtn").hover(function(){
		$(this).css("background-image","url(http://himg2.huanqiu.com/statics/images/goTopBtn.png)");
	},function(){
		$(this).css("background-image","url(http://himg2.huanqiu.com/statics/images/goTopBtnNormal.png)");
	}).trigger("mouseout");
});
//延时加载
var hqLazy = {
	on: function(element, type, handler) {
		return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler)
	},
	bind: function(object, handler) {
		return function() {
			return handler.apply(object, arguments)	
		}
	},
	pageX: function(element) {
		return element.offsetLeft + (element.offsetParent ? arguments.callee(element.offsetParent) : 0)
	},
	pageY: function(element) {
		return element.offsetTop + (element.offsetParent ? arguments.callee(element.offsetParent) : 0)	
	},
	hasClass: function(element, className) {
		return new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className)
	},
	attr: function(element, attr, value) {
		if(arguments.length == 2) {
			return element.attributes[attr] ? element.attributes[attr].nodeValue : undefined
		}
		else if(arguments.length == 3) {
			element.setAttribute(attr, value)
		}
	}
};

function LazyLoad(obj) {
	this.lazy = typeof obj === "string" ? document.getElementById(obj) : obj;
	this.aImg = this.lazy.getElementsByTagName("img");
	this.fnLoad = hqLazy.bind(this, this.load);
	this.load();
	hqLazy.on(window, "scroll", this.fnLoad);
	hqLazy.on(window, "resize", this.fnLoad);
}
LazyLoad.prototype = {
	load: function() {
		var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var iClientHeight = document.documentElement.clientHeight + iScrollTop;
		var i = 0;
		var aParent = [];
		var oParent = null;
		var iTop = 0;
		var iBottom = 0;
		var aNotLoaded = this.loaded(0);
		if(this.loaded(1).length != this.aImg.length) {
			var aNoLoadLen = aNotLoaded.length;
			for(i = 0; i < aNoLoadLen; i++) {
				oParent = aNotLoaded[i].parentElement || aNotLoaded[i].parentNode;
				iTop = hqLazy.pageY(oParent);
				iBottom = iTop + oParent.offsetHeight;
				if((iTop > iScrollTop && iTop < iClientHeight) || (iBottom > iScrollTop && iBottom < iClientHeight)) {
					aNotLoaded[i].src = hqLazy.attr(aNotLoaded[i], "data-img") || aNotLoaded[i].src;
					if(aNotLoaded[i].className)
						aNotLoaded[i].className += " loaded";
					else
						aNotLoaded[i].className = "loaded";
				}
			}
		}
	},
	loaded: function(status) {
		var array = [];
		var i = 0;
		var imgLen = this.aImg.length;
		for(i = 0; i < imgLen; i++){
			if(hqLazy.hasClass(this.aImg[i], "loaded")){
                if(!!status ){
                array.push(this.aImg[i])
                }
            }else {
                if(!status ){
                array.push(this.aImg[i])
                }
            }
		}
		return array
	}
};
//应用
hqLazy.on(window, "load", function () {new LazyLoad("mainCon")});