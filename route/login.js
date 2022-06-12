//route/login.js
import express from 'express'
const loginRoute = express.Router()

loginRoute.get('/',async (req,res,next)=>{
    if(req.session.user){
        res.redirect('/admin/job')
    }else{
        const module = await import('../controller/login/getLogin.js')
        module.default(req,res)
    }
})

loginRoute.post('/',async (req,res,next)=>{
    const module = await import('../controller/login/postLogin.js')
    module.default(req,res)
})

loginRoute.get('/logout',async (req,res,next)=>{
    if(req.session.user){
        req.session.destroy()
        res.redirect('/')
    }else{
        res.redirect('/login')
    }
})

export default loginRoute