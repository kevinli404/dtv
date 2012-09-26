<?php
$url = @$_REQUEST['dtv_url'];
if(isset($url))
{
if(!strstr($url,'http')) $url = 'http://'.$url;
$content = file_get_contents($url);
$baseurl = $url;
$patterns = array('/<body/','/<\/html>/');
$replace = array("<link rel='stylesheet' type='text/css' href='http://localhost/dtv/dtv.css'><body",
		"</html><script src='http://localhost/dtv/jquery.js'></script><script src='http://localhost/dtv/dtv.js'></script>");
echo  preg_replace($patterns,$replace,$content.'<script>dtv_curr_href='.$baseurl.';</script>',1);
}else{
?>
<html>
<head>
<title>DTV</title>
</head>
<body>
<form method='post' style='width:400px;margin:200px auto;'>
<input name='dtv_url' style='width:300px;height:30px;height:35px'>
<input type='submit' value='Submit' style='width:70px;height:35px;'>
</form>
</body>
</html>
<?php
}?>
