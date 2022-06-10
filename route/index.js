//routes/index.js
import express from 'express'
const indexRoute = express.Router()

indexRoute.get('/',async (req,res,next) =>{
    const module = await import('../controller/front/getHome.js')
    module.default(req,res)
})

export default indexRoute