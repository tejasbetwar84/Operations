const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ECOM_db')
const ECOM_db=mongoose.connection;

//if error
ECOM_db.on('error',console.error.bind(console,'error connecting to DataBASE'));

//if connection succesfully
ECOM_db.once('open',function(){
    console.log("Successfully connected to DataBase");
})



