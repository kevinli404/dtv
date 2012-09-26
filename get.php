<?php
$text = file_get_contents('http://www.360buy.com');
file_put_contents('360buy.com.html',$text);
