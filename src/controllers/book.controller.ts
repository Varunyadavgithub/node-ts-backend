import { Request, Response } from "express";

export const getBooks = (req: Request, res: Response) => {
  return res.json({ success: false, message: "No Books Found." });
};
