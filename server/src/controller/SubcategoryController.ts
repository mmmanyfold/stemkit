import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Subcategory} from "../entity/Subcategory";

export class SubcategoryController {

    private subcategoryRepository = getRepository(Subcategory);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.subcategoryRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.subcategoryRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.subcategoryRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let subcategoryToRemove = await this.subcategoryRepository.findOne(request.params.id);
        await this.subcategoryRepository.remove(subcategoryToRemove);
    }

}