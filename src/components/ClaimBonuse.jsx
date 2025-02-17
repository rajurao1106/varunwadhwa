import React from "react";
import { Link } from "react-scroll";
import check from "../assets/AboutAuthor/check.png";
import { Link as RouterLink } from "react-router-dom";

export default function ClaimBonuse() {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="w-[70%] flex flex-col justify-center items-center gap-8 p-10 max-lg:w-[90%] max-md:w-[95%] max-sm:p-5">
        <h1 className="text-3xl font-europa font-bold max-lg:text-2xl max-md:text-2xl text-center">
          Step 2: Claim Your Free Bonuses…
        </h1>

        <p className="text-xl text-center max-md:text-lg max-sm:text-base">
          Click a selfie with one of my books and upload it to social media
          tagging me along or share the details at{" "}
          <a
            href="mailto:Info@varunwadhwa.com"
            className="underline text-blue-500"
          >
            info@varunwadhwa.com
          </a>{" "}
          and receive special bonuses:
        </p>

        <div className="flex flex-col text-lg">
          <h1 className="mb-5 items-start  max-md:text-lg max-sm:text-base flex gap-2">
            <img loading="lazy" src={check} alt="" className="w-5 h-5" />
            Get a free e-copy of one of my other books of your choice.
          </h1>

          <h1 className="mb-5 items-start  max-md:text-lg max-sm:text-base flex gap-2">
            <img loading="lazy" src={check} alt="" className="w-5 h-5" />A free
            guide on how to make the best use of the learnings from the book in
            order to transform your life.
          </h1>

          <h1 className="mb-5 items-start  max-md:text-lg max-sm:text-base flex gap-2">
            <img loading="lazy" src={check} alt="" className="w-5 h-5" />
            All my consulting material has helped many individuals live the best
            version of themselves.
          </h1>

          <h1 className="mb-5 items-start  max-md:text-lg max-sm:text-base flex gap-2">
            <img loading="lazy" src={check} alt="" className="w-5 h-5" />A
            lifetime membership of the BIY community.
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[60%] max-md:w-[90%]">
          <h1 className="text-3xl font-europa font-bold mb-5 text-center ">
            Hi, I am Varun Wadhwa
          </h1>
          <p className="text-lg mb-5 text-justify max-md:text-center">
            I am passionate about educating young minds so they can live with
            compassion, clarity, resilience, and courage. I have spent the last
            decade researching, writing, and interacting with some of the best
            minds around the topics of growth consciousness, spirituality,
            public speaking, and leadership. I hope to spread this knowledge to
            all seekers and learn something new from their experiences.
          </p>
          <h1 className="text-3xl font-bold font-europa mb-5 text-center">
            How can I add value to you?
          </h1>
          <p className="text-lg mb-5 max-md:text-center">
            My superpower is helping people. The central question I explore
            through my work is, "How can I help enough people live a more
            fulfilling life?"
          </p>
          <p className="text-lg mb-5 max-md:text-center">
            My work focuses on topics like…
          </p>
          <div className="text-lg ">
            {[
              "How to become better at your professional career",
              "How to create more opportunities for you to grow as a professional and as a person",
              "How to become more balanced when challenged by difficulties",
              "How to engage with all kinds of audiences",
              "How to tune into your life goals",
              "How to become a power reader",
              "How to learn anything new by focusing on the fundamentals",
            ].map((item, index) => (
              <li key={index} className="list-disc ">
                {item}
              </li>
            ))}
            <p className="mt-5 mb-5 max-md:text-center">
              Most of all, I work with people on how to live with compassion,
              clarity, resilience, and courage.
            </p>
          </div>

          <p className="text-lg max-md:text-center">
            Most of the concepts and ideas I advocate have been discovered and
            built upon after many hours of reading and research. However, I have
            applied all these concepts and understand that they work in the real
            world. As human beings, we can learn from one another because no one
            has all the answers; we are all seeking self-discovery. My way is
            one of many ways things work in this world; however, it would
            certainly work for you if you are willing to apply yourself to it. I
            would love to interact with you and hear your perspective. Let's
            begin our tête-à-tête conversation. You can start by reading{" "}
            <RouterLink
              to="/articles"
              className="text-blue-500 font-bold cursor-pointer"
            >
              my articles
            </RouterLink>{" "}
            or checking out{" "}
            <RouterLink
              to="/books"
              className="text-blue-500 font-bold cursor-pointer"
            >
              my books
            </RouterLink>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
