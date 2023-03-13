import express from "express";
import shopRoutes from "./routes/products"
import userRoutes from "./routes/authentication";
import { errorHandler } from "./controllers/errors";
import { json } from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3070;

app.use(json());

app.use("/products", shopRoutes);

app.use("/auth", userRoutes);

app.use(errorHandler);

app.listen(PORT);
