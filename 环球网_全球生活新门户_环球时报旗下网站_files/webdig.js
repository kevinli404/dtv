var ROOTDM = [".huanqiu.com"];
var INCLUDESUBHOST = ["www.huanqiu.com"];
var SHOWERRHOST=1;
var _wdUID="17";
var _wecl="//124.17.1.253/1.gif";
//17
var _webdigObj = {};
_webdigObj.pro = function() {
    if(document.getElementById("webdig_source")) {
        _webdigObj.source=(document.getElementById("webdig_source").innerText+"").trim();
    }
    if(!_webdigObj.author || _webdigObj.author.trim() == "") {
	_webdigObj.author = _webdigObj.getMeta("owner");
    }
};
String.prototype.trim = function() {
	var a = /^\s+|\s+$/g;
	return function() {
		return this.replace(a, "")
	}
}();
var _webdigObj =_webdigObj||{};
_webdigObj.meta = document.getElementsByTagName("meta");
_webdigObj.getMeta = function(name) {
	var meta = _webdigObj.meta;
	if (meta) {
		for (var i = 0; i < meta.length; i++)
			if (meta[i].name == name) {
				return (meta[i].content).trim();
			}
	}
	return "";
};
_webdigObj.catalogs = _webdigObj.getMeta("catalogs");
_webdigObj.contentid = _webdigObj.getMeta("contentid");
_webdigObj.filetype = _webdigObj.getMeta("filetype");
_webdigObj.subject = _webdigObj.getMeta("subject");
_webdigObj.publishedtype = _webdigObj.getMeta("publishedtype");
_webdigObj.pagetype = _webdigObj.getMeta("pagetype");
_webdigObj.author = _webdigObj.getMeta("author");
_webdigObj.publishdate = _webdigObj.getMeta("publishdate");
_webdigObj.source = _webdigObj.getMeta("source");

if((_webdigObj.contentid).match(/\D/)){
	    		    var s="http://[^\_]*\_(\\d+)(|\_\\d*)\.htm.?$";  	
	   				var str = "";
	   				
	   			    str = location.href.replace("index.htm", "").replace("index.html", "").replace("index.jsp", "");
    				var re = new RegExp(s, "ig");
    				var arr = re.exec(str);
     				_webdigObj.contentid=(RegExp.$1);
	    	}

_webdigObj.sec =  _webdigObj.pro||function(){};
_webdigObj.sec();
// alert(_webdigObj.pagetype);alert(_webdigObj.catalogs);alert(_webdigObj.contentid);
_webdigObj.url = function() {
	var str = "";
	str = "_wdc=" + escape(_webdigObj.catalogs) + "&";
	if (_webdigObj.subject && _webdigObj.subject.split(";").length > 1)
		str += "_wds=" + escape(_webdigObj.subject) + "&";
	str += "_wdt="
			+ escape(_webdigObj.filetype ? _webdigObj.filetype : 0)
			+ escape(_webdigObj.publishedtype
					? _webdigObj.publishedtype
					: 0)
			+ escape(_webdigObj.pagetype ? _webdigObj.pagetype : 0)
			+ "&";
	if (_webdigObj.author)
		str += "_wda=" + escape(_webdigObj.author) + "&";
	if (_webdigObj.contentid)
		str += "_wdci=" + escape(_webdigObj.contentid) + "&";
	if (_webdigObj.publishdate)
		str += "_wdp=" + escape(_webdigObj.publishdate)+"&";
	if (_webdigObj.source)
		str += "_wdori=" + escape(_webdigObj.source)+"&";
    return str;
}();
_wdLP = location.protocol.indexOf("https") > -1 ? "https:" : "http:", _wdCA = _wdLP
		+ _wecl;
function println(a) {
}
function _wdEC() {
}
function fesc(a) {
	a = new String(a);
	return escape(a)
}
function wdhex(a) {
	for (var b = "", c, d = 7; d >= 0; d--) {
		c = a >>> d * 4 & 15;
		b += c.toString(16)
	}
	return b
}
function wdHash(a) {
	if (!a || a == "")
		return 1;
	for (var b = 1732584193, c = 4023233417, d = 0; d < a.length; d++) {
		var e = parseInt(a.charCodeAt(d));
		b = (b << 6 | c >>> 26) + (b << 16 | c >>> 16) - b;
		c = e + (c << 6) - c + (c << 16) & 4294967295
	}
	return wdhex(b & 2147483647) + wdhex(c)
}
function wdGenCID() {
	return wdHash(document.location + document.cookie + document.referrer
			+ curtime.getTime())
}
function getCookie(a) {
	var b = null, c = document.cookie, d = c.indexOf(a);
	if (d != -1) {
		d += a.length + 1;
		a = c.indexOf(";", d);
		if (a == -1)
			a = c.length;
		b = c.substring(d, a)
	}
	return b
}
function wdFlash() {
	var a = "", b = navigator;
	if (b.plugins && b.plugins.length)
		for (var c = 0; c < b.plugins.length; c++) {
			if (b.plugins[c].name.indexOf("Shockwave Flash") != -1) {
				a = b.plugins[c].description.split("Shockwave Flash ")[1];
				break
			}
		}
	else if (window.ActiveXObject)
		for (c = 10; c >= 2; c--)
			try {
				var d = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."
						+ c + "');");
				if (d) {
					a = c + ".0";
					break
				}
			} catch (e) {
			}
	return a
}
var Aimg;
function send_ref(a) {
	a = _wdCA + a;
	Aimg = new Image(1, 1);
	Aimg.src = a;
	Aimg.onload = _wdEC
}
function wd_tracker(a) {
	setup_data();
	if (a && a != "") {
		var b = _wdSL;
		if (a.toLowerCase().indexOf("http") != 0)
			a = _wdLP + "//" + _wdHost + a;
		_wdSL = a;
		_wdRP = b
	}
	write_ref()
}
function wd_reptracker(a, b) {
	setup_data();
	if (a && a != "")
		_wdSL = _wdLP + "//" + _wdHost + a;
	write_ref()
}
function getmetaContents(a) {
	var b = document.getElementsByTagName("meta");
	for (var c in b)
		if (b[c].name == a)
			return b[c].content
}
function setup_metadata() {
	try {
		var a = _webdigObj.author;
		if (a && a != "") {
			a = fesc(a);
			_wdSL += _wdSL.indexOf("?") == -1 ? "?" : "&";
			_wdSL += "_wdmd=" + a
		}
	} catch (b) {
	}
}
function wd_paramtracker(a) {
	setup_data();
	setup_metadata();
	if (a && a != "")
		_wdSL = _wdSL.indexOf("?") == -1 ? _wdSL + "?" + a : _wdSL + "&" + a;
    var str=_webdigObj.url;
    if (str && str != "")
        _wdSL += _wdSL.indexOf("?") == -1 ? "?" + str : "&" + str;
	write_ref()
}
var _wdED = "expires=Fri, 1 Jan 2038 00:00:00 GMT;", _wdCK = "0", _wdJE = "0", _wdHP = "0", _wdFl = 0, _wdTZ = 0, _wdLG = "", _wdCT = "", _wdFS = 0, _wdErr = "1", _wdDT = document.title == "" ? location.href : document.title, _wdCS, _wdSL = window.location.href, _wdHost = window.location.host, _wdRDM = "", _wdRP = document.referrer, _wdUA = navigator.appName
		+ " " + navigator.appVersion, _wdRUA = navigator.userAgent, _wdWS = window.screen, _wdBV = navigator.appVersion
		.substring(0, 1), _wdNN = _wdUA.indexOf("Netscape") != -1
		? true
		: false, _wdMC = _wdUA.indexOf("Mac") != -1 ? true : false, _wdIE = _wdUA
		.indexOf("MSIE") != -1 ? true : false, _wdOP = _wdRUA.indexOf("Opera") != -1
		? true
		: false, _wdIEV = 0, _wdCID, _wdBCID = "0", _wdLS = 0, _wdTO = "1", curtime = new Date;
function setup_data() {
	if (document.location.protocol != "file:") {
		if (document.characterSet)
			_wdCS = fesc(document.characterSet);
		else if (document.charset)
			_wdCS = fesc(document.charset);
		if (INCLUDESUBHOST && INCLUDESUBHOST != null
				&& INCLUDESUBHOST.length != 0)
			for (i = 0; i < INCLUDESUBHOST.length; i++) {
				if (INCLUDESUBHOST[i] && _wdHost
						&& INCLUDESUBHOST[i].indexOf(_wdHost) != -1) {
					_wdErr = "0";
					break
				}
			}
		else
			_wdErr = "0";
		if (!("1" == _wdErr && SHOWERRHOST != null && SHOWERRHOST != 1)) {
			"1" == _wdErr && println("");
			if (ROOTDM && ROOTDM != null && ROOTDM.length != 0 && _wdHost
					&& _wdHost != "")
				for (i = 0; i < ROOTDM.length; i++)
					if (_wdHost.indexOf(ROOTDM[i]) != -1)
						_wdRDM = ROOTDM[i];
			println("_wdRP=" + _wdRP);
			if (!_wdRP || _wdRP == "")
				_wdRP = "";
			else {
				r = _wdRP.indexOf(document.domain);
				if (!(r >= 0 && r <= 8))
					if (_wdRP.indexOf("[") == 0
							&& _wdRP.lastIndexOf("]") == _wdRP.length - 1)
						_wdRP = ""
			}
			println("_wdRP=" + _wdRP);
			println("_wdUA=" + _wdUA);
			println("_wdRUA=" + _wdRUA);
			if (_wdIE)
				_wdIEV = parseInt(_wdUA.substr(_wdUA.indexOf("MSIE") + 5));
			if (_wdIE && _wdIEV >= 5) {
				document.body.addBehavior("#default#clientCaps");
				_wdCT = document.body.connectionType;
				document.body.addBehavior("#default#homePage");
				_wdHP = document.body.isHomePage(location.href) ? "1" : "0"
			}
			try {
				if (_wdIE)
					_wdFS = document.fileSize
			} catch (a) {
				_wdFS = 0
			}
			_wdFl = wdFlash();
			_wdTZ = (new Date).getTimezoneOffset() / -60;
			if (typeof _wdWS != "undefined" && _wdWS != null) {
				_wdSW = _wdWS.width;
				_wdSH = _wdWS.height;
				_wdCD = _wdWS.colorDepth;
				_wdSR = _wdSW + "x" + _wdSH;
				if (_wdNN && _wdBV >= 4)
					_wdCD = _wdWS.pixelDepth
			}
			if (_wdNN && _wdBV >= 4 || _wdOP)
				_wdLG = navigator.language;
			if (_wdIE && _wdBV >= 4 && !_wdOP)
				_wdLG = navigator.userLanguage;
			_wdJE = navigator.javaEnabled() == true ? "1" : "0";
			if (navigator.cookieEnabled)
				_wdCK = navigator.cookieEnabled == true ? "1" : "0";
			_wdCK == 1 && setup_cookie()
		}
	}
}
function setup_cookie() {
	var a = document.cookie, b = a.indexOf("wdcid=");
	if (b < 0) {
		_wdBCID = "0";
		_wdCID = wdGenCID();
		b = "";
		if (_wdRDM && _wdRDM != "")
			b = "domain=" + _wdRDM + ";";
		document.cookie = "wdcid=" + escape(_wdCID) + ";" + _wdED + b
				+ "path=/;";
		if (document.cookie.indexOf("wdcid=") < 0) {
			_wdCK = 0;
			return
		}
	} else {
		_wdBCID = "1";
		_wdCID = getCookie("wdcid")
	}
	b = document.cookie.indexOf("wdlast=");
	if (b < 0)
		_wdLS = 0;
	else {
		_wdLS = parseInt(getCookie("wdlast"));
		if (curtime.getTime() / 1000 - _wdLS < _wdTimeOut)
			_wdTO = "0"
	}
	document.cookie = "wdlast=" + Math.round(curtime.getTime() / 1000) + ";"
			+ _wdED + "path=/;"
}
function write_ref() {
	if (_wdCK == "0")
		_dgURL = getGeneralInfo() + getLocalInfo();
	else {
		_dgURL = getGeneralInfo() + getCookieInfo();
		if (_wdTO == "1")
			_dgURL += getLocalInfo()
	}
	send_ref(_dgURL)
}
function getGeneralInfo() {
	return "?z=" + _wdUID + "&a=" + curtime.getTime().toString(16) + "&b="
			+ fesc(_wdDT) + "&B=" + _wdCS + "&c=" + fesc(_wdSL) + "&d="
			+ fesc(_wdRP) + "&e=" + _wdHP + "&f=" + _wdFS + "&H="
			+ fesc(_wdHost) + "&E=" + _wdErr
}
function getLocalInfo() {
	return "&i=" + fesc(_wdLG) + "&j=" + _wdJE + "&k=" + _wdSR + "&l=" + _wdCD
			+ "&m=" + _wdFl + "&n=" + fesc(_wdCT) + "&o=" + _wdTZ
}
function getCookieInfo() {
	return "&r=" + _wdCID + "&s=" + _wdBCID + "&t=" + _wdLS + "&u=" + _wdTO
}
window.onerror = _wdEC;
var _wdTimeOut = 1800;
