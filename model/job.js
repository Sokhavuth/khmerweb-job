// model/job.js

class Job{
    async count(req){
        return await req.mydb.collection('jobs').countDocuments()
    }

    async insertItem(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
 
        let newJob = {
            id: id, 
            title: req.body.title,
            content: req.body.content,
            categories: req.body.categories,
            payable: req.body.payable,
            email: req.body.email,
            website: req.body.website,
            thumb: req.body.thumb,
            location: req.body.location,
            postdate: new Date(),
            closedate: req.body.closedate,
            author: req.session.user.id
        }
 
        await req.mydb.collection("jobs").insertOne(newJob)
    }

    async getItem(req,amount){
        return await req.mydb.collection('jobs').find().sort({data: -1,_id: -1}).limit(amount).toArray()
    }

    async getSingleItem(req){
        return await req.mydb.collection('jobs').findOne({id: req.params.id})
    }

    async updateItem(req){
        const myquery = {id:req.params.id}
        let newvalue = {$set: {
            title: req.body.title,
            content: req.body.content,
            categories: req.body.categories,
            payable: req.body.payable,
            email: req.body.email,
            website: req.body.website,
            thumb: req.body.thumb,
            location: req.body.location,
            closedate: req.body.closedate,
        }}
 
        await req.mydb.collection("jobs").updateOne(myquery,newvalue)
    }

    async deleteItem(req){
        const myquery = {id:req.params.id}
        await req.mydb.collection("jobs").deleteOne(myquery)
    }

    async paginateItem(req,amount){
        const page = req.body.page
        return await req.mydb.collection("jobs").find().sort({date:-1,_id:-1}).skip(amount*page).limit(amount).toArray()
    }
}

export default new Job()