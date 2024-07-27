import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn); // run middleware verifyToken before running shouldBeLoggedIn

router.get("/should-be-admin", shouldBeAdmin);

export default router;