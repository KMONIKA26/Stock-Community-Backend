const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateProfile } = require('../controllers/authController');
const { createPost, getPosts } = require('../controllers/postController');
const { addComment } = require('../controllers/commentController');
const { likePost, unlikePost } = require('../controllers/likeController');
const authMiddleware = require('../middleware/auth');

// Authentication
router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.put('/user/profile', authMiddleware, updateProfile);

// Posts
router.post('/posts', authMiddleware, createPost);
router.get('/posts', getPosts);

// Comments
router.post('/posts/:postId/comments', authMiddleware, addComment);

// Likes
router.post('/posts/:postId/like', authMiddleware, likePost);
router.delete('/posts/:postId/unlike', authMiddleware, unlikePost);

module.exports = router;
