const express = require("express");
const router = express.Router();
const Patient = require("../models/patientmodel");
const { doctors } = require("../models/doctormodel");
const jwt = require("jsonwebtoken");
const { Resend } = require("resend");
const randomstring = require("randomstring");
const resend = new Resend(process.env.RESEND);
const bcrypt = require("bcryptjs");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

const loginpatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.login(email, password);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'login user'})
};
const patientdata = async (req, res) => {
  const { _id } = req.body;
  try {
    const patient = await Patient.findById(_id)
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'login user'})
};
const reloginpatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const patient = await Patient.findOneAndUpdate({ email: email },{ password: hash },{ new: true });
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email, hash });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const googleloginpatient = async (req, res) => {
  const { email } = req.body;
  try {
    const patient = await Patient.googlelogin(email);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'login user'})
};

const signuppatient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.signup(email, password);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'signup user'})
};
const googlesignuppatient = async (req, res) => {
  const { email } = req.body;
  try {
    const patient = await Patient.googlesignup(email);
    const token = createToken(patient._id);
    const _id = patient._id;
    res.status(200).json({ _id, token, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg:'signup user'})
};

const depdoctors = async (req, res) => {
  const { department } = req.body;
  try {
    const depdoctors = await doctors.find({ department: department });
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const namedoctors = async (req, res) => {
  const { Name } = req.body;
  try {
    const depdoctors = await doctors.find({
      Name: { $regex: Name, $options: "i" },
    });
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const doctordetails = async (req, res) => {
  const { doctor_id } = req.body;
  try {
    const depdoctors = await doctors.findById(doctor_id);
    res.status(200).json(depdoctors);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const otpgenerate = async (req, res) => {
  const { email } = req.body;
  try {
    const otp = randomstring.generate({ length: 4, charset: "numeric" });
    const patient = await Patient.find({ email: email });
    if (!patient) {
      res.status(200).json("No such email in the directory");
    }
    await resend.emails.send({
      from: "MEDDICAL@meddical.online",
      to: `${email}`,
      subject: "Email Verification OTP",
      html: `<html>
      <strong>The OTP is ${otp}</strong>
       <p>
      This OTP is valid for a limited time. Please enter it on the verification page to complete the process.
    </p>
    
    <p>If you did not request this verification, please ignore this email.</p>
    
    <p>Best regards,<br><strong>MEDDICAL</strong></p>
      </html>`,
    });
    res.status(200).json(otp);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const contact = async (req, res) => {
  const { email, name, content,subject } = req.body;
  try {
    const patient = await Patient.find({ email: email });
    if (!patient) {
      res.status(200).json("No such email in the directory");
    }
    await resend.emails.send({
      from: "MEDDICAL@meddical.online",
      to: [`${email}`,"istaprasad.patra@gmail.com"],
      subject: "Your Message Has Been Received - We'll Get Back to You Shortly",
      html: `<html>
      <head>
        <title>Thank You for Reaching Out</title>
      </head>
      <body>
        <div>
          <h2>Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and our team will get in touch with you as soon as possible.</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Your Message:</strong></p>
          <p>${content}</p>
          <p>Best Regards,<br>MEDDICAL</p>
          <p><a href="onboarding@resend.dev">Meddical@gmail.com</a></p>
        </div>
      </body>
      </html>`,
    });
    res.status(200).json("Thanks for your response");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

router.post("/login", loginpatient);
router.post("/data", patientdata);
router.post("/contact", contact);
router.post("/relogin", reloginpatient);
router.post("/otp", otpgenerate);
router.post("/googlelogin", googleloginpatient);
router.post("/depdoctors", depdoctors);
router.post("/doctordetail", doctordetails);
router.post("/namedoctors", namedoctors);
router.post("/signup", signuppatient);
router.post("/googlesignup", googlesignuppatient);

module.exports = router;
