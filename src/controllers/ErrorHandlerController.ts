import { Request, Response } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";

class ErrorHandlerController {
	index(request: Request, response: Response) {
		//dont.exist = "error!"; // throw a unexpected error!

		return response.status(200).json({ message: "Tudo certo por aqui" });
	}

	create(request: Request, response: Response) {
		const { name, age }: { name: string, age: number } = request.body;
  
		const registeredNames = [
			"eddypbr",
			"edvaldo"
		];
  
		if(registeredNames.includes(name)) {
			throw new ApplicationException("Nome já está cadastrado", 400);
		}
  
		return response.status(202).json({ name, age });
	}
}

export { ErrorHandlerController };
