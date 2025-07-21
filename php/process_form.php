<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST['cfname']    ?? '', ENT_QUOTES);
    $email   = htmlspecialchars($_POST['cfmail']    ?? '', ENT_QUOTES);
    $message = htmlspecialchars($_POST['cfmessage'] ?? '', ENT_QUOTES);

    $to = "elaglatzeder@yahoo.de"; // Replace with your email address
    $subject = "New Form Submission";
    $body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;
    $headers = "From: " . $email; // Optional, but good practice

    if ( mail($to, $subject, $body, $headers) ) {
        echo "Email sent successfully!";
    } else {
        $err = error_get_last();
        echo "Email sending failed. PHP error: " . ($err['message'] ?? 'Unknown error');
    }
}
?>