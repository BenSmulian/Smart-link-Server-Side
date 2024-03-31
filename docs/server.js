// server.js (Backend Server)
// Express server to handle URL shortening requests

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/shorten', (req, res) => {
    const longUrl = req.body.longUrl;
    // Implement URL shortening logic here
    // Generate a unique code for the URL, store it in the database, and return the shortened URL
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
