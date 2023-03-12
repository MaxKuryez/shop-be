"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./routes/products"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/products", products_1.default);
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
};
app.use(errorHandler);
app.listen(3080);
