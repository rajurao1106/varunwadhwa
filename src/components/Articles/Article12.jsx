import React from "react";
import Navbar from "../Navbar";
import image1 from "../../assets/Articles/image1.png";
import image2 from "../../assets/Articles/image2.png";
import image3 from "../../assets/Articles/image3.png";
import image4 from "../../assets/Articles/image4.png";
import image5 from "../../assets/Articles/image5.png";
import image6 from "../../assets/Articles/image6.png";
import image7 from "../../assets/Articles/image7.png";
import image8 from "../../assets/Articles/image8.png";
import image9 from "../../assets/Articles/image9.png";
import article12 from "../../assets/Articles/article12.jpg";

export default function Article12() {
  const articleContent12 = {
    title: "The 6 PM to 6 AM Test!!",
    content: [
      {
        subtitle: "",
        text: "The energy of human beings should be reserved for the things that they truly mean something to them, everything else would sooner or later just bring stress. My words but everyone’s experience!",
      },
      {
        subtitle: "",
        text: "This happened when I was sitting in one of recent classes for a course I enrolled, it was close to about 6 PM in evening when the everyone was almost waiting for the class to get over. I realized I was perhaps the only one in the group who did not want the class to get over. Suddenly a big smile spread through my face on the realization that I have made the right choice to be where i am right now. I had passed the 6 PM to 6 AM test!!",
      },
      {
        subtitle: "",
        text: "There are things you love to do, then there are things that earn you your living however the ones that really matter are the ones that touch your heart. These things usually create a burning desire inside you and convert your life into a mission!!",
      },
      {
        subtitle: "",
        text: "“Follow your bliss and the universe will open doors for you where there were only walls.” ―Joseph Campbell",
      },
      {
        subtitle: "",
        text: "I was working with one of my clients (a student) on some career advice when I asked him the most pertinent question you would look to know as consultant. I asked him to put his hand on his heart and let me know one thing he truly love doing, he thought diligently and then said you know what I love to eat pizza.",
      },
      {
        subtitle: "",
        text: "I instantly knew I needed to ask a more intelligent question!!",
      },
      {
        subtitle: "",
        text: "When I though & researched over this, one thing that struck me was that career decisions are not based on what you truly love to do since most of the people may not have an answer ready but instead about what kind of life would you want to build for yourself. A lot of us nowadays just grab on to the first job we find in the market being afraid that the opportunity might never come back.",
      },
      {
        subtitle: "",
        text: "To be cent percent honest am no one to preach since I did the same during my early days, the learnings though should always be shared. So here it is.",
      },
      {
        subtitle: "",
        text: "If you are a starting your career or thinking to change over, understand that some of the most passionate and successful people are those who have sacrificed many of their needs to push toward one all-encompassing goal, these goals may often even surpass everything you love to do. It’s like a lost & found case. These people having found something they call as a burning desire to achieve something great, have lost track of time in achieving this desire.",
      },
      {
        subtitle: "",
        text: "Try the 6PM to 6 AM test… is there something that gives you the same kind of passion and energy at 6PM that it gave you early morning when you are starting your day. Think over it!!",
      },
      {
        subtitle: "",
        text: "If there is, then trust me it’s worth exploring, it could be the best decision you have made for yourself and could give you a reason to get up every day.",
      },
      {
        subtitle: "",
        text: "Thomas Edison in one of his famous interviews said to the reporter, you know what buddy if I had not found the light bulb we would not have been having this interview right now. The reporter in trying to be courtiers replied: No sir you have so many other inventions which are great too. Mr Edison smiled and said you didn’t get my point my friend, if I had not found that light bulb till today I would have rather spent my time inventing than giving interviews.",
      },
      {
        subtitle: "",
        text: "The interviews would come…Keep Inventing!!  ",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent12.title}
          </h2>
          <img
            loading="lazy"
            src={article12}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent12.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
