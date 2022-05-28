<?php
$name = $_POST['name'];
$email = $_POST['email'];
$input_text = $_POST['input_text'];
$headers = 'From: Web_CV';
mail("ternxstyle@gmail.com", "Сообщение с сайта Web-CV ", "Имя: " . $name . "\nПочта: " . $email . "\nСообщение: " . $input_text, $headers);
header("Location: index.html");
exit();
?>