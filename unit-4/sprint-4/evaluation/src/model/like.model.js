const mongoose= require("mongoose");

const likeSchema = new mongoose.Schema({
    post_id:{type:mongoose.Schema.Types.ObjectId, ref:"post", required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true},
});

const Like = mongoose.model("like", likeSchema);

module.exports= Like;