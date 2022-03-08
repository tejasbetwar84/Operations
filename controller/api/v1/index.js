const User=require('../../../models/user');
const jwt=require('jsonwebtoken');

module.exports.profile= async function(req,res){
    try{
const user=await User.findOne({email : req.body.email});
   
if(!user){
    return res.json(422,{
        message : 'Unauthorised',
        data : {
            token : jwt.sign(user.toJSON(),'codial',{expiresIn : '1000'}),
        }
    })
}

 return res.json(200,{
     message : 'Sign in succesfull , Here is your token'
 })

    }catch(err){
        return res.json(500,{
            message :"Internal server error "
        })
    }
};

module.exports.destroy=await function(req,res){
     
 try{
  let user = await User.findById(req.params.id);
  user.remove();

  return res.json(200,{
      message:"user deleted"
  })
 }catch(err){
      return res.json(500,{
          message:"something went wrong",
      })
 }
}