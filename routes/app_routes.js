import express from "express";

const appRouter = express.Router();

appRouter.get("/", (req, res) => {
    res.send("Hello World");
})

export default appRouter;