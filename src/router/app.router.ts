import * as express from 'express'
import path from 'path'
const app = express
const router = app.Router()
import bodyParser from 'body-parser'

router.use(app.json())
router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())


import { signIn, signUp } from '../controllers/api.account'
import { authToken} from '../middlewares/authToken'
import { getProfile, removeCreativite } from '../controllers/api.crud'
import { newCreativite } from '../controllers/api.crud'


router.get('/',async (request:express.Request,response:express.Response, err)=>{

    if(response.status(200)){
        response.sendFile(path.resolve("src/views/index.html"))}
    else{
        const error = new Error(`Error at router GET '/'`)
        response.send(402).json(error)}
        
})

//API - Authenticate with JWT and MongoDB 

router.post('/login',signIn)

router.post ('/register',signUp) 

//Private router - Authenticated with Token gived by JWT Signature and sended under the Bearer

router.get('/profile',authToken, getProfile)
router.post('/creativite/new', authToken, newCreativite)

router.post('/creativite/remove', authToken, removeCreativite)




//default router

router.get('*', (request:express.Request, response:express.Response)=>{
    response.json('Unauthorized')

})

export default router