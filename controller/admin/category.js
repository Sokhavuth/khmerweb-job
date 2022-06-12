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
}

export default await new Category()