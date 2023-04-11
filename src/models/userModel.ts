import mongoose, { Document, model, Schema } from "mongoose";
import { userInterface } from "../interfaces/allInterface";

interface userSchema extends userInterface {}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "please provide your username"],
    },
    phone: {
      type: String,
      required: [true, "please provide your phone number"],
    },
    address: {
      type: String,
      required: [true, "please provide your address"],
    },
    LGA: {
      type: String,
      required: [true, "please provide your LGA"],
    },
    password: {
      type: String,
      required: [true, "please provide your password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "please provide your confirm password"],
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    requests: {
      type: Number,
    },
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    stationName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stations",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = model<userSchema>("users", UserSchema);

export default userModel;
