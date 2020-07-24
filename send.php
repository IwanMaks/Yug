<?php
$fio = $_POST['name-input'];
$email = $_POST['email-input'];
$message = $_POST['message'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
$fio = urldecode($fio);
$email = urldecode($email);
$message = urldecode($message);
$fio = trim($fio);
$email = trim($email);
$message  = trim($message);
if (mail("iwan.maksackov@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email." Сообщение: ".$message ,"From: iwanmak71@yandex.ru \r\n")){  
    echo "Сообщение успешно отправлено!";
    header("refresh:3;url=http://yug"); 
} else { 
    echo "При отправке сообщения возникли ошибки";
    header("refresh:3;url=http://yug"); 
}
?>