// 1. Import the express
import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectDB } from "./configs/db";
import routes from "./routes";

// 2. Initialize the express
const app: Express = express();
config();

// 3. Define a port
const port = process.env.PORT || 8080;

// Connect DB
connectDB();

// Middlewares
app.use(
  cors({
    origin: process.env.HOST_URL || "*",
  })
);
app.use(express.json())

// APIs
app.use("/api/v1", routes);

// Basic Endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live...!!!");
});

// 4. Listen a port
app.listen(port, () => console.log(`Server is running on port: ${port}`));