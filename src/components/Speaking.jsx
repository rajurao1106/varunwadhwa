import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import youtube_video from "../assets/Speaking/youtube_video.jpg";
import insta_video from "../assets/Speaking/insta_video.png";

export default function Speaking() {
  const upcomingEvents = [
    { id: 1, name: "Arya College Of Engineering", date: "September 14, 2024" },
    { id: 2, name: "Modern School", date: "October 4, 2024" },
  ];

  return (
    <section className="speaking bg-white w-full mb-10">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 w-[60%] max-md:w-[90%] max-md:mt-10">
        {/* Hero Title */}
        <h1 className="text-3xl font-bold text-gray-900 font-europa mb-6">
          Speaking Events
        </h1>

        {/* Intro Text */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-Minion">
          I am occasionally asked to speak at companies, conferences,
          educational institutes, or private events. You can view some of my
          speaking videos below or visit my{" "}
          <a
            href="https://www.youtube.com/@biyclub2178"
            className="text-red-500"
          >
            YouTube channel
          </a>{" "}
          for more details.
        </p>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-Minion">
          If you want me to speak at your event, please submit a request by
          filling out the form below or writing to us at{" "}
          <a
            href="mailto:info@varunwadhwa.com"
            className="text-blue-500 underline"
          >
            info@varunwadhwa.com
          </a>
        </p>

        <div className="w-full flex max-md:flex-col items-center justify-between mb-10 gap-10">
          <div className="w-full bg-white flex items-center justify-between flex-col rounded-lg shadow-lg">
            <img
              loading="lazy"
              src={youtube_video}
              alt=""
              className="w-full rounded-t-xl"
            />
            <a
              href="https://youtu.be/egvxN78qguk?si=0FNQObt3XyBL06Ih"
              className="w-full  p-3 text-center text-white text-xl bg-pink-600 hover:bg-pink-700 rounded-b-xl "
            >
              Watch Video
            </a>
          </div>
          <div className="w-full bg-white flex items-center justify-between flex-col rounded-lg shadow-lg">
            <img
              loading="lazy"
              src={insta_video}
              alt=""
              className="w-full rounded-t-xl"
            />
            <a
              href="https://www.instagram.com/reel/DAVzA3rshvQ/?igsh=MXAxbXBxdzlmamRodQ%3D%3D"
              className="w-full  p-3 text-center text-white text-xl bg-pink-600 hover:bg-pink-700 rounded-b-xl "
            >
              Watch Video
            </a>
          </div>
        </div>

        {/* Upcoming Events */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-europa">
          Recent Events
        </h2>
        <ul className="space-y-3 mb-10">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="text-gray-700 text-lg">
              <strong>{event.name}</strong> - {event.date}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/book-here"
          smooth={true}
          duration={500}
          className="inline-block px-6 py-3 text-white bg-pink-600 hover:bg-pink-700 rounded-md transition font-europa"
        >
          Submit a Request
        </Link>
      </div>
    </section>
  );
}
