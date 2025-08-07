const API_BASE = 'https://your-backend-url.com'; // Change to your backend URL

async function startServer() {
  updateStatus('Starting server...');
  const res = await fetch(`${API_BASE}/start`, { method: 'POST' });
  const text = await res.text();
  showLog(text);
  checkStatus();
}

async function stopServer() {
  updateStatus('Stopping server...');
  const res = await fetch(`${API_BASE}/stop`, { method: 'POST' });
  const text = await res.text();
  showLog(text);
  checkStatus();
}

async function checkStatus() {
  const res = await fetch(`${API_BASE}/status`);
  const text = await res.text();
  updateStatus(`Server status: ${text}`);
}

function updateStatus(message) {
  document.getElementById('status').innerText = message;
}

function showLog(message) {
  document.getElementById('log').innerText = message;
}
