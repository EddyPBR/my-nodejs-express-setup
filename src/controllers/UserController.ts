import { Request, Response } from "express";
import { UserModel } from "@models/UserModel";
import { ApplicationException } from "@exceptions/ApplicationException";

type UserControllerBody = {
  email: string;
  name: string;
}

class UserController {
	async create(request: Request, response: Response) {
		const { email, name }: UserControllerBody = request.body;

    try {
      const newUser = await UserModel.create({
        email,
        name
      });

      return response.status(202).json(newUser);
    } catch (error) {
      if(error.code === 11000) {
        throw new ApplicationException("User already exists", 403);
      }

      throw new ApplicationException(error.message, 400);
    }
	}
}

export { UserController };
