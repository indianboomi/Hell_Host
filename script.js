function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');

    let lang = localStorage.getItem("selectedLang");
    if (lang) {
        setTimeout(() => {
            let select = document.querySelector(".goog-te-combo");
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
            }
        }, 1000);
    }
}
