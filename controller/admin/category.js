// controller/admin/category.js
import config from '../../config.js'
import categoryDB from '../../model/category.js'

class Category{
    constructor(){
        (async () => {
            this.config = await config()
        })()
    }

    async getItem(req,res){
        this.config = await config()
        this.config.pageTitle = 'ទំព័រ​ជំពូក'
        this.config.route = '/admin/category'
        this.config.type = 'category'

        this.config.count = await categoryDB.count(req)
        this.config.items = await categoryDB.getItem(req,this.config.maxPosts)

        res.render('base',{data:this.config})
    }

    async postItem(req,res){
        await categoryDB.insertItem(req,res)
        res.redirect('/admin/category')
    }

    async getEditItem(req,res){
        this.config = await config()
        this.config.pageTitle = 'ទំព័រ​កែប្រែជំពូក'
        this.config.route = '/admin/category'
        this.config.type = 'category'

        this.config.count = await categoryDB.count(req)
        this.config.items = await categoryDB.getItem(req,this.config.maxPosts)
        this.config.item = await categoryDB.getEditItem(req)

        res.render('base',{data:this.config})
    }

    async postEditItem(req,res){
        await categoryDB.postEditItem(req)

        res.redirect('/admin/category')
    }

    async deleteItem(req,res){
        await categoryDB.deleteItem(req)

        res.redirect('/admin/category')
    }

    async paginate(req,res){
        this.config.route = '/admin/category'
        this.config.type = 'category'
        this.config.items = await categoryDB.paginate(req,this.config.maxPosts)

        res.json(this.config)
    }

}

export default await new Category()