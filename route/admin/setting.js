// route/admin/setting.js
import express from 'express'
const settingRoute = express.Router()
import setting from "../../controller/admin/setting.js"

settingRoute.get('/',async (req,res)=>{
    if(req.session.user){
        setting.getItem(req,res)
    }else{
        res.redirect('/login')
    }
})

settingRoute.post('/',async (req,res)=>{
    if(req.session.user){
        setting.postItem(req,res)
    }else{
        res.redirect('/login')
    }
})

settingRoute.post('/edit/:id',async (req,res)=>{
    if(req.session.user){
        setting.updateItem(req,res)
    }else{
        res.redirect('/login')
    }
})

export default settingRoute