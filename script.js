// Show saved language text if available
window.addEventListener("DOMContentLoaded", () => {
    let language = localStorage.getItem("selectedLanguage");

    if (language) {
        if (language === "Hindi") {
            document.getElementById("mainTitle").textContent = "माइनक्राफ्ट होस्टिंग सर्वर";
            document.getElementById("mainSubtitle").textContent = "पेड लेकिन लॉगिन करें = 1 महीना फ्री";
        } 
        else if (language === "Spanish") {
            document.getElementById("mainTitle").textContent = "Servidor de Hosting de Minecraft";
            document.getElementById("mainSubtitle").textContent = "Pagado pero iniciar sesión = 1 mes gratis";
        }
        else if (language === "French") {
            document.getElementById("mainTitle").textContent = "Serveur d'Hébergement Minecraft";
            document.getElementById("mainSubtitle").textContent = "Payé mais connexion = 1 mois gratuit";
        }
    }
});

document.getElementById('playBtn').addEventListener('click', function() {
    alert("Starting Minecraft server...");
});
