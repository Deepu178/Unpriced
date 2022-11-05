const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  // console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
