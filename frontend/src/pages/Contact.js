import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Topmost2 from "../components/Topmost2";
import NewsSection from "../components/NewsSection";
import Footer2 from "../components/Footer2";
import { useState } from "react";
import { toast, Slide } from "react-toastify";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent from "../components/GroupComponent";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !content) {
      toast.error("Fill all the fields !", {
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
    const response = await fetch(`${process.env.REACT_APP_LINKED}/contact`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        content: content,
        subject: subject,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      toast.error(json, {
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
      toast.success("Thank you for your response", {
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
      setName("");
      setEmail("");
      setSubject("");
      setContent("");
    }
  };

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

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <Topmost2 onMeddicalText1Click={onMeddicalText1Click} />
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
            <div className="absolute bg-lightsteelblue-100 shadow-lg rounded-b-lg mt-12 w-full -translate-x-5 z-10 mq4502:hidden h-screen">
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
                  className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150 text-secondary"
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
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onAboutUsTextClick}
            >
              About
            </div>
            <div
              className="relative inline-block cursor-pointer sm:hidden hover:text-secondary hover:scale-110 transistion duration-100"
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
              className="relative inline-block cursor-pointer text-lightsteelblue-100 font-semibold hover:scale-110 transistion duration-100"
              onClick={onContactTextClick}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.875rem] mq750:gap-4 sm:translate-y-1">
          <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] mq750:hidden mq450:flex">
            <style jsx>{`
              @keyframes blink {
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              .animate-blink {
                animation: blink 1s infinite;
              }
            `}</style>

            <input
              className="m-0 w-[1.25rem] h-[1.25rem] relative mq750:w-4 mq750:h-4 animate-blink"
              type="radio"
              checked
            />
          </div>
          <button
            className="cursor-pointer [border:none] py-[0.812rem] px-[2.187rem] mq750:px-4 bg-lightsteelblue-100 rounded-31xl flex flex-row items-start justify-start hover:bg-lightsteelblue-200 hover:scale-110 transistion duration-200"
            onClick={onButtonClick}
          >
            <div className="relative text-[1rem] font-medium font-body text-primary text-left inline-block min-w-[6rem] mq750:w-fit mq750:text-[0.8rem] mq750:min-w-8">
              Appointment
            </div>
          </button>
        </div>
      </section>
      <section className="self-stretch h-[19.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border mq1100:px-36">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-500 z-[1]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2] object-cover"
              loading="lazy"
              alt=""
              src="/group-203.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start z-[3]">
            <div className="relative leading-[140%] shrink-0 [debug_commit:1de1738]">
              Home / Contact
            </div>
            <div className="h-[3.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3rem] font-display-2">
              <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1025:text-[2.375rem]">
                Our Contacts
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-secondary font-body mq1100:pb-[2.625rem] mq1100:box-border mq750:pb-[1.688rem] mq750:box-border mq1100:px-4 mq1025:px-2">
        <div className="w-[90%] mq1050:w-full flex flex-col items-start justify-center gap-[4rem] max-w-full mq750:gap-[1rem] mq1025:gap-[2rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2536092797986!2d85.8388752746941!3d20.2483142141271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a731afd1734d%3A0xc503db3a9d1d0a54!2sShree%20Hospitals!5e0!3m2!1sen!2sin!4v1723378430377!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.25rem] max-w-full mq1025:gap-3">
            <div className="flex-1 flex flex-col items-center justify-center gap-[2rem] lg:min-w-[390px] max-w-full mq750:gap-[1rem] min-w-[550px] mq450:min-w-[310px]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <b className="relative tracking-[0.16em] uppercase">
                  Get in touch
                </b>
                <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary text-center inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1025:text-[1.625rem] pl-4">
                  Contact
                </h1>
              </div>
              <div className="self-stretch rounded-8xs bg-lightsteelblue-100 flex flex-col items-start justify-start gap-[0.062rem] max-w-[620px] mx-auto">
                <div className="self-stretch h-[24.25rem] relative rounded-8xs bg-lightsteelblue-100 hidden" />
                <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq450:flex-wrap">
                  <input
                    className="w-full [border:none] [outline:none] bg-primary h-[3.125rem] flex-1 rounded-tl-8xs rounded-tr-none rounded-b-none flex flex-row items-start justify-start py-[0.875rem] px-[1.25rem] box-border font-body text-[1rem] text-white min-w-[9.875rem] z-[1]"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full [border:none] [outline:none] bg-primary h-[3.125rem] flex-1 rounded-tl-none rounded-tr-8xs rounded-b-none flex flex-row items-start justify-start pt-[0.937rem] px-[1.25rem] pb-[0.812rem] box-border font-body text-[1rem] text-white min-w-[9.875rem] z-[1]"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-primary self-stretch h-[3.125rem] flex flex-row items-start justify-start pt-[0.937rem] px-[1.25rem] pb-[0.812rem] box-border font-body text-[1rem] text-white min-w-[15.625rem] z-[1]"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="[border:none] bg-primary h-[14.688rem] w-auto [outline:none] self-stretch flex flex-row items-start justify-start py-[0.937rem] px-[1.25rem] box-border font-body text-[1rem] text-white z-[1]"
                  placeholder="Message"
                  rows={12}
                  cols={24}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <button
                  className="cursor-pointer [border:none] pt-[0.937rem] pb-[1rem] pr-[1.25rem] pl-[1.312rem] bg-lightsteelblue-100 self-stretch rounded-t-none rounded-b-8xs flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-lightsteelblue-200"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="h-[3.125rem] w-[30.375rem] relative rounded-t-none rounded-b-8xs bg-lightsteelblue-100 hidden max-w-full" />
                  <div className="relative text-[1rem] uppercase font-medium font-body text-primary text-center inline-block min-w-[3.813rem] z-[1]">
                    Submit
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-center gap-[1.25rem] min-w-[470px] mq750:min-w-[470px] max-w-full text-primary mq750:flex-wrap mq1125:gap-2 mq450:min-w-[270px]">
              <div className="flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.438rem] mq1125:gap-2 mq750:flex-wrap ">
                <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.25rem] px-[1.625rem] pb-[3.125rem] box-border relative min-w-[13.5rem]  max-w-[14.563rem] text-left text-[1rem] text-primary font-body mq450:flex-1">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100 pl-4" />
                  <div className="flex flex-col items-start justify-start gap-[0.925rem] z-[1]">
                    <img
                      className="w-[2.513rem] h-[2.388rem] relative shrink-0 [debug_commit:1de1738]"
                      alt=""
                      src="/group-188-2.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
                      <div className="flex flex-col items-start justify-start gap-[0.406rem] shrink-0 [debug_commit:1de1738]">
                        <b className="relative text-[1.125rem] uppercase inline-block min-w-[7.063rem]">
                          Emergency
                        </b>
                        <div className="relative leading-[140%]">
                          7440086922
                        </div>
                        <div className="relative leading-[140%] text-[inherit] [text-decoration:none]">
                          7440086922
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent1 />
              </div>
              <div className="flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.438rem] text-lightsteelblue-100 mq1125:gap-2 mq750:flex-wrap">
                <GroupComponent2 />
                <div className="flex-1 flex flex-row items-start justify-start pt-[2.5rem] pb-[4.2rem] pr-[1.125rem] pl-[1.875rem] box-border relative min-w-[13.5rem] max-w-[14.563rem] text-left text-[1rem] text-primary font-body mq1125:pb-[2.8rem] mq1025:pb-[4.2rem]">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] z-[1]">
                    <img
                      className="w-[1.875rem] h-[1.875rem] relative"
                      alt=""
                      src="/group-177-1.svg"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.406rem]">
                      <b className="relative text-[1.125rem] uppercase">
                        Working Hours
                      </b>
                      <div className="relative leading-[140%] whitespace-nowrap">
                        Mon-Sat 09:00-20:00
                      </div>
                      <div className="relative leading-[140%]">
                        Sunday Emergency only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsSection />
      <Footer2
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onAboutUsText2Click={onAboutUsText2Click}
      />
    </div>
  );
};

export default Contact;
