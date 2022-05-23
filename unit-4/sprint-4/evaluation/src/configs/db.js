const mongoose= require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://roshan:roshan321@cluster0.nsfl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}