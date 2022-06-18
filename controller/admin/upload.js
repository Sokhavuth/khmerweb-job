// controller/admin/upload.js
import config from '../../config.js'

class Upload{
    constructor(){
        (async () => {
            this.config = await config()
        })()
    }

    async getItem(req,res){
        this.config.pageTitle = 'ទំព័រ Upload'
        this.config.route = '/admin/upload'

        res.render('base',{data:this.config})
    }
}

export default await new Upload()