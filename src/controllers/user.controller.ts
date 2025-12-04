import { Request, Response } from "express";
import { IUser, User } from "../models/Users";
import { IResponse } from "./book.controller";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  const { name, email, phone, username, password, role } = req.body;

  try {
    if (!name || !email || !phone || !username || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fileds.",
        data: null,
      } as IResponse);
    }

    let user: IUser | null;

    user = await User.findOne({ email });

    if (user) {
      return res.status(500).json({
        success: false,
        message: "Please login.",
        data: null,
      } as IResponse);
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    user = await User.create({
      name,
      email,
      phone,
      username,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successfull.",
      data: user,
    } as IResponse);
  } catch (error: any) {
    return res
      .status(500)
      .json({ success: false, message: error.message } as IResponse);
  }
};
