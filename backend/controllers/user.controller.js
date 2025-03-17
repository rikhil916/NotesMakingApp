const User=require("../models/User")
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken")
const createUser=async(req,res)=>{
    const userdata=req.body;
    try{
    const newUser=new User(userdata);
    const salt=await bcrypt.genSalt(10)
    newUser.password=await bcrypt.hash(newUser.password,salt);
    await newUser.save();
    res.status(200).json({
        success:true,
        message:"User created successfully",
    })
}
catch(err){
    res.status(500).json({
        success:false,
        message:"Internal server error",
        err:err
    })
}
};

const loginUser=async(req,res)=>{
    const {username,password}=req.body;
    console.log(username,password);
    try{
        const existingUser=await User.findOne({username});
        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"User does not exist",
            })
        }
        const compare=await bcrypt.compare(password,existingUser.password);
        if(!compare){
            return res.status(400).json({
                success:false,
                message:"Invalid details"
        })
    }
    const token=await jwt.sign({id:existingUser._id},process.env.JWT_SECRET_KEY,{
        expiresIn:"24h"
    })
    return res.status(200).json({
        success:true,
        token,
        message:"user logged in successfully"
    })
}
catch(err)
{
res.status(500).json({
    status:false,
    message:"Invalid details",
    err:err
})
}
    
}

const getUser=async(req,res)=>{
    const {id}=req.user;
    try{
        const user=await User.findOne({_id:id})
        user.password=null;
        if(user){
            return res.status(201).json({
                success:true,
                message:"User retrieved successfully"
            })
        }
        return res.status(401).json({
            status:false,
            message:"User not found"
        })
    }
    catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}
module.exports={
    createUser,loginUser,getUser
}