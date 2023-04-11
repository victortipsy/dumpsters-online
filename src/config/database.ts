import mongoose from "mongoose";

const DB: string = "mongodb://localhost/fAmDO";

export const databaseConfig = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(DB);
    console.log(`database connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
