import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topmost from "../components/Topmost";
import Navbar1 from "../components/Navbar1";
// import FrameComponent6 from "../components/FrameComponent6";
// import FrameComponent5 from "../components/FrameComponent5";
// import FrameComponent4 from "../components/FrameComponent4";
// import DoctorsCard from "../components/DoctorsCard";
// import SmallNews from "../components/SmallNews";
// import GroupComponent3 from "../components/GroupComponent3";
// import GroupComponent2 from "../components/GroupComponent2";
// import GroupComponent1 from "../components/GroupComponent1";
// import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";
import { toast, Slide } from "react-toastify";

const UserView = () => {
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

  const handleReschedule = async (appointment) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/doctordetail`,
        {
          method: "POST",
          body: JSON.stringify({ doctor_id: appointment.doctor_id }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        const doctor = json;
        navigate("/reschedule", { state: { appointment, doctor } });
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

  const handleCancel = async (appointment) => {
    try {
      const patientJSON = sessionStorage.getItem("Patient");
      const patient = JSON.parse(patientJSON);
      const cancelappointment = {
        _id: appointment._id,
        date: appointment.date,
        time: appointment.day,
        patientname: appointment.patientname,
        email: patient.email,
      };
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/cancelappointment`,
        {
          method: "DELETE",
          body: JSON.stringify(cancelappointment),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      window.location.reload();
      if (json.success) {
        toast.success("Appointment Cancelled", {
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

  const [appointments, setAppointments] = useState([]);

  const handleMyAppointments = async () => {
    const patientJSON = sessionStorage.getItem("Patient");
    const patient = JSON.parse(patientJSON);
    const patientId = patient._id;
    const myappointment = { patient_id: patientId };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LINKED}/appointment/myappointments`,
        {
          method: "POST",
          body: JSON.stringify(myappointment),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${patient.token}`,
          },
        }
      );
      const json = await response.json();
      setAppointments(json);
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
    const patientJSON = sessionStorage.getItem("Patient");
    if (!patientJSON) {
      navigate("/login");
    } else {
      handleMyAppointments();
    }
  }, []);

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

  const handleSure = (appointment) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (isConfirmed) {
      handleCancel(appointment); // Proceed with canceling the appointment
    }
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
        <div className="flex flex-row justify-between mq450:flex-col mq450:items-center bg-slate-300 px-4">
          <h1 className="text-3xl font-semibold mb-4 text-primary underline hover:cursor-pointer">
            Your Appointments
          </h1>
          <h1
            className="text-3xl font-semibold mb-4 text-primary hover:cursor-pointer"
            onClick={() => navigate("/userinfo")}
          >
            Personal Information
          </h1>
          <h1
            className="text-3xl font-semibold mb-4 text-primary hover:cursor-pointer hover:text-secondary"
            onClick={() => {
              const isConfirmed = window.confirm(
                "Are you sure you want to logout?"
              );
              if(isConfirmed){
                sessionStorage.removeItem("Patient");
                navigate("/");
              }
            }}
          >
            Logout
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-items-center py-4 bg-slate-200">
          {appointments &&
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-lightsteelblue-100 rounded-lg shadow-md p-4 w-5/6"
              >
                <h2 className="text-xl font-semibold mb-2 text-primary">
                  {appointment.patientname}
                </h2>
                <p className="text-gray-600 mb-2">
                  Date: {nicedate(appointment.date)}
                </p>
                <p className="text-gray-600 mb-4">Time: {appointment.exact}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => {
                      const isConfirmed = window.confirm(
                        "Are you sure you want to reschedule this appointment?"
                      );
                      if (isConfirmed) {
                        handleReschedule(appointment)
                      }
                    }}
                    className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer hover:text-primary hover:transition-colors hover:bg-white"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleSure(appointment)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          {!appointments && <p>No appointments found.</p>}
        </div>
      </div>

      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onServicesText1Click={onServicesText1Click}
        onAboutUsText1Click={onAboutUsText2Click}
      />
    </div>
  );
};

export default UserView;
