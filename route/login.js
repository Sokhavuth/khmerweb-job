//route/login.js
import express from 'express'
const loginRoute = express.Router()

loginRoute.get('/login',async (req,res,next)=>{
    if(req.session.user){
        res.redirect('/admin/job')
    }else{
        const module = await import('../controller/login/getLogin.js')
        module.default(req,res)
    }
})

loginRoute.post('/login',async (req,res,next)=>{
    const module = await import('../controller/login/postLogin.js')
    module.default(req,res)
})

export default loginRoute