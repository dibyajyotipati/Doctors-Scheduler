import React from "react";
import "./Otpverify.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Slide } from "react-toastify";

function Otpverify() {
  const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [enable,setEnable]=useState(false)
    const [givenotp,setGivenotp]=useState(new Array(4).fill(""))
    const [finalotp,setFinalotp]=useState(0)
    const [sentotp,setSentotp]=useState(0)
    const inputRefs = useRef([])
    useEffect(()=>{
      if(inputRefs.current[0]){
        inputRefs.current[0].focus()
      }
    },[])
    const handleChange=(index,e)=>{
      const value = e.target.value;
      if(isNaN(value)) return;
      const newotp = [...givenotp]
      newotp[index]=value.substring(value.length -1)
      setGivenotp(newotp)
      const totalOtp = newotp.join("")
      setFinalotp(totalOtp)
      if(value && index<3 && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus()
      }
    }
    const handleKeyDown = (index,e)=>{
       if(e.key === "Backspace" && index>0 && !givenotp[index] && inputRefs.current[index-1]){
        inputRefs.current[index-1].focus()
       }
    }
    const handleClick = (index)=>{
      inputRefs.current[index].setSelectionRange(1,1)
      if(index>0 && !givenotp[index-1]){
        inputRefs.current[givenotp.indexOf("")]
      }
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(finalotp === sentotp){
        toast.success('Email verified Successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          });
        navigate("/reset");
        setEmail("");
        setSentotp(0);
        setFinalotp(0)
        setEnable(false)
      }else{
        toast.error("Incorrect OTP", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
    }
    const handleSend = async(e)=>{
      e.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_LINKED}/otp`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({email:email}),
      });
      const json = await response.json();
      if (!response.ok) {
        toast.error("Failed to send otp", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
      if (response.ok) {
        setSentotp(json)
        setEnable(true)
        toast.success('OTP sent Successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          });
      }
    }
    const handleResend = async(e)=>{
      e.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_LINKED}/otp`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({email:email}),
      });
      const json = await response.json();
      if (!response.ok) {
        toast.error("Failed to send otp", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      }
      if (response.ok) {
        setSentotp(json)
        setEnable(true)
        toast.success('OTP sent Successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          });
      }
    }
  return (
    <div className="fullbox">
      <form className="form mq450:mx-1">
        <div className="info">
          <span className="title">OTP Verification</span>
          <p className="description mq450:text-[1.05rem] ">Enter the email in which you have account</p>
        <input
          placeholder="you@example.com"
          className="block w-5/6 px-4 py-3 mt-2 text-zinc-800 bg-white border-1 rounded-lg dark:border-zinc-600 dark:bg-[#a6b8de] dark:text-black focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
          name="email"
          disabled={enable}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        {enable && (
          <>
          <p className="description">Please enter the code we have sent you. </p>
        <div className="inputs">
          {givenotp.map((value,index)=>{
            return(
              <input placeholder="" type="text" value={value} onChange={(e)=>handleChange(index,e)}
              onClick={()=>handleClick(index)} onKeyDown={(e)=>handleKeyDown(index,e)}
              ref={(input)=>(inputRefs.current[index]=input)} />
            )
          })}
        </div>
          </>
        )}
        {!enable ?(<button className="validate" onClick={(e)=>handleSend(e)}>
          Send
        </button>):(
          <>
          <button className="validate" onClick={(e)=>handleSubmit(e)}>
          Verify
        </button>
        <p className="resend">
          You don't receive the code ?<a className="resend-action" onClick={()=>handleResend}>Resend</a>
        </p>
          </>
      )}
        
      </form>
    </div>
  );
}

export default Otpverify;
