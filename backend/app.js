const express = require("express");

const app = express();
const cors = require('cors');
const userRouter = require("./routes/userRoutes");
app.use(express.json());

app.use(cors());
app.use("/api/v1/users", userRouter);

module.exports = app;
