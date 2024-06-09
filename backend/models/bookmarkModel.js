import { Schema, model } from "mongoose";

const bookmarkSchema = new Schema({
  user: {
    type: {},
    required: [true, "Please, provide the current user!"],
  },
  favoriteBooks: [],
  totalBooks: Number,
});

const BookMark = model("Bookmark", bookmarkSchema);
export default BookMark;
