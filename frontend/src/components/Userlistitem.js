import React from "react";
import { useNavigate } from "react-router-dom";

const Userlistitem = ({ doctor }) => {
  const navigate = useNavigate();
  const handleFunction = async () => {
    navigate("/appointment-box", { state: { doctor } });
  };
  return (
    <div
      className="flex flex-row bg-whitesmoke w-3/5 h-20 gap-2 rounded-lg mt-2 cursor-pointer transition-transform duration-400 hover:scale-105 mq750:w-4/5 mq450:w-[90%]"
      onClick={handleFunction}
    >
      <img
        src="/vector-41.svg"
        alt="error"
        className="ml-1 mr-1 mt-3 w-10 h-10 bg-transparent rounded-full cursor-pointer"
      />
      <div className="flex flex-col items-center justify-center mt-0 ml-2 h-full align-middle">
        <h1 className="w-full overflow-hidden font-sans font-semibold text-lg text-left tracking-wider">
          {doctor.Name}
        </h1>
        <span className="w-full overflow-hidden whitespace-nowrap font-serif tracking-wide text-left">
          <b>Department:</b> {doctor.department}
        </span>
      </div>
    </div>
  );
};

export default Userlistitem;
