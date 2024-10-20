import {Router} from "express";

import {notifications} from "../data/notification.js";
export const NotificationRouter = Router()

NotificationRouter.get('/',  (req, res) => {
        return res.status(200).json(notifications)
    }
)