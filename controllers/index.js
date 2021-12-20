const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const signupRoutes = require("./signupRoutes")


router.use("/api", apiRoutes);
router.use('/homeRoutes', homeRoutes);
router.use('/signup', signupRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
  // to do: list of correct endpoints to use if incorrect url endpoint is entered
});

module.exports = router;
