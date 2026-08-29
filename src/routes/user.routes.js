const express = require('express');
const userController = require('../controllers/user.controller');
const authenticate = require('../middlewares/auth.middleware');

const router = express.Router();

// GET /api/v1/users/profile
// Notice how 'authenticate' sits between the URL and the controller
router.get('/profile', authenticate, userController.getProfile);

module.exports = router;