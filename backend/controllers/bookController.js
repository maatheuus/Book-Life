import User from "../models/userModel.js";
import BookMark from "../models/bookmarkModel.js";

export const setFavoriteBooks = async (req, res, next) => {
  try {
    const { favoriteBooks, totalBooks } = req.body;
    const { email } = req.body.user;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    const { _id, name } = user;

    const isAlreadyExist = await BookMark.find({
      "user.email": email,
    });

    if (isAlreadyExist.length !== 0) {
      await BookMark.findOneAndUpdate(
        { "user.email": email },
        {
          favoriteBooks,
          totalBooks,
        }
      );
    } else {
      await BookMark.create({
        user: {
          _id,
          name,
          email,
        },
        favoriteBooks,
        totalBooks,
      });
    }

    const data = await BookMark.find({
      "user.email": email,
    });

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    // console.log(error.message);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const getFavoriteBooks = async (req, res, next) => {
  try {
    const { email } = req.query;

    const user = await BookMark.find({
      "user.email": email,
    });

    if (user.length === 0) return;

    const data = user[0].favoriteBooks;
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
