import React from "react";
import book_idea_and_you from "../assets/BookGallery/book_idea_and_you.png";
import sailing_through_life from "../assets/BookGallery/book21.png";
import himalayan_treasure from "../assets/BookGallery/himalayan_treasure1.png";
import check from "../assets/AboutAuthor/check.png";
import Navbar from "./Navbar";

const BookGallery = () => {
  const books = [
    {
      title: "Books, Ideas & You!",
      amazonLink: "https://amzn.in/d/1maPv6A",
      kindleLink: "https://amzn.in/d/3jwuSxH",
      image: book_idea_and_you,
      lessons: [
        "How to develop the habit of reading books.",
        "How to read actively and use the knowledge to transform your life.",
        "Some gems of wisdom from the most outstanding books ever written.",
      ],
    },
    {
      title: "The Great Himalayan Treasure",
      amazonLink: "https://amzn.in/d/iJRrzOI",
      kindleLink: "https://amzn.in/d/4ItQBUJ",
      image: himalayan_treasure,
      lessons: [
        "Learn about the four dimensions of life: the physical, mental, emotional & spiritual.",
        "Learn to live with tranquility by managing each of these dimensions to create the life of your dreams.",
        "Understand the true meaning of success and how it affects your life.",
      ],
    },
    {
      title: "Sailing Through Life",
      amazonLink: "https://amzn.in/d/cEJFdmM",
      kindleLink: "https://amzn.in/d/dQqTEfx",
      image: sailing_through_life,
      lessons: [
        "Learn about some life lessons that add meaning to life.",
        "Learn from the stories, ideas, and experiences of some of the best minds across the world.",
        "Learn to live a life of no regret.",
      ],
    },
  ];

  return (
    <section className="books w-full flex justify-center items-center flex-col">
      <Navbar />
      <div className="w-[90%] flex justify-center items-center flex-col mt-12">
        <div className="flex gap-8 w-full justify-center items-center flex-col">
          {books.map((book, index) => (
            <div
              key={index}
              className=" justify-between p-5 max-md:p-0 rounded-md shadow-lg overflow-hidden flex w-[80%] max-md:w-[100%] max-md:flex-col items-center"
            >
              <img
                loading="lazy"
                src={book.image}
                alt={book.title}
                className="w-[10rem] object-cover"
              />
              <div className="p-4 w-[80%]  max-md:w-[100%] flex justify-center max-md:items-center flex-col">
                <h3 className="text-3xl font-bold font-europa mb-5 max-md:text-center">
                  {book.title}
                </h3>

                <div className="text-xl max-md:text-lg max-sm:text-base">
                  {book.lessons.map((lesson, i) => (
                    <p key={i} className="flex items-start gap-2 mb-4 ">
                      <img
                        loading="lazy"
                        src={check}
                        alt=""
                        className="w-5 h-5 "
                      />{" "}
                      {lesson}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3 items-center mb-5">
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-europa rounded bg-yellow-400 p-1 px-6"
                  >
                    Amazon
                  </a>
                  <a
                    href={book.kindleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-europa rounded bg-yellow-400 p-1 px-6"
                  >
                    Kindle
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookGallery;
