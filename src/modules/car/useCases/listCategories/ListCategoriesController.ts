import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { Request, Response } from "express";

export class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	handle(request: Request, response: Response): Response {
		const all = this.listCategoriesUseCase.execute();

		return response.json(all);
	}
}
