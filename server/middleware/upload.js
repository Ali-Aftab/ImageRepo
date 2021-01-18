const multer = require("multer");
const { fileURLToPath } = require("url");
const { dirname } = require("path");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.files);
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = dirname(__filename);
    // const __basedir = path.dirname(import.meta.url).replace(/^file:\/\/\//, "");
    console.log(__basedir);
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}---${file.originalname}`);
  },
});

const uploadFile = multer({ storage, imageFilter });
module.exports = { uploadFile };
