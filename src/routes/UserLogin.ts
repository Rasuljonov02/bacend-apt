import express from "express";
import {register} from "../auth/register";
import {creatToken} from "../models";

const router = express.Router();
router.post("/login", async (req, res) => {
    const user = await register.findOne({email: req.body.email});
    console.log(req.body);
    if (!user) return res.status(400).send({data: null, message: "Invalid email or password"});
    const token = creatToken(user)
    res.send({data: token, message: null});
});

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;

    let user = await register.findOne({email: email});
    if (user) {
        return res.status(400).send({data: null, message: `${email} username already exists`});
    }

    user = new register({name, email, password});
    await user.save();

    res.send({data: user, message: null});
});

export default router;
