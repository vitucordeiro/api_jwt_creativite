import dotenv from 'dotenv'
dotenv.config()


interface IConfig {
    SECRET:any,
    MONGO_URI:any
}
export const config:IConfig = {
    SECRET:process.env.SECRET,
    MONGO_URI: process.env.MONGO_URI
}