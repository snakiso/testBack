import {Router} from "express";
import {freePlaces} from "../data/freePlaces.js";

export const Ticket = Router()

Ticket.get('/', (req, res) => {
    const { parking_ticket, personal_data_usage_accepted, reservation_terms_accepted, lang } = req.query;

    // You can use the query parameters as needed
    console.log("Parking Ticket:", parking_ticket);
    console.log("Personal Data Usage Accepted:", personal_data_usage_accepted);
    console.log("Reservation Terms Accepted:", reservation_terms_accepted);
    console.log("Language:", lang);

    // Return the free places data
    return res.status(200).json(freePlaces);
});