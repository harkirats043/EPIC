const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
    imageId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "image",
        required: true
    },
    body:{
        type: String,
        max: 500,
        required: true,
    }
    }
)
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment