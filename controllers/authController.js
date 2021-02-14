const { Router } = require('express');

const router = Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });

});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        let token = await authService.login({ username, password });
        res.cookie('USER_SESSION', token);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.render('login', { error })
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { email, username, password, rePassword } = req.body;
    if (password !== rePassword) {
        res.render('register', { message: 'passwords don\'t match' });
        return;
    }
    try {
        let user = await authService.register({ email, username, password });
        res.redirect('/auth/login')

    } catch (error) {
        res.render('register', { error });

    }
});

module.exports = router;