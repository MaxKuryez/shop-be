import { Router } from "express";
import { createProduct, getProducts } from "../controllers/products";

const router = Router();

router.post("/", createProduct);

router.get("/", getProducts);

router.patch("/:id");

router.delete("/:id");

export default router;
