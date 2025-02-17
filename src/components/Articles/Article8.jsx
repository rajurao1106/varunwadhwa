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
import article8 from "../../assets/Articles/article8.jpg";

export default function Article8() {
  const articleContent8 = {
    title: "What’s your story?",
    content: [
      {
        subtitle: "",
        text: " It is often said that the most important story is the one you are telling yourself, day in and day out. Essentially if you look at the history of storytelling, you would realize it is the most natural thing to human mind, humans have been telling stories for almost 10000 years now. Even now when you think of bonfire the next word you think of is stories. Our ancestors would tell stories because it was about their daily experiences, in the sense that it was essential to share stuff as part of survival tactics. As we evolved the art of storytelling evolved.",
      },
      {
        subtitle: "",
        text: "Today if you look around yourself, whether it’s an interview or any company advertising its products, everyone is telling a story. Some of the most successful businesses man including Steve Jobs or Bill Gates, the best politicians including Abraham Lincoln or Winston Churchill are also the best storytellers of their respective times. ",
      },
      {
        subtitle: "",
        text: " If you look closely to their stories you would have realized that an amazing story often has these four characteristics:",
      },
      {
        point17:
          "The story has a central character who has faced adversities in his/her life!!",
        point27:
          "The story has a challenge which needs to be overcome under difficult circumstances!!",
        point37: "The story has a hero and a villain!!",
        point47:
          "The story has a meaningful and compelling end, one that makes the journey worth!!",
      },
      {
        subtitle: "",
        text: " Call for Action",
      },
      {
        subtitle: "",
        text: " Write down your own life story, a story which you need to be telling yourself every day, for stories are powerful, they have emotions and they can truly move things.",
      },
      {
        subtitle: "",
        text: " The story has a central character who has faced adversities in his/her life!!",
      },
      {
        subtitle: "",
        text: "Always create your story around the times that have helped you build your character, those times that have tested you the most. For some people, it may have been the humble backgrounds where they come from, for some it may been tough childhood experiences they have had, for others it may have been lack of financial support. For me personally it was always about having grown up alone, as the only child of my parents, it was tough not having anyone to speak your heart out. The journey from being a shy introvert even in my 20’s, to someone having the strength today to speak in front of hundreds gives me immense satisfaction. ",
      },
      {
        subtitle: "",
        text: " The story has a challenge which needs to be overcome under difficult circumstances!!",
      },
      {
        subtitle: "",
        text: " Create your own challenges, dream big, for having dreams which are small is like using an aeroplane for taxing around in the city. Always write down your dreams for if you write down your dreams it becomes a mission, almost a challenge to yourself. It’s like saying to yourself, here is what I want you to do, now go out there and do it!! ",
      },
      {
        subtitle: "",
        text: " The story has a hero and a villain!!",
      },
      {
        subtitle: "",
        text: "Let your story revolve around you, make yourself the hero of the story. And let all the possible adversities that stop you from achieving your goals including procrastination, excuses, inconsistency, lack of focus etc, let of them be the villains of your story. In addition, you could also let the good habits that you inculcate as side heroes of your story, for side heroes often help the hero win over the villains. ",
      },
      {
        subtitle: "",
        text: " The story has a meaningful and compelling end, one that makes the journey worth!!",
      },
      {
        subtitle: "",
        text: " Creating fascinating climaxes for your audience is a dream for all great directors. You could be a great director and spell out magical endings for your own story. Let those endings be a motivating factor in all your present deeds.Trust me when you have written your story you would want to read it repeatedly, for its something really close to your heart. Now would be a good time to start!!",
      },
      {
        subtitle: "",
        text: " Trust me when you have written your story you would want to read it repeatedly, for its something really close to your heart. Now would be a good time to start!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent8.title}
          </h2>
          <img
            loading="lazy"
            src={article8}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent8.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>

                {(section.point17 ||
                  section.point27 ||
                  section.point37 ||
                  section.point47) && (
                  <ul className="text-lg text-gray-600 list-outside list-decimal ml-6 font-Minion">
                    {section.point17 && <li>{section.point17}</li>}
                    {section.point27 && <li>{section.point27}</li>}
                    {section.point37 && <li>{section.point37}</li>}
                    {section.point47 && <li>{section.point47}</li>}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
