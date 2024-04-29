const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/web', (req, res) => {
  res.render('index1'); // Render the signup.ejs view
});
router.get('/ML', (req, res) => {
  res.render('index2'); // Render the signup.ejs view
});
router.get('/UI', (req, res) => {
  res.render('index3'); // Render the signup.ejs view
});
router.get('/DSA', (req, res) => {
  res.render('index4'); // Render the signup.ejs view
});

router.get('/', (req, res) => {
  res.render('Homepage'); // Render the signup.ejs view
});

// GET request to serve the login page
router.get('/login', (req, res) => {
  res.render('registration'); // Render the login.ejs view
});

// POST request to handle user login
router.post('/login', userController.login);
// GET request to serve the signup page
router.get('/signup', (req, res) => {
  res.render('registration'); // Render the signup.ejs view
});

// POST request to handle user signup
router.post('/signup', userController.signup);

router.get('/lab', (req, res) => {
  res.render('password'); // Render the signup.ejs view
});

router.get('/wd', (req, res) => {
  res.render('wd'); // Render the signup.ejs view
});



router.get('/m', (req, res) => {
  res.render('ml'); // Render the signup.ejs view
});

router.get('/ux', (req, res) => {
  res.render('ux'); // Render the signup.ejs view
});

router.get('/algo', (req, res) => {
  res.render('algo'); // Render the signup.ejs view
});

module.exports = router;

