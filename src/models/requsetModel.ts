import mongoose, { Document, model, Schema } from "mongoose";
import { requestInterface } from "../interfaces/allInterface";

interface requestSchema extends requestInterface {}

const RequestSchema: Schema = new Schema(
  {
    requestMessage: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const requestModel = model<requestSchema>("requests", RequestSchema);

export default requestModel;
