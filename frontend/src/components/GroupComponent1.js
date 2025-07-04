const GroupComponent1 = () => {
  return (
    <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.562rem] pb-[3.5rem] pr-[1.375rem] pl-[1.875rem] box-border relative min-w-[13.8rem]  max-w-[14.563rem] text-left text-[1.125rem] text-primary font-body mq450:flex-1">
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
  );
};

export default GroupComponent1;
