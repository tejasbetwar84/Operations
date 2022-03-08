const express=require('express');
const passport =require('passport');
const router=express.Router();
const userapi=require('../../../controller/api/v1/profile');



router.delete('/:id',passport.authenticate('jwt',{session : false}) ,userapi.destroy);

module.exports=router;