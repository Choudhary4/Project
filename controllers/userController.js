const User = require('../models/userModel.js');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('http://localhost:3005');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists in the database
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    res.redirect('http://localhost:3005');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};







