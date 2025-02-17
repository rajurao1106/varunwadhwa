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
import article9 from "../../assets/Articles/article9.jpg";

export default function Article9() {
  const articleContent9 = {
    title: "Between 20 & 10000: Where do you stand?",
    content: [
      {
        subtitle: "",
        text: "When it comes to acquiring a new skill we all have our learning curve however researchers in general have found that it takes about 20 hours for anyone to acquire a new skill and about 10000 hours to become a master in that. If you look closely this journey from 20 Hours to 10000 Hours is what each one of us undertakes in every domain, every sphere of our lives!!",
      },
      {
        subtitle: "",
        text: "It can be driving a car, or playing a guitar. It can be working on an excel, or the art of resell. It can be learning to be a good parent or learning to stay in moment. It could be practising to sing or guessing a wife likeable present to bring. You get the point....",
      },
      {
        subtitle: "",
        text: "In this article, I look to explore what happens when we apply different stages of learning any new skill to the ancient spiritual wisdom that has lived on for centuries.",
      },
      {
        subtitle: "Spiritual Wisdom Applied to Acquiring New Skills",
        text: "Essentially every human mind in its raw intelligence is aware of most of the things around him, as he learns and practices he becomes more conscious. In that sense, every new experience passes through four stages of transformation.",
      },
      {
        subtitle: "To Me Stage: (20 – 100 Hours)",
        text: "Essentially when you are picking up any new skill usually the first stage is the hardest, when you feel you would never be able to make it to the top. Let’s take an example of Public Speaking, usually the first few hours of practice could give you the courage to go on stage and speak out something. That something may make absolutely no sense for some people, that’s alright, at least you are on the right track. But what hits you is essentially why is this happening to me!!",
      },
      {
        subtitle: "By Me Stage (100 Hours – 1000 Hours)",
        text: "As you practice more you begin to realize God after all is not that unfair, your confidence goes up and you feel things have started happening. This is perhaps the first stage when you start taking the process seriously. A lot of people find out their niche, some envision their dreams. A Public Speaker could feel that he is control of things, he could see more and more respective faces in the audience, when this happens, you would know you have reached a threshold. A threshold from where things could only get better!!",
        image5: image5,
      },
      {
        subtitle: "Through Me Stage (1000 Hours – 10000 Hours)",
        text: "This is the stage when you come to have realized that you are onto something special here, be cautious for most of the people are just happy to be here. You are becoming an expert in your field and people have started looking up to you, make sure you guide them onto the right path. You have already put in thousands of hours of practice in Public Speaking and could connect with most of the audience members. Truly things have started happening Through You!!",
      },
      {
        subtitle: "As Me Stage (Above 10000 Hours)",
        text: "You may want to call this mastery since you have become the Steve Jobs of invention, Bill Gates of computers, Michelangelo of Art and indeed our very own Sachin Tendulkar of Cricket. Only the top 3% reach this stage though everyone may aspire to be here, but for once just consider this scenario: If you practiced for 20 Hours in a week for every week on a skill you may reach this stage in 10 years, you could do the numbers if you want to reach early.",
      },
      {
        subtitle: "",
        text: "For my favourite example though, yes you have become the Les Brown of Public Speaking!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent9.title}
          </h2>
          <img
            loading="lazy"
            src={article9}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent9.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                <div className="p-5">
                  {section.image5 && (
                    <img loading="lazy" src={section.image5} alt="" />
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
