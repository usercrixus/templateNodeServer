import { router } from "./Routes/MainRouting";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use("", router);
app.listen(3000);
