import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { ErrorHandling } from "@middlewares/ErrorHandling";
import { connection } from "@database/connection";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(ErrorHandling);

connection.create();

export { app };
