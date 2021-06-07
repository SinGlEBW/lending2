<?php

 require_once __DIR__.'/db_connect.php';
// $PDO = connect('price_list');

$tables = ["black_work", "clean_work", "cable_laying", "low_volt_system", "retro_wiring", "pipe_install"];
$queryStr = "";

	foreach ($tables as $item) {
		
		if($item == $tables[count($tables) - 1]){
			$queryStr .= "SELECT * FROM $item";
			break;
		}
		$queryStr .= "SELECT * FROM $item UNION ";
	};
	
//$queryStr .= "SELECT *, '$item' FROM $item" 
$PDOStatement = $PDO->query("$queryStr");
$objPriceList = $PDOStatement->fetchAll();//почему-то нельзя 2 раза обращаться к fetch подомным методам
$PDOStatement->closeCursor();// соединение вроде автоматом закрывается, но всё же закрою.

echo json_encode($objPriceList);
