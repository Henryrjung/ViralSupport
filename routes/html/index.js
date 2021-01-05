// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();
const CovidService = require("../../services/covid.service");
const NewsService = require("../../services/news.service");


// router.get("/", async(req, res) => {
//   const stats = await NewsService.getNews();
//   console.log(stats.data.news[0]);
//   res.render("index", stats.data.news[0]);
// });


// route to get covid stats api data
router.get("/", async(req, res) => {
  const stats = await CovidService.getStats('USA');
  // const newsStats = await NewsService.getNews();
  // console.log(stats.data.response[0]);
  // console.log(newsStats.data.news);
  res.render("index", stats.data.response[0]);
  // res.render("index", newsStats.data.news[0]);
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



module.exports = router;
