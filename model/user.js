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
            date: req.body.datetime,
            role: req.body.category,
            email: req.body.email,
            password: hashPassword,
        }
 
        await req.mydb.collection("users").insertOne(newUser)
    }
}

export default new User()