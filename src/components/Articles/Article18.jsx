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
import article18 from "../../assets/Articles/article18.jpg";

export default function Article18() {
  const articleContent18 = {
    title: "The Art of Creating Opportunities!!",
    content: [
      {
        subtitle: "",
        text: "It is often said when an opportunity knocks down on your door, then break the door open and introduce yourself. But the real question is, do you really want to wait for it to knock or would you like create an ambiance around you that automatically attracts every possible opportunity?",
      },
      {
        subtitle: "",
        text: "You would have heard people saying this many a times, I would have done something great if I could have only got an opportunity. And you feel like saying to those people: it’s a tough life, isn’t it? And you would hear the loudest YESSSSSSS you have ever heard. Let’s analyse, shall we!",
      },
      {
        subtitle: "",
        text: "If you think of it this way that there are 7 billion people living on this planet and yet not one person has your DNA which means you are a unique possibility. Every one whom you met during your childhood told you that you were unique, until something happened may be during the high school.",
      },
      {
        subtitle: "",
        text: "Even wondered what really transpired during the high school that changed your life so much that you stopped believing that you were unique? Was it the hormones running inside you, well not really. The only thing that really happened was that you started repeating in your mind, the dumbest of dialogues “what would others think about me”.",
      },
      {
        subtitle: "",
        text: "This single dialogue has killed many a million dreams!!",
      },
      {
        subtitle: "",
        text: "Your happiness factor which drives your dreams should never be determined by what others think about you. Therefore, creating opportunities for yourself is not difficult if you really think of yourself as a unique possibility. All it requires is a simple road-map:",
      },
      {
        point112: "Make truce with yourself – I am unique!!",
        point212:
          "dentify what makes you unique – Your strengths & your gifts!!",
        point312:
          "Take feedback and prepare an improvement plan - Time Bound & Documented!! ",
        point412: "Present your best foot forward – Glorify your strengths!!",
        point512: "Finally when opportunity comes your way – Rise & shine!!",
      },
      {
        subtitle: "",
        text: "Now a lot of people would think it looks so wonderful on paper but when it comes to implementation it’s a different ball game altogether. Well I would have to agree with you that saying and doing are totally different things, but once you get the ball rolling it’s only a matter of time.",
      },
      {
        subtitle: "",
        text: "So, the next time when you blame the outside world for the opportunities not being there for you, try and look inside, may the answer lies in there. Cheers!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent18.title}
          </h2>
          <img
            loading="lazy"
            src={article18}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent18.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point112 ||
                  section.point212 ||
                  section.point312 ||
                  section.point412 ||
                  section.point512) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 font-Minion">
                    {section.point112 && <li>{section.point112}</li>}
                    {section.point212 && <li>{section.point212}</li>}
                    {section.point312 && <li>{section.point312}</li>}
                    {section.point412 && <li>{section.point412}</li>}
                    {section.point512 && <li>{section.point512}</li>}
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
