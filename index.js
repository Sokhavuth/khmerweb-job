// index.js
// npm install express
// npm install express-session
// npm install connect-mongo

import express from 'express'
const app = express()

import mydb from './model/conMongoDB.js'
app.use('/',async function(req,res,next){
    req.mydb = await mydb
    next()
})

import dotenv from 'dotenv'
dotenv.config()
import session from 'express-session'
import MongoStore from 'connect-mongo'
app.use(session({
  store: MongoStore.create({mongoUrl:process.env.DATABASE_URI}),
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

import path from 'path'
const __dirname = path.resolve()
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended:false}))

import indexRoute from './route/index.js'
app.use('/',indexRoute)
import loginRoute from './route/login.js'
app.use('/login',loginRoute)
import adminRoute from './route/admin.js'
app.use('/admin',adminRoute)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`This app is listening to the port ${port}`)
})

export default app