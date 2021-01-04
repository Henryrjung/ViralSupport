const router = require("express").Router();
// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");
const CovidService = require("../../services/covid.service");
const newsService = require("../../services/news.service");
// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    username: req.user.username,
    email: req.user.email,
    id: req.user.id,
  });
  console.log(this)
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/signup", (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Route for getting some data about our user to be used client side
router.get("/user_data", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  const { password, ...user } = req.user;
  res.json(user);
});
// for all covid stats
router.get("/covid_stats", async (req, res) => {
  const stats = await CovidService.getStats('USA');
  console.log(stats.data.response[0]);
  res.render("index", stats.data.response[0]);
});

router.get("/covid_news", async (req, res) => {
  const stats = await newsService.getNews();
  console.log(stats);
  res.render("index", stats);
});

module.exports = router;
