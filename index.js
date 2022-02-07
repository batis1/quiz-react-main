const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { connect } = require("./db/connection");
const questionRouter = require("./routes/questionRouter");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/user");
const path = require("path");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
connect();
app.use(cors(["https://localhost:5000/", "https://localhost:3000/"]));
app.use(express.json());

app.use(morgan("dev"));
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("working");
});

app.use(fileUpload());

// Upload Endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// axios.post("/score/signup"   )
app.use("/user", userRouter);
app.use("/score", scoreRouter);
app.use("/questions", questionRouter);

// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Online");
  }
});
