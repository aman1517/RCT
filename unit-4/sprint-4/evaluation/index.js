const express = require("express");
const connect = require("./configs/db");


const userControllers = require("./controller/user.controller")
const postControllers = require("./controller/post.controller")
const commentControllers = require("./controller/comment.controller")
const likeControllers = require("./controller/like.controller")



const {register,login} = require("./controller/auth.controller")


const app = express();
app.use(express.json());


app.use("/user",userControllers)
app.use("/post",postControllers)
app.use("/comnt",commentControllers)
app.use("/like",likeControllers)

app.post("/register",register)
app.post("/login",login)


app.listen(4444, async()=>{
    try {
        await connect();
        console.log("sun raha hu 4444")
        
    }
     catch (error) {
        console.log(error);
    }
});