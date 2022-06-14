// route/admin/category.js
import express from "express"
const categoryRoute = express.Router()
import category from '../../controller/admin/category.js'

categoryRoute.get('/',async (req,res,next) => {
    if(req.session.user){
        category.getItem(req,res)
    }else{
        res.redirect('/login')
    }
})

categoryRoute.post('/',async (req,res,next) => {
    if(req.session.user){
        category.postItem(req,res)
    }else{
        res.redirect('/login')
    }
})

categoryRoute.get('/edit/:id',async (req,res,next) => {
    if(req.session.user){
        category.getEditItem(req,res)
    }else{
        res.redirect('/login')
    }
})

categoryRoute.post('/edit/:id',async (req,res,next) => {
    if(req.session.user){
        category.postEditItem(req,res)
    }else{
        res.redirect('/login')
    }
})

categoryRoute.get('/delete/:id',async (req,res,next) => {
    if(req.session.user){
        category.deleteItem(req,res)
    }else{
        res.redirect('/login')
    }
})

categoryRoute.post('/paginate',async (req,res,next) => {
    if(req.session.user){
        category.paginate(req,res)
    }else{
        res.redirect('/login')
    }
})

export default categoryRoute