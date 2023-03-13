import express, { ErrorRequestHandler } from "express";
import shopRoutes from "./routes/products"
import userRoutes from "./routes/authentication";
import { json } from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3070;

app.use(json());

app.use("/products", shopRoutes);

app.use("/auth", userRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: err.message });
}

app.use(errorHandler);

app.listen(PORT);
