import { RequestHandler } from "express";

import { Product } from "../models/products";

const Products: Product[] = [];

export const createProduct: RequestHandler<Product> = (req, res, next) => {
  const { title, price, description, image, category } = req.body;
  const newProduct = new Product(title, price, description, image, category);

  Products.push(newProduct);

  res.status(201).json({message: "Created product!", product: newProduct});
};

export const getProduct: RequestHandler<Product> = (req, res, next) => {
  res.status(201).json({products: Products});
};
