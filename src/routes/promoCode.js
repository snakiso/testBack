import {Router} from "express";
import {promoCode} from "../data/promoCode.js";

export const PromoCodeInfo = Router()

PromoCodeInfo.post('/',  (req, res) => {
    const {promo_code} = req.body
    if(promo_code) {
        let resuslt = promoCode[promo_code]
       if(!resuslt){
           return res.status(200).json({status: false, payload: {message: 'Купон не был найден'}})
       } else{
           return res.status(200).json({status: true, payload: {message: 'Ok', discount: resuslt.discount}})
       }
    }else{
        return res.status(404).json('hello world')
    }
    }
)

PromoCodeInfo.get('/',  (req, res) => {
                return res.status(200).json('hello world')
    }
)