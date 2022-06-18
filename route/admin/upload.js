// routes/admin/upload.js
// npm install multer
import path from 'path'
import express from 'express'
const uploadRoute = express.Router()
import upload from '../../controller/admin/upload.js'

uploadRoute.get('/',async function(req,res){
    if(req.session.user){
        upload.getItem(req,res)
    }else{
        res.redirect('/admin/login')
    }
})

import multer from 'multer'

const __dirname = path.resolve()
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'static/uploads/'))
    },
    filename: function (req, file, cb) {
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
        cb(null, id + '-' + file.originalname)
    }
})
  
const _upload = multer({storage: storage})

uploadRoute.post('/',_upload.single("uploadFile"),async function(req,res,next){
    if(req.session.user){
        const module = await import('../../controllers/admin/upload/read.js')
        module.default(req,res,next)
    }else{
        res.redirect('/admin/login')
    }
})

export default uploadRoute