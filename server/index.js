const path = require("path");
const express = require("express");
const app = express();
const { db } = require("../db/index");
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, ".", "public")));

app.use("/api", require("./apiRoutes"));

app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const startServer = () => {
  const server = app.listen(process.env.PORT || PORT, () =>
    console.log(`Listening on ${PORT}`)
  );
};

(async () => {
  await db.sync({});
  console.log("db sync");
})(startServer());
