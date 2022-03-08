const mongoose=require('mongoose');
const operationSchema=new mongoose.Schema({
    value1 : {
        type : Number,
        required : true,
    },
    value2 : {
        type : Number,
        required : true,
    },
    value3: {
        type : Number,
        required : true,
    },
    value4 : {
        type : Number,
        required : true,
    },
    value5 : {
        type : Number,
        required : true,
    }
},{
    timestamps : true,
})

const Operation=mongoose.model('Operation',operationSchema);
module.exports = Operation;