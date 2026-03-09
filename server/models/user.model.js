import mongoose, { Collection } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User's full name is required"],
    },
    email: {
      type: String,
      required: [true, "User's Email is required"],
      unique: [true, "User's Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "User's password is required"],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "User's admin status is required"],
    },
  },
  {
    timestamps: true,
    collection: "users",
  },
);

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
