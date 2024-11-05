import {Router} from "express";
import {invite} from "../data/invites.js";

export const inviteRouter = Router()

inviteRouter.get('/',  (req, res) => {
        return res.status(200).json(invite)
    }
)

