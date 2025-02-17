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
import article1 from "../../assets/Articles/article1.jpg";

export default function Article1() {
  const articleContent1 = {
    title: "The Journey from Something to Nothing!",
    content: [
      {
        text: "They say if you are NOTHING then you can be ANYTHING but if you already SOMETHING then you can be NOTHING! The above sentence may sound mystifying if you read it once but if you pay a little more attention, you will appreciate that it makes perfect sense. It originates at the juncture where science meets spirituality and where the eastern wisdom meets the western principles.",
      },
      {
        text: "The eastern wisdom of Sanatana Dharam which is the original name of Hinduism talks about the way we must all live our lives and Shiva has a special place in this culture, he is often referred to as the God of Gods or the Mahadev. The word Shiva means no-thing; nothing from which everything was created; created and manifested to be adorned and respected. We emerge from nothingness and go back to nothingness. Nothing here does mean that which has no value or substance but rather that which is not physical. Shiva has no form, but Shiva takes the form of everything that we perceive and that which all perceive. It is referring to the non-physical dimension of this cosmos which occupies 99% of the space.",
      },
      {
        subtitle: "",
        text: "If you read the above few sentences again, somewhere you would be reminded of the black holes. A black hole represents the ‘void’ or ‘nothingness’ in Space. Nothing survives, it just transcends, it goes right into the Absolute. Scientists today are beginning to realize that this dimension which we often refer to as the dark energy has its intelligence, however, we need a different kind of intelligence to realize this. An intelligence that is not marred with intellect. Our modern education system has focused all its energies on the intellect as a form of intelligence, whereas the highest form of intelligence is the ability to perceive or be receptive to life. That is where the reference to Shiva and the third eye comes into the picture. The sensory eyes can perceive that which is physical. When you want to see something that is not physical, the only way to look is inward. When we refer to the “third eye”, we are symbolically talking about seeing something that the two sensory eyes cannot see.",
      },
      {
        subtitle: "Meditation",
        text: "Let’s clear the air on meditation a little bit shall we? First of all, it’s not an act that you must perform in a certain manner, it’s a quality that you must imbibe in yourself. In that sense you don’t meditate, you become meditative. When you become meditative you start cleaning up your life because you feel you can’t go on living life through someone else lens, you are tired of people telling you about how you must live your life and there is a natural inclination to search for the truth in its purest form. Cleaning up your life also means extricating yourself from those things which are obstacles to your liberation.",
      },
      {
        subtitle: "Gratitude",
        text: "Everything that has come to human beings in the form of resources has come from this mother earth, I am asking today are we thankful enough? Everything that perceives as our own in terms of our body or our thoughts has also been picked up from the food that we have eaten and expressions that we have gathered. Again are we thankful enough to our parents, teachers, friends, loved ones, mentors, and well-wishers for this? The more we bow down to this life for what it has given to us, the more we shall receive.",
      },
      {
        subtitle: "Higher Purpose",
        text: "If you would like to live a truly wealthy life it’s important to support a cause that touches you. You must take time out to volunteer and donate to social causes. Learn to empathize with others as everyone has their share of struggles cut out. Your higher purpose is not something you set up for the month or year but rather is something around which you must set up your life. It gives us the biggest reason to get up from bed every day and strive towards. It’s about leaving a legacy that people would remember you for, long after you have gone.",
      },
      {
        subtitle: "Blessings",
        text: "To bless everyone and everything is one of the highest forms of intelligence. It opens the doors for opportunities that we never thought existed. Once you start blessing everything and everyone, you naturally start receiving these blessings. Again, don’t a thing from the intellect, strive towards exploring this possibility! Sooner or later the very earth that you walk upon would bless you, the food you eat would bless you, the air you breathe would bless you and every person you meet shall also bless you. I leave you with these words so you could remember: The real journey is from being SOMETHING to being NOTHING!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className="  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5">
            {articleContent1.title}
          </h2>
          <img
            loading="lazy"
            src={article1}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full ">
            {articleContent1.content.map((section, index) => (
              <div key={index} className="">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-4">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600 mb-4 font-Minion text-lg ">
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
