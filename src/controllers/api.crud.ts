import {Response,Request,NextFunction, response} from 'express'
import User from '../models/user.model'
import Creativite from '../models/creativite.model'
import { date } from 'zod'
export const details = (req:Request,res:Response, next:NextFunction)=>{
    
}

export const getProfile = async(req:Request,res:Response, next:NextFunction)=>{
    const preId = res.getHeaders()['userid']
    const _id = `${preId}`
    const preData:any = await User.findById({_id:_id})
    if(preData == null ){
        res.status(501)
    }
    const {username, email,  } = preData

    res.json({username: username, email:email})
    
}

export const newCreativite = async(req:Request, res:Response, next:NextFunction) =>{
    const {title, content} = req.body
    const preId = res.getHeaders()['userid']
    const _id = `${preId}`
    const preData:any = await User.findById({_id:_id})

    if(preData == null ){
        res.status(501)
    }

    const newCreativite = new Creativite({title:title, content:content, user:_id})
    try{
        await newCreativite.save()
        res.json({title:title, content:content, date:date})
        
    }catch(err){
        res.status(501);
    }
    
}

export const removeCreativite = async(req:Request, res:Response, next:NextFunction)=>{
    const title = req.body
    const preId = res.getHeaders()['userid']
    const _id = `${preId}`

    try{
        await Creativite.findOneAndDelete({title:title, user:_id})
    }catch(err){
        res.status(501);
    }
}