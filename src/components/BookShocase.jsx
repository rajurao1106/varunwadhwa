import React from "react";
import bg_books from "../assets/BookGallery/bg_books.jpg";
import book1 from "../assets/BookGallery/book21.png";
import book2 from "../assets/BookGallery/himalayan_treasure1.png";
import book3 from "../assets/BookGallery/book_idea_and_you.png";

export default function BookShocase() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-12 bg-cover bg-center relative overflow-hidden">
      <img
        loading="lazy"
        src={bg_books}
        alt=""
        className="absolute -z-10 w-full"
      />
      <div className="flex justify-between items-center max-md:w-[90%] w-[60%] ">
        <img
          loading="lazy"
          src={book3}
          alt="Books"
          className="w-[12rem] max-md:w-[5rem]"
        />
        <img
          loading="lazy"
          src={book2}
          alt="Books"
          className="w-[15rem] max-md:w-[8rem]"
        />
        <img
          loading="lazy"
          src={book1}
          alt="Books"
          className="w-[12rem] max-md:w-[5rem]"
        />
      </div>
    </section>
  );
}
