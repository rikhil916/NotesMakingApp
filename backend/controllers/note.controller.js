const Notes=require("../models/Notes")

const createNote= async(req,res)=>{
    try{
        const noteData=req.body;
        noteData.createdBy=req.user.id;
        const newNote=new Notes(noteData)
        await newNote.save();
        return res.status(200).json({
            success:true,
            message:"new note created successfully"
        });
    }
    catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
    }
};

const getNotes=async(req,res)=>{
    try{
        const {id}=req.user
        const notes=await Notes.find({createdBy:id})
        if(notes){
            return res.status(201).json({
                success:true,
                notes:notes,
                message:"notes retrieved successfully"
            })
        }
        else{
            return res.status(201).json({
                success:true,
                message:"no notes"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"error"
        })
    }
}


module.exports = {
    createNote,
    getNotes};