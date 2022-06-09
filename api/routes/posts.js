const { createBlog, getPostById, getPostAll, updatePost, deletePost } = require("../controllers/posts");
const express = require('express');
const router = express.Router();





router.put("/blog/:_id", updatePost);
router.post("/create", createBlog);
router.get("/blog/:_id", getPostById);
router.get("/blog", getPostAll);
router.delete("/blog/:_id", deletePost);





module.exports = router;