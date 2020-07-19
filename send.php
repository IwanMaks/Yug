<?php
$fio = $_POST['name-input'];
$email = $_POST['email-input'];
$text = $_POST['description-input'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);

$fio = trim($fio);
$email = trim($email);
$text = trim($text);

echo $fio;
echo "<br>";
echo $email;
echo "<br>";
echo $text;

if (mail("iwan.maksackov@yandex.ru", "Вопрос с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>