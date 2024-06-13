import express from "express";
import { AddUserQuiz } from "../UserQuizAdd/userAddQuiz";
import { decodeToken } from "../models/creatToken";

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { quizId, correctanswer } = req.body;
        const token = req.headers['x-token'] as string;

        console.log( req.body);
        console.log(token);

        if (!quizId || !correctanswer) {
            return res.status(400).send({ data: null, message: "data yoq" });
        }

        const user = decodeToken(token);
        console.log("Decoded user:", user);

        if (!user) {
            return res.status(401).send({ data: null, message: "token yechilmadi" });
        }

        const newQuiz = new AddUserQuiz({ quizId, correctanswer });
        await newQuiz.save();

        console.log("Quiz created successfully:", newQuiz);

        res.status(201).send({ data: newQuiz, message: "Quiz created successfully" });
    } catch (error) {
        console.error("Error creating quiz:", error);
        res.status(500).send({ data: null, message: "Internal server error" });
    }

});

export default router;
