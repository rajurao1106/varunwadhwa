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
import article20 from "../../assets/Articles/article20.jpg";

export default function Article20() {
  const articleContent20 = {
    title: "Why can Image Consultants change the way you think?",
    content: [
      {
        subtitle: "",
        text: "The thing that everyone wants to change is the way they think. People look at motivational books for solutions, they listen to saints and preachers for solace and often even go to quite places to take a break from all that is going inside their heads.",
      },
      {
        subtitle: "",
        text: "All this and more works however when you are looking for practical solutions into what is really happening in your head you need a two way communication. An image consultant can be that doorway and guide.",
      },
      {
        subtitle: "",
        text: "Most people think an image consultant works on your appearance, what they really work on is your approach towards looking at yourself. So when you have the word ‘awesome’ ringing all inside your head the actions on the ground would be no less different. After all everything in this world was first created inside the head and later replicated.",
      },
      {
        subtitle: "",
        text: "With the image that you carry being nurtured through your clothing, grooming, body language and etiquette gives you that added advantage you need to create more opportunities for yourself, the confidence gained in the process works for you to perform when that opportunity arrives at your doorstep.",
      },
      {
        subtitle: "",
        text: "So once the CEO of an US firm asked one of his principal advisers and sales heads that why do my teams require to be in business attire even on transcontinental flights? He simply said because we represent the company and you never know who you would be seated next too. In fact he struck three profitable business deals in one year just from interactions that started on the plane which started with the comment like, “Well you don’t see people dress like this anymore on flights. Where are you headed?”",
      },
      {
        subtitle: "",
        text: "A piece of advice, next time when you sit down at your office/home or anywhere else to make an important call for your sales pitch, even if no one else is watching you, try being in your best clothing ever. Look at the difference it makes in the way your words flow so diligently one after the other.",
      },
      {
        subtitle: "",
        text: "So while you look at the things that you can do to build your image consciously it’s also a whole lot of stuff that your should also avoid and that is where most of the people make the mistake. People are constantly observing your behavior and forming theories about your competence, character, and commitment, which are rapidly disseminated throughout your workplace and beyond. This means one way or the other your image build up would happen if not by yourself then by someone else, since it would happen never the less why not have a voice in that build up?",
      },
      {
        subtitle: "",
        text: "While spending some time with yourself looking to create a positive thinking space is always a welcome move, looking at the possibility of having a conversation with someone who could guide you through your aspirations is not too bad either.",
      },
      {
        subtitle: "",
        text: "In the end all that really matters is your well-being!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent20.title}
          </h2>
          <img
            loading="lazy"
            src={article20}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent20.content.map((section, index) => (
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
