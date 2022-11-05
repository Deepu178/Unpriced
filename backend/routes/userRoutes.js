const express = require("express");
var bodyParser = require("body-parser");

// var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const userController = require("../controller/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.getUsers)
  .post(urlencodedParser, userController.createUser);
//   .get(userController.getAllUsers)

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
