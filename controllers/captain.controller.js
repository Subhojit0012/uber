import { Captain } from "../models/captain.model.js";
import { validationResult } from "express-validator";
import createCaptain from "../services/captain.service.js";

const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() }).status(400);
  }

  const { fullname, email, password, vehicle } = req.body;

  if (!fullname || !email || !password || !vehicle) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isCaptainAlreadyExist = await Captain.findOne({ email }).exec();

  if (isCaptainAlreadyExist) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashPassword = await Captain.hashPassword(password);

  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  if (!captain) {
    return res.status(500).json({ message: "Captain not created" });
  }

  const token = captain.generateAuthToken();

  return res.status(200).json({ captain, token });
};

export { registerCaptain };
