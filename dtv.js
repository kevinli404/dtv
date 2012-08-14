$(document).ready(function(){
	
	//屏幕高度和宽度
	var page_height = 600;//$(document).height()-100;
	var page_width = 1000;//$(document).width()-50;
	
	//网页的有效区域的宽度
	var body_width = getBodyWidth();
	
	//缩放比例
	var ratio = page_width / body_width;
	
	var tem_height = page_height / ratio;
	
	var root = $('body').clone();//保存原来的内容
	$('body').html('');
	$(root).children(':last').remove();
	$(root).children(':last').remove();
	
	var max_step = 10000;//最大递归次数
	
	//当前页面 DOM 节点
	var curr_page = getPageTemplate();
	
	$('body').append(getHeaderTemplate());
	$('body').append(curr_page);
	
	//递归适配页面
	adapting($(root).children(':first'));
	
	//最后的处理	
	$('.dtv-page').each(function(){
		if($.trim($(this).text()) == '') $(this).remove();
	})
	var total_page_num = $('.dtv-page').size();//总页数
	var curr_page_num = 0;//当前页数
	$('.dtv-page').hide();
	//$('body').css({'-moz-transform':'scale('+ratio+')'});
	$('.dtv-page').eq(0).fadeIn(500);
	
	var str = '<select onchange="changePage(this)">';
	for(var i=1;i<=total_page_num;i++){
		str += '<option>'+i+'</option>';
	}
	str += '</select>';
	$('.dtv-header').append(str);
	
	 //网页的有效区域的宽度
	function getBodyWidth(){
		return 1000;
	}

	//页面内容模板
	function getHeaderTemplate(){
		return $("<div class='dtv-header'>\
						header\
					</div>");
	}
	
	//顶部内容模板
	function getPageTemplate(){
		return $("<div class='dtv-page' style='width:"+body_width+"px;height:"+tem_height+"px'></div>");
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
	
	//创建页面
	function newPage(){
		$(curr_page).css({'display':'none','overflow':'hidden'});			
		curr_page = getPageTemplate();
		$('body').append(curr_page);
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
			
			if(html != ''){//之前已有内容,可建新页
				newPage();
				console.log("new page for overflow");
				adapting($(root));
			}
			else{ 
				if($(root).children().size() == 0){//没有子节点
					$(curr_page).html($(root).clone().css({'width':'100%','height':'100%'}));
					newPage();
					console.log("new page for now");
					
					root = getNext(root);//寻找下一个适配的节点
					if(root){
						adapting(root);
					}
				}
				else //适配第一个子节点
					adapting($(root).children(':first'));
			}
		}
		//ok
		else{
			if($(root).next().size() == 0){//无下一个子节点, 可建新页
				$(curr_page).css({'display':'none','overflow':'hidden'});			
				curr_page = getPageTemplate();
				$('body').append(curr_page);
				console.log("new page because no next");
			}
			root = getNext(root);//寻找下一个适配的节点
			if(root){
				adapting(root);
			}
		}
	}// adapting end;
	
})
//换页
	function changePage(dom){
		var page = $(dom).val();
		$('.dtv-page').hide();
		$('.dtv-page').eq(page - 1).fadeIn(500);
	}
	$('a').focus(function(){
		$(this).css({'color':'blue'})
	})