import express from 'express';
import {ReasonPhrases,StatusCodes,getReasonPhrase,getStatusCode,} from 'http-status-codes';
import  {User}  from '../models/userSchema.js';
import bcrypt from 'bcrypt';

export const registerUser=async(req,res)=>{
    const {name, username, password}=req.body;
    if(!name || !username || !password){
        throw new Error(ReasonPhrases.BAD_REQUEST);
    }
    if(!User.findOne({username})){
        throw new Error('User already exists');
    }

    let hashPass= await bcrypt.hash(password, 10);
    let user=new User({
        name,
        username,
        password: hashPass
    });

   await user.save().then(
    res.send("<h1>Congratulations! User registered.</h1>")
   );
};
