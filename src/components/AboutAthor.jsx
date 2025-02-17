import React, { useState } from "react";
import author from "../assets/AboutAuthor/author.jpeg";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AboutAuthor = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const NavigateAndScrollConsult = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("consult", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };

  const NavigateAndScrollSpeaking = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("speaking", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };
  const NavigateAndScrollArticles = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("articles", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };

  return (
    <section className="w-full flex justify-center items-center flex-col ">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-[90%] max-md:w-[90%] gap-10 font-Minion max-md:mt-10">
        <div className="flex  justify-center items-start flex-row-reverse max-md:items-center max-lg:flex-col gap-10 ">
          <div className="flex flex-col max-md:w-[100%] w-[80%] ">
            <div className="w-full max-md:flex-col flex flex-col justify-between items-center gap-10 mb-5">
              <img
                loading="lazy"
                src={author}
                alt="Author Varun Wadhwa"
                className="mb-0 w-[25rem] max-md:w-[20rem] rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-europa font-bold mb-5 text-center ">
                  Hi, I am Varun Wadhwa
                </h1>
                <p className="text-lg mb-10 text-justify max-md:text-center">
                  I am passionate about educating young minds so they can live
                  with compassion, clarity, resilience, and courage. I have
                  spent the last decade researching, writing, and interacting
                  with some of the best minds around the topics of growth
                  consciousness, spirituality, public speaking, and leadership.
                  I hope to spread this knowledge to all seekers and learn
                  something new from their experiences.
                </p>
                <h1 className="text-3xl font-europa font-bold mb-5 text-center underline">
                  Author
                </h1>
                <p className="text-lg mb-0 text-justify max-md:text-center">
                  I dedicated my first book, 'Books, Ideas & You' to educating
                  people on the importance of reading. It's a love story woven
                  around so...
                  <br />
                  My award-winning second book, 'The Great Himalayan Treasure,'
                  was focused on the importance of managing yourself to achieve
                  a life of fulfillment and success. It's a story of three
                  friends who go on a treasure hunt and discover the true
                  treasure within us all.
                  <br />
                  My third book, 'Sailing Through Life,' reimagines a world
                  where passion meets purpose, leading to a life filled with
                  growth, success, and fulfillment. It's about empowering young
                  minds with the tools and technologies through some learnings
                  we learned very late in our lives.
                  <br />
                  You can buy all my{" "}
                  <RouterLink to={"/books"} className="text-blue-500">
                    books here.
                  </RouterLink>
                  <br />
                </p>
              </div>
            </div>

            <div className="flex max-md:flex-col gap-10 mb-10 w-full justify-center items-start">
              <div>
                <h1 className="text-3xl font-europa font-bold mb-5 text-center underline">
                  Consultant
                </h1>
                <p className="mb-2 text-lg ">
                  As a consultant, I work with professionals, teaching them{" "}
                  <strong>The Art of Becoming Indispensable at work</strong> so
                  they can:
                </p>
                <div className="flex flex-col pl-3 ">
                  {[
                    "Get faster promotions.",
                    "Demand higher packages.",
                    "Better job opportunities.",
                    "Clear job interviews.",
                    "Better mental health & fitness levels.",
                    "Healthier relationships.",
                    "Growth conscious.",
                    "Oriented towards long-term success.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 list-disc text-lg max-md:text-lg flex gap-2 "
                    >
                      • {item}
                    </li>
                  ))}
                </div>
                <h1 className="mb-2 text-lg mt-0 ">
                  I also consult with educational institutes, corporates, and
                  community networks, teaching them{" "}
                  <strong>'The Art of Facilitation Skills.'</strong> The program
                  focuses on:
                </h1>
                <div className="flex flex-col pl-3">
                  {[
                    "Supporting managers and leaders in training or meetings with ease and confidence.",
                    "This has led to a multifold increase in engagement rates with the audience.",
                    "Supporting managers and leaders in managing all kinds of audiences.",
                    "Leading the way for audience transformation.",
                    "Better personal relationships with colleagues.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 list-disc max-md:text-left text-lg max-md:text-lg max-sm:text-lg flex gap-2"
                    >
                      • {item}
                    </li>
                  ))}
                </div>
                <p className="mb-0 text-lg mt-0">
                  If you need my consulting, please view{" "}
                  <RouterLink
                    to="/consult"
                    className="text-blue-500 cursor-pointer"
                  >
                    this link
                  </RouterLink>{" "}
                  to the videos in which I explain these programs in detail.
                  There are also many free materials available for your
                  reference.
                </p>
              </div>
            </div>

            <div className="w-full justify-center items-center flex">
              <div className="flex max-md:flex-col flex-row-reverse gap-10 mb-10  justify-center items-start">
                <div>
                  <h1 className="text-3xl font-bold font-europa mb-5 text-center underline">
                    Public Speaker
                  </h1>
                  <p className="text-lg mb-0 text-justify max-md:text-center">
                    I truly feel alive when I speak with my audience. It gets my
                    adrenaline running and my heart singing. It's like the
                    microphone is an extension of myself.
                    <br />
                    I am occasionally asked to speak at companies, conferences,
                    educational institutes, or private events on topics such as
                    growth consciousness, career development, success factors,
                    leadership development, etc.
                    <br />
                    If you want me to speak at your event, please{" "}
                    <RouterLink
                      to={"/book-here"}
                      className="text-blue-500 font-bold cursor-pointer"
                    >
                      click here
                    </RouterLink>{" "}
                    to learn and submit a request.
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="flex max-md:flex-col gap-10 mb-10 w-full justify-center items-center ">
              <div className="flex-col gap-5 flex ">
                <h1 className="text-3xl mb-0 mt-0 font-bold font-europa text-center underline">
                  Other Interests
                </h1>
                <div>
                  <h2 className="text-xl font-europa font-bold max-md:text-center">
                    Badminton :
                  </h2>
                  <p className="text-lg max-md:text-center">
                    It is my go-to thing to stay healthy, flexible, and focused,
                    and it also helps enhance my social interaction and
                    teamwork. The game is a fantastic way to re-energize and is
                    something I always look forward to. I am not a professional
                    yet, but I am certainly getting there.{" "}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-europa font-bold max-md:text-center">
                    Book Collection :
                  </h2>
                  <p className="text-lg max-md:text-center">
                    It's well over five hundred and growing. They make my house
                    into my home. It feels good just to look at them, knowing
                    that they are there to guide me whenever I lose track.
                    Someday, I hope to have them in thousands in my personal
                    library.{" "}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-europa font-bold max-md:text-center">
                    Health & Fitness :
                  </h2>
                  <p className="text-lg max-md:text-center">
                    Eating healthy, sleeping on time, and getting some kind of
                    exercise should be on everybody's interest list. Being
                    healthy is not an option today; it's a necessity. I like to
                    experiment with sports, yoga, stretching, gym, and running.
                    Each of these activities brings out the best version of me
                    for the world to see.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
