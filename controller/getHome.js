// controller/getHome.js

export default async (req,res)=>{
    const config = {
        siteTitle: 'Khmer Web Job',
        pageTitle: 'ទំព័រ​ដើម',
        message: 'ស្វាគមន៍​មក​កាន់​ទំព័រ​ដើម!'
    }

    res.render('base', {data:config})
}