import express from "express";

import {
  signup,
  login,
  getAllUsers
} from "../controllers/authController";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/users", getAllUsers);

export default router;