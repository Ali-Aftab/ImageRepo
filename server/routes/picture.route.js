const { authJwt, uploadFile } = require("../middleware");
const {
  uploadFiles,
  searchFiles,
  listAllFiles,
  deleteFile,
  listOneFile,
} = require("../controllers/picture.controller");

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
  //get one image
  app.get("/api/picture/:pictureId", listOneFile);
  //delete one image
  app.delete("/api/picture/:pictureId", deleteFile);
  //get all public images
  app.get("/api/picture/listAll", listAllFiles);
  //search image repository
  app.get("/api/picture/search", searchFiles);
};
