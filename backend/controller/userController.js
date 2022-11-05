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

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    ruhValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.deleteUser = async (req, res) => {
  const doc = await User.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
