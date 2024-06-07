import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please, enter your name or full name"],
  },
  email: {
    type: String,
    required: [true, "Please, enter your email address!"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (email) => {
        const regex =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return regex.test(email);
      },
      message: () => `Please, enter a valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "Please, enter a password!"],
    minLength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please, confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: () => "The passwords does not match!",
    },
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updateAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  // Only run if password was actually modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = model("User", userSchema);
export default User;
