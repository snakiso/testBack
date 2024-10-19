import {Router} from "express";
import json from '../../../myback/src/data/notification.json' assert { type: 'json' };
export const NotificationRouter = Router()

NotificationRouter.get('/',  (req, res) => {
        return res.status(200).send(json)
    }
)