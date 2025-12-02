"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Import the express
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./configs/db");
const routes_1 = __importDefault(require("./routes"));
// 2. Initialize the express
const app = (0, express_1.default)();
(0, dotenv_1.config)();
// 3. Define a port
const port = process.env.PORT || 8080;
// Connect DB
(0, db_1.connectDB)();
// Middlewares
app.use((0, cors_1.default)({
    origin: process.env.HOST_URL || "*",
}));
// APIs
app.use("/api/v1", routes_1.default);
// Basic Endpoint
app.get("/", (req, res) => {
    res.send("Server is Live...!!!");
});
// 4. Listen a port
app.listen(port, () => console.log(`Server is running on port: ${port}`));
