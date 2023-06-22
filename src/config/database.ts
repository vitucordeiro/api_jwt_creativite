import mongoose from 'mongoose'
import { config } from './env'

export const connect = ()=>{
    mongoose.connect(`${config.MONGO_URI}`,{})

    mongoose.connection.on('connected', ()=>{
        console.log("Mongoose connected")
    })

    mongoose.connection.on('error', (err: string)=>{
        console.log('Mongoose connection error:'+err)
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Mongoose connection disconnected')
    })
}
