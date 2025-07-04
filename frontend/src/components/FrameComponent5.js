const FrameComponent5 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3rem] box-border max-w-full text-left text-[1.125rem] text-black1 font-body mq750:pb-[2.625rem] mq750:box-border">
      <div className="w-[62rem] flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq1025:flex-wrap">
        <img
          className="w-[25.5rem] relative max-h-full object-cover max-w-full mq1025:flex-1"
          alt=""
          src="/rectangle-3-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[22.938rem] max-w-full mq450:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[0.5rem] max-w-full text-secondary">
            <b className="relative tracking-[0.16em] uppercase inline-block max-w-full">
              Welcome to Meddical
            </b>
            <h1 className="m-0 relative text-[3rem] font-normal font-display-2 text-primary mq450:text-[1.813rem] mq1025:text-[2.375rem]">
              <p className="m-0">Best Care for Your</p>
              <p className="m-0">Good Health</p>
            </h1>
          </div>
          <div className="w-[30.063rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[1rem] max-w-full font-display-3 italic font-normal">
            <div className="flex flex-row items-start justify-start gap-[2.531rem] max-w-full mq450:flex-col mq450:gap-[1.25rem]">
              <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    name="radioGroup-1"
                    checked
                  />
                </div>
                <div className="relative leading-[140%]">
                  A Passion for Healing
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    checked
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[6.375rem]">
                  5-Star Care
                </div>
              </div>
            </div>
            <div className="w-[24.531rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-col">
              <div className="flex flex-row items-start justify-start gap-[0.625rem] ">
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="cursor-pointer m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    checked
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[6.438rem]">
                  All our best
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    checked
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[7.125rem]">
                  Believe in Us
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="cursor-pointer m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    checked
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[7.688rem]">
                  Always Caring
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <input
                    className="m-0 w-[1rem] h-[1rem] relative rounded-31xl bg-secondary"
                    type="radio"
                    checked
                  />
                </div>
                <div className="relative leading-[140%]">
                  A Legacy of Excellence
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem] font-display-3 italic font-normal">
            <div className="self-stretch relative leading-[140%]">
            Our hospital is committed to providing exceptional healthcare to the community. We offer complimentary health checkups for early illness detection and prevention, advanced cardiogram services for accurate heart monitoring, and DNA testing for personalized care. Additionally, our well-equipped blood bank ensures safe and reliable blood transfusions for emergencies, guaranteeing that our patients receive the best possible treatment in critical situations.
            </div>
            <div className="self-stretch relative leading-[140%]">
            Beyond these services, our hospital emphasizes compassionate care and patient-centered approaches. We strive to create a welcoming and supportive environment where every individual feels valued and cared for, reflecting our unwavering commitment to improving the quality of life for all.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
