
const { create } = require("../model/user.model")
const User = require("../model/user.model")

const jwt = require("jsonwebtoken")

const newtoken = (user) => {
    return jwt.sign({ user }, 'shhhhh');
}

const register = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email}).lean().exec()

        if(user) return res.send("This E-mail is already registered")

        user = await User.create(req.body)

        const token = newtoken(user)

        return res.send({user,token})

    } catch (error) {
        
    }
}
const login = async(req, res)=>{
    try {
        
        let user = await User.findOne({email: req.body.email})

        if(!user) return res.status(404).send("This E-mail is not valid")

        const match = user.cheakpassword(req.body.password)

        if(!match) return res.status(404).send("Password and email do not match")


        const token = newtoken(user)


        return res.send({user,token})



    } catch (error) {
        return res.send({error: error.message})
    }
}

module.exports = {register,login}