import {Router} from "express";
import {freePlaces} from "../data/freePlaces.js";

export const ParkingRouter = Router()

ParkingRouter.get('/',  (req, res) => {
        return res.status(200).json(freePlaces)
    }
)