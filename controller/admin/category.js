// controller/admin/category.js
import config from '../../config.js'

class Category{
    constructor(){
        (async () => {
            this.config = await config()
        })()
    }

    getItem(req,res){
        this.config.pageTitle = 'ទំព័រ​ជំពូក'
        this.config.route = '/admin/category'
        this.config.type = 'category'

        res.render('base',{data:this.config})
    }
}

export default await new Category()