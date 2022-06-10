//controller/login/postLogin.js
import checkUser from '../../model/user/checkUser.js'
import bcrypt from 'bcryptjs'

export default async (req,res)=>{
    let module = await import('../../config.js')
    let setting = await module.default()
    setting.pageTitle = 'ទំព័រ​ចុះ​ឈ្មោះ'

    let user = await checkUser(req)
      
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            req.session.user = user
            res.redirect('/admin/job')
        }else{
            setting.message = 'ពាក្យ​សំងាត់​មិន​ត្រឹមត្រូវ​ទេ'
            setting.route = '/login'
            res.render('base',{data:setting})
        }
    }else{
        setting.message = 'Email មិន​ត្រឹមត្រូវទេ'
        setting.route = '/login'
        res.render('base',{data:setting})
    }
}