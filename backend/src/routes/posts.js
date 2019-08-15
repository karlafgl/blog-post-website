const { Router } = require('express');
const router = Router();

const {getPosts, createPost, getPost, updatePost, deletePost} = require('../controllers/posts.controller');

router.route('/')
  .get(getPosts)
  .post(createPost)

// router.route('/')
//     .get(getNotes)
//     .post(createNote);

router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost)

module.exports = router;