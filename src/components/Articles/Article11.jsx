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
import article11 from "../../assets/Articles/article11.jpg";

export default function Article11() {
  const articleContent11 = {
    title: "The 20’s Experiment",
    content: [
      {
        subtitle: "",
        text: "In case you are planning a great story to tell your grandchildren when you grow old, a story which has an element of risk blended with curiosity of adventure, try the 20’s experiment!!",
      },
      {
        subtitle: "",
        text: "Robert Greene in his book Mastery referred to this wonderful concept as Apprenticeship. He gave the example of Charles Darwin whose voyage away from home for 5 years in South America gave us the biggest scientific discovery of human race known as the “Theory of the Evolution”. He could have chosen to perform a comfortable job his father has searched for him at the city Church, instead he chose to experiment.",
      },
      {
        subtitle: "",
        text: "A lot of us when we start our career in the youthful 20’s, just choose any field and look to earn some quick money; the trend is common across all cultures and all geographies. The freshness of the work and the energy in our body just overpowers any inner voice which calls for us to take a step back and self-analyse. Very few people in their early years look to focus on learning though experiments. Leonardo Da Vinci was one of them, in his early years, he apprenticed or experimented as a studio boy to Andrea del Verrocchio for 7 years. Leonardo was exposed to both theoretical training and a vast range of technical skills, including drafting, chemistry, metallurgy, metal working, plaster casting, leather working, mechanics and carpentry as well as the artistic skills of drawing, painting, sculpting and modelling. What came out of these experiments later was practically magic!!",
      },
      {
        subtitle: "",
        text: "The question really is not whether one should do it or not, the question really is how one should do this effectively. Let’s introduce the experimental learning matrix!!",
        image6: image6,
      },
      {
        subtitle: "",
        text: "This matrix above describes the perfect chemistry between Positive Energy + Long Term Focus and Hardships. Keeping your energies positive as well as focused on your long-term goal during the time of hardships is the best outcome one can think of from the 20’s Experiment. When you lose your face during the time of hardships it may lead to depression or low self-esteem, whereas when you chose to stay at shore away from deep waters it can only create limited learnings opportunities for you. Choose wisely!!",
      },
      {
        subtitle: "",
        text: "A study found it usually takes about 16 hours of dedicated work for one to acquire a skill and somewhere close to about 10,000 hours to master that skill (Malcom Gladwell in Outliers). Thus, a lot of people get it wrong when they perceive that we are good at something therefore we practice it more, whereas it’s because we practice it more that we become good at something. Point being that while practicing hard enough may get you to mastery, finding out where your passion lies to keep practicing hard enough can only be gauged through experimental learning.    ",
      },
      {
        subtitle: "",
        text: "For me writing these articles is like creating my own small learning experiment, challenging myself to shove out an article every week is about adding hardships into that experiment. Positive energy & Long-term focus is only about adjusting your state of mind!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent11.title}
          </h2>
          <img
            loading="lazy"
            src={article11}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent11.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-0">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                <div>
                  {section.image6 && (
                    <img
                      loading="lazy"
                      src={section.image6}
                      alt=""
                      className="p-5"
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
