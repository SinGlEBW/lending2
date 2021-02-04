<?
//Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$client = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$msg = htmlspecialchars($_POST['msg']);


//Создаем письмо
$mail = new PHPMailer();

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure='ssl';
// $mail->SMTPDebug = 1;//показывает последовательность подключения к ящику и отправки
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->Host = 'ssl://smtp.mail.ru';
$mail->Username = 'krastikra26@mail.ru';
$mail->Password = 'artemev111';
$mail->Port = 465;

$mail->setFrom('krastikra26@mail.ru'); // от кого (email и имя)
$mail->addAddress('bw.klan@mail.ru');  // кому (email и имя)elektrik-staff@mail.ru'
$mail->Subject = 'Заявка с сайта'; //тема письма

$mail->msgHTML("<h4>Имя: 
                  <span style='color: #20B2AA'>$client</span>
                </h4>
                <h4>Телефон:
                  <span style='color: #20B2AA'>$phone</span></h4>
                <p style='font-weight: bold'>$msg</p>
                ");
//Отправляем
if ($mail->send()) {
  echo json_encode(['msg' => 'Письмо отправлено', 'status' => true]);
} else {
  echo json_encode(['msg' => 'Что-то видимо случилось','status' => false, 'err' =>  $mail->ErrorInfo]);
  // var_dump($mail->ErrorInfo);
}  



