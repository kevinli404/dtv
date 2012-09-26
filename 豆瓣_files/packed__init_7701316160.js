(function(c,v){var n={},s={},a={},u={autoLoad:true,timeout:6000,coreLib:[],mods:{}},o=(function(){var d=v.getElementsByTagName("script");return d[d.length-1]})(),e=[],h,j=[],m=false,b={},t={},k=function(d){return d.constructor===Array},i=function(x){var w=u.mods,d;if(typeof x==="string"){d=(w[x])?w[x]:{path:x}}else{d=x}return d},g=function(d,C,x,y){var B,w,D,A,z=function(){n[d]=1;y&&y(d);y=null;c.clearTimeout(B)};if(!d){return}if(n[d]){a[d]=false;if(y){y(d)}return}if(a[d]){setTimeout(function(){g(d,C,x,y)},10);return}a[d]=true;B=c.setTimeout(function(){if(u.timeoutCallback){try{u.timeoutCallback(d)}catch(E){}}},u.timeout);D=C||d.toLowerCase().split(/\./).pop().replace(/[\?#].*/,"");if(D==="js"){w=v.createElement("script");w.setAttribute("type","text/javascript");w.setAttribute("src",d);w.setAttribute("async",true)}else{if(D==="css"){w=v.createElement("link");w.setAttribute("type","text/css");w.setAttribute("rel","stylesheet");w.setAttribute("href",d)}}if(x){w.charset=x}if(D==="css"){setTimeout(function(){z()},0)}else{w.onerror=function(){z();w.onerror=null};w.onload=w.onreadystatechange=function(){var E;if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){setTimeout(function(){z()},0);w.onload=w.onreadystatechange=null}}}o.parentNode.insertBefore(w,o)},l=function(C,x){var D=u.mods,d,w,A,y=0,z;d=C.join("");z=C.length;if(s[d]){x();return}function B(){if(!--z){s[d]=1;x()}}for(;w=C[y++];){A=i(w);if(A.requires){l(A.requires,(function(E){return function(){g(E.path,E.type,E.charset,B)}})(A))}else{g(A.path,A.type,A.charset,B)}}}
/*!
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */
,r=function(A){var w=false,z=true,C=c.document,B=C.documentElement,F=C.addEventListener?"addEventListener":"attachEvent",D=C.addEventListener?"removeEventListener":"detachEvent",d=C.addEventListener?"":"on",E=function(G){if(G.type=="readystatechange"&&C.readyState!="complete"){return}(G.type=="load"?c:C)[D](d+G.type,E,false);if(!w&&(w=true)){A.call(c,G.type||G)}},y=function(){try{B.doScroll("left")}catch(G){setTimeout(y,50);return}E("poll")};if(C.readyState=="complete"){A.call(c,"lazy")}else{if(C.createEventObject&&B.doScroll){try{z=!c.frameElement}catch(x){}if(z){y()}}C[F](d+"DOMContentLoaded",E,false);C[F](d+"readystatechange",E,false);c[F](d+"load",E,false)}},f=function(){var d;while(d=j.shift()){p.apply(null,d)}},p=function(){var d=[].slice.call(arguments),w,x;if(u.autoLoad&&u.coreLib.length&&!s[u.coreLib.join("")]){l(u.coreLib,function(){p.apply(null,d)});return}if(e.length&&!s[e.join("")]){l(e,function(){p.apply(null,d)});return}if(typeof d[d.length-1]==="function"){w=d.pop()}x=d.join("");if((d.length===0||s[x])&&w){w();return}l(d,function(){s[x]=1;w&&w()})};p.add=p.define=function(w,d){if(!w||!d||!d.path){return}u.mods[w]=d};p.delay=function(){var w=[].slice.call(arguments),d=w.shift();c.setTimeout(function(){p.apply(this,w)},d)};p.global=function(){var d=k(arguments[0])?arguments[0]:[].slice.call(arguments);e=e.concat(d)};p.ready=function(){var d=[].slice.call(arguments);if(m){return p.apply(this,d)}j.push(d)};p.css=function(w){var d=v.getElementById("do-inline-css");if(!d){d=v.createElement("style");d.type="text/css";d.id="do-inline-css";o.parentNode.insertBefore(d,o)}if(d.styleSheet){d.styleSheet.cssText=d.styleSheet.cssText+w}else{d.appendChild(v.createTextNode(w))}};p.setData=p.setPublicData=function(x,w){var d=t[x];b[x]=w;if(!d){return}while(d.length>0){(d.pop()).call(this,w)}};p.getData=p.getPublicData=function(w,d){if(b[w]){d(b[w]);return}if(!t[w]){t[w]=[]}t[w].push(function(x){d(x)})};p.setConfig=function(w,d){u[w]=d;return p};p.getConfig=function(d){return u[d]};h=o.getAttribute("data-cfg-autoload");if(h){u.autoLoad=(h.toLowerCase()==="true")?true:false}h=o.getAttribute("data-cfg-corelib");if(h){u.coreLib=h.split(",")}if(typeof Do!=="undefined"){e=Do.global.mods;u.mods=Do.mods;var q;while(q=Do.actions.shift()){p.apply(null,q)}delete Do}c.Do=p;r(function(){m=true;f()})})(window,document);