const express = require('express');
const router = express.Router();

const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.get('/', (req, res) => res.send('on Auth Routes'))
// Middleware xử lý lỗi
const handleError = (res, status, message) => {
    return res.status(status).json({ success: false, message });
};

// Route đăng nhập
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return handleError(res, 400, 'Missing username or password');
    }

    const user = await User.findOne({ username });

    if (!user) {
        return handleError(res, 404, 'Incorrect Username or password');
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        return handleError(res, 404, 'Incorrect Username or password');
    }

    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
    return res.json({ success: true, message: 'Sign in success', accessToken });
});



router.post('/register', async (req, res) => {
    try {
        const { username, password, secretCode } = req.body;

        if (!username || !password) {
            return handleError(res, 400, 'Missing username or password');
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return handleError(res, 409, 'Username already taken');
        }

        let userRole = 'user'; // Vai trò mặc định là "user"

        // Kiểm tra và gán vai trò "admin" nếu mã bí mật hợp lệ
        if (secretCode === process.env.SECRET_CODE) {
            userRole = 'admin';
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, role: userRole });
        await newUser.save();

        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        return res.json({ success: true, message: 'Sign up success', accessToken });
    } catch (error) {
        console.error('Error during registration:', error);
        return handleError(res, 500, 'Server error');
    }
});




// Route đăng xuất
router.get('/logout', (req, res) => {
    // Xử lý đăng xuất ở đây
});

module.exports = router;
