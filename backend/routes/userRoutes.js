const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares/authMiddleware');
const {
    loginUser,
    getMe,
    } = require('../controllers/userController');

router.post('/login',loginUser);
router.post('/me', auth, getMe )

module.exports = router