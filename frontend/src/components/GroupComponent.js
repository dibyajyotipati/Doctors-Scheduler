const GroupComponent = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-start pt-[2.5rem] pb-[4.2rem] pr-[1.125rem] pl-[1.875rem] box-border relative min-w-[13.5rem] max-w-[14.563rem] text-left text-[1rem] text-primary font-body">
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.187rem] z-[1]">
        <img
          className="w-[1.875rem] h-[1.875rem] relative"
          alt=""
          src="/group-177-1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.406rem]">
          <b className="relative text-[1.125rem] uppercase">Working Hours</b>
          <div className="relative leading-[140%] whitespace-nowrap">
            Mon-Sat 09:00-20:00
          </div>
          <div className="relative leading-[140%]">Sunday Emergency only</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
