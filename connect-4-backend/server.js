// server.js
// This is the main server file for the Connect-4 backend. It establishes a connection to MongoDB,
// defines API routes, and starts the server.

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Environmental variables for MongoDB configuration
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const port = process.env.PORT || 3000;

// Construct the MongoDB connection URI using environment variables
const MONGODB_URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.oiqyui1.mongodb.net/?retryWrites=true&w=majority`;

// Eestablish connection to MongoDB using the MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Event listeners for MongoDB connection status
db.on('error', (error) =>
  console.error('MongoDB connection error:', error)
);
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Define the user schema for MongoDB
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Define basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to connect-4 backend!');
});

// Handle POST requests for user creation
app.post('/', (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });
  user
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
