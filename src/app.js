import {ParkingRouter} from "./routes/parkings.js";
import {NotificationRouter} from "./routes/notifications.js";
 import {myPlacesRouter} from "./routes/myPlaces.js";
import express from 'express';
import cors from 'cors';
import {PromoCodeInfo} from "./routes/promoCode.js";
import {Ticket} from "./routes/Ticket.js";
import {inviteRouter} from "./routes/invite.js";

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
app.use('/promo-code', PromoCodeInfo)
app.use('/parking-tickets/info', Ticket)
app.use('/family/invites', inviteRouter)
//
//


