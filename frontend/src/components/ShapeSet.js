const ShapeSet = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[2rem] text-secondary font-display-2 mq750:pb-[2.625rem] mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-center py-[4rem] px-[11.687rem] box-border relative gap-[5.875rem] max-w-full lg:flex-wrap lg:gap-[2.938rem] lg:pl-[5.813rem] lg:pr-[5.813rem] lg:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[1.438rem] mq750:py-[2.625rem] mq750:px-[2.875rem] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
          <img
            className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/rectangle-33@2x.png"
          />
          <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400 z-[1]" />
        </div>
        <div className="w-[25.438rem] flex flex-col items-start justify-start pt-[8.812rem] px-[0rem] pb-[0rem] box-border min-w-[25.438rem] max-w-full lg:flex-1 mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full z-[2] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              Book an Appointment
            </h1>
            <div className="self-stretch relative text-[1rem] leading-[140%] font-body text-black z-[2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start relative gap-[0.062rem] min-w-[19.938rem] max-w-full z-[3] text-[1rem] text-white font-body">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-tl-8xs rounded-tr-none rounded-b-none bg-primary" />
              <input
                className="w-[2.875rem] [border:none] [outline:none] font-body text-[1rem] bg-[transparent] h-[1.375rem] relative leading-[140%] text-white text-left inline-block p-0 z-[1]"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-between pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] gap-[1.25rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-tl-none rounded-tr-8xs rounded-b-none bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[3.563rem] z-[1]">
                Gender
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.563rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[2.75rem] z-[1]">
                Email
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[3.063rem] z-[1]">
                Phone
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-between pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] gap-[1.25rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[2.313rem] z-[1]">
                Date
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.563rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-between pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] gap-[1.25rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[2.438rem] z-[1]">
                Time
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.563rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.062rem] mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-between pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] gap-[1.25rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[3.313rem] z-[1]">
                Doctor
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.563rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-between pt-[1rem] px-[1.25rem] pb-[0.75rem] box-border relative min-w-[9.938rem] gap-[1.25rem] z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
              <div className="relative leading-[140%] inline-block min-w-[5.875rem] z-[1]">
                Department
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.563rem] relative z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[11.875rem] flex flex-row items-start justify-start py-[1rem] px-[1.25rem] box-border relative z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-primary" />
            <div className="relative leading-[140%] inline-block min-w-[4.188rem] z-[1]">
              Message
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[0.875rem] px-[1.25rem] bg-[transparent] self-stretch flex flex-row items-start justify-center relative z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-t-none rounded-b-8xs bg-lightsteelblue-100" />
            <div className="relative text-[1rem] leading-[140%] uppercase font-medium font-body text-primary text-center inline-block min-w-[3.813rem] z-[1]">
              Submit
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShapeSet;
