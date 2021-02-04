const {Router}=require('express');
const router=Router();


router.get('/',(req,res)=>{
    res.redirect('/home');
});

router.get('/home',(req,res)=>{
    res.render('home',{title:'Home'})
});

router.get('/login',(req,res)=>{
    res.render('login',{title:'login'})
});
router.get('/register',(req,res)=>{
    res.render('register',{title:'register'})
});
router.get('/profile',(req,res)=>{
    res.render('profile',{title:'profile'})
});

module.exports=router;