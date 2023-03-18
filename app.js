const express = require('express');
const app = express();
const _ = require('lodash');
const ejs = require ('ejs');
const TypeIt = require('typeit');
let posts=[];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render('home', {posts: posts});
})

app.get("/about", function(req, res){
    res.render('about');
})

app.get("/compose", function(req, res){
    res.render('compose')
})
app.post("/compose", function(req,res){
    let post = {
        title: req.body.postTitle,
        body: req.body.postBody
    }
    posts.push(post);
    console.log(posts);
    res.redirect("/");


    // res.render('home', {postTitle: postTitle, postBody: postBody});
})

app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");
});
