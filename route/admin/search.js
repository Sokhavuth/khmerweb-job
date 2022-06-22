// route/admin/search.js
import express from "express"
const searchRoute = express.Router()
//import search from '../../controller/admin/search.js'

searchRoute.get('/',async (req,res)=>{
    if(req.session.user){
        search.getItem(req,res)
    }else{
        res.redirect('/login')
    }
})

export default searchRoute