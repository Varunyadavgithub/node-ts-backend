import { Router } from "express";
import { addBook, getBooks } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.get("/get-books", getBooks);
bookRouter.post("/add-book", addBook);

export default bookRouter;
