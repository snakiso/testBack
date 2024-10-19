import {Router} from "express";
import json from '../../../myback/src/data/freePlaces.json' assert { type: 'json' };
export const ParkingRouter = Router()

ParkingRouter.get('/',  (req, res) => {
        return res.status(200).send(json)
    }
)