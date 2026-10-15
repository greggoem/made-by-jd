// Formulaires de démonstration : rien n'est envoyé tant qu'ils ne sont pas reliés à un vrai service.
document.querySelectorAll('form[data-demo]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.form-msg');
    if (msg) msg.textContent = "Maquette : ce formulaire n'est pas encore relié à un service d'envoi d'e-mails.";
  });
});
