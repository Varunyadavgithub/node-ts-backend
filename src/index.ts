// 1. Import the express
import express, { Express, Request, Response } from "express";
import {config} from "dotenv";
import cors from "cors";

// 2. Initialize the express
const app: Express = express();
config();

// 3. Define a port
const port = process.env.PORT || 8080;

// Middlewares
app.use(cors({
    origin:process.env.HOST_URL || "*"
}))

// Basic Endpoint
app.get("/",(req:Request,res:Response)=>{
    res.send("Server is Live...!!!");
})

// 4. Listen a port
app.listen(port, () => console.log(`Server is running on port: ${port}`));
