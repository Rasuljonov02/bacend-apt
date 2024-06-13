import mongoose from "mongoose";
import {QuizApp} from "../types";

const UserSchema = new mongoose.Schema<QuizApp.AddUserQuiz>({

    quizId: {
        type: String,
        unique: true,
        required: true,
    },

    correctanswer: {
        type: String,
        unique: true,
        required: true,
    },

});
export const AddUserQuiz = mongoose.model<QuizApp.AddUserQuiz>("AddUserQuiz", UserSchema);
