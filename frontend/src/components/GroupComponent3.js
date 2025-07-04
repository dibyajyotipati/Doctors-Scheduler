import { useMemo } from "react";

const GroupComponent3 = ({ propDebugCommit, propDebugCommit1 }) => {
  const groupIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const groupDivStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="flex-[0.9784] flex flex-row items-start justify-start pt-[3.25rem] px-[1.625rem] pb-[3.125rem] box-border relative min-w-[13.5rem]  max-w-[14.563rem] text-left text-[1rem] text-primary font-body mq450:flex-1">
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-lightsteelblue-100"/>
      <div className="flex flex-col items-start justify-start gap-[0.925rem] z-[1]">
        <img
          className="w-[2.513rem] h-[2.388rem] relative shrink-0 [debug_commit:1de1738]"
          alt=""
          src="/group-188-2.svg"
          style={groupIconStyle}
        />
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
          <div
            className="flex flex-col items-start justify-start gap-[0.406rem] shrink-0 [debug_commit:1de1738]"
            style={groupDivStyle}
          >
            <b className="relative text-[1.125rem] uppercase inline-block min-w-[7.063rem]">
              Emergency
            </b>
            <div className="relative leading-[140%]">7440086922</div>
            <div
              className="relative leading-[140%] text-[inherit] [text-decoration:none]"
            >
             7440086922 
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default GroupComponent3;
