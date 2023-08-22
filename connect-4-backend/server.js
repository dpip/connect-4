require('dotenv').config();

// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;

const port = process.env.PORT || 3000;
const MONGODB_URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}.oiqyui1.mongodb.net/?retryWrites=true&w=majority`;

// Eestablish connection to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) =>
  console.error('MongoDB connection error:', error)
);
db.once('open', () => console.log('Connected to MongoDB Atlas'));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const user = new User({
  username: 'Pip',
  password: '12345',
});

user
  .save()
  .then((u) => {
    console.log('A new user has been added to the database: ', u);
  })
  .catch((err) => {
    console.log(err);
  });

// Init basic route
app.get('/', (req, res) => {
  res.send('Welcome to connect-4 backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
