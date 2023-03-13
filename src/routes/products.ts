import { Router } from "express";
import { createProduct, getProduct } from "../controllers/products";

const router = Router();

router.post("/", createProduct);

router.get("/", getProduct);

router.patch("/:id");

router.delete("/:id");

export default router;