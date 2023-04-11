import mongoose, { Document, model, Schema } from "mongoose";
import { stationInterface } from "../interfaces/allInterface";

interface stationSchema extends stationInterface {}

const StationSchema: Schema = new Schema(
  {
    stationName: {
      type: String,
      required: [true, "please provide your name"],
    },
    phone: {
      type: String,
      required: [true, "please provide your phone number"],
    },
    address: {
      type: String,
      required: [true, "please provide your location"],
    },
    password: {
      type: String,
      required: [true, "please provide your password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "please provide your password"],
    },
    email: {
      type: String,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    requests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "requests",
      },
    ],
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    feedbacks: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const stationModel = model<stationSchema>("stations", StationSchema);

export default stationModel;
