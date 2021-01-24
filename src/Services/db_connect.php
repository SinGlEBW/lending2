<?
function connect ($dbname){
	$options = [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
		PDO::ATTR_STRINGIFY_FETCHES => false,
		PDO::ATTR_EMULATE_PREPARES => false
	];
	
	try {
		return new PDO("mysql:host=localhost;dbname=$dbname;", "root", "", $options);
	} catch (PDOException $err) {
		var_dump($err->getMessage());
		exit;
	}
}

?>

