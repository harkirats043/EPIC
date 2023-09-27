// commentController.js

const Comment = require('../models/comments');

async function addComment(req, res) {
  try {
    const { imageId, text } = req.body;
    const comment = new Comment({ imageId, text });
    await comment.save();
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteComment(req, res) {
  try {
    const { id } = req.params;
    const comment = await Comment.findByIdAndDelete(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addComment,
  deleteComment
};
