import {ParkingRouter} from "./routes/parkings.js";
import {NotificationRouter} from "./routes/notifications.js";
import {myPlacesRouter} from "./routes/myPlaces.js";
import express from 'express';
import cors from 'cors';
export const app = express()
app.use(
    cors({
        origin: '*',
        // Allow follow-up middleware to override this CORS for options
        preflightContinue: true,
    }),
);
app.use(express.json())

app.use('/parkings', ParkingRouter)
app.use('/notifications', NotificationRouter)
app.use('/myPlaces', myPlacesRouter)

app.use(express.static('data'));



