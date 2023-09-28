const Comment = require('../models/comments');

async function addComment(req, res) {
  try {
    console.log(req.body)
    const { imageId, comment } = req.body;
    const newComment = new Comment({ imageId, comment });
    await newComment.save();
    res.status(201).json({ message: 'Comment added successfully', newComment });
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
