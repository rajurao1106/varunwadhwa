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
import article16 from "../../assets/Articles/article16.jpg";

export default function Article16() {
  const articleContent16 = {
    title: "Ignoring Soft Skills: A Sin!!",
    content: [
      {
        subtitle: "",
        text: "Sit down before you absorb these numbers. Research conducted by Harvard University, and Stanford Research Centre has all concluded that 85% of job success comes from having well‐developed soft and people skills, and only 15% of job success comes from technical skills and knowledge (hard skills)",
      },
      {
        subtitle: "",
        text: "This is not a typing error, you heard it right, a whopping 85% your job success comes from Soft Skills. Reverse the numbers and you would find out the percentage of your money an average person spends on developing these soft skills (15% or sometimes even less). There could not have been a bigger disconnect.",
      },
      {
        subtitle: "",
        text: "Very few people know this story that Mr Narayan Murthi once wrote to the ICAI (Institute of Chartered Accountants of India), a letter in which he objected to the quality of some of these skills of the Top Chartered Accountants being hired by Infosys. The leaders always knew the importance which is attached to these skills, it’s about time everyone else did as well.",
      },
      {
        subtitle: "",
        text: "You would not have to worry too much if you take care of the three key attributes, they give you the ACE (the highest card of the pack) you need to Rise in your respective field.  ",
      },
      {
        subtitle: "Attitude",
        text: "",
      },
      {
        point19:
          "Creating a positive ambience in your mind – Remember thoughts have creative energy",
        point29: "Putting first things first – time management",
        point39: "Converting your dreams into vision – Goal settings",
        point49:
          "Respond to a situation instead of reacting – Stress Management",
        point59: "Achieving your highest efficiency – Self Motivation",
        point69: "Creating synergies – Team work",
      },
      {
        subtitle: "Communication",
        text: "",
      },
      {
        point110:
          "Body Language Finesse – Remember Non-verbal attracts for 55% of the total views",
        point210: "Create powerful first impressions - your clothes speak too",
        point310:
          "The Art of Listening i.e. understanding others before being understood",
        point410: "Negotiation Skills i.e. creating a win-win situation",
        point510: "Creating connections through Small Talk Etiquette",
        point610: "Business Etiquette  ",
        point710: "Dining Etiquette",
        point810: "Social Media Etiquette ",
        point910: "Emails Etiquette",
      },
      {
        subtitle: "",
        text: "My only request to you is that when you are going for an ACE, go for an ACE of hearts because a heart could give wings to any skill.",
      },
      {
        subtitle: "",
        text: "Throw your heart over the Bar and your body shall follow. – Norman Vincent Peale",
      },
      {
        subtitle: "",
        text: "Now some food for thought!! How much of these skills could you gather from reading books or watching videos?? If someone tells you these are enough, they are not being completely honest to you, especially since you are putting something on line which accounts for 85% of your success in professional career. Ask for help from anyone you can look up to and create a professional learning ambiance around yourself.  ",
      },
      {
        subtitle: "",
        text: "Just remember soft skills are essential in today’s challenging professional world and in case you possess some of these, the career path will only get smooth for you.",
      },
      {
        subtitle: "",
        text: "Don’t ignore them. It’s a Sin!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent16.title}
          </h2>
          <img
            loading="lazy"
            src={article16}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent16.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point19 ||
                  section.point29 ||
                  section.point39 ||
                  section.point49 ||
                  section.point59 ||
                  section.point69) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 mb-5 font-Minion">
                    {section.point19 && <li>{section.point19}</li>}
                    {section.point29 && <li>{section.point29}</li>}
                    {section.point39 && <li>{section.point39}</li>}
                    {section.point49 && <li>{section.point49}</li>}
                    {section.point59 && <li>{section.point59}</li>}
                    {section.point69 && <li>{section.point69}</li>}
                  </ul>
                )}
                {(section.point110 ||
                  section.point210 ||
                  section.point310 ||
                  section.point410 ||
                  section.point510 ||
                  section.point610 ||
                  section.point710 ||
                  section.point810 ||
                  section.point910) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 mb-5 font-Minion">
                    {section.point110 && <li>{section.point110}</li>}
                    {section.point210 && <li>{section.point210}</li>}
                    {section.point310 && <li>{section.point310}</li>}
                    {section.point410 && <li>{section.point410}</li>}
                    {section.point510 && <li>{section.point510}</li>}
                    {section.point610 && <li>{section.point610}</li>}
                    {section.point710 && <li>{section.point710}</li>}
                    {section.point810 && <li>{section.point810}</li>}
                    {section.point910 && <li>{section.point910}</li>}
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
