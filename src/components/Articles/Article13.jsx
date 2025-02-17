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
import article13 from "../../assets/Articles/article13.jpg";

export default function Article13() {
  const articleContent13 = {
    title: "Breathe your Thoughts!!",
    content: [
      {
        subtitle: "",
        text: "It was the winter of January 1975 when the issue of the magazine Popular Electronics demonstrated the Altair 8800, the computer which MITS wished to develop and distribute. Bill Gates and Paul Allen thought of this as a great opportunity to develop an implementation of the programming language BASIC interpreter for the system. They also knew this could be a doorway for something great in the coming days.",
      },
      {
        subtitle: "",
        text: "Out of this single thought was born the idea of Microsoft and the rest as they say is history.",
      },
      {
        subtitle: "",
        text: "Your thoughts are a catalyst for self-perpetuating cycles, your thoughts create your beliefs which in turn directly influences how you feel and how you behave, we all know this don’t we. The more interesting thing to know is where do these wonderful ideas/thoughts come from and can we simply breathe in these ideas. How about a supreme technique that could help bring in these wonderful thoughts and at the same time eliminate stress from your lifestyle.Having attended all the workshops and going through all the wonderful messages on stress management I could account for, the one that works best for this generation came out from Sadguru Jaggi Vasudev",
      },
      {
        subtitle: "",
        text: "In my understanding, we manage things which are precious to us – our business, our family, our money, our wealth, our children. Why would anyone manage stress? Stress is not a part of your life. Stress is just your inability to manage your own system. Stress happens not because of the nature of your work. It is just that you do not know how to manage your body, your mind, your emotions and your energy.",
      },
      {
        subtitle: "",
        text: "While a lot of spiritual leaders and stress management trainers have defined deep breathing as something that really works, let’s figure out something that works even better, something that aligns your thoughts with your breathing.",
      },
      {
        subtitle: "",
        text: "The technique is simple, just like you breathe in oxygen which purifies our body to produce energy and breathe out carbon dioxide which is not useful, let’s create a similar cycle for our thoughts.       ",
      },
      {
        subtitle: "",
        text: "Let’s define every positive thought that comes to your mind and list it down, look for positive affirmations, new ideas as well as amazing habits. Also list down things that trouble you, those that create an environment that is unhealthy or troublesome, basically you know about these things already.",
      },
      {
        subtitle: "",
        text: "You would have already guessed the technique, just remember the process: inhale the positive thoughts and exhale the negative ones (6 second cycle, 10 minute every day-simple but profound). The effect though on your mind would be nothing less than amazing.",
      },
      {
        subtitle: "",
        text: "While everyone knows the importance of positive thoughts and the fact that every action we initiate is a mere reflection of our thoughts, lets breathe in these positive thoughts for they are all around us. Modern science today is all gung-ho on matter and energy being two sides of the same coin thereby giving us the concept which was first used by Nepolean Hill in his famous book Think & Grow Rich (1937) known as Infinite Intelligence.",
      },
      {
        subtitle: "",
        text: "You can define infinite intelligence as the collective consciousness of which we are all constituents like the water drops in the ocean. This is the source from where you can get the information that will help you to progress in whatever way you want.",
      },
      {
        subtitle: "",
        text: "Remember the words, whatever you want!! Explore…",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent13.title}
          </h2>
          <img
            loading="lazy"
            src={article13}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent13.content.map((section, index) => (
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
