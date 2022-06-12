// model/category.js

class Category{
    async count(req){
        const count = await req.mydb.collection('categories').countDocuments()
        return count
    }

    async insertItem(req,res){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
 
        let myCategory = {
            id: id, 
            title: req.body.title,
            thumb: req.body.thumb,
            date: req.body.datetime
        }
 
        await req.mydb.collection("categories").insertOne(myCategory)
    }

    async getItem(req,amount){
        return await req.mydb.collection("categories").find().sort({date:-1,_id:-1}).limit(amount).toArray()
    }
}

export default await new Category()