const DoctorsCard = ({ doctor }) => {
  return (
    <div className="h-[33.625rem] flex flex-col items-start justify-start text-left text-[1.125rem] text-primary font-body min-w-[310px] mq450:w-[305px] max-w-[400px]">
      <img
        className="self-stretch flex-1 relative rounded-t-8xs rounded-b-none overflow-hidden max-h-full object-cover max-w-full"
        loading="lazy"
        alt=""
        src={doctor.image}
      />
      <div className="self-stretch flex flex-col items-center justify-start py-[1.5rem] pr-[1.25rem] pl-[1.375rem] relative gap-[0.5rem]">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-lightsteelblue-100" />
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.125rem]">
          <div className="relative leading-[140%] z-[1]">{doctor.name}</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[1rem]">
          <b className="relative tracking-[0.14em] uppercase z-[1]">
            {doctor.department}
          </b>
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.687rem]">
            <div className="flex flex-row items-start justify-start gap-[1.25rem]">
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1] cursor-pointer"
                alt=""
                src="/vector-21.svg"
                onClick={()=>window.location.href = `${doctor.linkedin}`}
              />
              <img
                className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[1] cursor-pointer"
                alt=""
                src="/vector-31.svg"
                onClick={()=>window.location.href = `${doctor.facebook}`}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-[transparent] self-stretch flex flex-row items-start justify-center relative whitespace-nowrap">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-t-none rounded-b-8xs bg-primary" />
        <div className="relative text-[1rem] leading-[140%] font-body hover:text-lightsteelblue-100 text-whitesmoke text-center inline-block min-w-[5.813rem] z-[1]" onClick={()=>window.location.href = `${doctor.link}`}>
          View Profile
        </div>
      </button>
    </div>
  );
};

export default DoctorsCard;
