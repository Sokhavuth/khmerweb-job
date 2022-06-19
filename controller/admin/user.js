// controller/admin/user.js
import config from '../../config.js'
import userDB from '../../model/user.js'

class User{
    constructor(){
        (async ()=>{
            this.config = await config()
        })()
    }

    async getItem(req,res){
        this.config.pageTitle = 'ទំព័រអ្នក​ប្រើប្រាស់'
        this.config.route = '/admin/user'
        this.config.type = 'user'


        res.render('base',{data:this.config})
    }

    async postItem(req,res){
        userDB.postItem(req,res)

        res.redirect('/admin/user')
    }
}

export default await new User()