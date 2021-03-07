<?php

require_once 'vendor/autoload.php';

$document = new \PhpOffice\PhpWord\TemplateProcessor('./test.docx');

$uploadDir =  __DIR__;
$outputFile = 'review_full.docx';

$uploadFile = $uploadDir . '\\' . basename($_FILES['file']['name']);
move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile);

$birthdate = $_POST['birth'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$city = $_POST['city'];
$purpose = $_POST['purpose'];
$startYear = $_POST['startYear'];
$lastYear = $_POST['lastYear'];
$university = $_POST['university'];
$file = $_POST['file'];
$about = $_POST['about'];

$document->setValue('name', $name);


$document->saveAs($outputFile);


// Имя скачиваемого файла
$downloadFile = $outputFile;

// Контент-тип означающий скачивание
header("Content-Type: application/octet-stream");

// Размер в байтах
header("Accept-Ranges: bytes");

// Размер файла
header("Content-Length: ".filesize($downloadFile));

// Расположение скачиваемого файла
header("Content-Disposition: attachment; filename=".$downloadFile);  

// Прочитать файл
readfile($downloadFile);


unlink($uploadFile);
unlink($outputFile);
