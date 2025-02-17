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
import article17 from "../../assets/Articles/article17.jpg";

export default function Article17() {
  const articleContent17 = {
    title: "The other eight hours!!",
    content: [
      {
        subtitle: "",
        text: "The argument on time vs money has lingered on for many years, if you really wish to know which one is more valuable just think on the context that time can get you money, well if you are willing to do things in a certain way…. but can money get you time? So, to say that time is money like people say is highly undermining the value of the former.",
      },
      {
        subtitle: "",
        text: "Time is the inexplicable raw material for everything, with it, all is possible. The best part about time is no matter how you treat it, whether you are dumb or genius, no matter which age, caste or religion, social status you may belong time does not discriminate, every day without any reminder or failure 24 hours automatically get credited into your account. Let’s see how do we make use of these 24 hours.",
      },
      {
        subtitle: "",
        text: "We all have our breads to earn which takes away the eight hours from our day. Let’s assume that you are the easy-going types who needs his/her fair share of sleep and that takes away another eight hours.",
      },
      {
        subtitle: "",
        text: "That my friends leave us with the other eight hours. I could bet for most of us if you were to calculate the percentage of where have you spend these eight hours you would get answers like: Chatting on the phone (yes, your friends/loved ones deserve your time), watching television, listening to music, playing candy crush (proud at the level you had reached, I know), dinner/lunch parties…well the list could go on. Just how many of these are you willing to sacrifice for yourself, completely and totally your choice. Choose wisely though since this one single decision could well be a life changing one.",
      },
      {
        subtitle: "",
        text: "Jack Ma the founder of Alibaba says “after work is what determines your future” …. Such a profound and powerful philosophy!!",
      },
      {
        subtitle: "",
        text: "Please understand that it’s not the responsibility of your company or your boss to take care of your learning & growth, that you must take in your own hands.",
      },
      {
        subtitle: "",
        text: "So, if you are really feel stuck in your professional space, look around for some inspiration, something that strikes the cord of your inner happiness. If you would like to get more specific, form an all new mission statement for yourself, it’s an easy 5 question process, just answer them:",
      },
      {
        point111: "Who am I?",
        point211: "What am I passionate about or what do I really love to do?",
        point311: "Whom do I do this for?",
        point411: "How do I plan to implement my love/passion into action?",
        point511:
          "How would it positively affect my space and bring about a change in the lives of those for whom am doing this?",
      },
      {
        subtitle: "",
        text: "Now your job is really to keep a track of the other eight hours, how much of these hours are you spending on your mission statement. Simple but efficient. And the best part of this whole thing is that this could be doorway for you to realize that people could well be willing to pay you for the thing that you love doing, pay you for something you are willing to do for free anyway. Bliss!!",
      },
      {
        subtitle: "",
        text: "So, the bad news is that time flies but the good news is that you could become the pilot, fly away!! Cheers!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent17.title}
          </h2>
          <img
            loading="lazy"
            src={article17}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent17.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point111 ||
                  section.point211 ||
                  section.point311 ||
                  section.point411 ||
                  section.point511) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 font-Minion">
                    {section.point111 && <li>{section.point111}</li>}
                    {section.point211 && <li>{section.point211}</li>}
                    {section.point311 && <li>{section.point311}</li>}
                    {section.point411 && <li>{section.point411}</li>}
                    {section.point511 && <li>{section.point511}</li>}
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
