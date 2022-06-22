// route/admin/user.js
import express from 'express'
const userRoute = express.Router()
import user from '../../controller/admin/user.js'

userRoute.get('/',async (req,res)=>{
    if(req.session.user){
        user.getItem(req,res)
    }else{
        res.redirect('/login')
    }
})

userRoute.post('/',async (req,res)=>{
    if(req.session.user){
        user.postItem(req,res)
    }else{
        res.redirect('/login')
    }
})

userRoute.get('/edit/:id',async (req,res)=>{
    if(req.session.user){
        user.getEditItem(req,res)
    }else{
        res.redirect('/login')
    }
})

userRoute.post('/edit/:id',async (req,res)=>{
    if(req.session.user){
        user.updateItem(req,res)
    }else{
        res.redirect('/login')
    }
})

userRoute.get('/delete/:id',async (req,res)=>{
    if(req.session.user){
        user.deleteItem(req,res)
    }else{
        res.redirect('/login')
    }
})

userRoute.post('/paginate',async (req,res)=>{
    if(req.session.user){
        user.paginate(req,res)
    }else{
        res.redirect('/login')
    }
})

export default userRoute