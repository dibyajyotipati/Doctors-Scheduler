import { useNavigate } from "react-router-dom";
const MapperFunction1 = () => {
  const navigate = useNavigate();
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
      <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <div className="flex flex-col items-end justify-start gap-[0.5 rem]">
            <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary mq450:text-[1.188rem] mq1050:text-[1.625rem]">
              DEPARTMENTS
            </h1>
          </div>
        </div>
        <div className="flex mx-auto w-4/5 justify-center items-center max-h-max mq750:w-[95%] mq450:w-full">
        <div className="grid grid-cols-3 grid-rows-4 w-full gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-6 mq450:gap-x-2 mq450:gap-y-2">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full gap-2 h-36 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:bg-primary hover:text-secondary text-gray-900" onClick={()=>navigate('/dynamic/neurology')}>
              <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-base font-medium">Neurology</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/bones')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Bones</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/oncology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Oncology</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/medicine')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">
              Medicine
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/ophthalmology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">
                Ophthalmology
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/cardiovascular')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">
                Cardiovascular
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/pulmonology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Pulmonology</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/renalMedicine')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">
                Renal Medicine
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/gastroenterology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">
                Gastroenterology
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/urology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Urology</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/dermatology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Dermatology</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow w-full h-36 gap-2 hover:scale-105 transition-all duration-150 hover:cursor-pointer hover:text-secondary hover:bg-primary text-gray-900" onClick={()=>navigate('/dynamic/gynaecology')}>
            <img
                className="h-[2.75rem] w-[3.125rem] relative z-[8]"
                alt=""
                src="/vector-41.svg"
              />
              <span className="text-sm font-medium">Gynaecology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapperFunction1;
