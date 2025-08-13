function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

document.addEventListener("change", function (event) {
    if (event.target.classList.contains("goog-te-combo")) {
        let selectedLang = event.target.value;
        if (selectedLang) {
            localStorage.setItem("selectedLang", selectedLang);
            window.location.href = "index.html";
        }
    }
});
