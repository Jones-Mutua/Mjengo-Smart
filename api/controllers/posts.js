// const Router = require('express').Router();
const Post = require('../models/posts');


module.exports = {
  async createBlog (req,res){
     try {  
         let blogs = {
                     body: req.body.body,
                     fullname:req.body.fullname,
                     title: req.body.title,
        
         };
 
         console.log(blogs)
         const blog = await Post.create(blogs);
         res.status(200).send(blog);
   
     } catch (error) {
         console.log("this is the error", error);
     }
  },
  //  Getting all Post

  async getPostAll (req,res){
    try {
        let blog = await Post.find({})
        res.status(200).json(blog)

    }catch(err){
        res.status(500).json("Something went wrong");

        // console.log('this is the error',err);

    }
},
// get post by id
async getPostById  (req,res) {
try {
let id = req.params._id
let blog = await Post.findOne({ where: {_id :id }})
res.send(200 ,'Post  succefully retrived by id ')

} catch (error) {
console.log(error);
}
},
 // Updating post
 async updatePost (req,res){
  try{
      let id = req.params._id
      let blog = await Post.update(req.body,{where:{_id :id }})
      res.ssend(200 , "Post updated succefully")

  } catch (err){
      console.log(err)
  }
},

// delete post by id
async deletePost (req,res){
  try{
      const id = req.params._id
      await Post.deleteOne({where:{_id:id}})
      
      res.send(200,"Post Deleted");

  }catch (err){
      res.send(500 ,"Something went wrong while deleting post",err)

     
  }
}
}