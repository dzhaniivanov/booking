const { Router } = require('express');
const router = Router();

router.get('/add', (req, res) => {
    res.render('create', { title: 'add new hotel' })
});

router.get('/details/:hotelId',(req,res)=>{
    res.render('details',{title:'details'})
});

module.exports = router;