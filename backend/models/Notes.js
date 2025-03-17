const mongoose=require('mongoose')
const NoteSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})

const Notes=mongoose.model("Notes",NoteSchema);
module.exports=Notes;