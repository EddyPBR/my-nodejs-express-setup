import type { Request, Response, NextFunction } from "express";
import { isCelebrateError } from "celebrate";
import { ApplicationException } from "@exceptions/ApplicationException";

export function ErrorHandling (
	error: Error,
	request: Request,
	response: Response,
	next: NextFunction
) {
	if(isCelebrateError(error)) {
		const errorDetails = error.details.get("body").details;
		const errorMessages = errorDetails.map((errorDetail) => errorDetail.message.replace(/"/g, ""));

		return response.status(400).json({
			message: errorMessages,
		});
	}

	if (error instanceof ApplicationException) {
		return response.status(error.statusCode).json({ message: error.message });
	}

	return response.status(500).json({
		message: `Erro interno do servidor - ${error.message}`,
	});
}
