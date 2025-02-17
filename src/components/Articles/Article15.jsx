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
import article15 from "../../assets/Articles/article15.jpg";

export default function Article15() {
  const articleContent15 = {
    title: "Goal Setting: The Bubble Theory!!",
    content: [
      {
        subtitle: "",
        text: "A remarkable study about goal-setting was carried out in the Harvard MBA Program. Harvard’s graduate students were asked if they have set clear, written goals for their futures, as well as if they have made specific plans to transform their fantasies into realities.",
      },
      {
        subtitle: "",
        text: "The result of the study showed only 3 percent of the students had written goals and plans to accomplish them, let’s take that figure and superimpose on the percentage of people who own the maximum wealth in this world. The numbers show the Top 3% of the wealthiest folks own about 80% of the total wealth in this world. You may want to argue that there may not be a correlation, however have not given you the complete findings of the survey.",
      },
      {
        subtitle: "",
        text: "The next part of Harvard study focused on the income of the group after 10 years of their professional careers. The 3 percent who had written goals were earning, on average, 10 times as much as the other 97 percent of the class combined.",
      },
      {
        subtitle: "",
        text: "In spite of most of us knowing these numbers, am absolutely amazed and bamboozled by the extent to which people undermine their goal setting, never really caring to give this process enough energy it requires.",
      },
      {
        subtitle: "",
        text: "Always remember, on your last day on this planet the person you became is going to meet the person you could have become!! - Anonymous",
      },
      {
        subtitle: "",
        text: "Running after your goals is the greatest present you could give to yourself. However one caution, almost everyone with whom you would meet would discourage you that these goals cannot be achieved simply because they can’t see what you see and they are not supposed to either. Therefore be very careful in selecting your goal – keepers (those who keep your goals protected)",
      },
      {
        subtitle: "",
        text: "In case you are wondering what could you do more than just writing your goals down once, how can you track them and ultimately achieve them? Well you could use the bubble theory which i have started using, all you need are four bubbles as shields to protect your goals. Just read on!!",
      },
      {
        subtitle: "",
        text: "Pick up a sheet of paper and make four bubbles representing the following:",
        image7: image7,
      },
      {
        subtitle: "",
        text: "Just remember to first write down your lifetime goals and then do the reverse engineering reaching the daily goals, ensuring that every day you do little to reach your monthly, yearly and then the lifetime goal. Only the daily bubble needs to be written every day, first thing in the morning and be looked at once in the evening.",
      },
      {
        subtitle: "",
        text: "In case you are wondering if this theory works, this article is a living example. This month starting on 1st April when i made my Monthly Goal Bubble, i wrote down 2 articles for the month as my goal, 2/3rd of the month down the line, i have already written four. Do not wait, just do it!!",
      },
      {
        subtitle: "",
        text: "Just remember, your goals belong to you:",
      },
      {
        subtitle: "",
        text: "BLESS THEM!! ENERGIZE THEM!! PROTECT THEM!!  NURTURE THEM!!    ",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent15.title}
          </h2>
          <img
            loading="lazy"
            src={article15}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent15.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold ">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                <div>
                  {section.image7 && (
                    <img
                      loading="lazy"
                      src={section.image7}
                      alt=""
                      className="p-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
