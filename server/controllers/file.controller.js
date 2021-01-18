const stream = require("stream");

const { Picture, User } = require("../db");

exports.uploadFileT = async (req, res) => {
  try {
    for (let i = 0; i < req.files.length; i++) {
      const oneFile = req.files[i];
      console.log(typeof req.userId);
      console.log(oneFile);
      const onePic = await Picture.create({
        type: oneFile.mimetype,
        name: oneFile.originalname,
        data: oneFile.buffer,
        userId: req.userId,
      });
    }
    res.json({ message: "Picture(s) have been uploaded!" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured during upload", error: error.message });
  }
};

exports.listAllPics = async (req, res) => {
  try {
    const picAllList = await Picture.findAll();
    res.json(picAllList);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured when loading the images", error });
  }
};

exports.downdloadPic = async (req, res) => {
  try {
    console.log(req.params.id);
    const onePic = await Picture.findByPk(req.params.id);
    console.log(onePic);
    const picData = Buffer.from(onePic.data, "base64");
    const readStream = new stream.PassThrough();
    readStream.end(picData);
    res.set("Content-disposition", "attachment; filename" + onePic.name);
    res.set("Content-Type", onePic.type);
  } catch (error) {
    console.log(error);
  }
};

exports.uploadPicURL = async (req, res) => {
  upload;
};
