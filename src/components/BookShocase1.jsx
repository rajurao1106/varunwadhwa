import React from "react";
import bg_books from "../assets/bg_books.png";
import book2 from "../assets/book2.png";

export default function BookShowcase1() {
  return (
    <section
      className="w-full flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg_books})`, height: "600px" }}
    >
      <img
        loading="lazy"
        src={book2}
        alt="Books"
        className="w-6/12 max-md:w-11/12 "
      />
    </section>
  );
}
