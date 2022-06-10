// index.js
// npm install express

import express from 'express'
const app = express()

import mydb from './model/conMongoDB.js'
app.use('/',async function(req,res,next){
    req.mydb = await mydb
    next()
})

import path from 'path'
const __dirname = path.resolve()
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')))

import indexRoute from './route/index.js'
app.use('/',indexRoute)
import loginRoute from './route/login.js'
app.use('/',loginRoute)

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`This app is listening to the port ${port}`)
})