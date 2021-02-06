<?php
  header("Content-type: application/json; charset=UTF-8");
  require_once __DIR__.'/config/config.php';
 
  $path = explode('/', $_GET['url']);

  if(empty($path[0])){
    header("Content-type: text/html; charset=UTF-8");
    require_once __DIR__.'/views/pages/index.php';
    return;
  }elseif($path[0] == 'table' && count($path) == 1){
    require_once __DIR__.'/services/getPriceList.php';
  }elseif($path[0] == 'mail' && count($path) == 1){
    require_once __DIR__.'/services/sendMail.php';
  }else{
    header("Content-type: text/html; charset=UTF-8");
    require_once __DIR__.'/views/pages/404.php'; 
  }
