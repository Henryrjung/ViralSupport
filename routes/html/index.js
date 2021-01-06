// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');
const router = require('express').Router();
const CovidService = require("../../services/covid.service");
const NewsService = require("../../services/news.service");

// route to get covid stats api data
router.get("/", async(req, res) => {
  const stats = await CovidService.getStats('USA');
  const newsStats = await NewsService.getNews();
  const renderData = {
    stats: stats.data.response[0],
    news: newsStats.data.news,
  }
  res.render("index", renderData);
});

router.get("/news", async(req, res) => {
  const newsStats = await NewsService.getNews();
  console.log(newsStats.data.news);
  res.render("news", newsStats.data.news);
});

router.get('/login', (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render("login");
});

router.get('/signup', (req, res) => {
  res.render("signup");
});

router.get('/profile', isAuthenticated, (req, res) => {
  res.render("profile");
  console.log(req.user)
});

router.get('/profile/:id', (req, res) => {
  res.render("profile");
  console.log(req.user)
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/members', isAuthenticated, (req, res) => {
  res.render("members");
  console.log(req.user)
  
});

router.get('/contact', (req, res) => {
  res.render("contact");
});

router.get('/about', (req, res) => {
  res.render("about");
});

router.get('/chat', (req, res) => {
  res.render("chat",);
});

  // index route loads view.html
router.get("/", async(req, res) => {
  const posts = await db.Post.findAll()
  console.log(posts)
  res.render("chat", {posts});
});

router.get("/post", function(req, res) {
  res.render("post",);
});



module.exports = router;
