//route/admin/job.js
import express from 'express'
const jobRoute = express.Router()
import job from '../../controller/admin/job.js'

jobRoute.get('/',async (req,res,next)=>{
    if(req.session.user){
        job.getItem(req,res)
    }else{
        res.redirect('/login')
    }
})

export default jobRoute