import { Request, Response } from "express";
const tempArray = require("./routes");
const express = require("express");

const app = express();

app.use(express.json());
app.use(tempArray);

app.get("/iwtd", (req: Request, res: Response) => {
  return res.json("test");
});

app.listen(4001, () => {
  console.log("hello");
});
