const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
require('dotenv').config();

var port = process.env.PORT || 8080;
var posts=[];

// Initialize Express
const app = express();

// Setting up template engine
app.set('view engine', 'ejs');

// bodyParser Initialized
app.use(bodyParser.urlencoded({
    extended: true
}));

//Static Files Served
app.use('/public', express.static('public'));

// Home Route
app.get('/', (req, res) => {
    res.render("home.ejs", {
        posts: posts,
        // title: posts
    });
});

app.get('/compose',(req,res)=>{
    res.render('compose.ejs');
});

app.post('/compose',(req,res)=>{
    const post={
        content:req.body.post,
        title:req.body.title,
    }
    posts.push(post);
    res.redirect('/');
});

app.listen(port, () => {
    console.log("Server Up At " + port);
});