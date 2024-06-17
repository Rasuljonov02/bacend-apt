import express from "express";
import cors from "cors";
import {connect} from "./db";
import {addquiz, Auth, quiz} from "./routes";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", Auth);
app.use("/api/quiz", quiz);
app.use("/api/adduserquiz", addquiz);

connect()

const PORT = 4000;
app.listen(PORT, () => console.log(`🦊 Listening on port ${PORT}...`));