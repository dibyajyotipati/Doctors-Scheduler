import React, { useState, useEffect,useCallback } from "react";
import Topmost1 from "../../components/Topmost1";
import { useNavigate } from "react-router-dom";
import Footer1 from "../../components/Footer1";
import GroupComponent3 from "../../components/GroupComponent3";
import GroupComponent2 from "../../components/GroupComponent2";
import GroupComponent1 from "../../components/GroupComponent1";
import GroupComponent from "../../components/GroupComponent";
import Spinner from "../../Loader/Spinner";
import DoctorsCard2 from "../../components/DoctorsCard2";
import { useParams } from "react-router-dom";
import { toast, Slide } from "react-toastify";

function Medicines() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let { segment } = useParams();

  const onMeddicalText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);


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
    const patientJSON = sessionStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      navigate("/myinfo");
    }
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      navigate("/appointment");
    }
  }, [navigate]);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_LINKED}/depdoctors`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ department: segment }),
          }
        );
        const json = await response.json();
        if (response.ok) {
          setDoctors(json);
          setLoading(false);
        }
      } catch (error) {
        toast.error(error.message, {
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
    };
    fetchdata();
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <Topmost1 />
      <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[0.662rem] px-[11.625rem] pb-[0.825rem] box-border max-w-full gap-[1.25rem] z-[6] lg:px-10 lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1rem] mq450:box-border mq750:pl-[1rem] mq750:pr-[1rem] mq750:box-border sm:pt-2 text-white text-[1.125rem] font-body">
        <div className="w-full flex flex-col items-start justify-start pt-[0.35rem] px-[0rem] pb-[0rem] box-border">
          <div
            className="mq450:flex mq450:mr-auto mq450:w-8 mq450:flex-col gap-1 mq450:mt-2 h-fit cursor-pointer pt-1"
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
            <div className="absolute bg-lightsteelblue-100 shadow-lg rounded-lg mt-8 z-10">
              <ul className="list-none px-2">
                <li
                  className="p-1 cursor-pointer hover:text-primary"
                  onClick={onHomeTextClick}
                >
                  Home
                </li>
                <li
                  className="p-1 hover:text-primary cursor-pointer"
                  onClick={onAboutUsTextClick}
                >
                  About
                </li>
                <li
                  className="p-1 hover:text-primary cursor-pointer"
                  onClick={onDoctorsTextClick}
                >
                  Doctors
                </li>
                <li
                  className="p-1 hover:text-primary cursor-pointer"
                  onClick={onNewsTextClick}
                >
                  MyInfo
                </li>
                <li
                  className="p-1 hover:text-primary cursor-pointer"
                  onClick={onContactTextClick}
                >
                  Contact
                </li>
              </ul>
            </div>
          )}
          <div className="self-stretch flex flex-row justify-start gap-8 mq750:flex-wrap sm:gap-4 mq450:hidden mb-2">
            <div
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onHomeTextClick}
            >
              Home
            </div>
            <div
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
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
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onContactTextClick}
            >
              Contact
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative min-h-[15.625rem] max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border">
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
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
                {segment.toUpperCase()}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[2.625rem] mq450:box-border">
        <h1 className="m-0 font-normal pb-4 pr-[1.062rem] pl-[1rem] text-[2rem] text-primary font-display-2 inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem] text-center mx-auto">
          Doctors
        </h1>
        {loading ? (
          <Spinner />
        ) : (
            <div className="flex flex-wrap mx-auto px-4 gap-4 items-center justify-center mq450:px-0">
                {Array.isArray(doctors) &&
                  doctors.map((doctor) => (
                    <DoctorsCard2
                      key={doctor.id}
                      doctor={doctor}
                      segment={segment}
                    />
                  ))}
          </div>
        )}
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
  );
}

export default Medicines;
