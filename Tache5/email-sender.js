const nodemailer = require("nodemailer");

// Configuration du transporteur (ici Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tonEmail@gmail.com",
    pass: "le_mot_de_passe_app"
  }
});

// Définir les options de l'e-mail
const mailOptions = {
  from: "tonEmail@gmail.com",
  to: "destinataire@example.com",
  subject: "Test Nodemailer",
  text: "Bonjour, ceci est un e-mail envoyé avec Nodemailer depuis Node.js !"
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Erreur :", error);
  } else {
    console.log("E-mail envoyé :", info.response);
  }
});
