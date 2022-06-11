// controller/admin/job.js
import config from '../../config.js'

class Job{
    constructor(){
        (async () => {
            this.config = await config()
        })()
    }

    getItem(req,res){
        this.config.pageTitle = 'ទំព័រ​ការងារ'
        this.config.route = '/admin/job'
        this.config.type = 'job'

        res.render('base',{data: this.config})
    }
}

export default await new Job()