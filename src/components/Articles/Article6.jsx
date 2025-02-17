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
import article6 from "../../assets/Articles/article6.jpg";

export default function Article6() {
  const articleContent6 = {
    title: "The Mehrabian Model: Separating Myth from Reality",
    content: [
      {
        subtitle: "",
        text: "Being able to effectively communicate with everyone is a cornerstone of managing relationships and behavior in a complex environment we live in. The Mehrabian Model to that extent has been the cornerstone in explaining the importance of non-verbal communication.",
      },
      {
        subtitle: "",
        text: "But are the numbers 7-38-55 depicting to us the true story? To find that out you would have to go back to the origin of these findings.",
      },
      {
        subtitle: "Origin :",
        text: "",
      },
      {
        subtitle: "Study 1",
        text: "In Mehrabian and Wiener, (1967), subjects listened to nine recorded words, three conveying liking (honey, dear and thanks), three conveying neutrality (maybe, really and oh) and three conveying disliking (don’t, brute and terrible).",
      },
      {
        subtitle: "",
        text: "The words were spoken with different tonalities and subjects were asked to guess the emotions behind the words as spoken. The experiment finding was that tone carried more meaning than the individual words themselves.",
      },
      {
        subtitle: "Study 2",
        text: "In the second study, subjects were asked to listen to a recording of a female saying the single word 'maybe' in three tones of voice to convey liking, neutrality and disliking. The subjects were then shown photos of female faces with the same three emotions and were asked to guess the emotions in the recorded voices, the photos and both in combination.",
      },
      {
        subtitle: "",
        text: "The photos got more accurate responses than the voice, by a ratio of 3:2 So, in summary Mehrabian found:",
      },
      {
        point15:
          "7% of message pertaining to feelings and attitudes is in the words that are spoken.",
        point25:
          "38% of message pertaining to feelings and attitudes is the way the words are said.",
        point35:
          "55% of message pertaining to feelings and attitudes is in facial expression.",
      },
      {
        subtitle: "",
        text: "Notice the words feelings and attitudes above. If we limit the formula to the specific conditions of the experiments, it is only applicable if:",
      },
      {
        point16: "a speaker is using only one word or at max a few words,",
        point26:
          "their tone of voice is not matching with the meaning of the word, and",
        point36:
          "the judgement being made is about the feelings of the speaker.",
      },
      {
        subtitle: "",
        text: "Something like the below scenario. If your words are not matching with your body language, the listener is more likely to believe your non-verbal cues!!",
        image4: image4,
      },

      {
        subtitle: "",
        text: "What is surprising is when the findings are over-simplified and used across the industry by soft skills professionals and trainers to demonstrate effective communication skills. In that sense, the derivation of the rule comes out to be that when it comes to effective communication only 7% is dependent on words, rest 93% constitutes non-verbal communication + tone.",
      },
      {
        subtitle: "",
        text: "One of the examples that is often quoted is that of Mr Manmohan Singh, that even though he may be using the best of content, his tone and body language often lets him down, making his speech monotonous.",
      },
      {
        subtitle: "",
        text: "Let me take the same argument to the other extreme, consider a Chinese speaker, speaking in front of an Indian audience none of whom understands Chinese. He is using flawless tone and amazing body language; would that make for effective communication. If we applied the Mehrabian rule it should, given the fact that the speaker has taken cognizance of the 93% of communication effectiveness.",
      },
      {
        subtitle: "",
        text: "There is something fundamentally incorrect here isn’t it!!",
      },
      {
        subtitle: "",
        text: "'Please note that this and other equations regarding relative importance of verbal and nonverbal messages were derived from experiments dealing with communications of feelings and attitudes (i.e., like-dislike). Unless a communicator is talking about their feelings or attitudes, these equations are not applicable.'",
      },
      {
        subtitle: "",
        text: "Yet that is precisely what we keep teaching in our communication trainings universally applying the rule to every communication including public speaking.",
      },
      {
        subtitle: "",
        text: "You know when it comes to verbal, tone & body language, it is not a zero - sum game as many people think. If you could use all three effectively and efficiently you could win over every type of audience. Collaboration is what you must seek, instead of putting each of these is competition with one another.",
      },
      {
        subtitle: "",
        text: "The only message I intended to send out through this article is never to undermine your content, for words are powerful, never for a moment consider this scenario that my content only matters 7%. At the same time beware of words-only communications like email. It is very easy to misunderstand what is said, even if emoticons (smileys) are used.",
      },
      {
        subtitle: "",
        text: "In short when you have all the three means available, move away from 7-38-55 Rule to the 33-33-33 Rule!!",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className=" text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent6.title}
          </h2>
          <img
            loading="lazy"
            src={article6}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />
          <div className=" w-full flex flex-col justify-center ">
            {articleContent6.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-5">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point15 || section.point25 || section.point35) && (
                  <ul className="text-lg text-gray-600 list-outside list-decimal ml-6 font-Minion">
                    {section.point15 && <li>{section.point15}</li>}
                    {section.point25 && <li>{section.point25}</li>}
                    {section.point35 && <li>{section.point35}</li>}
                  </ul>
                )}
                {(section.point16 || section.point26 || section.point36) && (
                  <ul className="text-lg text-gray-600 list-outside list-decimal ml-6 font-Minion">
                    {section.point16 && <li>{section.point16}</li>}
                    {section.point26 && <li>{section.point26}</li>}
                    {section.point36 && <li>{section.point36}</li>}
                  </ul>
                )}
                <div>
                  {section.image4 && (
                    <img
                      loading="lazy"
                      src={section.image4}
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
