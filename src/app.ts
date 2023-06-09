import express, { ErrorRequestHandler } from "express";
import shopRoutes from "./routes/products"
import { json } from "body-parser";

const app = express();

app.use(json());

app.use("/products", shopRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: err.message });
}

app.use(errorHandler);

app.listen(3080);