const { Router } = require('express');
const router = Router();
const hotelService = require('../services/hotelService');




router.get('/add', (req, res) => {
    res.render('create', { title: 'add new hotel' })
});

router.post('/add', (req, res) => {
    hotelService.create(req.body)
        .then(() => res.redirect('/'))
        .catch(() => res.status(500).end())

});


router.get('/details/:hotelId', async  (req, res) => {
    let hotel= await hotelService.getOne(req.params.hotelId);
    res.render('details', { title: 'details',hotel})
});

module.exports = router;