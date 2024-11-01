import {Router} from "express";
import {ticket} from "../data/ticket.js";

export const ParkingRouter = Router()

ParkingRouter.get('/',  (req, res) => {
        return res.status(200).json(ticket)
    }
)