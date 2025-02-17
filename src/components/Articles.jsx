import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function articles() {
  return (
    <div className="">
      <Navbar />
      <section className="w-full flex flex-col justify-center items-center max-md:mt-10 mb-10">
        <div className="w-[80%] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold ">All Articles</h1>
          <p className="text-2xl font-Minion mt-5 mb-12 underline">
            Browse articles
          </p>
          <div className="flex justify-between w-full max-md:flex-col gap-5">
            <div className="flex flex-col w-full ">
              <ul className="flex justify-between max-md:flex-col">
                <div className="">
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Journey-Something-to-Nothing"}
                      className="hover:underline"
                    >
                      {" "}
                      The Journey from Something to Nothing!
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Spirituality-Made-Simple"}
                      className="hover:underline"
                    >
                      {" "}
                      Spirituality Made Simple!
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link to={"/Your-Superpower"} className="hover:underline">
                      {" "}
                      Your Superpower
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Value-of-Perspective"}
                      className="hover:underline"
                    >
                      {" "}
                      Parenting Guide: The Value of Perspective
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Skills-you-must-have"}
                      className="hover:underline"
                    >
                      {" "}
                      Skills you must have @2020
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Separating-Myth-from-Reality"}
                      className="hover:underline"
                    >
                      {" "}
                      The Mehrabian Model: Separating Myth from Reality
                    </Link>
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Adult-or-Adulterated?"}
                      className="hover:underline"
                    >
                      {" "}
                      Adult or Adulterated?
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/What’s-your-story?"}
                      className="hover:underline"
                    >
                      {" "}
                      What’s your story?
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Where-do-you-stand?"}
                      className="hover:underline"
                    >
                      {" "}
                      Between 20 & 10000: Where do you stand?
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/7-Laws-Public-Speaking"}
                      className="hover:underline"
                    >
                      {" "}
                      7 Laws of Nature Applied to Public Speaking
                    </Link>{" "}
                  </li>
                </div>
                <div className="">
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/The-20’s-Experiment"}
                      className="hover:underline"
                    >
                      {" "}
                      The 20’s Experiment{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link to={"/6PM-to-6AM-Test"} className="hover:underline">
                      {" "}
                      The 6 PM to 6 AM Test!!{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Breathe-your-Thoughts"}
                      className="hover:underline"
                    >
                      {" "}
                      Breathe your Thoughts!!{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Five-minute-Mission-Statement"}
                      className="hover:underline"
                    >
                      {" "}
                      Five-minute Mission Statement{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link to={"/Goal-Setting"} className="hover:underline">
                      {" "}
                      Goal Setting: The Bubble Theory!!{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Ignoring-Soft-Skills"}
                      className="hover:underline"
                    >
                      {" "}
                      Ignoring Soft Skills: A Sin!!{" "}
                    </Link>
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/The-other-eight-hours"}
                      className="hover:underline"
                    >
                      {" "}
                      The other eight hours!!{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Art-of-Creating-Opportunities"}
                      className="hover:underline"
                    >
                      {" "}
                      The Art of Creating Opportunities!!{" "}
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link to={"/Breaking-the-jinx"} className="hover:underline">
                      {" "}
                      Breaking the jinx - Image Consulting for the Corporate
                      World!
                    </Link>{" "}
                  </li>
                  <li className="list-decimal text-xl border-b font-Minion mb-5">
                    <Link
                      to={"/Why-can-Image-Consultants"}
                      className="hover:underline"
                    >
                      Why can Image Consultants change the way you think?{" "}
                    </Link>{" "}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
