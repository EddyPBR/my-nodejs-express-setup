import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { HelloWorldController } from "@controllers/HelloWorldController";
import { ErrorHandlerController } from "@controllers/ErrorHandlerController";

const helloWorld = new HelloWorldController();
const errorHandler = new ErrorHandlerController();

const router = Router();

router.get("/", helloWorld.index);

router.get("/error", errorHandler.index);
router.post("/error", celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		age: Joi.number().integer().required().min(18),
	}),
}, { abortEarly: true }),  errorHandler.create);

export { router };
