const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    body: {type:String, required:true},
    likes: {type:Number, required:true},
    image: [{type:String, required:true}],
    user_id:{ type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}
},{
    versionKey: false,
    timestamps: true
})

const Post = mongoose.model("post", postSchema);

module.exports = Post;
