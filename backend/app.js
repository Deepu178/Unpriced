const express = require("express");

const app = express();
//const PORT = 8080;
const cors = require('cors');
const userRouter = require("./routes/userRoutes");
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:80', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use("/api/v1/users", userRouter);

module.exports = app;
