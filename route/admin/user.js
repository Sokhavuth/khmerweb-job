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

export default userRoute