const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/users", require("./users")); // matches all requests to /api/users/
//router.use("/blogposts", require("./blogposts")); // matches all requests to  /api/blogposts/

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  res.status(404).send({ message: err.message });
  next(err);
});

module.exports = router;
