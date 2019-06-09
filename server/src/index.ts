import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { Subcategory } from "./entity/Subcategory";
import { Image } from "./entity/Image";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);
    
    const s1 = new Subcategory();
    s1.name = "computer science";

    const s2 = new Subcategory();
    s2.name = "number systems";

    const i1 = new Image();
    i1.url = "foo";

    // insert new activities
    await connection.manager.save(connection.manager.create("Activity", {
        name: "Binary Necklace",
        categories: ["technology", "math"],
        subcategories: [s1, s2],
        min_duration: 15,
        age_groups: ["All ages"],
        max_group_size: "Any size",
        image: i1,
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/activity to see results");

}).catch(error => console.log(error));