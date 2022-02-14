const mongoose = require("mongoose");
const express = require("express");
const { Word } = require("../models/WordModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const { lessonId } = req.query;
  const objectQuery = {};
  if (lessonId) {
    objectQuery.lessonId = lessonId;
  }

  const docs = await Word.find(objectQuery);

  res.send({ resultLength: docs.length, message: "working", docs });
});

router.post("/", async (req, res) => {
  const newWord = new Word(req.body);

  const doc = await newWord.save();

  res.send({ message: "working", doc });
});

module.exports = router;
