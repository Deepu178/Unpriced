const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");
const DB = process.env.DATABASE;
const port = process.env.PORT || 8080;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    // console.log(con.connections);
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(`error connecting to database : ${err}`);
  });


const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
