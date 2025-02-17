import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials1 = [
  {
    text: `"Sailing Through Life" by Varun Wadhwa is not your average self-help book; rather, it's a profound manual that reads like an honest chat with an enlightened friend.`,
    name: "Kumar Ashish",
  },
  {
    text: `"Varun Wadhwa is the author of the book "Sailing Through Life Life Lessons For Young Adults". This book is a thought-provoking memoir that reimagines a world where passion meets purpose.`,
    name: "Komal Kumari",
  },
  {
    text: `Sailing Through Life: Life Lessons For Young Adults by Varun Wadhwa is a patronizing guide for young adults who have emerged from the cocoon of high school and college in a rush. `,
    name: "Sudeshna Banerjee",
  },
  {
    text: `"Sailing through life" is an inspired, heartwarming, motivational writing that cannot be read with your eyes but can be experienced in the sanctuary of your soul.`,
    name: "Shifali",
  },
  {
    text: `"Sailing Through Life: ”Life Lessons for Young Adults” written by Varun Wadhwa is a book that helps young adults shape their lives. `,
    name: "	Gaurav Jaiswal",
  },
  
];

const testimonials2 = [
  {
    text: `Very well written. Keep writing and inspire others. You have shown the importance of education and knowledge in our life.`,
    name: "Kashish",
  },
  {
    text: `The book takes you on a journey of how reading can add a value into your life through a simple and effective story.`,
    name: "Aakash Chawla",
  },
  {
    text: `A must read book to give you insight into the importance of reading and the benefits it can reap for you personally and professionally.`,
    name: "	Vandita sethi",
  },
  {
    text: `A great account to read.
Food for the minds of good content readers,worth spending time on.
A must have book among your collection.`,
    name: "Raunaq",
  },
  {
    text: `"Very well written. Keep writing and inspire others. You have shown the importance of education and knowledge in our life.`,
    name: "Kashish",
  },
 
];
const testimonials3 = [
  {
    text: `"The Great Himalayan Treasure" is an absolute gem of a novel! From the breathtaking adventure to the profound exploration of existence and achievement, this book captivated me from start to finish.`,
    name: "Sarthak",
  },
  {
    text: `"'The Great Himalayan Treasure' is an enthralling novel that delves into the themes of existence, equilibrium, and achievement.`,
    name: "Vishwas Giri",
  },
  {
    text: `"Through his book "The Great Himalayan Treasure" Varun Wadhwa beyond common sense revealing the core issues of being a man. To its core, the book is a blossoming of equilibrium – the fragile harmony, which at the heart of everything else exists.`,
    name: "Aarya",
  },
  {
    text: `This book is truly fascinating..it captures all elements of life between the references to mythological stories, animals resonating with the 4 pillars that support our lives...`,
    name: "Pratibha Mishra",
  },
  {
    text: `"Very well written. Keep writing and inspire others. You have shown the importance of education and knowledge in our life.`,
    name: "	Nikita Batra",
  },
  
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto text-center justify-center w-[90%] max-md:w-[80%] max-w-screen-lg ">
        <h2 className="text-2xl font-semibold mb-4 font-europa ">Testimonials</h2>
        <p className="text-5xl max-md:text-4xl font-bold mb-8 font-europa ">What Readers Are Saying</p>
        
        
        <p className="text-2xl font-bold  underline">Books, Ideas & You!</p>
        <Slider {...settings}>
          {testimonials2.map((testimonial, index) => (
            <div key={index} className="px-4 py-5 content-center w-80 h-80">
              <div className="p-6 bg-white shadow-lg rounded-lg ">
                <p className="text-gray-700 mb-4 max-md:text-sm">{testimonial.text}</p>
                <p className="font-semibold font-europa">{`- ${testimonial.name}`}</p>
              </div>
            </div>
          ))}
        </Slider>

        <p className="text-2xl font-bold  underline">The Great Himalayan Treasure</p>
        <Slider {...settings}>
          {testimonials3.map((testimonial, index) => (
            <div key={index} className="px-4 py-5 content-center w-80 h-80">
              <div className="p-6 bg-white shadow-lg rounded-lg ">
                <p className="text-gray-700 mb-4 max-md:text-sm">{testimonial.text}</p>
                <p className="font-semibold font-europa">{`- ${testimonial.name}`}</p>
              </div>
            </div>
          ))}
        </Slider>
        
        <p className="text-2xl font-bold  underline">Sailing Through Life</p>
        <Slider {...settings}>
          {testimonials1.map((testimonial, index) => (
            <div key={index} className="px-4 py-5 content-center w-80 h-80">
              <div className="p-6 bg-white shadow-lg rounded-lg ">
                <p className="text-gray-700 mb-4 max-md:text-sm">{testimonial.text}</p>
                <p className="font-semibold font-europa">{`- ${testimonial.name}`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
