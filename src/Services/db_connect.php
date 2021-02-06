<?
function connect ($host, $dbName, $dbLogin, $dbPass){
	$options = [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
		PDO::ATTR_STRINGIFY_FETCHES => false,
		PDO::ATTR_EMULATE_PREPARES => false
	];
	
	try {
		return new PDO("mysql:host=$host;dbname=$dbName;", $dbLogin, $dbPass, $options);
	} catch (PDOException $err) {
		var_dump($err->getMessage());
		exit;
	}
}

 $PDO = connect(HOST, DB_NAME, DB_LOGIN, DB_PASS);

?>

