const fs = require("fs");
const { Image } = require("../db");
const { Op } = require("sequelize");
const PORT = process.env.PORT || 8000;

const uploadFiles = async (req, res) => {
  try {
    if (req.files.length === 0) {
      return res.json({ message: "You must select a file." });
    }
    for (let i = 0; i < req.files.length; i++) {
      const oneFile = req.files[i];
      let description = req.body.description;
      if (!description) {
        description = "";
      }
      const imagePath = "/resources/static/assets/";

      const oneImage = await Image.create({
        type: oneFile.mimetype,
        name: oneFile.originalname,
        url: imagePath + "uploads/" + oneFile.filename,
        userId: req.userId,
        description,
        fullURL:
          "localhost:" + PORT + imagePath + "uploads/" + oneFile.filename, //this will change once we get into production
      });
      const imageInfo = fs.readFileSync(
        __basedir + imagePath + "uploads/" + oneFile.filename
      );
      fs.writeFileSync(
        __basedir + imagePath + "tmp/" + oneImage.name,
        imageInfo
      );
    }

    res.json({ message: "File(s) has uploaded" });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error occured during upload", error });
  }
};

const listOneFile = async (req, res) => {
  try {
    const oneFile = await Image.findByPk(req.params.imageId);
    res.json({ file: oneFile });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured to locate file" });
  }
};

const listOneURL = async (req, res) => {
  try {
    const oneFile = await Image.findByPk(req.params.imageId);
    res.writeHead(302, {
      location: oneFile.url,
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured to locate file" });
  }
};

const deleteFile = async (req, res) => {
  const { userId } = req;
  try {
    const selectedFile = await Image.findByPk(req.params.imageId);
    if (selectedFile.userId !== userId) {
      return res.json({
        message: "You don't have access to deleting this Image!",
      });
    }
    const oneFile = await Image.destroy({
      where: {
        id: req.params.imageId,
      },
    });
    res.status(202).send({ message: "File deleted" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured during deletion" });
  }
};

const listAllFiles = async (req, res) => {
  try {
    const allFiles = await Image.findAll();
    res.json({ files: allFiles });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured when grabing all photos", error });
  }
};

const searchFiles = async (req, res) => {
  try {
    if (!req.body.searchQuery) {
      return res.json({ message: "Please type a search query!" });
    }
    const { searchQuery } = req.body;
    const searchList = await Image.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${searchQuery}%`,
            },
          },
          {
            description: {
              [Op.iLike]: `%${searchQuery}%`,
            },
          },
        ],
      },
    });
    return res.json({ files: searchList });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error occured during search", error });
  }
};

module.exports = {
  uploadFiles,
  listOneFile,
  listOneURL,
  deleteFile,
  listAllFiles,
  searchFiles,
};
