import express from "express";
import { authMiddleware } from "../middlewares/authmiddleware";
import { getProfile } from "../controller/userController";

const router = express.Router();

router.get("/profile", authMiddleware,getProfile );
 

export default router;


