const translations = {
    English: {
        title: "Minecraft Hosting Server",
        subtitle: "Paid But Login = 1 Month Free"
    },
    Hindi: {
        title: "माइनक्राफ्ट होस्टिंग सर्वर",
        subtitle: "पेड लेकिन लॉगिन करें = 1 महीना फ्री"
    },
    Spanish: {
        title: "Servidor de Hosting de Minecraft",
        subtitle: "Pagado pero iniciar sesión = 1 mes gratis"
    },
    French: {
        title: "Serveur d'Hébergement Minecraft",
        subtitle: "Payé mais connexion = 1 mois gratuit"
    },
    Tamil: {
        title: "மைன்கிராஃப்ட் ஹோஸ்டிங் சர்வர்",
        subtitle: "பணம் கொடுத்து உள்நுழைவு = 1 மாதம் இலவசம்"
    },
    Japanese: {
        title: "マインクラフトホスティングサーバー",
        subtitle: "有料ですがログインで1か月無料"
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("selectedLanguage") || "English";
    if (translations[lang]) {
        document.getElementById("mainTitle").textContent = translations[lang].title;
        document.getElementById("mainSubtitle").textContent = translations[lang].subtitle;
    }
});

document.getElementById('playBtn').addEventListener('click', () => {
    alert("Starting Minecraft server...");
});
