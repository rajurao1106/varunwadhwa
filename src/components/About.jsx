import React from "react";

import book from "../assets/About/book1.jpg";

const About = () => {
  return (
    <section className="about w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5 font-europa">About My Books</h1>
      <div className="flex flex-col justify-center items-center w-[60%] max-md:w-[90%]">
        <h2 className="text-2xl font-semibold mb-5 font-europa underline">
          Books, Ideas & You!
        </h2>
        <p className="text-lg  mb-5 text-justify">
          In this age of technology and social media where everyone is
          preoccupied with a million things, the book addresses the question “In
          the age of information bombardment, is reading books still relevant?
          The story in the book explores the journey of a reader who transforms
          from a non-believer to a believer. The book answers the many
          challenges, someone, faces while trying to become a habitual reader.
          Also, it helps people learn about how they could persevere on this
          learning trail when the going gets tough and also how one could
          acquire the wisdom to apply these learnings in their respective lives
          to grow to their true potential.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[60%] max-md:w-[90%]">
        <h2 className="text-2xl font-semibold mb-5 font-europa underline">
          The Great Himalayan Treasure
        </h2>
        <p className="text-lg  mb-5 text-justify">
          The narrative is structured around a treasure hunt which would take
          the readers on a journey where they would explore the adventure which
          lies beneath searching for treasure in the Himalayas and also explore
          the real treasure that lies within all of us. To sum it up though
          “It’s the story for the ages, an adventure of a lifetime, some wisdom
          from great sages, a friendship to savor, the meaning of true success,
          means to a create balance inside you! All in all, the book is an
          attempt to capture the essence of life.”
        </p>
      </div>
      
      <div className="flex flex-col justify-center items-center w-[60%] max-md:w-[90%]">
        <h2 className="text-2xl font-semibold mb-5 font-europa underline">
          Sailing Through Life
        </h2>
        <p className="text-lg  mb-5 text-justify">
          A young nation is waiting to roar, but does our youth have the right
          mindset, skill set, and toolset to conquer this world? Sailing Through
          Life reimagines a world where passion meets purpose, leading to a life
          filled with growth, success, and fulfillment. In a way, it is a memoir
          of a life journey filled with stories of real people—their
          experiences, failures, successes, and ideas that emerged as life
          lessons. If we pay attention, life is always teaching us something
          new, something meaningful, something that could alter our lives
          forever; we need to stop for a moment and give it the attention it
          deserves. I hope this learning comes to you much earlier than it came
          to me. It’s the book I want to gift to my younger self! About the
          Author Varun is a management consultant, author, trainer, and public
          speaker. He is passionate about educating young minds so they can live
          with compassion, clarity, resilience, and courage. He dedicated his
          first book, Books, Ideas & You, to educating people on the importance
          of reading. His award-winning second book, The Great Himalayan
          Treasure, focused on the importance of managing oneself to achieve a
          life of fulfillment and success. Varun has also won the International
          Public Speaking Championship at an industry event. He loves reading,
          traveling, and playing badminton.
        </p>
      </div>
    </section>
  );
};

export default About;
