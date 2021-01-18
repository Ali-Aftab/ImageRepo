const { authJwt, uploadFile } = require("../middleware");
const { upload } = require("../config/multer.config");
const {
  uploadFileT,
  listAllPics,
  downdloadPic,
} = require("../controllers/file.controller");
const multer = require("multer");
// const uploadPicURLTest = multer({
//   dest: "/resources/static/assets/uploads",
// });
const { uploadFiles } = require("../controllers/upload.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/upload",
    [authJwt.verifyToken],
    upload.any("file"),
    uploadFileT
  );
  app.get("/api/allPics", listAllPics);

  app.get("/api/:id", downdloadPic);
  app.post(
    "/api/save",
    [authJwt.verifyToken],
    uploadFile.any("file"),
    uploadFiles
  );
};
