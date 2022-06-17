// controller/admin/job.js
import config from '../../config.js'
import categories from '../../model/category.js'
import job from '../../model/job.js'

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
        this.config.items = await job.getItem(req,this.config.maxPosts)
        this.config.count = await job.count(req)
        res.render('base',{data: this.config})
    }

    async postItem(req,res){
        await job.insertItem(req)

        res.redirect('/admin/job')
    }
}

export default await new Job()