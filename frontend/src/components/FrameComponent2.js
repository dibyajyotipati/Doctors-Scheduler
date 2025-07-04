import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent2 = () => {
  const navigate = useNavigate();
  const onButtonClick = useCallback(() => {
      navigate("/about-us")
  }, []);

  return (
    <section className="self-stretch flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[2rem] box-border max-w-full text-left text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border mq450:pb-0">
      <div className="w-full flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border min-h-fit max-w-full mq750:pb-[2rem] mq750:box-border h-fit">
        <div className="self-stretch flex flex-col items-start justify-start py-[10.437rem] px-[11.625rem] box-border relative gap-[2rem] max-w-full mq450:gap-[1rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pt-[6.813rem] mq750:pb-[6.813rem] mq750:box-border mq1050:pl-[5.813rem] mq1050:pr-[5.813rem] mq1050:box-border">
          <img className=" w-full absolute inset-0 h-full opacity-90" src="./home.jpg" loading="lazy"/>
          <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <b className="relative tracking-[0.16em] uppercase z-[5]">
                Caring for Life
              </b>
            </div>
            <h1 className="m-0 relative text-[3rem] font-normal font-display-2 text-primary z-[5] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
              <p className="m-0">Leading the Way</p>
              <p className="m-0">in Medical Excellence</p>
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
            <button
              className="cursor-pointer [border:none] py-[0.812rem] px-[2.187rem] bg-lightsteelblue-100 rounded-31xl flex flex-row items-start justify-start whitespace-nowrap z-[5] hover:bg-lightsteelblue-200 hover:scale-110 transistion duration-100"
              onClick={onButtonClick}
            >
              <div className="relative text-[1rem] font-medium font-body text-primary text-left inline-block min-w-[6.25rem]">
                Our Services
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;