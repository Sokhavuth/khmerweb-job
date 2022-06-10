// controller/login/getLogin.js
import config from '../../config.js'

export default async (req,res)=>{
    const setting = await config()
    setting.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'
    setting.route = '/login'

    res.render('base',{data:setting})
}