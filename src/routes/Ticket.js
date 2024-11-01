import {Router} from "express";
import {freePlaces} from "../data/freePlaces.js";

export const Ticket = Router()

Ticket.post('/',  (req, res) => {
        return res.status(200).json(freePlaces)
    }
)