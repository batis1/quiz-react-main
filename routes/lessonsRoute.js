const mongoose = require("mongoose");
const express = require("express");
const { Lesson } = require("../models/LessonModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const objectQuery = {};

  const docs = await Lesson.find(objectQuery);

  res.send({ resultLength: docs.length, message: "working", docs });
});

router.post("/", async (req, res) => {
  const newLesson = new Lesson(req.body);

  const doc = await newLesson.save();

  res.send({ message: "working", doc });
});

module.exports = router;
