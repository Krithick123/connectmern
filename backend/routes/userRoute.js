const express= require('express');
const router=express.Router();
const User=require('../models/userModel')
router.post('/',async(req,res)=>{
    try {
        const newUser= await User.create(req.body);
        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
})

module.exports=router;