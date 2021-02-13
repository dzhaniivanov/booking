const { Router } = require('express');
const router = Router();
const hotelService = require('../services/hotelService');




router.get('/home', (req, res) => {
    hotelService.getAll()
        .then(hotels => {
            res.render('home', { title: 'Home', hotels })

        })
});

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'login' })
});
router.get('/register', (req, res) => {
    res.render('register', { title: 'register' })
});

router.post('/register', async (req, res) => {
    const { email, username, password, rePassword } = req.body;
    if (password !== rePassword) {
        res.render('register', { message: 'passwords not match' });
        return;
    };
    try {
        let result = await authService.register({ username, password });
        console.log(result);
        res.redirect('/login');
    } catch (error) {
        res.render('register', { error })

    }
});
router.get('/profile', (req, res) => {
    res.render('profile', { title: 'profile' })
});

module.exports = router;

