const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
app.use(express.json());
app.use("/api/v1/users", userRouter);
module.exports = app;
