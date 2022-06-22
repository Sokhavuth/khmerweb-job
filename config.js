// config.js
import db from './model/conMongoDB.js'

export default async ()=>{
    const config = {}
    const mydb = await db

    const item = await mydb.collection("settings").findOne()
    
    config.siteTitle = item.siteTitle
    config.description = item.description
    config.maxPosts = parseInt(item.maxPosts)
    config.indexPostLimit = parseInt(item.indexPostLimit)
    config.categoryPostLimit = parseInt(item.categoryPostLimit)
    return config
}