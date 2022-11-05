const express = require("express");

const userController = require("../controller/userController");
const router = express.Router();

router.route("/").get(userController.getUsers).post(userController.createUser);
//   .get(userController.getAllUsers)

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
