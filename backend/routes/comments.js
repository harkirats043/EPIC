// commentRoutes.js

const express = require('express');
const router = express.Router();
const { addComment, deleteComment } = require('../controllers/comments');

// Route for adding a comment
router.post('/comments', addComment);

// Route for deleting a comment
router.delete('/comments/:id', deleteComment);

module.exports = router;
