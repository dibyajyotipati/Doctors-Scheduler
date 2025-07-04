import { useMemo } from "react";

const Topmost2 = ({
  propDebugCommit,
  propDebugCommit1,
  onMeddicalText1Click,
}) => {
  const groupInputStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDivStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <header className="self-stretch flex flex-row items-start justify-center pt-[1.187rem] px-[1.25rem] pb-[1.112rem] box-border sticky gap-[11rem] top-[0] z-[99] max-w-full text-left text-[2.25rem] text-primary font-display-2 mq450:gap-[1.375rem] mq750:gap-[2.75rem] mq1050:gap-[5.5rem] mq750:px-[1rem] mq450:px-[1.25rem]">
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-white" />
      <h1
        className="m-0 h-[2.625rem] relative text-inherit uppercase font-normal font-inherit inline-block  cursor-pointer z-[1] mq450:ml-16"
        onClick={onMeddicalText1Click}
      >
        <span>Med</span>
        <span className="text-secondary">dical</span>
      </h1>
      <div className="w-[38.938rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full text-[1rem] font-body">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem] z-[1]">
          <div className="flex flex-row items-end justify-start gap-[0.343rem]">
            <img
              className="h-[2.388rem] w-[2.513rem] relative mq450:hidden"
              loading="lazy"
              alt=""
              src="/group-188.svg"
            />
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.137rem] mq450:hidden">
              <div className="flex flex-col items-start justify-start gap-[0.125rem] mq1050:hidden">
                <div className="relative uppercase font-medium inline-block min-w-[6.188rem]">
                  Emergency
                </div>
                <div className="relative font-medium text-secondary whitespace-nowrap">
                  7440086922
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] sm:w-[4rem]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.606rem]">
              <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <style jsx>{`
              @keyframes blink {
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
                100% {
                  opacity: 1;
                }
              }
              .animate-blink {
                animation: blink 3s infinite;
              }
            `}</style>

            <input
              className="border-white cursor-pointer m-0 w-[1.875rem] h-[1.875rem] relative animate-blink accent-red-500 mq450:hidden"
              checked={true}
              type="radio"
              style={groupInputStyle}
            />
              </div>
              <div
                className="flex flex-col items-start justify-start gap-[0.125rem] mq750:hidden"
                style={frameDivStyle}
              >
                <div className="relative uppercase font-medium inline-block min-w-[6.25rem] whitespace-nowrap">
                  Work Hour
                </div>
                <div className="relative font-medium text-secondary whitespace-nowrap mq750:hidden">
                  08:00 - 22:00 Everyday
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] mq450:hidden">
            <div className="flex flex-row items-start justify-start gap-[0.6rem]">
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.875rem] h-[2.25rem] relative"
                  loading="lazy"
                  alt=""
                  src="/group-178.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.125rem] sm:hidden">
                <div className="relative uppercase font-medium inline-block min-w-[5rem]">
                  Location
                </div>
                <div className="relative font-medium text-secondary whitespace-nowrap">
                  Old Town, Bhubaneswar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topmost2;
