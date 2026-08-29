const User = require('../models/user.model');

const getProfile = async (req, res) => {
  // req.user.id comes directly from the JWT decoded in the middleware
  const userId = req.user.id;

  // Fetch the user from the database, but exclude the password field
  const user = await User.findById(userId).select('-password');

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.status(200).json({
    success: true,
    data: user
  });
};

module.exports = { getProfile };