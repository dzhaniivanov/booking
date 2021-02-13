const {Router}=require('express');
const homeController=require('./controllers/homeController');
const hotelController=require('./controllers/hotelController');
const userController=require('./controllers/userController')

const router=Router();

router.use('/',homeController);

router.use('/hotel',hotelController);

router.use('/login',homeController)

router.use('/profile',homeController);

router.use('/register',userController)

module.exports=router;