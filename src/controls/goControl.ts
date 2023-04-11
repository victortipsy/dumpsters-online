import { Request, Response, NextFunction } from "express";
// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler";
import { HTTPCODE, appError } from "../utils/appError";
import goModel from "../models/goModel";
import stationModel from "../models/stationModel";
import bcrypt from "bcrypt";

export const createGO = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name } = req.body;
    if (!name) {
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "G.O not created",
        })
      );
    }
    const god = await goModel.create({
      name,
      stations: [],
      users: [],
    });
    if (!god) {
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "god not created",
        })
      );
    }

    return res.status(HTTPCODE.CREATED).json({
      message: "god created",
    });
  }
);

export const createStation = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name, phone, address, password, confirmPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!name || !phone) {
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "G.O not created",
        })
      );
    }
    const go = await stationModel.create({
      name,
      phone,
      address,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      email: "",
      users: [],
      requests: [],
      notifications: [],
      feedbacks: [],
    });
    if (!go) {
      next(
        new appError({
          httpCode: HTTPCODE.BAD_REQUEST,
          message: "G.O not created",
        })
      );
    }

    return res.status(HTTPCODE.CREATED).json({
      message: "go created",
    });
  }
);
