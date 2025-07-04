import React, { useState } from "react";
import Userlistitem from "../components/Userlistitem";
import { toast, Slide } from "react-toastify";

function Searchbox() {
  const [search, setSearch] = useState("");
  const [responses, setResponses] = useState("");
  const handledoctors = async (search) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_LINKED}/namedoctors`, {
        method: "POST",
        body: JSON.stringify({ Name: search }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        setResponses(json);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setResponses("");
      }
    } catch (error) {
      toast.error( error.message , {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    }
  };
  return (
    <div className="flex flex-col mx-auto border-blue-400 border-4 bg-slate-200 w-2/3 rounded-lg mb-8 pb-6 xl:w-4/5 mq1025:w-[90%] mq750:w-[95%]">
      <h2 className="text-xl text-secondary font-body mq750:text-lg mq750:mx-1 mq450:text-base">
        Find The Doctor You Want
      </h2>
      <div className="flex flex-row justify-center mq450:mx-1">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handledoctors(e.target.value);
          }}
          className="w-1/2 h-7 border-black mq1050:w-2/3 mq750:w-4/5 ps-2 "
        />
        <button
          className="cursor-pointer w-1/12 min-w-12 bg-slate-500 mq450:text-xs text-sm"
          onClick={() => handledoctors(search)}
        >
          Search
        </button>
      </div>
      {responses && responses.length > 0 && (
        <div className="h-32 overflow-y-auto scroll-smooth mt-2">
          {responses &&
            responses.length > 0 &&
            responses.map((response) => (
              <div key={response.id} className="flex flex-col items-center ">
                <Userlistitem doctor={response} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Searchbox;
