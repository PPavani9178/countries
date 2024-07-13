const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("../config");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if username or password is missing
    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    // Create a new user object
    const newUser = new User({ username, password });
    
    // Save the new user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // If there's an error, respond with an error message
    console.error("Error registering user:", error);
    res.status(400).json({ error: "Error registering user" });
  }
};
// exports.register = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const newUser = new User({ username, password });
//     console.log(newUser);
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "Error registering user" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY ?? config.jwtSecret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: "Error logging in" });
  }
};
