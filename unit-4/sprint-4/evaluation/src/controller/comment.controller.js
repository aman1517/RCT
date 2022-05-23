

const express = require("express");

const Comment = require("../model/comment.model");
const { route } = require("./user.controller");

const router = express.Router()


router.get("",async(req,res)=>{

    try {
        const user = await Comment.find().lean().exec()
        return res.send(user)
    } 
    
    
    catch (error) {
        return res.send({message: error.message})
    }
})




router.post("",async(req,res)=>{
    try {
        const user = await Comment.create(req.body)

        return res.send(user)

    } 
    
    
    catch (error) {
        return res.send({message: error.message})
    }
})

module.exports = router;
