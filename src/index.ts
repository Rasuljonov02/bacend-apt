import express from "express";
import cors from "cors";
import { Qosh, data, deleteResource, logIn } from "./auth/auth1";
import { Auth } from "./auth/types";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: any, res: any) => {
  const sa = { ...data };
  res.send(sa);
});
app.post("/login", (req: any, res: any) => {
  const loginInfo = logIn(req.body);
  res.send(loginInfo);
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

app.post("/auth", (req: any, res: any) => {
  const newData: Auth.Personam = req.body;

  const ares = Qosh(newData);

  res.json(ares);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`🦊 Listening on port ${PORT}...`));
