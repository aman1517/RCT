const express = require("express");

const Post = require("../model/post.model");

const upload = require("../middleware/fileupload");
const { rmSync } = require("fs");

const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const user = await Post.find().lean().exac();
        return res.send(user);

    } catch (error) {
        return res.send({message: error.message});
    }
})

router.post("",upload.any("image"),async(req, res)=>{
    try {
        let filepath = req.files.map(file=>file.path);
        const user = await Post.create({
            body: req.body,
            likes: req.body.likes, 
            image:filepath, 
            user_id: req.body.user_id
        })
return res.send(user)

    } catch (error) {
        return res.send({message: error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const user=await Post.findById(req.params.id).lean().exac();
    return res.send(user)
    } catch (error) {
        return res.send({message: error.message});
    }
})

router.patch("/:id", async(req,res)=>{
    try {
        const user= await Post.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exac();
       return res.send(user);

    } catch (error) {
        return res.send({message: error.message})
    }
})


router.delete("/:id", async(req, res)=>{
    try {

        const user = await Post.findByIdAndDelete(req.params.id).lean().exac()
        return res.send(user);
        
    } catch (error) {
        return res.send({message: error.message})
    }
})


module.exports=router;
