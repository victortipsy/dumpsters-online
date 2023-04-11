import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { HTTPCODE, appError } from "../utils/appError";
import stationModel from "../models/stationModel";
import bcrypt from "bcrypt";
import userModel from "../models/userModel";
// import cron from 'node-cron'

export const UsersRegistration = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    const { username, phone, address, password, confirmPassword, stationName } =
      req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const checkPhone = await userModel.findOne({ phone });
    if (checkPhone) {
      next(
        new appError({
          message: "user with this phone exists already",
          httpCode: HTTPCODE.FORBIDDEN,
        })
      );
    }
    const findStation = await stationModel.findOne({ stationName });
    if (findStation) {
      const users = await userModel.create({
        username,
        phone,
        address,
        password: hashedPassword,
        confirmPassword: hashedPassword,
        role: "User",
        email: "",
        station: findStation,
        requests: 0,
      });
      await stationModel.updateOne(
        { id: findStation._id },
        { $push: { users: users } }
      );

      // cron.schedule('0 0 1 * *', async () => {
      //     try {
      //         users.requests = 0;
      //         users.save()
      //     } catch (error) {
      //         console.log("cron:",error)
      //     }
      // })
      return res.status(201).json({
        message: "Successfully registered user",
        data: users,
      });
    } else {
      next(
        new appError({
          message: "could not register user",
          httpCode: HTTPCODE.FORBIDDEN,
        })
      );
    }
  }
);
