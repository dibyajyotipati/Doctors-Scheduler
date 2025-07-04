import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const DoctorsCard2 = ({ doctor, segment }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  const slots = doctor.workingDays;
  const timeSlotsPerDay = {};
  slots.map((slot) => {
    if (!timeSlotsPerDay[slot.Day]) {
      timeSlotsPerDay[slot.Day] = [];
    }
    timeSlotsPerDay[slot.Day].push(`${slot.startTime} - ${slot.endTime}`);
  });

  // const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    // Reset selected time slot when day changes
    setSelectedTimeSlot("");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    setSelectedDay(day);
    if (timeSlotsPerDay[day] == undefined) {
      alert("Sir is not available on that day");
      setSelectedDay("");
      setSelectedDate(null);
    } else {
      setAvailableTimeSlots(timeSlotsPerDay[day]);
    }
  };

  const handleAppointment = async () => {
    navigate("/appointment-box", { state: { doctor } });
    // const patientJSON = localStorage.getItem("Patient");
    // const patient = JSON.parse(patientJSON);
    // const patientId = patient._id;
    // const appointment = {
    //   doctor_id: doctor._id,
    //   patient_id: patientId,
    //   day: selectedDay,
    //   time: selectedTimeSlot,
    //   department: segment,
    //   date: selectedDate,
    // };
    // try {
    //   // window.location.href = "https://rzp.io/l/M1DGv2bfS";
    //   const response = await fetch(
    //     "http://localhost:4000/appointment/createappointment",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(appointment),
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${patient.token}`,
    //       },
    //     }
    //   );
    //   const json = await response.json();
    //   if (json && Object.keys(json).length > 0) {
    //     alert("Appointment Booked");
    //   }
    //   navigate("/myinfo");
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  return (
    <div className="h-[32.625rem] w-[19.813rem] flex flex-col items-start justify-start min-w-[18.813rem] text-left text-[1.125rem] text-primary font-body overflow-hidden" style={{ borderRadius: "0.5rem" }}>
      <div className="relative flex items-center justify-center mx-auto bg-lightsteelblue-100 w-full pt-4" style={{ height: "10rem",backgroundColor: "#bfd2f8"}}>
        <img
          className="w-auto h-full object-contain rounded-sm rounded-b-none"
          loading="lazy"
          alt=""
          src={doctor.image}
        />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[0.75rem] pr-[1.25rem] pl-[1.375rem] relative gap-[0.5rem]">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-lightsteelblue-100" />
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.25rem] pl-[0.125rem]">
          <div className="relative leading-[140%] z-[1] font-bold">
            {doctor.Name}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <div className="p-4 z-[200] bg-gray-100 rounded-md ">
            <div className="mb-4 flex items-center justify-center flex-col">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Days for Appointment
              </label>
              {slots.map((slot) => {
                return (
                  <div>
                    <p className="block text-sm font-medium text-gray-700">
                      {slot.Day} : {timeSlotsPerDay[slot.Day]}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-row items-center justify-center py-[0rem] pr-[0.875rem] pl-[0.687rem]">
              <div className="flex flex-row items-center justify-center gap-[1.25rem]">
                <img
                  className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[0]"
                  alt=""
                  src="/vector-21.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[0]"
                  alt=""
                  src="/vector-31.svg"
                />
                <img
                  className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem] z-[0]"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-[transparent] self-stretch flex flex-row items-start justify-center relative whitespace-nowrap mt-auto"
          onClick={() => handleAppointment()}
        >
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-t-8xs rounded-b-8xs bg-primary hover:bg-primary-200" />
          <div className="relative text-[1rem] leading-[140%] font-body text-lightsteelblue-100 text-center inline-block min-w-[5.813rem] z-[1]">
            Book Appointment
          </div>
        </button>
      </div>
    </div>
  );
};

export default DoctorsCard2;
