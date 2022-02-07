const mongoose = require("mongoose");
const express = require("express");
const { Question } = require("../models/Question");
const router = express.Router();

const QUESTIONS_RETURNED = 100;

router.post("/", async (req, res) => {
  console.log(req.body);
  const newQuestion = new Question(req.body);
  try {
    const doc = await newQuestion.save();

    res.json({
      status: "success",
      message: "question added successfully",
      doc,
    });
  } catch (error) {
    res.status(500).json({
      status: "fall",
      message: "something went wrong while saving the question",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Question.deleteOne({ _id: req.params.id });

    res.json({
      status: "success",
      message: "question deleted successfully",
      // doc,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fall",
      message: "something went wrong while saving the question",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const doc = await Question.findOne({ _id: req.params.id });

    res.json({
      status: "success",
      message: "question founded",
      doc,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fall",
      message: "something went wrong to get the question",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const doc = await Question.findOne({ _id: req.params.id });

    // res.json({
    //   status: "success",
    //   message: "question founded",,
    // });
    doc.category = req.body.category;
    doc.type = req.body.type;
    doc.difficulty = req.body.difficulty;
    doc.question = req.body.question;
    doc.correct_answer = req.body.correct_answer;
    doc.incorrect_answers = req.body.incorrect_answers;
    await doc.save();
    res.json({
      status: "success",
      message: "question updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fall",
      message: "something went wrong to get the question",
    });
  }
});

router.get("/", async (req, res) => {
  // Question.find({}, (err, docs) => {
  //   const questionList = [];
  //   const indexList = [];
  //   while (indexList.length < QUESTIONS_RETURNED) {
  //     let randomNumber = Math.floor(Math.random() * docs.length);
  //     console.log({ randomNumber, c: !indexList.includes(randomNumber) });
  //     // if (!indexList.includes(randomNumber)) {
  //     questionList.push(docs[randomNumber]);
  //     indexList.push(randomNumber);
  //     // }
  //   }
  //   res.send(questionList);
  // });
  const docs = await Question.find();

  res.send(docs);
});

module.exports = router;
