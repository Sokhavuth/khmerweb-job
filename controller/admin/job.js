// controller/admin/job.js
import config from '../../config.js'
import categories from '../../model/category.js'
import jobDB from '../../model/job.js'

class Job{
    constructor(){
        (async () => {
            this.config = await config()
        })()
    }

    async getItem(req,res){
        this.config.pageTitle = 'ទំព័រ​ការងារ'
        this.config.route = '/admin/job'
        this.config.type = 'job'

        this.config.categories = await categories.getAllItem(req)
        this.config.items = await jobDB.getItem(req,this.config.maxPosts)
        this.config.count = await jobDB.count(req)
        res.render('base',{data: this.config})
    }

    async postItem(req,res){
        await jobDB.insertItem(req)

        res.redirect('/admin/job')
    }

    async editItem(req,res){
        this.config.pageTitle = 'ទំព័រ​កែប្រែការងារ'
        this.config.route = '/admin/job'
        this.config.type = 'job'

        this.config.categories = await categories.getAllItem(req)
        this.config.items = await jobDB.getItem(req,this.config.maxPosts)
        this.config.count = await jobDB.count(req)
        this.config.item = await jobDB.getSingleItem(req)

        res.render('base',{data: this.config})
    }

    async updateItem(req,res){
        await jobDB.updateItem(req)

        res.redirect('/admin/job')
    }

    async deleteItem(req,res){
        await jobDB.deleteItem(req)

        res.redirect('/admin/job')
    }

}

export default await new Job()