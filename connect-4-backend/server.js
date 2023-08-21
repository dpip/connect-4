// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Init basic route
app.get('/', (req, res) => {
  res.send('Welcome to connect-4 backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
