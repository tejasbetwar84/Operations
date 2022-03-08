const User=require('../models/user');
const Operation=require('../models/operations');
module.exports.home=function(req,res){
    return res.render('home',{
        title : "Login",
    })
}

module.exports.signUp=function(req,res){
    return res.render('signUp',{
        title:"SignUp",
    })
}

module.exports.submit=function(req,res){
    if(req.body.password==req.body.confirm_password){
        User.create(req.body,function(err,user){

        })

    }
    return res.redirect('/');
}

module.exports.user=function(req,res){

   User.find({},function(err,users){
       return res.render('user',{
           title:'Users',
           users : users,
       })
   })
}

module.exports.profile=function(req,res){
    User.findById(req.params.id,function(err,user){

        return res.render('profile',{
            title:'Profile',
            user : user,
        })
    })
}

module.exports.delete=function(req,res){
   User.findByIdAndDelete(req.params.id,function(err,user){

    return res.redirect('/');
   })

  
}

module.exports.update=function(req,res){
    User.findById(req.params.id,function(err,user){
        user.name=req.body.name ;
        user.email=req.body.email;
        user.save();

        return res.redirect('/user');
    })
}

module.exports.operations=function(req,res){
    User.findById(req.params.id,function(err,user){

        return res.render('operations',{
            title:"operations",
            user : user,   
             })
    })
}

module.exports.operation1=function(req,res){
    console.log(req.params.id);
    User.findById(req.params.id,function(err,user){

        if(user.operations.length>0){
            user.operations.pop();
        }

        Operation.create(req.body,function(err,operation){

            user.operations.push(operation);
            user.save();

        })

       



        return res.redirect('back');

        
    })
}