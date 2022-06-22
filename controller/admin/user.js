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

        this.config.count = await userDB.count(req)
        this.config.items = await userDB.getItem(req,this.config.maxPosts)

        res.render('base',{data:this.config})
    }

    async postItem(req,res){
        if(req.session.user.role === 'Admin'){
            userDB.postItem(req,res)
        }

        res.redirect('/admin/user')
    }

    async getEditItem(req,res){
        this.config.pageTitle = 'ទំព័រកែប្រែអ្នកប្រើប្រាស់'
        this.config.route = '/admin/user'
        this.config.type = 'user'

        this.config.count = await userDB.count(req)
        this.config.items = await userDB.getItem(req,this.config.maxPosts)
        this.config.item = await userDB.getSingle(req)

        res.render('base',{data:this.config})
    }

    async updateItem(req,res){
        let item = await userDB.getSingle(req)

        if((req.session.user.role === 'Admin')||(req.session.user.id === item.id)){
            await userDB.updateItem(req)
        }
        
        res.redirect('/admin/user')
    }

    async deleteItem(req,res){
        if(req.session.user.role === 'Admin'){
            userDB.deleteItem(req)
        }

        res.redirect('/admin/user')
    }

    async paginate(req,res){
        this.config.route = '/admin/user'
        this.config.type = 'user'

        this.config.items = await userDB.paginate(req,this.config.maxPosts)

        res.json(this.config)
    }
}

export default await new User()