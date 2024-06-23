import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, role, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    // converting time to milliseconds
    expiresIn: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token);

  user.password = undefined;
  user.__v = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    role,
    data: {
      user,
    },
  });
};

export const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    createSendToken(newUser, 200, req, res);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) check if the email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select("+password");
    const correct = await user.correctPassword(password, user.password);

    if (!user || !correct) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // 3) If everything ok, send token to user
    createSendToken(user, "authenticated", 200, req, res);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const logout = (req, res) => {
  res.cookie("jwt", "logout", {
    expiresIn: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

export const findUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
