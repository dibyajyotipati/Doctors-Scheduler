import { useCallback,useState } from "react";
import Topmost1 from "../components/Topmost1";
import { useNavigate } from "react-router-dom";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Testimonials from "../components/Testimonials";
import Footer1 from "../components/Footer1";
import SmallNews from "../components/SmallNews";

const Doctors = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onDoctorsTextClick = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onNewsTextClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/myinfo")
        }
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/appointment")
        }
  }, [navigate]);
  const News = [
    {"date":"9 August, 2024","Author":"Dr. Ye Ella Tian","Title":"Study reveals how physical health impacts mental health via brain pathways","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"100","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20160530095846/ri/310/picture/2016/5/3d_rendered_illustration_-_white_brian-Sebastian_Kaulitzki_658707c45ab24fb7903ee3b7d37ab54d-620x480.jpg"},
    {"date":"3 August, 2024","Author":"Benedette Cuffari","Title":"The Role of Process Validation in Ensuring Consistent Drug Quality","link":"https://www.news-medical.net/life-sciences/The-Role-of-Process-Validation-in-Ensuring-Consistent-Drug-Quality.aspx","views":"112","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20240723080037/ri/310/src/images/Article_Images/ImageForArticle_25069_45496333765138892809-620x480.jpg"},
    {"date":"6 August, 2024","Author":" Danielle Ellis, B.Sc.","Title":"Exploring the Connection Between Gut Health and Meditation","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"153","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_24684_4537237041285888723-150x125.jpg"},
    {"date":"31 July, 2024","Author":"Maria Marco","Title":"From Waste to Taste: The Transformative Power of Fermented Foods","link":"https://www.news-medical.net/news/20240731/From-Waste-to-Taste-The-Transformative-Power-of-Fermented-Foods.aspx","views":"271","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/news/InterviewImageForNews_779662_17183797403028751.jpg"}
  ]

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[1rem] text-black1 font-body">
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
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
                 className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150 text-secondary"
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
              className="relative inline-block cursor-pointer hover:text-secondary hover:scale-110 transistion duration-100"
              onClick={onAboutUsTextClick}
            >
              About
            </div>
            <div
              className="relative inline-block cursor-pointer text-lightsteelblue-100 font-semibold hover:scale-110 transistion duration-100"
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
      <FrameComponent6
        homeAbout="Home / Doctors"
        aboutUs="Our Doctors"
        homeAboutDisplay="unset"
        homeAboutMinWidth="unset"
      />
      <FrameComponent7 />
      <Testimonials />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border relative gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1100:gap-[2rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100" />
          <div className="w-[62rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[28.25rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full z-[1]">
              <b className="relative tracking-[0.16em] uppercase">
                Better information, Better health
              </b>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[2rem] text-primary font-display-2">
                <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq1025:text-[1.625rem]">
                  News
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.25rem] max-w-full z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
              <SmallNews news = {News[0]}/>
              <SmallNews news = {News[1]}/>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
              <SmallNews news = {News[2]}/>
              <SmallNews news = {News[3]}/>
              </div>
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
                <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact
                </h2>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.25rem] text-left text-[1rem] text-primary mq1050:flex-wrap">
            <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.25rem] px-[1.625rem] pb-[3.125rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
              <div className="flex flex-col items-start justify-start gap-[0.925rem] z-[1]">
                <img
                  className="w-[2.513rem] h-[2.388rem] relative"
                  alt=""
                  src="/group-188-2.svg"
                />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                    <b className="relative text-[1.125rem] uppercase inline-block min-w-[7.063rem]">
                      Emergency
                    </b>
                    <div className="relative leading-[140%]">
                      7440086922
                    </div>
                    <a
                      className="relative leading-[140%] text-[inherit] [text-decoration:none]"
                      href="mailto:fildineesoe@gmail.com"
                      target="_blank"
                    >
                      7440086922
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[0.9351] flex flex-row items-start justify-start pt-[2.312rem] px-[1.875rem] pb-[3.125rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] text-lightsteelblue-100 mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-primary" />
              <div className="flex flex-col items-start justify-start gap-[1rem] z-[1]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                  <img
                    className="h-[2.25rem] w-[1.875rem] relative"
                    alt=""
                    src="/group-178-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[0.406rem]">
                  <b className="relative text-[1.125rem] uppercase inline-block min-w-[5.688rem]">
                    Location
                  </b>
                  <div className="relative leading-[120%]">Old Town, Bhubaneswar</div>
                  <a
                    className="relative leading-[140%] text-[inherit] [text-decoration:none]"
                    href="mailto:fildineesoe@gmail.com"
                    target="_blank"
                  >
                    India
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.562rem] pb-[3.5rem] pr-[1.375rem] pl-[1.875rem] box-border relative min-w-[11.563rem] max-w-[14.563rem] text-[1.125rem] mq450:flex-1">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.156rem] z-[1]">
                <img
                  className="w-[2.213rem] h-[1.844rem] relative"
                  loading="lazy"
                  alt=""
                  src="/group-202.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.406rem]">
                  <b className="relative uppercase inline-block min-w-[3.563rem]">
                    Email
                  </b>
                  <div className="relative text-[1rem] leading-[140%] whitespace-nowrap">
                    sanket@gmail.com
                  </div>
                  <div className="relative text-[0.875rem] whitespace-nowrap">
                    istaprasad.patra@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[3.5rem] pb-[3.1rem] pr-[1.125rem] pl-[1.875rem] box-border relative min-w-[11.563rem] max-w-[14.563rem]">
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
      </section>
      <Footer1 />
    </div>
  );
};

export default Doctors;
