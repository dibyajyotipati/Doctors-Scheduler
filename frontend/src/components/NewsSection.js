import SmallNews from "./SmallNews";

const NewsSection = () => {
  const News = [
    {"date":"9 August, 2024","Author":"Dr. Ye Ella Tian","Title":"Study reveals how physical health impacts mental health via brain pathways","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"100","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20160530095846/ri/310/picture/2016/5/3d_rendered_illustration_-_white_brian-Sebastian_Kaulitzki_658707c45ab24fb7903ee3b7d37ab54d-620x480.jpg"},
    {"date":"3 August, 2024","Author":"Benedette Cuffari","Title":"The Role of Process Validation in Ensuring Consistent Drug Quality","link":"https://www.news-medical.net/life-sciences/The-Role-of-Process-Validation-in-Ensuring-Consistent-Drug-Quality.aspx","views":"112","image":"https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20240723080037/ri/310/src/images/Article_Images/ImageForArticle_25069_45496333765138892809-620x480.jpg"},
    {"date":"6 August, 2024","Author":" Danielle Ellis, B.Sc.","Title":"Exploring the Connection Between Gut Health and Meditation","link":"https://www.news-medical.net/news/20240809/Study-reveals-how-physical-health-impacts-mental-health-via-brain-pathways.aspx","views":"153","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_24684_4537237041285888723-150x125.jpg"},
    {"date":"31 July, 2024","Author":"Maria Marco","Title":"From Waste to Taste: The Transformative Power of Fermented Foods","link":"https://www.news-medical.net/news/20240731/From-Waste-to-Taste-The-Transformative-Power-of-Fermented-Foods.aspx","views":"271","image":"https://d2jx2rerrg6sh3.cloudfront.net/images/news/InterviewImageForNews_779662_17183797403028751.jpg"}
  ]
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.125rem] text-secondary font-body mq750:pb-[2.625rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border relative gap-[4rem] max-w-full mq750:gap-[1rem] mq750:pt-[2.625rem] mq750:pb-[2.625rem] mq750:box-border mq1100:gap-[2rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100" />
          <div className="w-[62rem] flex flex-row items-start justify-center max-w-full">
            <div className="w-[28.25rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full z-[1]">
              <b className="relative tracking-[0.16em] uppercase">
                Better information, Better health
              </b>
              <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.312rem] pl-[1.25rem] text-[2rem] text-primary font-display-2">
                <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[5.313rem] mq450:text-[1.188rem] mq1025:text-[1.625rem]">
                  News
                </h2>
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
              <SmallNews news = {News[2]}/>
              <SmallNews news = {News[3]}/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default NewsSection;
