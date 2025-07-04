const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const {test}= require('../dbs.js');

const Schema = mongoose.Schema

const patientSchema = new Schema({
     email:{
        type: String,
        required: true,
        unique: true
     },
     password:{
        type: String,
     },
     occupation:{
        type: String,
     },
     Address:{
        type: String,
     },
     Pincode:{
        type: Number,
     },
     family: [{
      name: {
        type: String,
        required: true
      },
      dob: {
        type: Date,
        required: true
      },
      phonenumber: {
        type: Number,
        required: true
      },
      sex: {
        type: String,
        required: true
      }
    }]
})

patientSchema.statics.signup = async function(email,password){
   if(!email || !password){
      throw Error('All fields must be filled')
   }
   if(!validator.isEmail(email)){
      throw Error('Email is not valid')
   }
   // if(!validator.isStrongPassword(password)){
   //    throw Error('Password not strong enough')
   // }
   const exists = await this.findOne({email})
   if(exists){
      throw Error('Email already in use')
   }
   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)
   const patient = await this.create({email, password: hash})
   return patient
}
patientSchema.statics.googlesignup = async function(email){
   if(!email){
      throw Error('All fields must be filled')
   }
   if(!validator.isEmail(email)){
      throw Error('Email is not valid')
   }
   const exists = await this.findOne({email})
   if(exists){
      throw Error('Email already in use')
   }
   const patient = await this.create({email})
   return patient
}

patientSchema.statics.login = async function(email,password){
   if(!email || !password){
      throw Error('All fields must be filled')
   }
   const patient = await this.findOne({email})
   if(!patient){
      throw Error('Incorrect Email')
   }
   
   const match = await bcrypt.compare(password,patient.password)

   if(!match){
      throw Error('Incorrect password')
   }

   return patient
}
patientSchema.statics.googlelogin = async function(email){
   if(!email){
      throw Error('All fields must be filled')
   }
   const patient = await this.findOne({email})
   if(!patient){
      throw Error('Incorrect Email')
   }

   return patient
}

module.exports= test.model('Patient', patientSchema)