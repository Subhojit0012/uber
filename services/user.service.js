const User = require("../models/user.model");

const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("Allfields are required!");
  }

  const user = new User({
    fullName: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  if (!user) throw new Error("User not created!");

  return user;
};

module.exports = createUser;
