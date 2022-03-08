
const express=require('express');
const router=express.Router();
const userapi=require('../../../controller/api/v1/index');


router.post('/profile',userapi.profile);


module.exports=router;