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

    async postItem(req,res){
        const file = req.file
        if(!file){
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
        }

        this.config.pageTitle = 'ទំព័រ​ Upload'
        this.config.route = '/admin/upload'
        this.config.fileUrl = '/uploads/' + file.filename

        res.render('base',{data:this.config})
    }
}

export default await new Upload()