function showForm(type) {
  const loginTab = document.getElementById('login-tab');
  const signupTab = document.getElementById('signup-tab');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (type === 'login') {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  } else {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  }
}

function loginWithDiscord() {
  alert("🔗 Redirecting to Discord OAuth... (to be implemented)");
  // You would redirect to your Discord OAuth URL here
}

function loginWithGoogle() {
  alert("🔗 Redirecting to Google OAuth... (to be implemented)");
  // You would redirect to your Google OAuth URL here
}
