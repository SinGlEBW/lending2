<?php
  header("Content-type: application/json; charset=UTF-8");

  $path = explode('/', $_GET['url']);//тот же split в js
  $_ENV = ['url' => $path];
  if(empty($path[0])){
    header("Content-type: text/html; charset=UTF-8");
    require_once __DIR__.'/views/pages/index.php';
    return;
  }elseif($path[0] == 'table'){
    require_once __DIR__.'/services/getPriceList.php';
  }elseif($path[0] == 'mail'){
    require_once __DIR__.'/services/sendMail.php';
  }else{
    header("Content-type: text/html; charset=UTF-8");
    require_once __DIR__.'/views/pages/404.php'; 
  }
