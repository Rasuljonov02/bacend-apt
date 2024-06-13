// models/quizApp.js
import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    id: String,
    name: String,
    correctanswer: String,
    a: String,
    b: String,
    c: String
});

export const QUIZAPP = mongoose.model("QUIZAPP", quizSchema);
