// =======================
// 1. Your Firebase Config
// =======================
const firebaseConfig = {
  apiKey: "AIzaSyBhcg2E060bJ9HdVVSmWjV_h7bAe3juqNk",
  authDomain: "fir-98e22.firebaseapp.com",
  projectId: "fir-98e22",
  storageBucket: "fir-98e22.firebasestorage.app",
  messagingSenderId: "997782000054",
  appId: "1:997782000054:web:4085c86b38baf26085f117",
  measurementId: "G-HTGDCKGM4F"
};

// =======================
// 2. Initialize Firebase
// =======================
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// =======================
// 3. Google Login Function
// =======================
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);
      alert(`Welcome ${user.displayName}!`);

      // Redirect to your panel after login
      window.location.href = "panel.html";
    })
    .catch((error) => {
      console.error("Error during login:", error);
      alert("Login failed: " + error.message);
    });
}

// =======================
// 4. Google Logout Function
// =======================
function logout() {
  auth.signOut()
    .then(() => {
      alert("You have been logged out.");
      window.location.href = "login.html"; // Back to login page
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
}

// =======================
// 5. Detect Login State
// =======================
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is signed in:", user.email);
  } else {
    console.log("No user signed in.");
  }
});
