const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = () => {
    return mongoose.connect("mongodb+srv://roshh:rosh1231@cluster0.mb7yf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

const userSchema = new mongoose.Schema({

    first_Name: { type: String, required: true },

    last_Name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true, default:"female" },
    
},{
    versionKey:false,
    timestamps: true
})


const User= mongoose.model("user", userSchema)

//branch schema===================

const branchSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    ifsc:{type:String, required:true},
    micr:{type:Number, required:true}

},{
    versionKey:false,
    timestamps:true,
})

const Branch= mongoose.model("branch", branchSchema);

const masterSchema= new mongoose.Schema({
    balence:{ type: Number, required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
    brach_id:{type:mongoose.Schema.Types.ObjectId, ref:"branch", required:true}
},{
    versionKey:false, 
    timestamps:true
})

const Master = mongoose.model("master", masterSchema);

const savingAccount = new mongoose.Schema({

    account_number:{type:Number, required:true, unique:true},
    balence:{type:Number, required:true},
    intrestRate:{type:Number, required:true},
    master_id:{type:mongoose.Schema.Types.ObjectId, ref:"branch", required:true},

},{
    versionKey:false,
    timestamps:true,
})

const Saving= mongoose.model("saving", savingAccount);

const fixedAccount = new mongoose.Schema({
    account_number:{type:Number, required:true},
    balence:{type:Number, required:true},
    intrestRate:{type:Number, required:true},
    startDate:{type:String, required:true},
    maturityDate:{type:String, required:true},
    master_id:{type:mongoose.Schema.Types.ObjectId,ref:"branch", required:true},
},
{
    versionKey:false,
    timestamps:true,
})



app.get("/user", async(req, res)=>{
    try{
        const user= await User.find().lean().exac();
        return res.send(user)
    }
    catch(error){
        console.log("error:", error);
    }
})

app.post("/user", async(req,res)=>{
    try{
        const user=await User.create(req.body);
        return res.status(201).send(user);

    }
    catch(error){
        return res.status(500).send(error.message);
    }
})

//get by ID===========================================================
app.get("/user/:id", async (req,res)=>{

    try{
        const user = await User.findById(req.params.id).lean().exac();
        return res.status(201).send(user)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.patch("/user/:id", async (req, res)=>{
    try{
        const user= await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exac();
        return res.send(user);

    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.delete("/user/:id", async (req, res)=>{
    try{
        const user= await User.findByIdAndDelete(req.params.id).lean().exac();
        return res.send(user) 
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.delete("/master/:id",async (req, res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id).lean().exac();
        return res.send(user);
    }
    catch(error){

        return res.status(500).send(error.message);
    }
})

app.patch("/master/:id", async(req, res)=>{

    try{
        const user= await User.findByIdAndUpdate(req.params.id,req.body, {new:true}).lean().exac()
        return res.send(user);
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.get("/master/:id", async (req, res)=>{
    try{
        const user= await Master.findById(req.params.id).lean().exac()
        return res.status(201).send(user)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.post("/master", async (req, res)=>{
    try{
        const user= await Master.create(req.body)
        return res.status(201).send(user)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})


app.get("/master", async (req, res)=>{
    try{
        const master= await Master.find().populate("user_id").lean().exac()
        return res.send(master)
        
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

app.listen(4444, async(req,res)=>{
    try{
        await connect();
        console.log("listining on port 4444")
    }
    catch(error){

        console.log("error:", error)
    }
})
