import { Request, Response } from "express";
import { Book } from "../models/Book";

interface IResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res
        .status(404)
        .json({ success: false, message: "No Books Found." } as IResponse);
    }
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all Books.",
      data: books,
    } as IResponse);
  } catch (error: any) {
    return res
      .status(500)
      .json({ success: false, message: error.message } as IResponse);
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { name, author, publishYear, description } = req.body;
  try {
    const book = await Book.create({
      author,
      description,
      name,
      publishYear,
    });

    return res.status(201).json({
      success: true,
      message: "Book added successfully.",
      data: book,
    } as IResponse);
  } catch (error: any) {
    return res
      .status(500)
      .json({ success: false, message: error.message } as IResponse);
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, author, publishYear, description } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      {
        name,
        author,
        publishYear,
        description,
      },
      { new: true }
    );

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "No Book Found." } as IResponse);
    }
    return res.status(201).json({
      success: true,
      message: "Book added successfully.",
      data: book,
    } as IResponse);
  } catch (error: any) {
    return res
      .status(500)
      .json({ success: false, message: error.message } as IResponse);
  }
};
