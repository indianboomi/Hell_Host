const languageIcon = document.getElementById('languageIcon');
languageIcon.innerHTML = `
<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477
         10-10S17.523 2 12 2zm5.933 6h-2.151a15.91 15.91 0 0 0-1.1-3.276A8.03 8.03 0 0 1 17.933 8zm-5.933-4a13.99 13.99 0 0 1 1.204 4.834H7.626A13.99 13.99 0 0 1 11.999 4zm-4.306 4.724a14.644 14.644 0 0 0-1.906 3.555H4.067a8.027 8.027 0 0 1 3.626-3.555zm-3.563 5h2.073a15.597 15.597 0 0 0 1 3.08 8.032 8.032 0 0 1-3.073-3.08zM12 20a13.942 13.942 0 0 1-1.39-4h2.79A13.942 13.942 0 0 1 12 20zm1.761-6h-3.522a29.646 29.646 0 0 0-2.34-7.517 30.089 30.089 0 0 0-2.404 7.517H6.645a7.99 7.99 0 0 0 10.71 0h-2.229zm2.769-5.993a15.607 15.607 0 0 0-1.047 3.907h3.218a8.026 8.026 0 0 0-2.171-3.907z"/>
`;

const translations = {
  en: {
    mainText: "Minecraft Hosting Server Paid But Login = 1 Month Free",
    playButton: "Play"
  },
  ta: {
    mainText: "Minecraft ஹோஸ்டிங் சர்வர், உள்நுழைந்தால் = 1 மாதம் இலவசம்",
    playButton: "Play"
  },
  hi: {
    mainText: "Minecraft होस्टिंग सर्वर, लॉग इन करें = 1 महीने मुफ्त",
    playButton: "Play"
  },
  te: {
    mainText: "Minecraft హోస్టింగ్ సర్వర్, లాగిన్ అయితే = 1 నెల ఫ్రీ",
    playButton: "Play"
  },
  kn: {
    mainText: "Minecraft ಹೋಸ್ಟಿಂಗ್ ಸರ್ವರ್, ಲಾಗಿನ್ ಮಾಡಿದರೆ = 1 ತಿಂಗಳು ಉಚಿತ",
    playButton: "Play"
  },
  ja: {
    mainText: "マインクラフトホスティングサーバー、ログインすると1ヶ月無料",
    playButton: "プレイ"
  }
};

const mainText = document.getElementById('mainText');
const playButton = document.getElementById('playButton');
const languageDropdown = document.getElementById('languageDropdown');

languageIcon.addEventListener('click', () => {
  languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    languageDropdown.style.display = 'none';
  }
});

languageDropdown.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const lang = item.getAttribute('data-lang');
    mainText.textContent = translations[lang].mainText;
    playButton.textContent = translations[lang].playButton;
    languageDropdown.style.display = 'none';
  });
});

playButton.addEventListener('click', () => {
  alert('Play button clicked! Implement your login or play logic here.');
});

// default language
mainText.textContent = translations.en.mainText;
playButton.textContent = translations.en.playButton;
