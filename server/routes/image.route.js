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
    "/api/image/upload",
    [authJwt.verifyToken],
    uploadFile.any("file"),
    uploadFiles
  );
  //get all public image data
  app.get("/api/image/listall", listAllFiles);
  //search image repository
  app.get("/api/image/search", searchFiles);
  //get one image data
  app.get("/api/image/:imageId", listOneFile);
  //get one image url and direct the user there
  app.get("/api/image/direct/:imageId", listOneURL);
  //delete one image
  app.delete("/api/image/:imageId", [authJwt.verifyToken], deleteFile);
};
