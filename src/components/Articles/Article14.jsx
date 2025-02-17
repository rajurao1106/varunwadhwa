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
import article14 from "../../assets/Articles/article14.jpg";

export default function Article14() {
  const articleContent14 = {
    title: "Five-minute Mission Statement",
    content: [
      {
        subtitle: "",
        text: "There was a time when the concept of mission statement would apply only to companies since they had varied resources, service lines, locations etc. and such statements would help synchronize everyone’s efforts towards a single goal. Now imagine a human being with all his complexities including the mind, body, emotions and energy representing the above factors all running in different directions. The point being, that the times have changed, today with a more profound understanding that we have about ourselves every single person needs a mission statement.",
      },
      {
        subtitle: "",
        text: "While everyone loves to hear the words, Mission Accomplished, lets create one first. The best part about creating your mission statement is that it’s a five-minute job. All the leaders knew this secret, it was about time everyone else knows as well. ",
      },
      {
        subtitle: "",
        text: "Just answer the below questions and you are on your way:",
      },
      {
        point18:
          "Who am I? Simply put your name here nothing more, not your profession, not your religion nothing else but you as a being. ",
        point28:
          "What do I love to do? This could be anything that means more than just a job, anything that creates excitement, or gives you a purpose to get up in the morning. If you would like to go one step ahead, list down something that truly defines you as a person, for Eg. if you love children you could include parenting guidance in this category, or if you are an architect who loves fashion you could choose visual merchandising. ",
        point38:
          "Whom do I do this for? The audience who would ultimately benefit from your mission should be mentioned in this section. Remember you could just mention that am doing this for myself and my family, no one else and that’s alright. Until you are truly being honest to yourself, it works. Just remember though the Law of Karma, the more you bless others, the more you shall be blessed.",
        point48:
          "What strategy do I have to accomplish my mission? This could be something that drives your plan or the methodology through which you would drive your mission. For a trainer, it could be through workshops/tie ups, for a businessman it could be through research as well as exploring new products/services, for a sportsman it could be acquiring great coaching, for a working professional it could be thought industry research and certifications. You choose your own path!!",
        point58:
          "What positive change will it bring about in the respective lives of the people that am doing this for? The most important step because any mission is incomplete without creating a change in anyone’s life. The more lives you touch the bigger would be your mission!!",
      },
      {
        subtitle: "",
        text: "The mission statements for some of the most profound figures in human history would have looked something like this:",
      },
      {
        subtitle: "",
        text: "Am Steve Jobs, love to challenge the status-quo and contribute to the world by making tools for the mind that advance humankind. These world class tools are developed through my dream venture Apple which looks to reinvent various technology platforms and revolutionize entire industries.",
      },
      {
        subtitle: "",
        text: "Am Nelson Mandela, my purpose is dismantling the legacy of apartheid through tackling institutionalized racism, poverty and inequality, and fostering racial reconciliation. For this purpose, am going to find the militant Umkhonto we Sizwe (MK) in 1961, leading a sabotage campaign against the apartheid, as well as would develop the 'Mandela University' in Robben Island government. Millions of Africans would be helped through these social reforms and many more have been inspired to carry the legacy forward.",
      },
      {
        subtitle: "",
        text: "Am Henry Ford, love to invent and innovate and to demonstrate a natural engineering curiosity by working on the steam engines to create operating vehicles. Would like to create a world class automobile company (Ford Motor Company) where people work together as a lean, global enterprise to make people’s lives better through automotive and mobility leadership.",
      },
      {
        subtitle: "",
        text: "Am Thomas Edison, love to innovate and create commercially useful things by putting in the hard work and labour. Am prepared to fail however am not prepared to give up, therefore none of my inventions come indirectly through accident. I would like to invest by creating world's first full-fledged research and development centre in West Orange, New Jersey as well as Edison General Electric Co. These innovations would have changed the course of history and help shape the physical/cultural makeup of present-day civilization.",
      },
      {
        subtitle: "",
        text: "Your mission statement could be your secret to something profound, it’s worth a visit first thing in the morning and the last thing at night!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent14.title}
          </h2>
          <img
            loading="lazy"
            src={article14}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent14.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point18 ||
                  section.point28 ||
                  section.point38 ||
                  section.point48 ||
                  section.point58) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 font-Minion">
                    {section.point18 && <li>{section.point18}</li>}
                    {section.point28 && <li>{section.point28}</li>}
                    {section.point38 && <li>{section.point38}</li>}
                    {section.point48 && <li>{section.point48}</li>}
                    {section.point58 && <li>{section.point58}</li>}
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
