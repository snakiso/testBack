import {Router} from "express";
import {promoCode} from "../data/promoCode.js";

export const PromoCodeInfo = Router()

PromoCodeInfo.post('/',  (req, res) => {
    const {promo_code} = req.body
    if(promo_code) {
        let resuslt = promoCode[promo_code]
       if(!resuslt){
           return res.status(404).json({message: 'promo code not found'})
       } else{
           return res.status(200).json(resuslt)
       }
    }

    }
)