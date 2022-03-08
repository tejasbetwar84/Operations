const express=require('express');
const app=express()
const port=8000;
const mongoose=require('./config/mongoose');
const passport=require('passport');
const jwtpassport=require('./config/passport-jwt-strategy');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(){
    console.log('Server is running on port',port);
})