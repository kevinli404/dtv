(function(a){a.fn.iSuggest=function(m){var d={api:"",delay_ms:300,tmplId:"suggResult",currClass:"curr_item"};var k;var j=a(this);var i=a("<div id='search_suggest'><ul></ul></div>");var b=a.extend({},d,m);i.appendTo("body").hide();j.blur(function(){setTimeout(function(){i.hide()},300)});a(window).load(e).resize(e);return j.each(function(){j.attr("autocomplete","off");j.keyup(function(n){c(n)}).keydown(function(n){if(/27$|38$|40$/.test(n.keyCode)&&i.is(":visible")){n.preventDefault()}})});function c(n){if(k){k.abort()}if(/27$|38$|40$/.test(n.keyCode)&&i.is(":visible")){n.preventDefault();switch(n.keyCode){case 38:h("up");break;case 40:h("down");break;case 27:i.hide();break}}else{if(/13$/.test(n.keyCode)&&i.find("."+b.currClass).length){n.preventDefault();l(i.find("."+b.currClass))}else{try{clearTimeout(delay);delay=null}catch(n){}delay=setTimeout(function(){var o=a.trim(j.val());f(o)},b.delay_ms)}}}function f(n){if(n.length){k=a.get(b.api,{q:n},function(o){if(o.length){a("#search_suggest ul").empty();g(o)}else{i.hide()}})}else{i.hide()}}function g(n){if(n.length){a("#search_suggest ul").html(a("#"+b.tmplId).tmpl(n));e();i.show();a("#search_suggest ul").delegate("li","click",function(){l(this)})}}function e(){var o=j.offset();var n=j.outerHeight();i.css({top:(o.top+n)+"px",left:o.left+"px"})}function h(n){var o=i.find("."+b.currClass);if(o.length){o.removeClass(b.currClass);if(n=="up"){if(o.prev("li").length){o.prev("li").addClass(b.currClass)}else{i.find("li:last").addClass(b.currClass)}}else{if(n=="down"){if(o.next("li").length){o.next("li").addClass(b.currClass)}else{i.find("li:first").addClass(b.currClass)}}}}else{if(n=="up"){i.find("li:last").addClass(b.currClass)}else{if(n=="down"){i.find("li:first").addClass(b.currClass)}}}}function l(n){if(a.isFunction(b.item_act)){b.item_act(n)}else{console.error("iSuggest: call back is not a function")}}}})(jQuery);