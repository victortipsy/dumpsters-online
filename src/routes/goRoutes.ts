import { Router } from "express";
import { createGO } from "../controls/goControl";

const godRouter = Router();

godRouter.route("/create-god").post(createGO);

export default godRouter;
