"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.createProduct = void 0;
const products_1 = require("../models/products");
const Products = [];
const createProduct = (req, res, next) => {
    const { title, price, description, image, category } = req.body;
    const newProduct = new products_1.Product(title, price, description, image, category);
    Products.push(newProduct);
    res.status(201).json({ message: "Created product!", product: newProduct });
};
exports.createProduct = createProduct;
const getProduct = (req, res, next) => {
    res.status(201).json({ products: Products });
};
exports.getProduct = getProduct;
