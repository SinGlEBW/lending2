<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1" >
  <link rel="icon" type="image/png" href="../../assets/img/favicon.png" sizes="144x144" >
 <? 
   if($_ENV['url'][0] == ''){
    ?>
      <link rel="stylesheet" href="../../assets/css/style.min.css" >
      <script src="../../assets/js/checkDevice.js"></script>
    <?
   }else{
    ?>
       <link rel="stylesheet" href="../../assets/css/404.min.css" >
    <?
   }
  ?>

  <title>Electric Staff</title>
</head>
<body>
