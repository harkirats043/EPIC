
const express = require('express');
const router = express.Router();
const { addComment, deleteComment,getAllComments } = require('../controllers/comments');

// Route for adding a comment
router.post('/comments', addComment);

// Route for deleting a comment
router.delete('/comments/:id', deleteComment);

router.get('/comments/:imageId',getAllComments)
module.exports = router;
