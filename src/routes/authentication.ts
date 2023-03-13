import { Router } from "express";
import { register, signIn, getUsers } from "../controllers/authentication";

const router = Router();

router.get("/users", getUsers);

router.post("/signin", signIn);

router.post("/register", register);

router.patch("/:id");

router.delete("/:id");

export default router;
