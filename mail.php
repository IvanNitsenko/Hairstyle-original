<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $formPhone = $_POST['form-phone'];
    $info = $_POST['info'];

    $content = $name . ' оставил заявку на запись. Номер телефона ' . $formPhone . ' . Желаемая дата записи ' . $info;

// Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
$success = mail("admin@burgerclub.com", 'Заявка на запись по телефону', $content);

if ($success) {
    // Отдаем 200 код ответа на http запрос
    http_response_code(200);
    echo "Письмо отправлено";
} else {
    // Отдаем ошибку с кодом 500 (internal server error).
    http_response_code(500);
    echo "Письмо не отправлено";
}

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
