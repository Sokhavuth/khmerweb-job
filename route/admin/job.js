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

jobRoute.post('/',async (req,res,next)=>{
    if(req.session.user){
        job.postItem(req,res)
    }else{
        res.redirect('/login')
    }
})

jobRoute.get('/edit/:id',async (req,res,next)=>{
    if(req.session.user){
        job.editItem(req,res)
    }else{
        res.redirect('/login')
    }
})

jobRoute.post('/edit/:id',async (req,res,next)=>{
    if(req.session.user){
        job.updateItem(req,res)
    }else{
        res.redirect('/login')
    }
})

jobRoute.get('/delete/:id',async (req,res,next)=>{
    if(req.session.user){
        job.deleteItem(req,res)
    }else{
        res.redirect('/login')
    }
})

jobRoute.post('/paginate',async (req,res,next)=>{
    if(req.session.user){
        job.paginateItem(req,res)
    }else{
        res.redirect('/login')
    }
})

export default jobRoute