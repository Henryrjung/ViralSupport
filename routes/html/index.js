// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const router = require('express').Router();
const CovidService = require("../../services/covid.service");
// gets handlebars homepage
router.get("/", async(req, res) => {
  const stats = await CovidService.getStats('USA');
  console.log(stats.data.response[0]);
  res.render("index", stats.data.response[0]);
});

router.get('/login', (req, res) => {
  res.render("login");
  if (req.user) {
    res.redirect('index');
  }
});

router.get('/signup', (req, res) => {
  res.render("signup");
});

router.get('/profile', (req, res) => {
  res.render("profile");
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/members', isAuthenticated, (_req, res) => {
  res.render("index");
  // res.sendFile(path.join(__dirname, '../../public/members.html'));
});



module.exports = router;
