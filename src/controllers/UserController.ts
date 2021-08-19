import { Request, Response } from "express";
import { CreateUserService } from "@services/CreateUserService";

type UserRequestBody = {
  email: string;
  name: string;
}

class UserController {
	async create(request: Request, response: Response) {
    const { name, email }: UserRequestBody = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email });

    return response.json(user);
  }
}

export { UserController };
