<?php

require_once __DIR__.'/db_connect.php';
$PDO = connect('price_list');
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

// console_dir($objPriceList);


/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/
// stage - этап
// function console_dir($data){
// 	if(get_class($data) === 'PDO'){
// 		$data = get_class_methods($data);
// 	}
// 	echo("<script>console.dir(".json_encode($data).");</script>");	
// }
/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/


/*
	Было:
	require 'db_connect.php';


	require 'db_connect.php';


	1. в php именованный массив(ассоциативный) в консоли будет показывать как объект, но это для php не объект
		 обращаться к ключам по -> не выйдет, только ['key'].
	2. $newArr['key'] = "строка"  - в js так же можно создать ключ в объекте и добавить что-то, но если мы в js ходим добавить на ключ
																	массив в котором будет объект делаем это так
																	obj['key'] = [ { } ] а в цикле могли пушить obj['key'] = [ ...item ] в php выглядит так
																	$arrObj['key'][] = new MyObj() || [];

*/
