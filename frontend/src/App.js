import React from "react";
import { Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppointmentBox from "./pages/AppointmentBox";
import Department from "./pages/departments/DepartmentDynamic";
import UserView from "./pages/UserView";
import Reschedule from "./pages/reschedule";
import Otpverify from "./pages/Otpverify";
import Reset from "./pages/Reset";
import Userinfo from "./pages/Userinfo";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/userinfo" element={<Userinfo />} />
      <Route path="/verify" element={<Otpverify />} />
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myinfo" element={<UserView />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/appointment-box" element={<AppointmentBox />} />
      <Route path="/dynamic/:segment" element={<Department />} />
      <Route path="/reschedule" element={<Reschedule />} />
    </Routes>
  );
}

export default App;
