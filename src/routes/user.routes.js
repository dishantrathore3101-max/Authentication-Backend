const express=require('express');
const routes=express.Router();
const mongoose=require('mongoose')
const NoteModel = require('../../db/note.model')
const jwt = require('jsonwebtoken');

routes.post('/register',async (req,res)=>{

     const { userid, password, gmail } = req.body
      const userexist=await NoteModel.findOne({
        userid
     })
     
     console.log("Cookies:", req.headers.cookie);

    if(userexist){
        return res.status(409).json({
            message:'user exists'

        })
    }

   
     
    
     const user = await NoteModel.create({
        userid: userid,
        password: password,
        gmail: gmail
    })

   
     const token = jwt.sign(
        { id: user._id },
        'mysecretkey'
    );
    res.cookie("token",token)
     res.json({
        message: 'User created',
        user: req.body,
        id:user._id,
        token:token
    })

})
module.exports = routes