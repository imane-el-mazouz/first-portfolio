<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Destinataire (votre adresse email)
    $to = "votre-email@example.com"; // Remplacez par votre adresse email
    $subject_email = "Nouvelle demande de contact : " . $subject;
    $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";

    // En-tête de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Envoyer l'email
    if (mail($to, $subject_email, $body, $headers)) {
        // Si le message est envoyé avec succès
        echo "<script>alert('Votre message a été envoyé. Merci de nous avoir contacté !');</script>";
    } else {
        // En cas d'échec
        echo "<script>alert('Erreur : Le message n\'a pas pu être envoyé.');</script>";
    }
}
?>
