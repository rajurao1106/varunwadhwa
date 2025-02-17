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
import article7 from "../../assets/Articles/article7.jpeg";

export default function Article7() {
  const articleContent7 = {
    title: "Adult or Adulterated?",
    content: [
      {
        subtitle: "",
        text: "Sir Ken Robinson in one of his famous TED talks made a remarkable point when he said that when we grow up, we also grow out of our creativity rather than growing into it. The amazing raw intelligence that every child is born with is often induced out of him through this system which often lays all its emphasis on the intellect, the so called LEFT Brain, which is all about Logic, Analysis, words, facts, language, the list can go on.",
      },
      {
        subtitle: "",
        text: "When we are children, we are all gung-ho on changing this world, aim for nothing less than the starts and settle for nothing less than the moon. Sometimes I wonder what really happens when we grow up? The answer is not that difficult, it’s an answer which has killed many a million dreams.  What would others thing about me!! Sir Ken Robinson in his above talk told a story about a little girl who was drawing the picture of God. When the teacher told her, Dear Sweetheart how can you draw the picture of God, no one knows how he looks? The little child just smiled and said, you know what, they will in a minute!! Children just don’t care what others think, they just don’t have that noise telling them inside their head, What would others thing about me!!",
      },
      {
        subtitle: "",
        text: "When Adam Braun, the Founder and CEO of the NGO, Pencils of Promise asked a child from India, what is the one thing that you want? The child though for a moment and then replied, I need a pencil. Isn’t that amazing, he could have asked for anything, but he knew the instrument that had the potential power to change this world. The answer inspired Adam Braun to focus on children’s education as a medium to express his dream. Pencils of Promise is today one of the biggest NGO networks across the globe, covering more than 30000 students and opening a school on this planet every 90 hours.",
      },
      {
        subtitle: "",
        text: "This recently happened to me when I was speaking to my wife standing in front of a three floored Bunglow, the roof would always belong to the third floor right I said. My wife was nodding her head when suddenly I noticed my youngest sister-in-law (8 years old) sitting behind in our car disapproving my statement. No Jiju she said, the roof always belongs to the top floor. She had both of us nodding our heads!! Children speak from raw intelligence you see.",
      },
      {
        subtitle: "",
        text: " In my own little way have tried to work around things that could connect me to that raw intelligence.",
      },
      {
        subtitle: "",
        text: "Call for Action",
      },
      {
        subtitle: "Revisit your Childhood Memories",
        text: "Some memories of your childhood are worth a revisit for they connect you with your true self, the innocent child who dreamt without fears. If you would want to know mine favourite moment, it is to make shapes and figures from the clouds.",
      },
      {
        subtitle: "Daydreaming",
        text: "Some of the best ideas that Einstein would have was when he was daydreaming in his bathtub playing around with bubbles. You may choose your own bubble moment!!",
      },
      {
        subtitle: "Play with your kids",
        text: "Whom would you rather learn from, a mentor who is always laughing and stays happy or one who is always cranky and keeps complaining. There is nothing more relaxing and satisfying than playing with your kids, spend time with them for they would teach you the joy in being joyful!!",
      },
      {
        subtitle: "Write down your dreams",
        text: "I cannot over-emphasize this enough, written dreams become your goals else it’s all mere fantasies. I had written earlier in one of my articles on the Harvard study, which focused on the income of the group of students after 10 years of professional careers comparing those who write down their goals vs those who do not. The 3 percent who had written goals were earning, on average, 10 times as much as the other 97 percent of the class combined.",
      },
      {
        subtitle: "Get into the habit of writing",
        text: "You do not need a reason to write, it’s a medium that gives you space to present your new ideas, at first to yourself and then to the world.",
      },
      {
        subtitle: "",
        text: "To my child who is about to born –",
      },
      {
        subtitle: "",
        text: "When you are learning to fail I hope I do not come in your way.",
      },
      {
        subtitle: "",
        text: "For I know you would be preparing to try.",
      },
      {
        subtitle: "",
        text: "When you are failing to try I do hope I come in your way.",
      },
      {
        subtitle: "",
        text: "For I know you would be preparing to fail. ",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent7.title}
          </h2>
          <img
            loading="lazy"
            src={article7}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent7.content.map((section, index) => (
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
