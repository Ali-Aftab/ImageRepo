const { authJwt, uploadFile } = require("../middleware");
const { uploadFiles } = require("../controllers/picture.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/picture/upload",
    [authJwt.verifyToken],
    uploadFile.any("file"),
    uploadFiles
  );
};
