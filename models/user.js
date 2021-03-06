const mongoose=require('mongoose');
const Userschema=new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email :  {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    operations : [{
        type : mongoose.Schema.Types.ObjectId,
        ref:'operations',
    }]

},{
    timestamps : true,
});

const User=mongoose.model('User',Userschema);

module.exports=User;
