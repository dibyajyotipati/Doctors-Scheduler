const Footer2 = ({
  onMeddicalTextClick,
  onAppointmentTextClick,
  onDoctorsText1Click,
  onAboutUsText2Click,
}) => {
  return (
    <footer className="self-stretch flex flex-col items-center justify-start pt-[4.375rem] px-[1.25rem] pb-[4.562rem] box-border relative gap-[2.812rem] max-w-full text-left text-[1.125rem] text-white font-body mq450:pt-[2.813rem] mq450:pb-[2.938rem] mq450:box-border mq750:gap-[1.375rem]">
      <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
      <div className="w-[61.938rem] flex flex-row flex-wrap items-start justify-center gap-[2.081rem] max-w-full mq1050:gap-14 sm:scale-110 sm:pb-10 sm:gap-8">
        <div className="flex flex-row gap-8 mq1050:flex-col mq1050:gap-[5.5rem] sm:flex-col sm:gap-10">
        <div className="flex flex-col items-start justify-start gap-[1.125rem] z-[1] text-[2.25rem] text-lightsteelblue-100 font-display-2">
          <h1
            className="m-0 relative text-inherit uppercase font-normal font-inherit cursor-pointer mq450:text-[1.375rem] mq1050:text-[1.813rem]"
            onClick={onMeddicalTextClick}
          >
            Meddical
          </h1>
          <div className="relative text-[1.125rem] leading-[140%] font-body text-white">
            <p className="m-0">Leading the Way in Medical</p>
            <p className="m-0">Execellence, Trusted Care.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[2.437rem] z-[1] mq1050:gap-4">
          <div className="relative font-semibold">Important Links</div>
          <div className="flex flex-col items-start justify-start gap-[0.437rem] text-[1rem]">
            <div
              className="relative leading-[140%] inline-block min-w-[6.438rem] cursor-pointer hover:text-secondary"
              onClick={onAppointmentTextClick}
            >
              Appointment
            </div>
            <div
              className="relative leading-[140%] inline-block min-w-[3.875rem] cursor-pointer hover:text-secondary"
              onClick={onDoctorsText1Click}
            >
              Doctors
            </div>
            <div
              className="relative leading-[140%] inline-block min-w-[4.563rem] cursor-pointer hover:text-secondary"
              onClick={onAboutUsText2Click}
            >
              About
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row gap-8 mq1050:flex-col mq1050:gap-10 sm:flex-col sm:gap:10 sm:pl-5">
        <div className="flex flex-col items-start justify-start gap-[2.437rem] z-[1] mq1050:gap-4">
          <div className="relative font-semibold inline-block min-w-[6.188rem]">
            Contact Us
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.437rem] text-[1rem]">
            <div className="relative leading-[140%]">
              Call: 7440086922
            </div>
            <div className="relative leading-[140%]">
              Email: istaprasad.patra@gmail.com
            </div>
            <div className="relative leading-[140%]">
              Address: Old Town, Bhubaneswar
            </div>
            <div className="relative leading-[140%] inline-block min-w-[6.938rem]">
              Odisha, India
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.437rem] w-fit z-[1] mq450:gap-[1.188rem] mq1050:gap-4">
          <div className="relative font-semibold inline-block min-w-[6.125rem]">
            Newsletter
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0.875rem] px-[0.625rem] relative">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
            <img
              className="h-[1.819rem] w-[1.819rem] absolute !m-[0] top-[0.563rem] right-[0.744rem] object-contain z-[1]"
              alt=""
              src="/vector-6.svg"
            />
            <input
              className="w-4/5 [border:none] [outline:none] font-body text-[1rem] bg-[transparent] h-[1.375rem] relative leading-[140%] text-primary text-left inline-block p-0 z-[1] mq1050:w-full"
              placeholder="Enter your email address"
              type="text"
            />
          </div>
        </div>
      </div>
        </div>
      <img
        className="w-[62rem] relative max-h-full max-w-full z-[1]"
        alt=""
        src="/vector-11.svg"
      />
      <div className="w-[62rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1rem] mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="relative z-[1]">
            © 2024 MEDDICAL All Rights Reserved by PVT-LTD
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[1.25rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
            alt=""
            src="/vector-7.svg"
            onClick={() => (window.location.href = "https://www.linkedin.com/home?originalSubdomain=in")}
            />
          <img
            className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
            alt=""
            src="/vector-8.svg"
            onClick={() => (window.location.href = "https://www.facebook.com/")}
            />
          <img
            className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1]"
            alt=""
            src="/vector-9.svg"
            onClick={() => (window.location.href = "https://www.instagram.com/")}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
