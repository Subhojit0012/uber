import {User} from "../models/user.model.js";

const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("Allfields are required!");
  }

  const user = await User.create({
    fullName: {
      firstname: firstname,
      lastname: lastname,
    },
    email: email,
    password: password,
  });

  if (!user) return console.log("User model not created!");

  return user;
};
export default createUser;
