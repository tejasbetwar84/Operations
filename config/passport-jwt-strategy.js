const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/user');

let opts={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken,
    secretOrKey : 'codial'
}

passport.use(new jwtStrategy(opts,function(jwtpayload,done){
    User.findById(jwtpayload._id,function(err,user){
        if(err){
            console.log(err);
            return;
        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}));

module.exports=passport;

