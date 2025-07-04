import { useNavigate } from "react-router-dom";
import { useCallback,useState } from "react";

const Navbar1 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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

  return (
    <section className="self-stretch bg-primary flex flex-row items-start justify-between pt-[1.062rem] px-[11.625rem] pb-[1.125rem] box-border max-w-full gap-[1.25rem] z-[6] lg:px-10 lg:justify-center mq450:pl-[1.25rem] mq450:pr-[1rem] mq450:box-border mq750:pl-[1rem] mq750:pr-[1rem] mq750:box-border sm:pt-2 text-white text-[1.125rem] font-body">
    <div className="w-full flex flex-col items-start justify-start pt-[0.55rem] px-[0rem] pb-[0rem] box-border">
      <div
        className="mq450:flex mq450:mr-auto mq450:w-8 mq450:flex-col gap-1 mq450:mt-2 h-fit cursor-pointer pt-1"
        onClick={() => setOpen(!open)}
      >
       <div className={`h-[3px] bg-lightsteelblue-100 rounded ${
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
            className="p-1 hover:text-primary cursor-pointer hover:scale-110 transition duration-150 text-secondary"
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
          className="relative hover:text-secondary inline-block cursor-pointer hover:scale-110 transistion duration-100"
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
          className="relative inline-block cursor-pointer text-lightsteelblue-100 font-semibold hover:scale-110 transistion duration-100 "
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
  );
};

export default Navbar1;
