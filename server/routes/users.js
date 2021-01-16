const router = require("express").Router();
const { User } = require("../db");
const { authJwt } = require("../middleware");
const controller = require("../controllers/users.controller");

// console.log("user", User);

// // matches GET requests to /api/users/
// router.get("/", function (req, res, next) {
//   res.json({ hi: String(User) });
// });
// // matches POST requests to /api/users/
// router.post("/", function (req, res, next) {
//   for (let key in User) {
//     console.log(key);
//   }
//   console.log("reached");
//   res.json({ what: "what" });
// });

// router.put("/:userId", function (req, res, next) {
//   /* etc */
// });
// // matches DELETE requests to /api/users/:usersId
// router.delete("/:userId", function (req, res, next) {
//   /* etc */
// });

// module.exports = router;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userAccess);
};
