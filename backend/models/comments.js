const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
    imageId : {
        type:String,
        required: true
    },
    comment:{
        type: String,
        max: 500,
        required: true,
    }
    }
)
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment