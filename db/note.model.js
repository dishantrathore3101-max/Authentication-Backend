const mongoose=require('mongoose');
const noteschema=new mongoose.Schema({
    userid:{
        type:String,
        unique:true},
    gmail:String,
    password:String
})

const NoteModel=mongoose.model("Note",noteschema);

module.exports=NoteModel