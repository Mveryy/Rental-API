import { listCategoriesController } from "./../modules/car/useCases/listCategories/index";
import { Router } from "express";
import { createCategoryController } from "../modules/car/useCases/createCategory";
import multer from "multer";
import { importCategoryController } from "../modules/car/useCases/importCategory";

export const categoriesRoutes = Router();

const upload = multer({
	dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
	return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
	return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
	return importCategoryController.handle(request, response);
});
