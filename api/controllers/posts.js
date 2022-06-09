const Router = require('express').Router();
const Post = require('../models/posts');

//create new blog
Router.post('/create', async (req,res) => {
    // if (!Object.keys(req.body).legnth) {
    //     res.status(400).json({
    //         message: "cannot be empty"
    //     })
    // }
    const {title,body,fullname}= (req , res)
    const blog = await  Posts.create({title,body,fullname})
    if  (blog.error) {
        res.status(500).json({
            message: blog.error
        })
    }
    res.status(201).json({
        message: "‘New blog record created’"
      })
    
});

//get all blogs
Router.get('/read-all', async (req, res) => {
    const blog = await Posts.findAll()
    if (blog.error) {
      res.status(500).json({
        message: Error.message,
        blog: blog.data
      })
    }
    res.status(200).json({
        message: 'success',
        blog: blog.data
      }) 
  }),

  //get by id

//   Router.get('/read-one/:_id', async (req, res) ⇒ {
//     const blog = await Posts.findOne(req.params._id)
//     if (blog.error) {
//       res.status(500).json({
//         message: blog.error,
//         blogs: blog.data
//       })
//     }
//     res.status(200).json({
//         message: 'success',
//         blog: blog.data
//       }) 
//   });


  //update

  Router.put('/update/:_id', async (req, res) => {
    if (!Object.keys(req.body).length) {
        res.status(400).json({
        message: 'Request body cannot be empty',
        blog: null
      })
   }
 
   const blog = await Posts.update(req.params._id, req.body)
   if (blog.error) {
     res.status(500).json({
       message: blog.error,
       blog: blog.data
     })
   }
   res.status(200).json({
       message: 'success',
       blog: blog.data
     }) 
 });

 //delete

 Router.delete('/delete/:_id', async (req, res) => {
    const isDeleted = await Posts.deleteOne(req.params._id)
    if (isDeleted.error) {
      res.status(500).json({
        message: isDeleted.error,
      })
    }
    res.status(200).json({
        message: 'Deleted Successfully'
      }) 
  })


module.exports = Router;
