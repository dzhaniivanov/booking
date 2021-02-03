const {Router}=require('express');
const homeController=require('./controllers/homeController');
const addController=require('./controllers/addController');

const router=Router();

router.use('/',homeController);

router.use('/add',addController);

module.exports=router;