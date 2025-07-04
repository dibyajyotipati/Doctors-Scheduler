import DoctorsCard from "./DoctorsCard";

const FrameComponent7 = () => {
  const doctor = [
    {"name":"Dr. Devi Shetty","department":"Cardiac Surgeon","image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkPd_ReB1XXczMHebbG3LHybSfEvqpNzpbKXoy5wpssRtm6qWe","link":"https://en.wikipedia.org/wiki/Devi_Shetty", "linkedin":"https://in.linkedin.com/in/dr-devi-shetty-9a323ba8","facebook":"https://www.facebook.com/groups/107408922973981/"},
    {"name":"Dr. Sandeep Vaishya","department":"Neurosurgeon","image":"https://lh3.googleusercontent.com/p/AF1QipO2HtseueH7VHApq_aVhAdFQASMcJcmCiaD6n-h=s1360-w1360-h1020","link":"https://www.practo.com/delhi/doctor/dr-sandeep-vaishya-neurologist","linkedin":"https://in.linkedin.com/in/sandeep-vaishya-5416828","facebook":"https://www.facebook.com/sandeep.vaishya.399/"},
    {"name":"Dr. Nidhi Rawal","department":"Paediatric","image":"https://cdn3.rainbowhospitals.in/user/doctor/large_images/jksnIQTLqudKp2cYgu0Zh74dhzt1devafAgu2ohj.jpg","link":"https://www.practo.com/gurgaon/doctor/nidhi-rawal-gastroenterologist","linkedin":"https://in.linkedin.com/in/nidhi-rawal-2657b96","facebook":"https://www.facebook.com/p/Dr-Nidhi-Rawal-Pedatric-Gastroenterologist-100063680122039/"}
  ]
  return (
    <div className="w-[90%] h-fit p-8 flex flex-nowrap overflow-x-auto overflow-y-hidden mx-auto gap-4 mb-4 bg-whitesmoke scrollbar-hide rounded">
  <DoctorsCard doctor={doctor[0]} />
  <DoctorsCard doctor={doctor[1]} />
  <DoctorsCard doctor={doctor[2]} />
  <DoctorsCard doctor={doctor[0]} />
  <DoctorsCard doctor={doctor[1]} />
  <DoctorsCard doctor={doctor[2]} />
</div>
  );
};

export default FrameComponent7;
