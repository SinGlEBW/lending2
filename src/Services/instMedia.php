<?

require 'db_connect.php';

$PDOStatement = $PDO->query("SELECT * FROM token WHERE id=(SELECT max(id) FROM token)");
$objToken = $PDOStatement->fetch();//почему-то нельзя 2 раза обращаться к fetch подомным методам
$PDOStatement->closeCursor();// соединение вроде автоматом закрывается, но всё же закрою.

// Обновление токена в период 45 дней
$dateTime = new DateTime;
$difference = $dateTime->diff(new DateTime($objToken->token_date));

if($difference->d > 45){
	$newObjToken = refreshTokenInstagram($objToken->access_token);
	console_dir($newObjToken);
	var_dump($newObjToken);
	// $newObjToken - { "access_token": "{access-token}", "token_type": "{token-type}", "expires_in": {expires-in} }
	echo "1 этап</br>";
	$flag = false;
	if(isset($newObjToken)){//
		$PDOStatement = $PDO->prepare('INSERT INTO token(access_token) VALUES(:access_token)');
		$flag = $PDOStatement->execute(['access_token' => $newObjToken->access_token]);//в php в if это не локальное видимо пространство
	}	
	
	if($flag){
		echo "2 этап</br>";
		$PDOStatement = $PDO->query("SELECT * FROM token WHERE id=(SELECT max(id) FROM token)");
		$objToken = $PDOStatement->fetch();//почему-то нельзя 2 раза обращаться к fetch подомным методам	
		$PDOStatement->closeCursor();	
	}else{
		exit;
		echo "2.2 этап Ошибка</br>";
	}
}



 $media = getMediaInstagram($objToken->access_token);
//  $media = json_decode(file_get_contents('data.json', true));


//  console_dir($data);
// //  console_dir($mediaArr);

// //  $mediaArr = getPhotosInArray($media, 10);//10 объектов с фото.
// /*---------------------------------------------------------------------------------------------------------*/
// /*---------------------------------------------------------------------------------------------------------*/
function getPhotosInArray($media, $photoCount){

	$instMedias = [];

	class InstMedia {
		function __construct($media){
	
			$this->id = $media->id;
			$this->media_url = $media->media_url;
			$this->timestamp = $media->timestamp;
		}
	};
	
	/*{	"data": [{..., children: { data: [{id, media_url}, {}, {}]}, {}, {}] }*/
	
	foreach ($media->data as $mediaItems) {
		$childItems = $mediaItems->children->data;
		
		if(!empty($childItems) && count($instMedias) < $photoCount){
			foreach ($childItems as $item) {
				if(count($instMedias) < $photoCount){
					$instMedias[] = new InstMedia($item);
				}else	break;
			}
		}elseif(count($instMedias) < $photoCount){
				$instMedias[] = new InstMedia($mediaItems);
		}else	break;
	
	}
	
	return $instMedias;
}

// /*---------------------------------------------------------------------------------------------------------*/
function getMediaInstagram ($access_token){
	$getQuery = [
		'fields' => 'media_url,caption,timestamp,children{fields=id,media_url,timestamp}',
		'limit' => 4,
		'access_token' => $access_token,
	];

	$urlMedia = "https://graph.instagram.com/me/media?".urldecode(http_build_query($getQuery));

	return requestInstagram($urlMedia);
}

/*---------------------------------------------------------------------------------------------------------*/
function refreshTokenInstagram($access_token) {
	$queryGET = [
		"grant_type" => "ig_refresh_token",
		"access_token" => $access_token
	];

	$urlRefreshToken = "https://graph.instagram.com/refresh_access_token?".urldecode(http_build_query($queryGET));

	return requestInstagram($urlRefreshToken);
}

/*---------------------------------------------------------------------------------------------------------*/
function requestInstagram($url) {
	$descriptor = curl_init($url);
	curl_setopt($descriptor, CURLOPT_RETURNTRANSFER, true); 

	$response = json_decode(curl_exec($descriptor));
	curl_close($descriptor); 

	// var_dump($response);
	return $response;
}

/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/

function console_dir($data){
	echo("<script>console.dir(".json_encode($data).");</script>");	
}
/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/











// $PDOStatement2 = $PDO->query("DELETE FROM token WHERE access_token='ddddd'");
// $PDOStatement2 = $PDO->query("ALTER TABLE token AUTO_INCREMENT=1");

// $PDOStatement2 = $PDO->query("INSERT INTO token(access_token) VALUES(222222222222222)");
// $PDOStatement2->closeCursor();
// $PDOStatement2 = $PDO->query("SELECT * FROM token WHERE id=(SELECT max(id) FROM token)");
// $objToken2 = $PDOStatement2->fetch();

//IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD

//IGQVJWcTdjZAUpmLXBJM3gyVUE5OXJ3NU03blg2ZAWRFZATVocWtHeHNUWkZAJSzRNZA1luRERtZAktnUWhKZAVNqMnhCd2tDbHJmNTZAWTTRYdk9hQXBKVlZAPdG1zeDZAKZADNuNF9lSmRxTGZAB


?>