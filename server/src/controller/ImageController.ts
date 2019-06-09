import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Image} from "../entity/Image";

export class ImageController {

    private imageRepository = getRepository(Image);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.imageRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.imageRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.imageRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let imageToRemove = await this.imageRepository.findOne(request.params.id);
        await this.imageRepository.remove(imageToRemove);
    }

}