// Demo interactions for the language button and Play CTA.
const status = document.getElementById("status");

document.querySelector(".lang-btn").addEventListener("click", () => {
  status.textContent = "Language selector coming soon…";
  clearAfterDelay();
});

document.getElementById("playBtn").addEventListener("click", (e) => {
  e.preventDefault();
  status.textContent = "Launching Hell Host panel… (stub)";
  clearAfterDelay();
});

function clearAfterDelay() {
  window.clearTimeout(window.__hhTimer);
  window.__hhTimer = setTimeout(() => (status.textContent = ""), 2500);
}
