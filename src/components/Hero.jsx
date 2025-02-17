import React from "react";
import book1 from "../assets/Hero/sailing_through_life.png";
import book2 from "../assets/Hero/book_idea_and_you.png";
import book3 from "../assets/Hero/himalayan_treasure.png";
import star from "../assets/Hero/star.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Star Rating Component
const StarRating = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <img loading="lazy" key={i} src={star} alt="star" className="w-5" />
    ))}
  </div>
);

export default function Hero() {
  const testimonials = [
    {
      text1: `"Sailing Through Life" by Varun Wadhwa is not your average self-help book; rather, it's a profound manual that reads like an honest chat with an enlightened friend.`,
      text2: `Varun Wadhwa is the author of the book "Sailing Through Life Life Lessons For Young Adults". This book is a thought-provoking memoir that reimagines a world where passion meets purpose.`,
      name1: "Kumar Ashish",
      name2: "Komal Kumari",
      image: book1,
      headline1: "Life Lessons For Young Adults",
      headline2:
        "A young nation is waiting to roar, but does our youth have the right mindset, skill set, and toolset to conquer this world? Sailing Through Life reimagines a world where passion meets purpose, leading to a life filled with growth, success, and fulfillment.",
    },
    {
      text1: `Immerse yourself in the breathtaking beauty of the Himalayas with 'The Great Himalayan Treasure.' Through vivid descriptions and compelling characters, this book paints a vivid picture of life in the mountains.`,
      text2: `"'The Great Himalayan Treasure' is an enthralling novel that delves into the themes of existence, equilibrium, and achievement.`,
      name1: "Ayush sudi",
      name2: "Vishwas Giri",
      image: book3,
      headline1: "About Life, Balance, and Success",
      headline2:
        "Money without intention, Action without purpose, Success without humility, Failures without lessons. Anything that is not in balance is not in sync with the very nature of existence. Once you understand the power of balance you will not seek anything else. ",
    },
    {
      text1: `A must-read book to give you insight into the importance of reading and the benefits it can reap for you personally and professionally.`,
      text2: `Amazing book to understand the importance of books in living a successful and happy life. Highly recommended. The author has done a great job.`,
      name1: "Vandita Sethi",
      name2: "Avinash",
      image: book2,
      headline1:
        "The story behind creating wealth & happiness through the World of Books",
      headline2:
        "The book is an attempt to record the journey of a reader, the many challenges he faces along this path, how to persist, and ultimately make the most out of the learning outcomes.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="w-[90%] flex flex-col items-center text-center">
        {/* Slider */}
        <Slider {...settings} className=" w-full">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="flex max-md:flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center max-md:mt-5 w-full">
                  <StarRating />
                  <p className="text-gray-600 font-Minion text-lg mt-4 mb-2">
                    {testimonial.text1}
                  </p>
                  <h3 className="text-lg font-semibold font-europa">
                    {testimonial.name1}
                  </h3>
                </div>
                <img
                  loading="lazy"
                  src={testimonial.image}
                  alt={`Book ${index + 1}`}
                  className="w-80 max-md:w-44 h-80 mb-4 rounded object-cover"
                />
                <div className="flex flex-col justify-center items-center w-full">
                  <StarRating />
                  <p className="text-gray-600 font-Minion text-lg mt-4 mb-5">
                    {testimonial.text2}
                  </p>
                  <h3 className="text-lg font-semibold font-europa">
                    {testimonial.name2}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-3xl w-[70%] max-md:w-[90%] font-bold font-europa">
                  {testimonial.headline1}
                </h1>

                {/* Subtitle */}
                <p className="w-[60%] mt-10 text-xl max-md:w-[90%]">
                  {testimonial.headline2}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Main Title */}
      </div>
    </section>
  );
}
