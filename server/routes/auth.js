const { verifySignUp } = require("../middleware");
const { signUp, signIn } = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", [verifySignUp.checkDuplicateEmail], signUp);
  app.post("/api/auth/signin", signIn);
};

// const router = require("express").Router();
// const { verifySignUp } = require("../middleware");
// const { signUp, signIn } = require("../controllers/auth.controller");

// router.use(function (req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// router.post("/signup", (req, res, next) => {
//   try {
//     verifySignUp.checkDuplicateEmail(req, res, next);
//     signUp(req, res);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// router.post("/signin", (req, res, next) => {
//   signIn(req, res);
// });

// module.exports = router;
