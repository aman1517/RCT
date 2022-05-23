const express = require("express");

const User = require("../model/user.model");

const router = express.Router();

const {body, validationResult}= require("express-validator");

router.post("", body("firstName").isString().isLength({min:3,max:30}),
body("lastName").isString().isLength({min:3,max:30}),
body("age").isNumeric().custom((value,{req})=>{

    if(req.body.age> 1 && req.body.age<150){
        return true()
    }
    throw new Error ("Age is not valid");

}),

body ("email").isEmail().custom(async(value)=>{
    

    const user = await User.findOne({email:value}).lean().exac()

    if(user){
        return Promise.reject("Email already use");

    }
    return true()
}),

body("profile_img").isLength({min:1}), async(req,res)=>{
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
          return res.status(400).json({error: errors.array()});
      }
      const user=await User.create(req.body);
      return res.send(user);

    } catch (error) {
        return res.send({message: error.message})
    }
})

router.post("/multi", upload.any("profile_img"), async(req,res)=>{
    try {
        
        let filepath= req.files.map(file=>file.path)
        const user =await User.create({

            firstName:req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            profile_img: filepath,
        }) 
          return res.send(user);

    } catch (error) {
        return res.send({message: error.message})
    }
})

router.get("", async (req, res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exac();
        return res.send(user)



    } catch (error) {
        return res.send({message: error.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exac();
        return res.send(user);


    } catch (error) {
        return res.send({message: error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id).lean().exac();
        return res.send(user);


    } catch (error) {
        return res.send({message: error.message})
    }
})

module.exports= router;