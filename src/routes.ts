import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import { UserController } from "@controllers/UserController";

const userController = new UserController();

const router = Router();

router.post("/user", celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		name: Joi.string().required()
	}),
}, { abortEarly: true }), userController.create);

export { router };
