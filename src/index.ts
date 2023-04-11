import express, { Application } from "express";
import { appConfig } from "./app";
import mongoose from "mongoose";
// import { databaseConfig } from "./config/database";
const url = "mongodb://localhost/fAmDO";
const port = 1717;

const app: Application = express();

mongoose.connect(url).then(() => {
  console.log(`database is connected`);
});

appConfig(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
