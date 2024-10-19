import {Router} from "express";
import json from '../../../myback/src/data/myPlaces.json' assert { type: 'json' };
export const myPlacesRouter = Router()

myPlacesRouter.get('/',  (req, res) => {
        return res.status(200).send(json)
    }
)