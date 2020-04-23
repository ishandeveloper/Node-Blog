const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
require('dotenv').config();

var port=process.env.PORT || 8080;

var posts=["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
var postTitles=["First Blog Post","Second Blog Post"];
// const homeContent;
// const aboutContent;


// Initialize Express
const app=express();

// Setting up template engine
app.set('view engine','ejs');

// bodyParser Initialized
app.use(bodyParser.urlencoded({extended:true}));

//Static Files Served
app.use('/public',express.static('public'));

// Home Route
app.get('/',(req,res)=>{
    res.render("home.ejs",{posts:posts,title:postTitles});
});


app.listen(port, ()=>{
    console.log("Server Up At "+port);
});