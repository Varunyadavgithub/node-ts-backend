import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/book.controller";
import { verifyToken } from "../middlewares/auth";

const bookRouter = Router();

bookRouter.get("/get-books", getBooks);
bookRouter.post("/add-book", verifyToken, addBook);
bookRouter.put("/update-book/:id", verifyToken, updateBook);
bookRouter.delete("/delete-book/:id", verifyToken, deleteBook);

export default bookRouter;
