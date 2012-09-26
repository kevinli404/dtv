$(document).ready(function(){
	
	//屏幕高度和宽度
	var page_height = $(window).height()-100;
	var page_width = $(window).width()-50;
	
	//网页的有效区域的宽度
	//var body_width = getBodyWidth();
	
	//缩放比例
	//var ratio = page_width / body_width;
	
	//var tem_height = page_height / ratio;
	
	var root = $('body').eq(0).clone();//保存原来的内容
	$('body').eq(0).html('');
	$(root).children(':last').remove();//remove dtv.js
	$(root).children(':last').remove();//remove jqeury.js
	unScript(root);
	
	var max_step = 10000;//最大遍历次数	
	
	var curr_page = getPageTemplate();//当前页面 DOM 节点
	$('body').eq(0).append(getHeaderTemplate());
	$('body').eq(0).append(curr_page);
		
	//递归适配页面
	adapting($(root).children(':first'));
	
	//最后的处理	
	onScript($('body'));
	$('.dtv-page').each(function(){
		if($.trim($(this).text()) == '') $(this).remove();
	})
	var total_page_num = $('.dtv-page').size();//总页数
	var curr_page_num = 0;//当前页数
	$('.dtv-page').hide();
	//$('body').eq(0).css({'-moz-transform':'scale('+ratio+')'});
	$('.dtv-page').eq(0).fadeIn(500);
	
	var percent = 100/total_page_num;
	if(percent < 10) percent = 10;
	for(var i=0;i<total_page_num;i++){
		var dom = $("<div class='dtv-page-nav' onclick='changePage("+i+")' style='width:"+percent+"%'>"+(i+1)+'</div>');
		//dom.css({'-moz-transform':'scale('+nav_scale+')'});
		$('#dtv-nav').append(dom);
	}	
	$('.dtv-page-nav').eq(0).addClass('curr-page');
	initkey();
	
	 //网页的有效区域的宽度
	function getBodyWidth(){
		return 1000;
	}
	
	function unScript(dom) {
		//alert($(dom)[0].tagName)
		if($(dom)[0].tagName == 'SCRIPT') {
			$(dom).append('}');
			$(dom).prepend('function foo(){');
			return ;
		}
		for(var i=0;i<$(dom).children().size();i++)
			unScript($(dom).children().eq(i));
	}
	
	function onScript(dom){
		if($(dom)[0].tagName == 'SCRIPT') {
			$(dom).html($(dom).html().slice(15,-1));
			return ;
		}
		for(var i=0;i<$(dom).children().size();i++)
			onScript($(dom).children().eq(i));
	}

	//页面内容模板
	function getHeaderTemplate(){
		return $("<div id='dtv-header' style='width:"+page_width+"px;'>\
						<div id='dtv-addr'><form method='post' action=''>\
							<input id='dtv-addr' name='dtv_url'><input type='submit' value='Submit'></form>\
						</div><div id='dtv-nav'></div>\
					</div>");
	}
	
	//顶部内容模板
	function getPageTemplate(){
		return $("<div class='dtv-page' style='width:"+page_width+"px;height:"+page_height+"px'></div>");
	}
	//下一个适配的节点
	function getNext(dom){
		if($(dom).next().size() > 0) return $(dom).next();
		do{
			dom = $(dom).parent();
			if($(dom).parent().size() == 0) 
				return false;//dom is body
		}while($(dom).next().size() == 0)
		return $(dom).next();
	}
	
	// 节点深度
	function getDepth(dom){
		var num = 0;
		while($(dom).parent().size() != 0)
		{
			dom = $(dom).parent();
			num ++;
		}
		return num;
	}
	
	//创建页面
	function newPage(){
		$(curr_page).css({'display':'none','overflow':'hidden'});			
		curr_page = getPageTemplate();
		$('body').eq(0).append(curr_page);
	}
	
	//适配页面
	function adapting(root){ 
		if(--max_step <= 0) return console.log("Error: max_step <= 0");
		console.log('step:'+(10000-max_step));
		var html = $(curr_page).html();
		$(curr_page).append($(root).clone());
		
		//overflow
		if($(curr_page)[0].clientHeight < $(curr_page)[0].scrollHeight ||
				$(curr_page)[0].clientWidth < $(curr_page)[0].scrollWidth){
				
			//rollback
			$(curr_page).html(html);
			
			if(html != ''){//之前已有内容
				if($(root).children().size() > 0 && getDepth(root) < 3){
					adapting($(root).children(':first'));
				}
				else{
					newPage();
					console.log("new page for overflow");
					adapting($(root));
				}
				
			}
			else{ 
				if($(root).children().size() == 0){//overflow 没有子节点
					$(curr_page).html($(root).clone().css({'width':'100%','height':'100%'}));
					newPage();
					console.log("new page for no next child");
					
					root = getNext(root);//寻找下一个适配的节点
					if(root){
						adapting(root);
					}
					else if($(curr_page).html() != '') newPage();
				}
				else //适配第一个子节点
					adapting($(root).children(':first'));
			}
		}
		//ok
		else{
			root = getNext(root);//寻找下一个适配的节点
			if(root){
				adapting(root);
			}
			else if($(curr_page).html() != '') newPage();
		}
	}// adapting end;
	
})
//换页
	function changePage(i){
		$('.dtv-page').hide();
		$('.dtv-page').eq(i).fadeIn(500);
		$('.curr-page').removeClass('curr-page');
		$('.dtv-page-nav').eq(i).addClass('curr-page');		
	}
var key_buf = [];
function initkey() {
    var links = $('a');
    for (var i=0;i < links.length;i++) {
        var link = $(links[i]);
        var span = $('<span class="link_nav" id="link_nav_' + i + '">' + i + '</span>');
        link.after(span);
    }
}
$(document).keydown(function(event) {
        var k = event.which;
        if (k >= 48 && k <= 57) {
            key_buf.push(k-48);
        }
	var ln = '';
        for (var i=0;i < key_buf.length;i++) {
             ln += key_buf[i];
        }
        var link = $('#link_nav_' + ln).prev();
	$(link).css({'color':'#fff','background':'#444'});
        if (k == 13) {  
            window.location = 'http://localhost/dtv/proxy?dtv_url='+decodeURI(link.attr('href'));
            key_buf = [];
        }
    })
