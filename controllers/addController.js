const { Router } = require('express');
const router = Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'add new hotel' })
});

module.exports = router;