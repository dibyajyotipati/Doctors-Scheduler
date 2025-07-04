import { useMemo } from "react";

const FrameComponent6 = ({
  homeAbout,
  aboutUs,
  homeAboutDisplay,
  homeAboutMinWidth,
}) => {
  const homeAboutStyle = useMemo(() => {
    return {
      display: homeAboutDisplay,
      minWidth: homeAboutMinWidth,
    };
  }, [homeAboutDisplay, homeAboutMinWidth]);

  return (
    <section className="self-stretch h-[19.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-left text-[1.125rem] text-primary font-body">
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[4.75rem] px-[11.687rem] box-border relative max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[5.813rem] mq750:pr-[5.813rem] mq750:box-border">
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/rectangle-3@2x.png"
            />
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-500 z-[1]" />
            <img
              className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2] object-cover"
              loading="lazy"
              alt=""
              src="/group-203.svg"
            />
          </div>
        <div className="flex flex-col items-start justify-start z-[3]">
          <div
            className="relative leading-[140%] inline-block min-w-[7.75rem] shrink-0 [debug_commit:1de1738]"
            style={homeAboutStyle}
          >
            {homeAbout}
          </div>
          <div className="h-[3.188rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3rem] font-display-2">
            <h1 className="mt-[-0.25rem] m-0 relative text-inherit font-normal font-inherit shrink-0 [debug_commit:1de1738] mq450:text-[1.813rem] mq1025:text-[2.375rem]">
              {aboutUs}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
