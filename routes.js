const {Router}=require('express');
const homeController=require('./controllers/homeController');
const hotelController=require('./controllers/hotelController');

const router=Router();

router.use('/',homeController);

router.use('/hotel',hotelController);

router.use('/login',homeController)

router.use('/profile',homeController)

module.exports=router;