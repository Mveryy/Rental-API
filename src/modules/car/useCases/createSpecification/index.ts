import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepositories";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
	specificationsRepository
);
export const createSpecificationController = new CreateSpecificationController(
	createSpecificationUseCase
);
