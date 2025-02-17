import React from "react";
import one from "../assets/WhyWanted/number-1.png";
import two from "../assets/WhyWanted/number-2.png";
import three from "../assets/WhyWanted/number-3.png";
import four from "../assets/WhyWanted/number-4.png";
import five from "../assets/WhyWanted/number-5.png";
import six from "../assets/WhyWanted/number-6.png";
import seven from "../assets/WhyWanted/number-7.png";
import eight from "../assets/WhyWanted/number-8.png";
import nine from "../assets/WhyWanted/number-9.png";
import ten from "../assets/WhyWanted/number-10.png";

export default function WhyWanted() {
  const consultingVideos = [
    {
      id: 1,
      title: "Consulting Video 1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with actual video URL
      ctaText: "Learn More",
      desc: "description",
      ctaLink: "/consulting/video1",
    },
    {
      id: 2,
      title: "Consulting Video 2",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with actual video URL
      ctaText: "Watch Now",
      desc: "description",
      ctaLink: "/consulting/video2",
    },
    {
      id: 3,
      title: "Consulting Video 3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace with actual video URL
      ctaText: "Get Started",
      desc: "description",
      ctaLink: "/consulting/video3",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center bg-gray-50 pt-5">
      <div className="w-[90%] flex flex-col justify-center items-center gap-10 max-lg:gap-8 max-md:gap-6">
        <h2 className="text-3xl font-europa font-bold text-center max-md:text-2xl max-sm:text-xl">
          Why habits are the “compound interest” of self-improvement
        </h2>

        <iframe
          className="rounded-xl w-[560px] h-[315px] max-[1024px]:w-[480px] max-[1024px]:h-[270px] max-md:w-[400px] max-md:h-[225px] max-sm:w-[320px] max-sm:h-[180px]"
          src="https://www.youtube.com/embed/eIC5r3xHF0E?si=-FyqJdJFQ7dLympm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <h1 className="text-3xl font-europa font-bold text-center max-md:text-2xl max-sm:text-xl">
          10 Things This Book Will Teach You
        </h1>

        <p className="text-lg max-md:text-base max-sm:text-sm text-center">
          Learn how to…
        </p>

        <div className="flex gap-3 max-sm:flex-col">
          <div className="flex gap-3 flex-col items-start max-sm:items-center">
            {/* Each item is wrapped in a div with improved alignment */}
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={one} alt="1" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Face challenges with resilience, like adjusting sails to
                changing winds.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={two} alt="2" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Build a strong moral compass to guide you through life.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={three} alt="3" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Set clear goals to stay focused and on track.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={four} alt="4" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Learn from mistakes, growing stronger with each experience.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={five} alt="5" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Be adaptable to life’s unpredictable changes.
              </p>
            </div>
          </div>

          <div className="flex gap-3 flex-col items-start max-sm:items-center">
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={six} alt="6" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Find inner peace to stay calm in turbulent times.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={seven} alt="7" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Embrace self-discovery to live authentically.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={eight} alt="8" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Strengthen relationships through empathy and support.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={nine} alt="9" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Make confident decisions aligned with your values.
              </p>
            </div>
            <div className="flex items-start gap-3 w-[80%] max-md:w-[90%] max-sm:w-full max-md:text-lg max-sm:text-base">
              <img loading="lazy" src={ten} alt="10" className="w-6 h-6" />
              <p className="text-xl font-europa font-semibold text-left">
                Stay positive and hopeful, inspiring others as you go.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg max-md:text-base max-sm:text-sm text-center mb-5">
          …and much more.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingVideos.map((video) => (
              <div key={video.id} className="bg-white p-6 rounded-lg shadow-lg">
                <iframe
                  className="w-full h-64 mb-4 rounded-md"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{video.title}</h3>
                <p className='py-10'>{video.desc}</p>
                <a
                  href={video.ctaLink}
                  className="block w-full py-2 px-4 bg-pink-600 hover:bg-pink-700  text-white text-center font-medium rounded-md "
                >
                  {video.ctaText}
                </a>
              </div>
            ))}
          </div> */}
      </div>
    </section>
  );
}
