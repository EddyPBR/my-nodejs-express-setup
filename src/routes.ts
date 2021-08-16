import { Router } from "express";

import { HelloWorldController } from "@controllers/HelloWorldController";
import { ErrorHandlerController } from "@controllers/ErrorHandlerController";

const helloWorld = new HelloWorldController();
const errorHandler = new ErrorHandlerController();

const router = Router();

router.get("/", helloWorld.index);

router.get("/error", errorHandler.index);
router.post("/error", errorHandler.create);

export { router };
