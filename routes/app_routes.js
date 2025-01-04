import express from "express";
import { getAllUsers } from "../controller/UserController.js";

const appRouter = express.Router();

appRouter.get("/user",getAllUsers);

export default appRouter;