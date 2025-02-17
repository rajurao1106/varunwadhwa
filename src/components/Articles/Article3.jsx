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
import article3 from "../../assets/Articles/article3.jpg";

export default function Article3() {
  const articleContent3 = {
    title: "Your Superpower",
    content: [
      {
        subtitle: "",
        text: "Everyone has a superpower, something that they have grown up with, something that they carry everywhere they go, something that reflects in every action that they perform. The truth is that most people cannot imagine living their lives without this superpower, but the irony is that most of these people spend their entire lives not becoming conscious of this hidden treasure.",
      },
      {
        subtitle: "",
        text: "For you, this superpower could be your incredible management of time or money, for someone else it could be the way she handles every relationship in her life. For others, it could be this burning desire of building something new from the scratch or perhaps building something out of nothing. Maybe you are someone who loves to bring people together or maybe your heart opens up when you make others smile. ",
      },
      {
        subtitle: "",
        text: "For me, my superpower is helping others! ",
      },
      {
        subtitle: "",
        text: "In case you are wondering, how come this is an actual superpower, I want you to stay with me for a bit longer. ",
      },
      {
        subtitle: "",
        text: "Ever since my childhood, there was this urge to help as many people as I could, even if it meant sacrificing my comfort. I still remember the smile on my friends' faces when I would offer them my bus seat and continue to stand for the entire journey. I also remember the bizarre gaze of my parents when I would refuse to take a gift or never ask for anything for myself during the market visit so they could continue to save enough for the family. Maybe this superpower came as an inheritance from them because ever since I remember, I never really saw them living for themselves. It was always about our family and the community at large. ",
      },
      {
        subtitle: "",
        text: "Therefore, it’s not surprising that as I continue to shape my professional career, I seem to be circling around this superpower. Earlier perhaps it was unconscious but now its become a more conscious choice. Whether it’s the books that I author to spread awareness, the topics that I choose in the public speaking events (child education, spirituality, gratitude & leadership are my favorite), or even the job that I perform as a compliance professional. There is a relentless endeavor of creating a better world by serving others starting with one person at a time. If you are wondering why am I trying to hit a self-goal here, trust me the idea is to serve you only. My superpower helps me be really good at my work because I want to be out there serving others, it makes me feel fulfilled and helps me sleep well at night. There is pride, gratitude, and contentment in everything I do thanks to my superpower. ",
      },
      {
        subtitle: "",
        text: "Therefore, I invite you on this journey of self-exploration to discover this hidden treasure. Don’t rely on this world to do this job for you, you are the only one who has lived with yourself every second, therefore no one knows you better. Spend some time alone where no one is there to bother you, look for that move that you have practiced 10000 times, don't be disappointed if it doesn't happen immediately to you, have faith that in a moment of joy and gratitude, it would come to you. ",
      },
      {
        subtitle: "",
        text: "Now circle back to the above examples that I mentioned, your superpower of money management could serve you to become an investment consultant or management trainer. You have a superpower in handling relationships, you could be an HR manager or a psychologist. For someone who loves to connect people, you could be into network marketing or become a social media expert. If your superpower is into building something new, then you already know that the entrepreneurship journey awaits you. And last but not the least, if you feel great about making others smile then Amazon Prime/Netflix is all set to welcome you to their comedy stage.",
      },
      {
        subtitle: "",
        text: "So what is your SUPERPOWER my friend, time to find out! ",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent3.title}
          </h2>
          <img
            loading="lazy"
            src={article3}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent3.content.map((section, index) => (
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
