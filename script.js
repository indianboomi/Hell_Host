const translations = {
    en: {
        mainTitle: "Minecraft Hosting Server",
        subTitle: "Paid But Login = 1 Month Free",
        play: "Play",
        aboutTitle: "About Hell Host",
        aboutDesc: "Hell Host is your ultimate Minecraft server hosting platform — built for speed, safety, and stability. Enjoy 1 month free when you log in, with zero lag and 24/7 uptime. Our paid plans unlock even more powerful features, so your Minecraft world runs smoother than ever."
    },
    hi: {
        mainTitle: "माइनक्राफ्ट होस्टिंग सर्वर",
        subTitle: "पेड लेकिन लॉगिन = 1 महीना मुफ्त",
        play: "खेलें",
        aboutTitle: "हेल होस्ट के बारे में",
        aboutDesc: "हेल होस्ट आपका अंतिम माइनक्राफ्ट सर्वर होस्टिंग प्लेटफॉर्म है — गति, सुरक्षा और स्थिरता के लिए बनाया गया। लॉगिन करने पर 1 महीना मुफ्त पाएं, बिना किसी लैग के और 24/7 अपटाइम के साथ। हमारे पेड प्लान और भी शक्तिशाली सुविधाएँ अनलॉक करते हैं।"
    },
    es: {
        mainTitle: "Servidor de Hosting de Minecraft",
        subTitle: "De pago pero con inicio de sesión = 1 mes gratis",
        play: "Jugar",
        aboutTitle: "Acerca de Hell Host",
        aboutDesc: "Hell Host es tu plataforma definitiva de alojamiento de servidores de Minecraft: diseñada para velocidad, seguridad y estabilidad. Disfruta de 1 mes gratis al iniciar sesión, sin lag y con tiempo de actividad 24/7. Nuestros planes de pago desbloquean funciones aún más potentes."
    },
    fr: {
        mainTitle: "Serveur d'Hébergement Minecraft",
        subTitle: "Payant mais connexion = 1 mois gratuit",
        play: "Jouer",
        aboutTitle: "À propos de Hell Host",
        aboutDesc: "Hell Host est votre plateforme d’hébergement de serveur Minecraft ultime — conçue pour la vitesse, la sécurité et la stabilité. Profitez d’un mois gratuit lorsque vous vous connectez, sans lag et avec une disponibilité 24/7. Nos forfaits payants débloquent encore plus de fonctionnalités puissantes."
    },
    ta: {
        mainTitle: "மைன்கிராஃப்ட் ஹோஸ்டிங் சர்வர்",
        subTitle: "பணம் கட்ட வேண்டும் ஆனால் உள்நுழைந்தால் = 1 மாதம் இலவசம்",
        play: "விளையாடு",
        aboutTitle: "ஹெல் ஹோஸ்ட் பற்றி",
        aboutDesc: "ஹெல் ஹோஸ்ட் உங்கள் இறுதியான மைன்கிராஃப்ட் சர்வர் ஹோஸ்டிங் தளம் — வேகம், பாதுகாப்பு மற்றும் நிலைத்தன்மைக்காக உருவாக்கப்பட்டது. உள்நுழைந்தால் 1 மாதம் இலவசம், எந்த தாமதமும் இன்றி 24/7 பயன்பாடு. எங்கள் கட்டண திட்டங்கள் மேலும் சக்திவாய்ந்த அம்சங்களைத் திறக்கின்றன."
    },
    ja: {
        mainTitle: "マインクラフトホスティングサーバー",
        subTitle: "有料ですがログインで1か月無料",
        play: "プレイ",
        aboutTitle: "Hell Hostについて",
        aboutDesc: "Hell Hostは、速度、安全性、安定性を重視した究極のマインクラフトサーバーホスティングプラットフォームです。ログインすると1か月無料で利用でき、ラグなし、24時間365日の稼働率を誇ります。有料プランではさらに強力な機能が利用可能です。"
    }
};

function setLanguage(lang) {
    document.getElementById("mainTitle").innerText = translations[lang].mainTitle;
    document.getElementById("subTitle").innerText = translations[lang].subTitle;
    document.getElementById("playBtn").innerText = translations[lang].play;
    document.getElementById("aboutTitle").innerText = translations[lang].aboutTitle;
    document.getElementById("aboutDesc").innerHTML = translations[lang].aboutDesc;
}

function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
    if (document.getElementById("mainTitle")) {
        setLanguage(lang);
    }
});
