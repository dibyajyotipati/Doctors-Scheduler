import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq450:pb-[1.688rem] mq450:box-border mq1050:pb-[2.625rem] mq1050:box-border">
      <div className="flex-1 bg-cornflowerblue flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1050:gap-[2rem]">
        <div className="w-[85.375rem] h-[46.375rem] relative bg-cornflowerblue hidden max-w-full" />
        <div className="w-[62rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <b className="relative tracking-[0.16em] uppercase z-[1]">
              Care you can believe in
            </b>
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[3.187rem] pl-[3.062rem] text-[2rem] text-primary font-display-2 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <h1 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.188rem] mq1050:text-[1.625rem] mq450:ml-16">
                Our Services
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[62rem] flex flex-row flex-wrap items-start justify-center gap-[1.281rem] max-w-full text-[1rem] text-black">
          <div
            className="flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem] relative gap-[1.5rem] z-[1] "
            onClick={onGroupButtonClick}
          >
            <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-gray-200 box-border border-[1px] border-solid border-primary" />
            <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.562rem] pl-[1.5rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] hover:scale-110 transistion duration-100 cursor-pointer">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[2.375rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/medical-1.svg"
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[6.75rem] z-[1]">
                  Free Checkup
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[1.5rem] px-[2.062rem] bg-primary flex flex-col items-start justify-start gap-[0.5rem] z-[1] hover:scale-110 transistion duration-100">
              <div className="w-[9.813rem] h-[6.625rem] relative bg-primary hidden" />
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.875rem] pl-[1.812rem]">
                <img
                  className="h-[1.75rem] w-[2rem] relative z-[2]"
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
              <div className="relative text-[1rem] leading-[140%] font-body text-lightsteelblue-100 text-center inline-block min-w-[5.625rem] z-[2]">
                Cardiogram
              </div>
            </button>
            <div className="flex flex-row items-start justify-start pt-[0rem] px-[2.062rem] pb-[1.5rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] hover:scale-110 transistion duration-100 cursor-pointer">
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.875rem] pl-[1.812rem]">
                  <img
                    className="h-[2rem] w-[2rem] relative z-[1]"
                    alt=""
                    src="/vector-22.svg"
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[5.688rem] z-[1]">
                  Dna Testing
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[2.125rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] hover:scale-110 transistion duration-100 cursor-pointer">
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.812rem] pl-[1.75rem]">
                  <img
                    className="h-[2.5rem] w-[2rem] relative z-[1]"
                    alt=""
                    src="/vector-32.svg"
                  />
                </div>
                <div className="relative leading-[140%] inline-block min-w-[5.563rem] z-[1]">
                  Blood Bank
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[0.75rem] px-[3.125rem] bg-primary rounded-t-none rounded-b-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-darkslateblue-100"
              onClick={onGroupButtonClick}
            >
              <div className="h-[2.5rem] w-[9.813rem] relative rounded-t-none rounded-b-8xs bg-primary hidden" />
              <div className="relative text-[0.875rem] font-medium font-body text-lightsteelblue-100 text-left inline-block min-w-[3.438rem] z-[1]">
                View All
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border min-w-[19.063rem] max-w-full text-left text-[1.125rem] text-black1 mq450:px-2 font-display-3 italic font-normal">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq750:gap-[1rem]">
              <div className="flex flex-col items-start justify-start gap-[1rem] max-w-full">
                <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] text-[1.625rem]">
                  <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1] mq450:text-[1.313rem] ">
                    A passion for putting patients first.
                  </h2>
                </div>
                <div className="w-[25.375rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[3.375rem] max-w-full mq450:flex-wrap mq450:gap-[1.688rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                        <style jsx>
                          {`
                            .radio-checked:before {
                              content: "";
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              transform: translate(-50%, -50%);
                              width: 0.5rem;
                              height: 0.5rem;
                              background-color: #159eec;
                              border-radius: 50%;
                            }
                          `}
                        </style>
                        <input
                          className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1]"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                      </div>
                      <div className="relative leading-[140%] z-[1]">
                        A Passion for Healing
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                      <input
                          className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1]"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[6.375rem] z-[1]">
                        5-Star Care
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-col">
                    <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] ">
                      <input
                          className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1]"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[6.438rem] z-[1]">
                        All our best
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                      <input
                          className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1]"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[7.125rem] z-[1]">
                        Believe in Us
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[2.375rem] max-w-full mq450:flex-wrap mq450:gap-[1.188rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <input
                          className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1]"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                    </div>
                    <div className="relative leading-[140%] z-[1]">
                      A Legacy of Excellence
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                    <input className="m-0 w-[1rem] h-[1rem] relative rounded-full bg-secondary border-2 border-blue-500 radio-checked z-[1"
                          type="radio"
                          name="radioGroup-2"
                          checked
                          disabled
                        />
                    </div>
                    <div className="relative leading-[140%] inline-block min-w-[7.688rem] z-[1]">
                      Always Caring
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-black">
                <div className="self-stretch relative leading-[140%] z-[1]">
                  Our hospital is committed to providing exceptional healthcare
                  to the community. We offer complimentary health checkups for
                  early illness detection and prevention, advanced cardiogram
                  services for accurate heart monitoring, and DNA testing for
                  personalized care. Additionally, our well-equipped blood bank
                  ensures safe and reliable blood transfusions for emergencies,
                  guaranteeing that our patients receive the best possible
                  treatment in critical situations.
                </div>
                <div className="self-stretch relative leading-[140%] z-[1]">
                  Beyond these services, our hospital emphasizes compassionate
                  care and patient-centered approaches. We strive to create a
                  welcoming and supportive environment where every individual
                  feels valued and cared for, reflecting our unwavering
                  commitment to improving the quality of life for all.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[30.25rem] w-[20.25rem] flex flex-col items-start justify-start gap-[1.337rem] max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start relative bg-[url('/public/rectangle-13@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full z-[1]">
              <img
                className="h-[14.456rem] w-[20.25rem] relative object-cover hidden max-w-full z-[0]"
                alt=""
                src="/rectangle-13@2x.png"
              />
              <div className="h-[0.531rem] w-[4.531rem] relative bg-lightsteelblue-100 z-[1]" />
              <div className="h-[0.531rem] w-[3.306rem] absolute !m-[0] right-[0rem] bottom-[0rem] bg-secondary z-[1]" />
              <div className="h-[0.531rem] w-[12.413rem] relative bg-primary z-[1]" />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-end justify-start relative bg-[url('/public/rectangle-14@2x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full z-[1]">
              <img
                className="h-[14.456rem] w-[20.25rem] relative object-cover hidden max-w-full z-[0]"
                alt=""
                src="/rectangle-14@2x.png"
              />
              <div className="h-[0.531rem] w-[4.531rem] relative bg-lightsteelblue-100 z-[1]" />
              <div className="h-[0.531rem] w-[3.306rem] absolute !m-[0] right-[0rem] bottom-[0rem] bg-secondary z-[1]" />
              <div className="h-[0.531rem] w-[12.413rem] relative bg-primary z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
