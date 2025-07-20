const express = require('express');
const { spawn, exec } = require('child_process');
const fs = require('fs');

const app = express();
app.use(express.json());

let serverProcess = null;

app.post('/start', (req, res) => {
  if (serverProcess) {
    return res.status(400).send('Server is already running');
  }
  serverProcess = spawn('java', ['-Xms1G', '-Xmx2G', '-jar', 'spigot-1.21.4.jar', 'nogui'], { cwd: './SpigotServer' });

  serverProcess.stdout.on('data', data => {
    console.log(`SERVER: ${data}`);
  });

  serverProcess.stderr.on('data', data => {
    console.error(`SERVER ERR: ${data}`);
  });

  serverProcess.on('close', code => {
    console.log(`Server stopped with code ${code}`);
    serverProcess = null;
  });

  res.send('Server started');
});

app.post('/stop', (req, res) => {
  if (!serverProcess) {
    return res.status(400).send('Server is not running');
  }
  // Graceful stop by sending 'stop' command to the server console
  serverProcess.stdin.write('stop\n');
  res.send('Server stopping');
});

app.get('/status', (req, res) => {
  res.send({ running: serverProcess !== null });
});

app.get('/logs', (req, res) => {
  const logPath = './SpigotServer/logs/latest.log';
  if (fs.existsSync(logPath)) {
    const logs = fs.readFileSync(logPath, 'utf-8');
    res.send(logs);
  } else {
    res.status(404).send('Log file not found');
  }
});

app.listen(3000, () => console.log('Control panel running on http://localhost:3000'));
