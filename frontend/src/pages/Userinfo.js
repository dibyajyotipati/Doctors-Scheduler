import React from "react";
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topmost from "../components/Topmost";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { toast, Slide } from "react-toastify";
import Familymember from "../components/Familymember";

function Userinfo() {
  const navigate = useNavigate();
  const onMeddicalText1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMeddicalTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState("");
  const [familys, setFamilys] = useState();
  const [button, setButton] = useState(false);
  const userdata = async () => {
    setButton(true);
    const patientJSON = sessionStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const requests = {
      _id: patient._id,
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_LINKED}/data`, {
        method: "POST",
        body: JSON.stringify(requests),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setButton(false);
      if (response.ok) {
        setDetails(json);
        setJob(json.occupation);
        setAddress(json.Address);
        setCode(json.Pincode);
        setFamilys(json.family);
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
    }
  };
  const updatedata = async () => {
    if (
      details.occupation == job &&
      details.Address == address &&
      details.Pincode == code
    ) {
      toast.error("Update the fields", {
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
    setButton(true);
    const patientJSON = sessionStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const requests = {
      _id: patient._id,
      occupation: job,
      Address: address,
      Pincode: code,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/basicinfo`,
        {
          method: "POST",
          body: JSON.stringify(requests),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      setButton(false);
      if (response.ok) {
        setJob(json.occupation);
        setAddress(json.Address);
        setCode(json.Pincode);
        toast.success("Information Updated !", {
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
    }
  };
  useEffect(() => {
     userdata();
  }, []);
  useEffect(() => {
    userdata();
  }, [open]);

  const nicedate = (dateStr) => {
    const date = new Date(dateStr);
    // Format options for date
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    // Format options for time
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    // Format the date and time separately
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

    // Combine date and time
    const formattedDateTime = `${formattedDate}`;

    return formattedDateTime; // Example output: June 25, 2024, 6:30:00 PM
  };

  const removemember = async (_id) => {
    const patientJSON = sessionStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const requests = {
      patient_id: patient._id,
      _id: _id,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/removemember`,
        {
          method: "POST",
          body: JSON.stringify(requests),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        toast.success("Member Removed !", {
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
        setFamilys(json.family);
        setDetails(json);
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
    }
  };

  const handleUpdateDetails = (updatedDetails) => {
    setDetails(updatedDetails); 
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <Topmost
        everydayDebugCommit="unset"
        frameDivDebugCommit="unset"
        onMeddicalText1Click={onMeddicalText1Click}
      />
      <Navbar1 />
      <div className="container mx-auto mt-4">
        <div className="flex flex-row justify-between px-4 bg-slate-300 mq450:flex-col mq450:items-center">
          <h1
            className="text-3xl font-semibold mb-4 text-primary hover:cursor-pointer"
            onClick={() => navigate("/myinfo")}
          >
            Your Appointments
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-primary underline hover:cursor-pointer">
            Personal Information
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-primary hover:cursor-pointer hover:text-secondary"
            onClick={() =>{
              sessionStorage.removeItem("Patient");
              navigate('/')
            }}>
            Logout
          </h1>
        </div>
        <div className="flex flex-col bg-slate-200 w-full h-fit items-center">
          <div className="flex flex-col w-4/5">
            <div className="flex flex-col justify-start w-3/5 mx-auto items-center mq450:w-4/5">
              <p className="block text-left text-3xl font-bold text-primary ">
                Occupation:
              </p>
              <input
                type="text"
                placeholder="Occupation"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="bg-slate-100 w-1/2 h-8 px-2 rounded mq450:w-full"
              />
            </div>
            <div className="flex flex-row justify-around mq450:flex-col">
              <div className="flex flex-col justify-start w-3/5 mx-auto items-center mq450:w-4/5">
                <p className="block text-left text-3xl font-bold text-primary">
                  Address:
                </p>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-slate-100 w-full h-8 px-2 rounded"
                />
              </div>
              <div className="flex flex-col justify-start w-1/5 mx-auto items-center mq450:w-1/2">
                <p className="block text-left text-3xl font-bold text-primary">
                  Pincode
                </p>
                <input
                  type="number"
                  placeholder="Pincode"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-slate-100 w-full h-8 px-2 rounded"
                />
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <button
                className="w-1/5 bg-secondary text-white mx-auto h-8 my-4 rounded text-center font-bold hover:bg-white hover:text-secondary hover:transition-colors cursor-pointer mq750:w-2/5 mq450:w-1/2"
                onClick={() => {
                  updatedata();
                }}
                disabled={button}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex h-fit bg-slate-200 w-full flex-col items-center">
        <h1 className="font-semibold mb-4 text-primary underline">
          Add Family Members
        </h1>
        <div className="flex flex-col justify-center items-center h-fit w-full gap-2 mb-4">
          {familys &&
            familys.map((family) => {
              return (
                <div
                  key={family._id}
                  className="bg-lightsteelblue-100 rounded-lg shadow-md p-2 w-2/3 ps-4 pe-4 pt-0 mq450:w-[85%]"
                >
                  <h2 className="text-xl font-semibold text-primary">
                    {family.name}
                  </h2>
                  <p className="text-gray-600">{family.sex}</p>
                  <p className="text-gray-600 mb-4">{nicedate(family.dob)}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => navigate("/appointment")}
                      className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer hover:text-primary hover:transition-colors hover:bg-white"
                    >
                      Book Appointment
                    </button>
                    <button
                      onClick={() => removemember(family._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="flex flex-row bg-lightsteelblue-100 rounded-lg shadow-md p-2 w-2/3 items-center justify-center gap-9 mb-6 cursor-pointer hover:scale-110 transition-transform duration-500 mq450:w-[90%]"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined scale-[2.0]">
            person_add
          </span>
          <h1 className="text-primary">Add a Member</h1>
        </div>
      </div>
      {open && (
        <Familymember
          open={open}
          onClose={() => setOpen(false)}
          change={handleUpdateDetails}
        />
      )}
      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText1Click={onAboutUsText2Click}
      />
    </div>
  );
}

export default Userinfo;
