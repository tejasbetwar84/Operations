const express=require('express');
const config=require('../config/mongoose');

const router=express.Router();

const homecontroller=require('../controller/index');

router.get('/',homecontroller.home);

router.get('/sign-up',homecontroller.signUp);

router.post('/submit',homecontroller.submit);

router.post('/user',homecontroller.user);

router.get('/user',homecontroller.user);


router.get('/profile/:id',homecontroller.profile);

router.get('/delete/:id',homecontroller.delete);

router.post('/update/:id',homecontroller.update);

router.get('/operations/:id',homecontroller.operations);

router.post('/operation-1/:id',homecontroller.operation1);




module.exports=router;


