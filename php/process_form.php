<?php
declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Load .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();


// Get raw values (or empty string)
$nameRaw    = trim($_POST['cfname']    ?? '');
$emailRaw   = trim($_POST['cfmail']    ?? '');
$messageRaw = trim($_POST['cfmessage'] ?? '');
// Field-specific sanitization
$name    = strip_tags($nameRaw);                                // no HTML in a name
$email   = trim($emailRaw);
$email = str_replace(["\r", "\n"], '', $email);
$message = htmlspecialchars($messageRaw, ENT_QUOTES, 'UTF-8');  // preserve text, escape quotes

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    exit('Invalid input');
}

$mail = new PHPMailer(true);

try {
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    //$mail->Debugoutput = 'html';

    // SMTP server settings https://mailtrap.io/home login with github
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USER'];
    $mail->Password   = $_ENV['SMTP_PASS'];

     // No encryption on port 2525
    if (!empty($_ENV['SMTP_ENC'])) {
        $mail->SMTPSecure = $_ENV['SMTP_ENC'] === 'ssl'
            ? PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->Port       = (int) $_ENV['SMTP_PORT'];
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isHTML(false);



    // Recipients & content
    $mail->setFrom($email, $name);
    $mail->addAddress('you@yourdomain.com', 'Your Name');
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}";

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo 'Mailer Error: ' . $mail->ErrorInfo 
        . ' (' . $e->getMessage() . ')';
}
?>