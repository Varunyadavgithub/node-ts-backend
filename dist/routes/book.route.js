"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookRouter = (0, express_1.Router)();
bookRouter.get("/get-books", (req, res) => {
    return res.json({ success: false, message: "No Books Found." });
});
exports.default = bookRouter;
