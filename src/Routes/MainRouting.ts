import express from "express";
import { one, two } from "../Controllers/Pages";

export const router = express.Router();

router.get("/one", one);
router.get("/two", two);
