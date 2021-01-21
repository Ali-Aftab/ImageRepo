const { authJwt, uploadFile } = require("../middleware");
const {
  uploadFiles,
  listOneFile,
  listOneURL,
  deleteFile,
  listAllFiles,
  searchFiles,
} = require("../controllers/image.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //upload image
  app.post(
    "/api/picture/upload",
    [authJwt.verifyToken],
    uploadFile.any("file"),
    uploadFiles
  );
  //get one image data
  app.get("/api/picture/:pictureId", listOneFile);
  //get one image url and direct the user there
  app.get("/api/picture/direct/:pictureId", listOneURL);
  //delete one image
  app.delete("/api/picture/:pictureId", [authJwt.verifyToken], deleteFile);
  //get all public image data
  app.get("/api/picture/listAll", listAllFiles);
  //search image repository
  app.get("/api/picture/search", searchFiles);
};
