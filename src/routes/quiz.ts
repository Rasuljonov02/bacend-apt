import express from "express";
import { QUIZAPP } from "../quiz/quizApp";
import { faker } from "@faker-js/faker";

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        const { name, correctanswer, a, b, c } = req.body;

        console.log(req.body);

        if (!name || !correctanswer || !a || !b || !c) {
            return res.status(400).send({ data: null, message: "All fields are required" });
        }

        const uniqueId = faker.datatype.uuid();

        const newQuiz = new QUIZAPP({ id: uniqueId, name, correctanswer, a, b, c });
        await newQuiz.save();

        res.status(201).send({ data: newQuiz, message: "Quiz created successfully" });
    } catch (error) {
        console.error("Error creating quiz:", error);
        res.status(500).send({ data: null, message: "Internal server error" });
    }
});



router.get("/getall", async (req, res) => {
    try {
        const quizzes = await QUIZAPP.find();

        res.status(200).send({ data: quizzes, message: "Quizzes retrieved successfully" });
    } catch (error) {
        console.error("Error retrieving quizzes:", error);
        res.status(500).send({ data: null, message: "Internal server error" });
    }
});

export default router;
