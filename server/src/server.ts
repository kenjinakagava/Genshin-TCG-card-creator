import { Request, Response } from "express";
const routes = require("./routes/routes");
const getRoutes = require("./routes/getRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(getRoutes);

app.get("/iwtd", (req: Request, res: Response) => {
  return res.json("test");
});

app.listen(4001, () => {
  console.log("hello");
});
