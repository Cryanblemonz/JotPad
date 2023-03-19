const express = require("express");
const app = express();
const _ = require("lodash");
const ejs = require("ejs");
const TypeIt = require("typeit");
let posts = [];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home", { posts: posts });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/terms", function(req, res){
    res.render("terms");
}
)

app.get("/posts/:id", function (req, res) {
  for (i = 0; i < posts.length; i++) {
    let lowercasePostTitle = _.lowerCase(posts[i].title);
    let postTitle = posts[i].title;
    let postAuthor = posts[i].author;
    let postBody = posts[i].body;
    if (_.lowerCase(req.params.id) == lowercasePostTitle) {
      res.render("posts", {
        postTitle: postTitle,
        postBody: postBody,
        postAuthor: postAuthor,
      });
    } else {
      console.log("No match found.");
    }
  }
});

app.post("/compose", function (req, res) {
  let listOfParagraphs = req.body.postBody.split("\r\n");
  let post = {
    title: req.body.postTitle,
    author: req.body.postAuthor,
    body: req.body.postBody,
  };
  posts.unshift(post);
  res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000");
});
