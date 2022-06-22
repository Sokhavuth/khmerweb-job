// model/setting.js

class Setting{
    async postItem(req){
        const id = Date.now() + Math.round(Math.random() * 1E9).toString()

        const settings = {
            id: id,
            siteTitle: req.body.siteTitle,
            description: req.body.description,
            maxPosts: req.body.maxPosts,
            indexPostLimit: req.body.indexPostLimit,
            categoryPostLimit: req.body.categoryPostLimit,
        }

        await req.mydb.collection('settings').insertOne(settings)
    }

    async getItem(req){
        return await req.mydb.collection('settings').findOne()
    }

    async updateItem(req){
        const myquery = {id: req.params.id}
        
        const setting = {$set: {
            siteTitle: req.body.siteTitle,
            description: req.body.description,
            maxPosts: req.body.maxPosts,
            indexPostLimit: req.body.indexPostLimit,
            categoryPostLimit: req.body.categoryPostLimit
        }}

        await req.mydb.collection('settings').updateOne(myquery,setting)
    }
}

export default new Setting()