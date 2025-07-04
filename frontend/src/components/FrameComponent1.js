import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onLinkButtonContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body">
      <div className="w-[62rem] flex flex-col items-start justify-start gap-[3.812rem] max-w-full mq750:gap-[0.938rem] mq1050:gap-[1.875rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[41.125rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[0.937rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full">
                <div className="w-[29.563rem] flex flex-col items-end justify-start gap-[0.5rem] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.375rem]">
                    <b className="relative tracking-[0.16em] uppercase">
                      Welcome to Meddical
                    </b>
                  </div>
                  <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                    A Great Place to Receive Care
                  </h1>
                </div>
              </div>
              <div className="self-stretch relative text-[1rem] leading-[140%] text-black font-display-3 italic font-normal">
              Welcome to our hospital, where your health and well-being are our top priorities. We are here to provide you with compassionate care and exceptional medical services.
              </div>
            </div>
            <div className="w-[39.113rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1rem]">
              <div
                className="flex flex-row items-start justify-start gap-[0.625rem] cursor-pointer hover:scale-110 transistion duration-100"
                onClick={onLinkButtonContainerClick}
              >
                <img
                  className="h-[0.625rem] w-[0.675rem] relative object-contain hidden"
                  alt=""
                  src="/vector1.svg"
                />
                <div className="relative leading-[140%] inline-block min-w-[5.563rem] whitespace-nowrap text-secondary hover:text-blue-600">
                  Learn More
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.675rem] h-[0.625rem] relative"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[15.625rem] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/group-183.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
