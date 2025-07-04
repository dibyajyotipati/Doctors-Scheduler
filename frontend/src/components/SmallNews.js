  import React from "react";

const SmallNews = ({news}) => {

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2rem] pl-[0rem] relative gap-[1.25rem] text-left text-[0.875rem] text-secondary font-body mq450:flex-wrap mq450:p-[1.25rem] mq450:box-border hover:scale-110 transition duration-300
    cursor-pointer"
    onClick={()=>window.location.href = `${news.link}`}
    >
      <div
        className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white"
       
      />
      <img
        className="h-[9.625rem] w-[10rem] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs object-cover z-[1] mq450:flex-1"
        loading="lazy"
        alt=""
        src={news.image}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[11.125rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative">
              {news.date}
            </div>
            <div className="relative text-[1.125rem] leading-[140%] text-black">
              <p className="m-0">{news.Title}</p>
              <p className="m-0 text-secondary">-{news.Author}</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.625rem] text-black">
            <div className="flex flex-row items-start justify-start gap-[0.312rem]">
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.644rem] relative"
                  alt=""
                  src="/group-198.svg"
                />
              </div>
              <div className="relative inline-block min-w-[1.125rem]">{news.views}</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.312rem]">
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[0.888rem] relative cursor-pointer"
                  alt=""
                  src="/vector.svg"
                  onClick={()=>window.location.href = `${news.link}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNews;
