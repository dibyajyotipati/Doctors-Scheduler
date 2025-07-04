import React from 'react'
import Topmost1 from '../../components/Topmost1';
import { useNavigate } from "react-router-dom";
import Footer1 from '../../components/Footer1';
import GroupComponent3 from '../../components/GroupComponent3';
import GroupComponent2 from '../../components/GroupComponent2';
import GroupComponent1 from '../../components/GroupComponent1';
import GroupComponent from '../../components/GroupComponent';

function Bones() {
    const navigate = useNavigate();
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
    <Topmost1 />
    <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] text-left text-[1.125rem] text-white font-body lg:flex-wrap lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border">
    <div className="w-[30.938rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border max-w-full">
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] mq750:flex-wrap">
        <div
          className="relative inline-block min-w-[3.25rem] cursor-pointer"
          onClick={()=>{navigate("/") }}
          >
          Home
        </div>
        <div
          className="flex-1 relative inline-block min-w-[3.25rem] cursor-pointer"
          onClick={()=>{navigate("/about-us") }}
        >
          About us
        </div>
        <div
          className="flex-1 relative inline-block min-w-[3rem] cursor-pointer"
        >
          Services
        </div>
        <div
          className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
          onClick={()=>{navigate("/doctors")}}
        >
          Doctors
        </div>
        <div
          className="relative inline-block min-w-[3.063rem] cursor-pointer"
        >
          News
        </div>
        <div
          className="flex-1 relative inline-block min-w-[2.813rem] cursor-pointer"
          onClick={()=>{navigate("/contact")}}
        >
          Contact
        </div>
      </div>
    </div>
  </section>
  <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative min-h-[15.625rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-500 z-[1]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/group-203.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start max-w-full z-[3]">
            <div className="relative leading-[140%] shrink-0 [debug_commit:1de1738]">
              Home / Appointment
            </div>
            <div className="h-[3.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3rem] font-display-2">
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
                Book an Appointment
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="relative tracking-[0.16em] uppercase whitespace-nowrap">
                Get in touch
              </b>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[1rem] text-[2rem] text-primary font-display-2">
                <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact
                </h1>
              </div>
            </div>
          </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[1.25rem] mq1050:flex-wrap">
            <GroupComponent3 />
            <GroupComponent2 />
            <GroupComponent1 />
            <GroupComponent />
        </div>
        </div>
      </section>
      <Footer1 />
  </div>
  )
}

export default Bones