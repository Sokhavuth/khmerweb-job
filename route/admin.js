//route/admin.js
import express from 'express'
const adminRoute = express.Router()

import jobRoute from './admin/job.js'
adminRoute.use('/job',jobRoute)

import categoryRoute from './admin/category.js'
adminRoute.use('/category',categoryRoute)

import uploadRoute from './admin/upload.js'
adminRoute.use('/upload',uploadRoute)

import userRoute from './admin/user.js'
adminRoute.use('/user',userRoute)

export default adminRoute