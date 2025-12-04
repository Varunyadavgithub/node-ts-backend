import { Router } from "express";
import { signup } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/signup", signup);

export default authRouter;
