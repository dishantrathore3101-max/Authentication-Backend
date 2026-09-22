const express=require('express');
const routesNewPost=express.Router();
const mongoose=require('mongoose')
const NoteModel = require('../../db/note.model')
const jwt = require('jsonwebtoken');


routesNewPost.post('/newPost', async (req,res)=>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Invalid user"
        });
    }

    try{
        const decoded=jwt.verify(
            token,
            'mysecretkey'
        )
        console.log(decoded);
        res.status(201).json({
            UserStaus:'valid user',
            message:"post created succesfully",
            user:decoded
        })

        
    }catch(error){
        return res.status(401).json({
            message:'invalid or expire tokken'
        })
    }



    

})
module.exports=routesNewPost