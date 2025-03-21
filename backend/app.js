const verifyToken=require("./middleware/verifyToken")
const mongoose=require('mongoose');
require('dotenv').config();
const express=require('express');
const userRoute=require("./routes/user.route");
const noteRouter=require("./routes/note.route");
const cors=require("cors");
const server=express();
server.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));
server.options("*", cors()); // Handle preflight requests

server.use(express.json());
server.use("/api/auth/note",noteRouter);


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log(err);
});

server.use("/api/auth",userRoute);
server.get("/protected-route",verifyToken,(req,res)=>{
    console.log(req.user);
    res.send("This is a protected route");
})

server.listen(8080,()=>{
    console.log("Server is running on port 8080");
})

