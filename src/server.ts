import express from 'express'
import router from './router/app.router'
import cors from 'cors'
import dotenv from 'dotenv'
import {connect} from './config/database'

dotenv.config()
const CorsOptions = {
    origin:`http://localhost:${process.env.PORT}` || "http://localhost:3333" 
}

const app = express()
const PORT = process.env.PORT || 3333

connect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors(CorsOptions))
app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log(`Server running at localhost:${PORT}`)
})

