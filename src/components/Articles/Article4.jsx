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
import article4 from "../../assets/Articles/article4.jpg";

export default function Article4() {
  const articleContent4 = {
    title: "Parenting Guide: The Value of Perspective",
    content: [
      {
        subtitle: "",
        text: "As am writing this article am thinking about the Covid-19 situation which the world is going through, it has done many things to this world. While it may have created many existential, economic, and social problems it has certainly brought all of us together. For the first time, the world is not fighting against each other but rather against a common enemy. This cannot be called as a black swan event since the very definition of a black swan event is one that cannot be anticipated. This was one event which was anticipated but the one which we were not prepared for. The experts had warned about it long ago, however, the world chose to ignore.",
      },
      {
        subtitle: "",
        text: "But this article is not about Covid-19, it’s about us. There is a whole generation of people that have seen this pandemic is unlikely to forget about this event during their lifetime. However, the question is would they remember the lessons that came out of this event.",
      },
      {
        subtitle: "",
        text: "What about you, would you remember the lessons that came out of this pandemic four-five years from now? Would you thank the almighty that you were born in a generation that saw this pandemic? Would you grow from this situation to become better physically, mentally, emotionally, and spiritually? Would you thank god that this happened to you?",
      },
      {
        subtitle: "",
        text: "For the majority of us, the answer is NO. That’s because most of us are not conditioned to think like that!",
      },
      {
        subtitle: "",
        text: "We were never told growing up that situations like this would come your way. You cannot choose if you would like to part of them or not, however, you can certainly choose to determine your response.",
      },
      {
        subtitle: "",
        text: "Well, we were never told but that doesn’t stop us from talking to our children about this. Your child needs to understand that every situation that happens to them can be viewed as either a crisis or an opportunity. If they look for an opportunity in every challenging situation they would to able to harness their true potential and would be able to grow from strength to strength. On the contrary, if they view every challenging situation as another crisis looming large on their life then they would limit their exposure to life and start to withdraw into their own little cocoon.",
      },
      {
        subtitle: "",
        text: "And no matter how safe that cocoon is, you would not like the butterfly to go back into that shell. Our children must not only be given the freedom to fly but the courage to express themselves freely without thinking too much about the consequences. The problem is, once they begin to withdraw from the life they would think twice before committing to anything new. Before we even know, they would have themselves shelved their wings.",
      },
      {
        subtitle: "",
        text: "When my dad passed away last year, a similar situation was in front of me. He was a great influence in my life and saying goodbye wasn’t easy. On the third day of his funeral rights, I had my conference in Singapore. I knew if I would not go, everybody would understand. There was chaos outside, however, within me I was peaceful and serene. I had realized that there are only two ways that you could deal with the loss of a loved one. Either accept that with grace or make a chaos out of it. Accepting this with grace gave me the opportunity to find a solution instead of searching for solace. In case you are wondering if I did attend the Singapore conference, then yes indeed I did. I would always miss him but finding solace in this pain isn’t the solution. You must look for opportunities to grow through each of these unfortunate events.",
      },
      {
        subtitle: "",
        text: "Now, coming back to our children, the question really is what can we do as parents to inculcate this value of perspective. Here is some advice you could use:    ",
      },
      {
        subtitle: "",
        text: "Expression of Joy Vs Pursuit of Happiness – The world needs joyful, blissful human beings. The angry, egoistic, fearful, frustrated ones have caused the most amount of damage to this planet. All children when they are born are a true expression of joys, we as parents make the mistake of sending them on this journey called the pursuit of happiness. We make their happiness dependent on material achievements like A+ grades, winning sports/art competitions, and whatnot. Just do this much, try and create a playful, joyful atmosphere at home so that a child doesn’t have to depend on material achievements to find his/her happiness.",
      },
      {
        subtitle: "",
        text: "Consequence Management – Teaching your child how to handle failures is perhaps the biggest gift you can offer them. They may not exactly like to hear what you tell them, since instead of consoling them for the immediate loss, you are preparing them for the next race, however, sooner or later they would realize the big picture.",
      },
      {
        subtitle: "",
        text: "Balance in Stillness – I was reading an amazing book, “Stillness is the Key” by Ryan Holiday, he writes, and I quote, “Stillness is what aims the archer’s arrow. It inspires new ideas. It sharpens perspective and illuminates’ connections. It slows the ball down so we may hit it. It generates a vision, helps us resist the passion of the mob, makes way for gratitude and wonder. Stillness allows us to persevere. To succeed. It is the key that unlocks the insights of genius and allows us, regular folks, to understand them.” ",
      },
      {
        subtitle: "",
        text: "Teach your child how to sit quietly in a room alone.",
      },
      {
        subtitle: "",
        text: "Positive Nurturing: Positive nurturing parenting is nourishing life through the following techniques:",
      },
      {
        point1:
          "Developing positive self-worth by having appropriate expectations.",
        point2:
          "Developing a sense of caring and compassion by building empathy",
        point3: "Providing children with dignified discipline.",
        point4: "Developing a healthy sense of empowerment.",
      },
      {
        subtitle: "",
        text: "Happy Reading and Parenting! Signing off with a smile of my daughter for you to remember this message. :-)",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent4.title}
          </h2>
          <img
            loading="lazy"
            src={article4}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent4.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                <div className="">
                  {(section.point1 ||
                    section.point2 ||
                    section.point3 ||
                    section.point4 ||
                    section.point5) && (
                    <ul className="text-lg text-gray-600 list-outside list-disc ml-6 font-Minion p-5">
                      {section.point1 && <li>{section.point1}</li>}
                      {section.point2 && <li>{section.point2}</li>}
                      {section.point3 && <li>{section.point3}</li>}
                      {section.point4 && <li>{section.point4}</li>}
                    </ul>
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
