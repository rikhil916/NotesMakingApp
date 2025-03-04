const User=require("../models/User")
const bcrypt=require("bcryptjs");

const createUser=async(req,res)=>{
    const userdata=req.body;
    const newUser=new User(userdata);
    const salt=await bcrypt.genSalt(10)
    newUser.password=await bcrypt.hash(newUser.password,salt);
    await newUser.save();
    res.send("created user")
}

module.exports={
    createUser
}