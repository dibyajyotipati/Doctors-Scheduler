const GroupComponent2 = () => {
  return (
    <div className="flex-[0.9351] flex flex-row items-start justify-start pt-[2.212rem] px-[1.875rem] pb-[3.025rem] box-border relative min-w-[13.5rem]  max-w-[14.563rem] text-left text-[1rem] text-lightsteelblue-100 font-body mq450:flex-1">
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
          <div className="relative leading-[130%]">Old Town, Bhubaneswar</div>
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
  );
};

export default GroupComponent2;
