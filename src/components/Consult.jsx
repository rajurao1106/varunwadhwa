import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import author from "../assets/Consulting/watch_video.jpeg";
import play_btn from "../assets/Consulting/animate-play.gif";

export default function Consulting() {
  const [showForm, setShowForm] = useState(false); // Track form visibility
  const [isFormFilled, setIsFormFilled] = useState(false); // Track if form is filled

  const consultingVideos = [
    {
      id: 1,

      videoUrl: "https://www.youtube.com/embed/egvxN78qguk?si=CeVgVZTaYX0dyjbI", // replace with actual video URL
    },
  ];

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormFilled(true);
    setShowForm(false); // Hide form after submitting
  };

  return (
    <div className="consult w-full flex justify-center items-center flex-col">
      <Navbar />

      <section className="py-16 flex justify-center items-center flex-col w-[90%]">
        <h1 className="text-4xl font-bold font-europa text-center">
          Most honest webinar on Career Growth!
        </h1>
        <p className="text-xl font-Minion w-[70%] mt-10 text-center mb-10 max-md:w-[100%]">
          We empower professionals break through career plateaus, reduce stress,
          and reignite passion in their work, helping them achieve 2-3x salary
          growth and a fulfilling career path.
        </p>

        <div className="flex gap-10 w-full max-md:flex-col">
          <div className="flex justify-between items-center gap-8 max-sm:flex-col ">
            {consultingVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white w-full rounded-lg flex justify-center items-center"
                onClick={!isFormFilled ? handleOpenForm : null} // Only open form if not filled
              >
                {isFormFilled ? (
                  <iframe
                    className="rounded-lg w-[560px] h-[315px] max-md:h-[210px]"
                    width="560"
                    height="315"
                    src={video.videoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                ) : (
                  <div className="w-[560px] overflow-hidden h-[335px] max-xl:h-48 rounded-md bg-gray-900 flex items-center justify-center">
                    {/* <img loading="lazy" src={author} alt="" className="w-full h-full"/> */}
                    <p className="text-2xl text-white">
                      video will appear soon
                    </p>
                    {/* <img loading="lazy" src={play_btn} alt="" className="absolute opacity-80"/> */}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <ul>
              <p className="text-3xl underline font-bold font-europa mb-8 ml-5">
                Learn how by watching this webinar
              </p>
              <li className="text-xl mb-2 ml-5 list-disc font-Minion">
                Increase Your Value at work to confidently negotiate higher pay.
              </li>
              <li className="text-xl mb-2 ml-5 list-disc font-Minion">
                Adopt a Growth Mindset and open doors to new opportunities.
              </li>
              <li className="text-xl mb-2 ml-5 list-disc font-Minion">
                Build Meaningful Connections that enrich both your personal and
                professional life.
              </li>
              <li className="text-xl mb-2 ml-5 list-disc font-Minion">
                Nurture Your Well-being—mentally, physically, emotionally, and
                spiritually.
              </li>
            </ul>
            <button
              className="bg-blue-500  w-[50%] max-md:w-full  p-3 rounded-lg font-bold text-white"
              // onClick={handleOpenForm}
            >
              Watch Now for free
            </button>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0  bg-opacity-75 flex items-center justify-center z-50">
            <div
              onClick={handleCloseForm}
              className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center "
            ></div>
            <div className="bg-white z-10 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
              <button
                onClick={handleCloseForm}
                className="absolute right-2 top-2 text-4xl"
              >
                <IoClose />
              </button>
              <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label className="text-lg mb-2">Full Name:</label>
                <input
                  type="text"
                  required
                  className="border p-2 mb-4 rounded-md"
                />
                <label className="text-lg mb-2">Phone Number:</label>
                <input
                  type="tel"
                  required
                  className="border p-2 mb-4 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
