import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import MapperFunction from "../components/MapperFunction";
// import ShapeSet from "../components/ShapeSet";
import DoctorsCard from "../components/DoctorsCard";
import SmallNews from "../components/SmallNews";
import GroupComponent3 from "../components/GroupComponent3";
import GroupComponent2 from "../components/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const News = [
    {"date":"9 August, 2024","Author":"Dr. Ye Ella Tian","Title":"Study reveals how physical health impacts mental health via brain pathways","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"100","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20160530095846/ri/310/picture/2016/5/3d_rendered_illustration_-_white_brian-Sebastian_Kaulitzki_658707c45ab24fb7903ee3b7d37ab54d-620x480.jpg"},
    {"date":"3 August, 2024","Author":"Benedette Cuffari","Title":"The Role of Process Validation in Ensuring Consistent Drug Quality","link":"https://www.news-medical.net/life-sciences/The-Role-of-Process-Validation-in-Ensuring-Consistent-Drug-Quality.aspx","views":"112","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20240723080037/ri/310/src/images/Article_Images/ImageForArticle_25069_45496333765138892809-620x480.jpg"},
    {"date":"6 August, 2024","Author":" Danielle Ellis, B.Sc.","Title":"Exploring the Connection Between Gut Health and Meditation","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"153","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_24684_4537237041285888723-150x125.jpg"},
    {"date":"31 July, 2024","Author":"Maria Marco","Title":"From Waste to Taste: The Transformative Power of Fermented Foods","link":"https://www.news-medical.net/news/20240731/From-Waste-to-Taste-The-Transformative-Power-of-Fermented-Foods.aspx","views":"271","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/news/InterviewImageForNews_779662_17183797403028751.jpg"}
  ]

  const doctor = [
    {"name":"Dr. Devi Shetty","department":"Cardiac Surgeon","image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkPd_ReB1XXczMHebbG3LHybSfEvqpNzpbKXoy5wpssRtm6qWe","link":"https://en.wikipedia.org/wiki/Devi_Shetty", "linkedin":"https://in.linkedin.com/in/dr-devi-shetty-9a323ba8","facebook":"https://www.facebook.com/groups/107408922973981/"},
    {"name":"Dr. Sandeep Vaishya","department":"Neurosurgeon","image":"https://lh3.googleusercontent.com/p/AF1QipO2HtseueH7VHApq_aVhAdFQASMcJcmCiaD6n-h=s1360-w1360-h1020","link":"https://www.practo.com/delhi/doctor/dr-sandeep-vaishya-neurologist","linkedin":"https://in.linkedin.com/in/sandeep-vaishya-5416828","facebook":"https://www.facebook.com/sandeep.vaishya.399/"},
    {"name":"Dr. Nidhi Rawal","department":"Paediatric","image":"https://cdn3.rainbowhospitals.in/user/doctor/large_images/jksnIQTLqudKp2cYgu0Zh74dhzt1devafAgu2ohj.jpg","link":"https://www.practo.com/gurgaon/doctor/nidhi-rawal-gastroenterologist","linkedin":"https://in.linkedin.com/in/nidhi-rawal-2657b96","facebook":"https://www.facebook.com/p/Dr-Nidhi-Rawal-Pedatric-Gastroenterologist-100063680122039/"}
  ]

  const onMeddicalTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentTextClick = useCallback(() => {
    const patientJSON = sessionStorage.getItem("Patient");
        if (!patientJSON) {
            navigate("/login")
            } else {
              navigate("/appointment")
        }
  }, [navigate]);

  const onDoctorsText1Click = useCallback(() => {
    navigate("/doctors");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-[62.625rem] h-[32.875rem] relative rounded-8xs bg-gray-100 hidden max-w-full" />
      <FrameComponent3 />
      <div className="w-[9.813rem] h-[6.438rem] relative bg-silver-200 hidden" />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <MapperFunction />
      {/* <ShapeSet /> */}
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[1.688rem] mq450:box-border mq1050:pb-[2.625rem] mq1050:box-border mq450:px-2">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4rem] mq750:gap-[1rem] mq1050:gap-[2rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] ">
              <div className="flex flex-col items-end justify-start gap-[0.5rem]">
                <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.687rem] pl-[0.812rem] mq450:px-2">
                  <b className="relative tracking-[0.16em] uppercase">
                    Trusted Care
                  </b>
                </div>
                <h1 className="m-0 relative text-[2rem] font-normal font-display-2 text-primary mq450:text-[1.188rem] mq1050:text-[1.625rem] mq1050:mr-4 mq450:mr-8">
                  Our Doctors
                </h1>
              </div>
            </div>
            <div className="flex mq1050:flex-wrap mx-auto px-4 gap-4 items-center justify-center mq450:px-0">
              <DoctorsCard doctor={doctor[0]} />
              <DoctorsCard doctor={doctor[1]} />
              <DoctorsCard doctor={doctor[2]} />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border relative gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1050:gap-[2rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100" />
          <div className="w-[62rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[28.25rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full z-[1]">
              <b className="relative tracking-[0.16em] uppercase">
                Better information, Better health
              </b>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[2rem] text-primary font-display-2">
                <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  News
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[62rem] flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.25rem] max-w-full z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <SmallNews news = {News[0]}/>
                <SmallNews news = {News[1]}/>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.75rem] max-w-full">
                <SmallNews  news = {News[2]}/>
                <SmallNews news = {News[3]}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[62rem] flex flex-col items-start justify-start gap-[4rem] max-w-full mq750:gap-[1rem] mq1050:gap-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <b className="relative tracking-[0.16em] uppercase whitespace-nowrap">
                Get in touch
              </b>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[1rem] text-[2rem] text-primary font-display-2">
                <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq1050:text-[1.625rem]">
                  Contact
                </h1>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.25rem] mq1050:flex-wrap">
            <GroupComponent3 />
            <GroupComponent2 />
            <GroupComponent1 />
            <GroupComponent />
          </div>
        </div>
      </section>
      <Footer
        onMeddicalTextClick={onMeddicalTextClick}
        onAppointmentTextClick={onAppointmentTextClick}
        onDoctorsText1Click={onDoctorsText1Click}
        onAboutUsText1Click={onAboutUsText1Click}
      />
    </div>
  );
};

export default Home;
