const Blogs = require("../models/blog");

module.exports = {

    //register a new client
    async createBlog(req,res){
        try {
            let blogInfo = {
                Name:req.body.name,
                Title:req.body.title,
                Body:req.body.body,
            };

            console.log(blogInfo);
            const blogs = await Blogs.create(blogInfo);
            res.status(200).send(blogs)
        } catch (error) {
            console.log("this is the error", error);
        }
    },

//get all registered
async getAllBlogs (req,res){
    try {
        let blogs = await Blogs.findAll({})
        res.status(200).json(blogs)

    }catch(err){
        res.status(500).json("Something went wrong");
    }
},

    // get BLOGS by id
    async getBlogById  (req,res) {
        try {
            let id = req.params.Blog_Id
            let blogs = await Blogs.findOne({ where: {Blog_Id :id }})
            res.status(200).send('Blog  succefully by id ')
        
        } catch (error) {
            console.log(error);
        }
            },

 // update BLOG
 async updateBlog (req,res){
    try{
        let id = req.params.Blog_Id
        let blogs = await Blogs.update(req.body,{where:{Blog_Id :id }})
        res.status(200).send('Blod updated succefully')

    } catch (err){
        console.log(err)
    }
},
    // delete user by id
    async deleteBlog (req,res){
        try{
            const id = req.params.Blog_Id
            await Blogs.destroy({where:{Blog_Id:id}})
            res.status(200).send("blog is deleted")

        }catch (err){
            res.status(500).send("Something went wrong while deleting blog",err)

           
        }
    }
}