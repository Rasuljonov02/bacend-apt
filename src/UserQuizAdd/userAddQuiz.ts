import mongoose from "mongoose";
import { QuizApp } from "../types";

const UserSchema = new mongoose.Schema<QuizApp.AddUserQuiz>({
    quizId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    correctanswer: {
        type: String,
        required: true,
    },
});

UserSchema.index({ userId: 1, quizId: 1 });

export const AddUserQuiz = mongoose.model<QuizApp.AddUserQuiz>("AddUserQuiz", UserSchema);
