import './app.css';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock API route for marketing video generation
app.post('/api/generate-marketing-video', (req, res) => {
  const { description } = req.body;

  // Simulate processing delay
  setTimeout(() => {
    // Mock response: static video URL or placeholder
    res.json({
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // example video
    });
  }, 1000);
});

// Mock route for real estate tour video
app.post('/api/generate-realestate-video', (req, res) => {
  const { listingDetails } = req.body;

  // Simulate processing delay
  setTimeout(() => {
    res.json({
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});