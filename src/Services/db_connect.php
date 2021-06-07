<?php

function connect ($host, $dbName, $dbLogin, $dbPass){
	$options = [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
		PDO::ATTR_STRINGIFY_FETCHES => false,
		PDO::ATTR_EMULATE_PREPARES => false
	];
	
	try {
		// Через docker указывать ip контейнера или его сервисное имя 
		return new PDO("mysql:host=$host;dbname=$dbName;", $dbLogin, $dbPass, $options);
	} catch (PDOException $err) {
		return $err;
	}
}
$PDO = connect($_ENV['DB_HOST'], $_ENV['DB_DATABASE'], $_ENV['DB_LOGIN'], $_ENV['DB_PASSWORD']);
