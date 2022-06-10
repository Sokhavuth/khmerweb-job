// controller/getHome.js
import config from '../../config.js'

export default async (req,res)=>{
    const setting = await config()
    setting.pageTitle = 'ទំព័រ​ដើម'
    setting.route = '/'

    res.render('base',{data:setting})
}