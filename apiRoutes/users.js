const router = require("express").Router();
const { User } = require("../db");

console.log("user", User);

// matches GET requests to /api/users/
router.get("/", function (req, res, next) {
  res.json({ hi: String(User) });
});
// matches POST requests to /api/users/
router.post("/", function (req, res, next) {
  for (let key in User) {
    console.log(key);
  }
  console.log("reached");
  res.json({ what: "what" });
});

router.put("/:userId", function (req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/users/:usersId
router.delete("/:userId", function (req, res, next) {
  /* etc */
});

module.exports = router;
