import {Router} from "express";
import {myPlaces} from '../data/myPlaces.js'
export const myPlacesRouter = Router()

myPlacesRouter.get('/',  (req, res) => {
        return res.status(200).json(myPlaces)
    }
)

