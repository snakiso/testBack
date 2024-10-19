import {Router} from "express";
import json from '../data/myPlaces.json'
export const myPlacesRouter = Router()

myPlacesRouter.get('/',  (req, res) => {
        return res.status(200).send(json)
    }
)

