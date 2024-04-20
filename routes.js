const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// GET request to serve the login page
router.get('/login', (req, res) => {
  res.render('login'); // Render the login.ejs view
});

// POST request to handle user login
router.post('/login', userController.login);
// GET request to serve the signup page
router.get('/signup', (req, res) => {
  res.render('signup'); // Render the signup.ejs view
});

// POST request to handle user signup
router.post('/signup', userController.signup);

module.exports = router;

