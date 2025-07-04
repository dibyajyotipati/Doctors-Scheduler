const FrameComponent4 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.375rem] text-white font-body mq750:pb-[2.625rem] mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-center py-[4rem] px-[1.25rem] box-border relative max-w-full mq450:pt-[2.625rem] mq450:pb-[2.625rem] mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
          <img
            className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-53@2x.png"
          />
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkslateblue-200 z-[1]" />
        </div>
        <div className="w-[41.125rem] flex flex-col items-start justify-start pt-[4.375rem] px-[0rem] pb-[0rem] box-border relative gap-[1.187rem] max-w-full z-[2]">
          <img
            className="w-[2.813rem] h-[1.875rem] absolute !m-[0] top-[0rem] right-[19.125rem]"
            alt=""
            src="/vector-12.svg"
          />
          <div className="self-stretch relative leading-[140%] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
          As your dedicated doctors, we are committed to guiding you through your health journey with expertise and compassion. Trust us to provide personalized care, address your concerns, and work together to achieve the best possible outcomes for your well-being.
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <img
              className="h-[0.063rem] w-[13.844rem] relative"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.687rem]">
            <div className="relative leading-[1.938rem] inline-block min-w-[6.375rem] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
              Doctors
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-white" />
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-lightsteelblue-100" />
              <div className="h-[1.125rem] w-[1.125rem] relative rounded-31xl bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
