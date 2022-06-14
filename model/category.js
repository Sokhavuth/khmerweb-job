// model/category.js

class Category{
    async count(req){
        return await req.mydb.collection('categories').countDocuments()
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

    async getEditItem(req){
        return await req.mydb.collection("categories").findOne({id:req.params.id})
    }

    async postEditItem(req){
        let myquery = {id: req.params.id}
        let newvalue = {$set: {
            title: req.body.title,
            thumb: req.body.thumb,
            date: req.body.datetime
        }}
 
        await req.mydb.collection("categories").updateOne(myquery,newvalue)
    }

    async deleteItem(req){
        await req.mydb.collection("categories").deleteOne({id: req.params.id})
    }

    async paginate(req,amount){
        const page = req.body.page
        return await req.mydb.collection("categories").find().skip(amount*page).sort({date:-1,_id:-1}).limit(amount).toArray()
    }
}

export default await new Category()