import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Activity} from "../entity/Activity";

export class ActivityController {

    private activityRepository = getRepository(Activity);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.activityRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.activityRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.activityRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let activityToRemove = await this.activityRepository.findOne(request.params.id);
        await this.activityRepository.remove(activityToRemove);
    }

}