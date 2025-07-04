import React, { useState, useEffect } from "react";
import { toast, Slide } from "react-toastify";
import DatePicker from "react-datepicker";

function Familymember({ open, onClose, change }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const addmembers = async () => {
    const patientJSON = sessionStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    if (!sex || !dob || !number) {
      toast.error("Fill all the fields !",{
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
      return;
    }
    const requests = {
      _id: patient._id,
      name:name,
      sex: sex,
      dob: dob,
      phonenumber: number,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/addmember`,
        {
          method: "PATCH",
          body: JSON.stringify(requests),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        toast.success("Member Added !", {
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
        change(json);
        onClose();
      }
    } catch (error) {
      toast.error(error.message, {
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
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="flex flex-col w-1/2 h-fit bg-slate-200 items-center justify-start rounded scroll-m-0 scroll mq750:w-2/3 mq450:w-[90%]">
        <div className="flex flex-row justify-between w-full">
          <div className="flex-grow text-center pl-6">
            <h1 className="text-primary mq750:text-3xl">Personal Details</h1>
          </div>
          <span
            className="material-symbols-outlined scale-125 mt-1 mr-1 cursor-pointer h-fit hover:bg-red-800 bg-transparent transition-transform duration-500 w-fit"
            onClick={onClose}
          >
            close
          </span>
        </div>
        <div className="flex flex-col justify-start items-center w-full mx-auto">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Name:
          </p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-100 w-3/5 h-8 px-2 rounded mq750:w-2/3"
          />
        </div>
        <div className="flex flex-col w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Date of Birth:
          </p>
          <DatePicker
            id="date"
            selected={dob}
            onChange={(date) => setDob(date)}
            className="ml-10 py-2 block border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary focus:outline-none xl:ml-8 lg:ml-4 mq1100:ml-0 mq1025:-translate-x-4 mq750:-translate-x-7"
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            showMonthDropdown
            wrapperClassName="w-1/3"
            popperPlacement="bottom"
          />
        </div>
        <div className="flex flex-col justify-start w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Phonenumber:
          </p>
          <input
            type="phonenumber"
            placeholder="phonenumber"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="bg-slate-100 w-2/5 h-8 px-2 rounded mq750:w-3/5 mq1050:w-1/2"
          />
        </div>
        <div className="flex flex-col justify-start w-full mx-auto items-center">
          <p className="block text-left text-xl font-semibold text-gray-700">
            Sex:
          </p>
          <select
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:opacity-50 w-1/5 mq1050:w-2/5"
            id="sex"
            value={sex}
            onChange={(e) => {
              setSex(e.target.value);
            }}
          >
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <button
          className="w-1/3 bg-secondary text-white mx-auto h-8 my-8 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer text-base mq750:w-1/2"
          onClick={() => addmembers()}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Familymember;
