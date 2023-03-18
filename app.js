const express = require('express');
const app = express();
const _ = require('lodash');
const ejs = require ('ejs');
const TypeIt = require('typeit');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render('home');
})

app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");
});
