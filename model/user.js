// model/user.js
import bcrypt from 'bcryptjs'

class User{
    async count(req){
        return await req.mydb.collection('users').countDocuments()
    }

    async postItem(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()
        const hashPassword = bcrypt.hashSync(req.body.password, 12)

        let newUser = {
            id: id, 
            title: req.body.title,
            content: req.body.content,
            thumb: req.body.thumb,
            postdate: req.body.datetime,
            role: req.body.category,
            email: req.body.email,
            password: hashPassword,
        }
 
        await req.mydb.collection("users").insertOne(newUser)
    }

    async getItem(req,amount){
        return await req.mydb.collection('users').find().sort({date:-1,_id:-1}).limit(amount).toArray()
    }

    async getSingle(req){
        return await req.mydb.collection('users').findOne({id:req.params.id})
    }

    async updateItem(req){
        const myquery = {id: req.params.id}

        if(req.session.user.password !== req.body.password){
            var hashPassword = bcrypt.hashSync(req.body.password, 12)
        }else{
            var hashPassword = req.body.password
        }

        let newvalue = {$set: {
            title: req.body.title,
            content: req.body.content,
            thumb: req.body.thumb,
            postdate: req.body.datetime,
            role: req.body.category,
            email: req.body.email,
            password: hashPassword,
        }}

        await req.mydb.collection('users').updateOne(myquery,newvalue)
    }

    async deleteItem(req){
        await req.mydb.collection('users').deleteOne({id: req.params.id})
    }

    async paginate(req,amount){
        const page = req.body.page

        return await req.mydb.collection('users').find().sort({date:-1,_id:-1}).skip(amount*page).limit(amount).toArray()
    }
}

export default new User()