const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
require('dotenv').config();

var port=process.env.PORT || 8080;

// const homeContent;
// const aboutContent;


// Initialize Express
const app=express();

// Setting up template engine
app.set('view engine','ejs');

// bodyParser Initialized
app.use(bodyParser.urlencoded({extended:true}));

//Static Files Served
app.use(express.static('public'));





app.listen(port, ()=>{
    console.log("Server Up At "+port);
});