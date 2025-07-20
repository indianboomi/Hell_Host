const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 3000;

const AUTH_TOKEN = "supersecrettoken"; // Change this and keep secret!

let isRunning = false;

app.use(cors());
app.use(express.json());

// Start Minecraft server
app.post('/start', (req, res) => {
  if (req.headers.authorization !== AUTH_TOKEN) {
    return res.status(403).send('Forbidden');
  }
  if (isRunning) {
    return res.send('Server already running');
  }
  exec('screen -dmS mc java -Xmx1024M -Xms1024M -jar server.jar nogui', { cwd: '/home/youruser/minecraft' }, (error) => {
    if (error) {
      console.error('Error starting server:', error);
      return res.status(500).send('Failed to start server');
    }
    isRunning = true;
    console.log('Minecraft server started');
    res.send('Server started');
  });
});

// Stop Minecraft server
app.post('/stop', (req, res) => {
  if (req.headers.authorization !== AUTH_TOKEN) {
    return res.status(403).send('Forbidden');
  }
  if (!isRunning) {
    return res.send('Server already stopped');
  }
  exec('screen -S mc -X stuff "stop\n"', (error) => {
    if (error) {
      console.error('Error stopping server:', error);
      return res.status(500).send('Failed to stop server');
    }
    isRunning = false;
    console.log('Minecraft server stopped');
    res.send('Server stopped');
  });
});

// Get server status
app.get('/status', (req, res) => {
  res.json({ running: isRunning });
});

app.listen(port, () => {
  console.log(`Minecraft API running at http://localhost:${port}`);
});
