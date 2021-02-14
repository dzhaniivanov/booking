const {Router}=require('express');
const homeController=require('./controllers/homeController');
const hotelController=require('./controllers/hotelController');
const authController=require('./controllers/authController');   

const router=Router();

router.use('/',homeController);

router.use('/hotel',hotelController);

router.use('/profile',homeController);

router.use('/auth',authController);


module.exports=router;