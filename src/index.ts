#!/usr/bin/env node
import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hi there 12");
});

app.listen(3005, () => {
  console.log("listening on port 3005");
});
