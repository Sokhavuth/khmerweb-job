// controller/admin/setting.js
import config from '../../config.js'
import settingDB from "../../model/setting.js"

class Setting{
    constructor(){
        (async ()=>{
            this.config = await config()
        })()
    }

    async getItem(req,res){
        this.config.pageTitle = 'ទំព័រ Setting'
        this.config.route = '/admin/setting'

        this.config.item = await settingDB.getItem(req)

        res.render('base',{data:this.config})
    }

    async postItem(req,res){
        if(req.session.user.role === 'Admin'){
            settingDB.postItem(req)
        }
        
        res.redirect('/admin/setting')
    }

    async updateItem(req,res){
        if(req.session.user.role === 'Admin'){
            settingDB.updateItem(req)
        }

        res.redirect('/admin/setting')
    }
}

export default await new Setting()