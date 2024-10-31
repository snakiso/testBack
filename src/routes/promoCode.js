import {Router} from "express";
import {promoCode} from "../data/promoCode.js";

export const PromoCodeInfo = Router()

PromoCodeInfo.post('/',  (req, res) => {
    const {promo_code} = req.body
    let res
    if(promo_code) {
       res = promoCode[promo_code]
       if(!res){
           return res.status(404).json({message: 'promo code not found'})
       } else{
           return res.status(200).json(res)
       }
    }

    }
)