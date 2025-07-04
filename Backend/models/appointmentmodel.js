const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {test}= require('../dbs.js');

const appointmentSchema = new Schema({
     patient_id:{
        type:String,
        required:true
     },
     doctor_id:{
        type:String,
        required:true
     },
     patientname:{
      type:String,
      required:true
     },
      Sex:{
      type:String,
      required:true
     },
     phonenumber:{
      type:Number,
      required:true
     },
     day:{
        type:String,
        required:true
     },
     time:{
        type:String,
        required:true
     },
     delay:{
      type:String,
      default:0
     },
     date:{
      type: Date,
      required:true
     },
     birth:{
      type: Date,
      required:true
     },
     slotno:{
      type:Number,
      required:true
     },
     exact:{
      type:String,
      required:true
     }
},{timestamps:true})

module.exports= test.model('Appointment', appointmentSchema);