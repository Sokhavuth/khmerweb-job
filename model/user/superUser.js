//model/user/superUser.js
//npm install bcryptjs
import bcrypt from 'bcryptjs'

export default async (req)=>{
    const id = Date.now() + Math.round(Math.random() * 1E9).toString()
    const hashPassword = bcrypt.hashSync('xxxxxxxxxxxxxxxxxxxxxx', 12)

    let user = {
        id: id, 
        title: 'superUser',
        password: hashPassword,
        email: 'superuser@khmerweb.app',
        role: 'Admin',
        thumb: '',
        info: '',
        video: '',
        date: ''
    }

    await req.mydb.collection("users").insertOne(user)
}