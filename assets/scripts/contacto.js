document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const companyEmail = "kellyitzel.torresbarron@gmail.com";

    const subject = "Nuevo mensaje de contacto";
    const body = `Nombre: ${firstName} ${lastName}\nCorreo Electrónico: ${email}\nMensaje: ${message}`;

    const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    alert("Mensaje enviado. Nos pondremos en contacto pronto.");
});
