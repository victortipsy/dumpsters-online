import mongoose, { Document, model, Schema } from "mongoose";
import { goInterface } from "../interfaces/allInterface";

interface goSchema extends goInterface {}

const GoSchema: Schema = new Schema(
  {
    stations: [
      {
        type: mongoose.Types.ObjectId,
        ref: "stations",
      },
    ],
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const goModel = model<goSchema>("god", GoSchema);

export default goModel;
