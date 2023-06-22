import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.model'
import { config } from '../config/env'

dotenv.config()

type JwtPayLoad = {
    userId:String
}

export const authToken = async(request:express.Request, response:express.Response, next:express.NextFunction)=>{

    const authorization:any = request.headers.authorization?.split(' ')[1]
    
    if(!authorization){
        throw new Error("Unauthorized")
    }
    
    const {userId} = jwt.verify(authorization, config.SECRET ) as JwtPayLoad

    const user:any = await User.findById({_id:userId})
  
    if(!user){
        throw new Error('User not found')
    }
    const _userId = userId.split(' ')[0]
    response.setHeader('userid', _userId) 


    next()
    
}