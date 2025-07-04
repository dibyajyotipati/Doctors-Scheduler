const express = require('express')
const router = express.Router()
const {doctors} = require("../models/doctormodel");
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

const logindoctor = async(req,res) =>{
    const {email,password,department} = req.body
    
    try{
        const doctor = await doctors.login(email,password)
        const token = createToken(doctor._id)
        const id = doctor._id
        res.status(200).json({ id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const signupdoctor = async(req,res) =>{
    const { Name,email, password,phonenumber,department,workingDays,image } = req.body
    try{
        const doctor = await doctors.signup(Name,email,password,phonenumber,department,workingDays,image)
        const token = createToken(doctor._id)
        const id = doctor._id
        res.status(200).json({ id,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

router.post('/login', logindoctor)

router.post('/signup', signupdoctor)

module.exports = router;