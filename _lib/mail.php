<?php

    require '../lib/phpmailer/PHPMailerAutoload.php';

    // CONFIG YOUR FIELDS
    //============================================================
    $name =     filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email =    filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $formMessage =  filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // CONFIG YOUR EMAIL MESSAGE
    //============================================================
    $message = '<p>The following request was sent from: </p>';
    $message .= '<p>Name: ' . $name . '</p>';
    $message .= '<p>Email: ' . $email . '</p>';
    $message .= '<p>Message: ' . $formMessage .'</p>';

    // CONFIG YOUR MAIL SERVER
    //============================================================
    $mail = new PHPMailer;
    $mail->isSMTP();                                    // Enable SMTP authentication
    $mail->SMTPAuth = true;                             // Set mailer to use SMTP
    $mail->Host = 'mail.privateemail.com';                // Specify main and backup server (this is a fake name for the use of this example)

    $mail->Username = 'contact@geolearn.ca';                  // SMTP username
    $mail->Password = '1geolearn!';                         // SMTP password
    $mail->SMTPSecure = 'ssl';                          // Enable encryption, 'ssl' also accepted
    $mail->Port = 465;

    $mail->From = $email;
    $mail->FromName = $name;
    $mail->AddReplyTo($email,$name);
    $mail->addAddress('contact@geolearn.ca', $name);  // Add a recipient

    $mail->WordWrap = 50;                               // Set word wrap to 50 characters
    $mail->isHTML(true);                                // Set email format to HTML

    $mail->Subject = 'Contact request';
    $mail->Body    = $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->send()) {
        $data['error']['title'] = 'Message could not be sent.';
        $data['error']['details'] = 'Mailer Error: ' . $mail->ErrorInfo;
       exit;
    }

    $data['success']['title'] = 'Message has been sent';

    echo json_encode($data);
?>
