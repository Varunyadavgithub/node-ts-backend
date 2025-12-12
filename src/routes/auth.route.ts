import { Router } from "express";
import { signup, login, logout } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/logout", logout);

export default authRouter;
