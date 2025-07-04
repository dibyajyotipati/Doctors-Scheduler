import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import Topmost2 from "../components/Topmost2";
import Footer2 from "../components/Footer2";
import MapperFunction1 from "../components/MapperFunction1";
import Aibox from "../components/Aibox";
import Searchbox from "./Searchbox";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";

const Appointment = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onMeddicalText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    //  sync "Services" 
  }, []);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onDoctorsTextClick = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onNewsTextClick = useCallback(() => {
    navigate("/myinfo"); 
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <Topmost2
        propDebugCommit="unset"
        propDebugCommit1="unset"
        onMeddicalText1Click={onMeddicalText1Click}
      />
     <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[0.662rem] px-[11.625rem] pb-[0.825rem] box-border max-w-full gap-[1.25rem] z-[6] lg:px-10 lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1rem] mq450:box-border mq750:pl-[1rem] mq750:pr-[1rem] mq750:box-border sm:pt-4 text-white text-[1.125rem] font-body">
        <div className="w-full flex flex-col items-start justify-start pt-[0.35rem] px-[0rem] pb-[0rem] box-border">
          <div
            className="mq450:flex mq450:mr-auto mq450:w-8 mq450:flex-col gap-1 mq450:mb-2 h-fit cursor-pointer pt-1"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`h-[3px] bg-lightsteelblue-100 rounded ${
                open ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`h-[3px] bg-lightsteelblue-100 rounded ${
                open ? "-rotate-45 -translate-y-1.5 w-full" : "w-3/4"
              }`}
            ></div>
          </div>
          {open && (
             <div className="absolute bg-lightsteelblue-100 shadow-lg rounded-b-lg mt-8 w-full -translate-x-5 z-10 mq4502:hidden h-screen">
             <ul className="list-none px-2 flex flex-col items-center h-full justify-evenly mt-0 text-[2rem] font-display-3">
               <li
                 className="p-1 cursor-pointer hover:text-primary hover:scale-110 transition duration-150"
                 onClick={onHomeTextClick}
               >
                 Home
               </li>
               <li
                 className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150"
                 onClick={onAboutUsTextClick}
               >
                 About
               </li>
               <li
                 className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150"
                 onClick={onDoctorsTextClick}
               >
                 Doctors
               </li>
               <li
                 className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150"
                 onClick={onNewsTextClick}
               >
                 MyInfo
               </li>
               <li
                 className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150"
                 onClick={onContactTextClick}
               >
                 Contact
               </li>
             </ul>
           </div>
          )}
          <div className="self-stretch flex flex-row justify-start gap-8 mq750:flex-wrap sm:gap-4 mq450:hidden ">
            <div
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onHomeTextClick}
            >
              Home
            </div>
            <div
              className="relative inline-block cursor-pointer text-lightsteelblue-100 font-semibold hover:scale-110 transistion duration-100"
              onClick={onAboutUsTextClick}
            >
              About
            </div>
            <div
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onDoctorsTextClick}
            >
              Doctors
            </div>
            <div
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onNewsTextClick}
            >
              MyInfo
            </div>
            <div
              className="relative inline-block cursor-pointer sm:hidden hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onContactTextClick}
            >
              Contact
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative min-h-[15.625rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border mq750:pl-12">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-500 z-[1]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden min-h-full z-[2] object-cover"
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
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.513rem] mq1050:text-[2.375rem] mq750:text-[2.3rem]">
                Book an Appointment
              </h1>
            </div>
          </div>
        </div>
      </section>
      <MapperFunction1 />
      <Aibox />
      <Searchbox />
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
      <Footer2
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText2Click={onAboutUsText2Click}
      />
    </div>
  );
};

export default Appointment;