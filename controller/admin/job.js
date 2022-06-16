// controller/admin/job.js
import config from '../../config.js'
import categories from '../../model/category.js'

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

        res.render('base',{data: this.config})
    }
}

export default await new Job()