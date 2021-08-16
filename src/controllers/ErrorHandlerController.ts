import { Request, Response } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";

class ErrorHandlerController {
	index(request: Request, response: Response) {
		//dont.exist = "error!"; // throw a unexpected error!

		return response.status(200).json({ message: "Error handler controller okay" });
	}

	create(request: Request, response: Response) {
		const { name, age }: { name: string, age: number } = request.body;
  
		const registeredNames = [
			"eddypbr",
			"edvaldo"
		];
  
		if(registeredNames.includes(name)) {
			throw new ApplicationException("Name already registered", 400);
		}
  
		return response.status(202).json({ name, age });
	}
}

export { ErrorHandlerController };
