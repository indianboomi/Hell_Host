function menuClick(name) {
  const title = document.getElementById('page-title');
  const content = document.getElementById('content');

  title.innerText = name;

  if (name === "Overview") {
    content.innerHTML = `
      <div class="dashboard-grid">
        <div class="card">
          <h3>Online Players</h3>
          <p>5 / 20</p>
        </div>
        <div class="card">
          <h3>Server Status</h3>
          <p>Online</p>
        </div>
        <div class="card">
          <h3>Uptime</h3>
          <p>2h 14m</p>
        </div>
        <div class="card">
          <h3>CPU Usage</h3>
          <p>38%</p>
        </div>
        <div class="card">
          <h3>RAM Usage</h3>
          <p>1.2 GB</p>
        </div>
      </div>
    `;
  } else {
    content.innerHTML = `<p>This is the ${name} section.</p>`;
  }
}
