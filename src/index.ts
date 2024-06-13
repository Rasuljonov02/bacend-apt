import express from "express";
import cors from "cors";
import {  data, deleteResource } from "./auth/auth1";
import {connect} from "./db";
import {login} from "./auth/auth";
import {User} from "./auth/user";

const app = express();
app.use(cors());
app.use(express.json());
connect()
app.get("/", (req: any, res: any) => {
  const sa = { ...data };
  res.send(sa);
});
app.post("/login", async (req: any, res: any) => {
  const user = await User.findOne({ email: req.body.email });
  console.log(req.body);
  if (!user) return res.status(400).send({ data: null, message: "Invalid username or password" });

  res.send({ data: user, message: null });
});



app.delete("/del/:id", (req: any, res: any) => {
  const id = req.params.id;
  const deleted = deleteResource(id);
  if (deleted) {
    res.send(`ok with ID ${id} has been deleted.`);
  } else {
    res.send(`yoq with ID ${id} not found.`);
  }
});

app.post("/auth", async (req: any, res: any) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(400).send({ data: null, message: `${email} username already exists` });
  }

  user = new User({ name, email, password });
  await user.save();

  res.send({ data: user, message: null });
});



const PORT = 4000;
app.listen(PORT, () => console.log(`🦊 Listening on port ${PORT}...`));
