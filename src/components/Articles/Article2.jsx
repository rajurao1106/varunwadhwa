import React from "react";
import Navbar from "../Navbar";
import image1 from "../../assets/Articles/image1.png";
import article2 from "../../assets/Articles/article2.jpg";

export default function Article2() {
  const articleContent2 = {
    title: "Spirituality Made Simple!",
    content: [
      {
        subtitle: "",
        text: "For days on I have been wondering, how does one explain the beautiful yet mysterious world of spirituality to someone who has never experienced that dimension, especially since all of us are so hardwired into living in a world where we want more of everything, more clothes, more houses, more cars, more money and thus more stress. The other challenge is the concern with the overanalysing of the subject since people over many generations have written and rewritten about the subject of spirituality and made it more complex than ever. The repercussions are so intense that people now think it’s a taboo that needs to be avoided at all costs. ",
      },
      {
        subtitle: "",
        text: "There have been people though who have captured the essence of spirituality remarkably well, through their teachings and writings they have enlightened the world and left an indelible impact. That statement though only applies to the minority and that unfortunately is also the tragedy in today’s world where people think that intelligence lies in making simple things complicated, whereas the true mark of intelligence is when you could make complicated things simple. Simple for everyone to understand and implement!",
      },
      {
        subtitle: "",
        text: "“If you can’t explain it to a 6-year-old, you don’t understand it yourself.” – Albert Einsteine",
      },
      {
        subtitle: "",
        text: "Therefore, to demystify this dimension let us first explore what is not spirituality so that we can peel away the skin and focus on the fruit. ",
      },
      {
        point1:
          "It’s not about God or religious beliefs – It’s rather about exploring this life to the fullest",
        point2:
          "It's not about going to a sacred place somewhere in the Himalayas – It's about exploring possibilities to create that sacred place inside you or even inside your home",
        point3:
          "It's certainly not a disempowerment or a hindrance – On the contrary, it’s the biggest empowerment, unfortunately very few realize that ",
        point4:
          "It's not for a specific set of people – It’s really for everyone ",
        point5:
          "It's not just about being happy and joyful – It's about understanding that being happy would help you perceive more so that you can explore this world in so many different ways than you have imagined",
      },
      {
        subtitle: "Now the question is then, what is spirituality? ",
        text: "Let’s explore this through a simple model. Let us imagine this world is divided into the physical world and the Non-Physical world or the spiritual world. Let’s further divide this on the basis of two dimensions which are the motive for us to perform any activity in this world: I) Pain, II) Pleasure.",
        image1: image1,
      },
      {
        subtitle: "",
        text: "Tony Robbins the world-renowned author, coach, speaker, and philanthropist in one of his most famous teachings talks about this concept of Pain & Pleasure. He mentions and I quote:",
      },
      {
        subtitle: "",
        text: "“One of the most important precepts about human behaviour and change is that at the most basic level, there are two forces that motivate people to do what they do: the desire to avoid pain or the desire to gain pleasure.”",
      },
      {
        subtitle: "",
        text: "To put it in a different way all he is trying to say is that in the physical world, every human behaviour is driven by either the desire to gain pleasure(beautiful house, fancy cars, fame and fortune, desirable partner, intelligent children, etc.) or the fear of pain (financial insecurity, loneliness, disrespectful neighbours, etc.) That is so true and it's such an elegant yet simple way to perceive human behaviour! ",
      },
      {
        subtitle: "",
        text: "Now imagine yourself transcending from this lower physical world to a higher spiritual world where there is no desire to gain any pleasure or fear of pain. Imagine what it would look like to be in a place where your behaviour is no longer driven by the shackles of Pain & Pleasure. For anyone who has never experienced this, it would probably be arduous to imagine. But isn’t it true that we have all had moments in our lives where we felt the need to be free from these physical desires that push us every day and instead transcend into a place where we are completely in charge of our lives?",
      },
      {
        subtitle: "",
        text: "Let’s understand this at a deeper level. It’s a scientifically proven fact that if you are free from these constraints that unconsciously drive your behaviour and if you can separate yourself from the result, you are in a better position to think clearly and make better decisions because you are in a stressed-free no-pressure zone. It means you are not dedicated to the result but rather the process. Why is this important? ",
      },
      {
        subtitle: "",
        text: "Well, please understand this, success in any field is an outcome of the process done right. One common mistake that people make in life is that they are over-obsessed with the goals and under-obsessed with the process of achieving those goals. Therefore please, please, please “Make Process Your Best Friend”",
      },
      {
        subtitle: "That’s what Bhagvat Gita also mentions: ",
        text: "Karm karo, fal ki chinta mat karo (Do your duty without thinking about results) ",
      },
      {
        subtitle: "",
        text: "If you are wondering if this is even possible let alone being practical, then let me remind you that people have been doing this for generations, staying in the physical world, yet exploring the possibilities of transcending into the spiritual world. And that is all I ask you to do, just explore the idea!",
      },
      {
        subtitle: "",
        text: "This is my wish and blessings that everyone must find that special place where they continue to be involved with everything they do and yet not be attached to any of that stuff.",
      },
      {
        subtitle: "",
        text: "Would love to hear your feedback or comments on the subject. Cheers! ",
      },
      {
        subtitle: "",
        text: "",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent2.title}
          </h2>
          <img
            loading="lazy"
            src={article2}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent2.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point1 ||
                  section.point2 ||
                  section.point3 ||
                  section.point4 ||
                  section.point5) && (
                  <ul className="text-lg list-outside list-disc ml-6 mb-5 font-Minion text-gray-600">
                    {section.point1 && <li>{section.point1}</li>}
                    {section.point2 && <li>{section.point2}</li>}
                    {section.point3 && <li>{section.point3}</li>}
                    {section.point4 && <li>{section.point4}</li>}
                    {section.point5 && <li>{section.point5}</li>}
                  </ul>
                )}
                <div>
                  {section.image1 && (
                    <img
                      loading="lazy"
                      src={section.image1}
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
