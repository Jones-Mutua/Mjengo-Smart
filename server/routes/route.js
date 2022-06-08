const express = require('express');
const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blog');
const { createUser, getUserAll, getUserById, updateUser, deleteUser } = require('../controllers/user');




const router = express.Router();



//register routes
router.post("/register", createUser);
router.get("/view-user", getUserAll);
router.get('/user/:id', getUserById);
router.put('user/:id', updateUser);
router.delete('/user/:id', deleteUser);


//routes for blog posts
router.post('/blog', createBlog);
router.get('get-posts', getAllBlogs);
router.get('/blog/:id', getBlogById);
router.put('/blog/:id', updateBlog );
router.delete('/blog/:id', deleteBlog);

module.exports =router;
