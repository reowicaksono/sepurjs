import express from "express";
import { createUser, getAllUsers } from "../controller/UserController.js";

const appRouter = express.Router();

appRouter.get("/user",getAllUsers);
appRouter.post("/user",createUser);
appRouter.get("/",getAllUsers);

export default appRouter;