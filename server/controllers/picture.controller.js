const fs = require("fs");
const { Picture } = require("../db");

const uploadFiles = async (req, res) => {
  try {
    for (let i = 0; i < req.files.length; i++) {
      const oneFile = req.files[i];
      if (oneFile === undefined) {
        return res.json({ message: "You must select a file." });
      }
      let description = req.body.description;
      if (!description) {
        description = "";
      }

      const onePic = await Picture.create({
        type: oneFile.mimetype,
        name: oneFile.originalname,
        url: "/resources/static/assets" + oneFile.filename,
        userId: req.userId,
        description,
      });
      const picInfo = fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + oneFile.filename
      );
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + onePic.name,
        picInfo
      );
    }
    return res.json({ message: "File(s) has uploaded" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error occured during upload", error });
  }
};
module.exports = {
  uploadFiles,
};
