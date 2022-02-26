const mongoose = require("mongoose");
const express = require("express");
const { Word } = require("../models/WordModel");
const { User } = require("../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  const { lessonId, userId, query } = req.query;
  const objectQuery = {};

  if (userId) {
    const user = await User.findById(userId);
    console.log({ user });
    const words = [];

    for (let index = 0; index < user.savedWords.length; index++) {
      const wordId = user.savedWords[index];
      console.log({ wordId });
      const word = await Word.findById(wordId);

      words.push(word);
    }
    res.send({ docs: words });

    return;
  }

  if (lessonId) {
    objectQuery.lessonId = lessonId;
  }

  if (query) {
    objectQuery.character = query;
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
