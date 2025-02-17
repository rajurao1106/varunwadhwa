import React from "react";
import Navbar from "../Navbar";
import image1 from "../../assets/Articles/image1.png";
import image2 from "../../assets/Articles/image2.png";
import image3 from "../../assets/Articles/image3.png";
import image4 from "../../assets/Articles/image4.png";
import image5 from "../../assets/Articles/image5.png";
import image6 from "../../assets/Articles/image6.png";
import image7 from "../../assets/Articles/image7.png";
import image8 from "../../assets/Articles/image8.png";
import image9 from "../../assets/Articles/image9.png";
import article19 from "../../assets/Articles/article19.jpg";

export default function Article19() {
  const articleContent19 = {
    title: "Breaking the jinx - Image Consulting for the Corporate World!",
    content: [
      {
        subtitle: "",
        text: "While we talk about consulting the buzz word that comes into the mind are folks who would promise the galaxy and hope you would settle with a handful of stars.",
      },
      {
        subtitle: "",
        text: "As image consultants it is often about breaking that jinx specially because being in the image business we understand the existing image the consulting business caries!! It is like the age old saying that only the wearer knows where the shoe pinches.",
      },
      {
        subtitle: "",
        text: "Having experienced both the worlds, that is being the client as well the consultant can irrefutably argue that reaching the mid point in the expectation matrix is the most challenging task for both the parties.",
        image8: image8,
      },
      {
        subtitle: "",
        text: "India being what it is the so called land of start ups specially with government pitching in with the startup India drive, the door is now open for ones those have dreams. One of the most important things to remember though for any start up is that it is sending the right message, the one that the customers want to hear. You may be surprised to discover in many cases there's a major difference between what a company is selling and what its customers are actually buying. It's a schism that becomes immediately evident once you look at a product or service from the customer's perspective. Where would Harley-Davidson be, for example, if it merely sold motorcycles instead of the lifestyle, adventure and persona being a Harley-Davidson owner represents? Or Justin which is into the shoe business actually sell cowboys lifestyle and the people buy it simply because they love this cowboy swagger. In a crux they are selling a lifestyle and not a product!!",
      },
      {
        subtitle: "",
        text: "You would call this branding which people think only the big companies can afford, the ones that have deep pockets, but in reality every company needs it. An image or a brand that is deep rooting and soul moving!!",
      },
      {
        subtitle: "",
        text: "Coming back to the tagline that how image consulting business is different than the other consulting for the corporate world, it is like looking at your enterprise from a 360 degree angle:",
      },
      {
        point113: "As a customer",
        point213: "As a business client",
        point313: "As a lifestyle expert",
        image9: image9,
      },
      {
        subtitle: "",
        text: "The image consultants having worked with the individual clients understanding their lifestyles as well as personal style, it gives that that added edge to replicate a similar model for the corporate world. So whether you are already part of a colossal business set up or starting your own new venture close to your heart, remember to focus on the lifestyle and not the product or service!!",
      },
      {
        subtitle: "",
        text: "As i always say in the end all that really matters is your well-being and of-course that of your enterprise!! ",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <section className="article py-5 w-full flex flex-col justify-center items-center">
        <div className=" mx-auto  sm:px-6 lg:px-8 font-europa flex flex-col gap-10 justify-center items-center w-[70%] max-md:w-[90%]">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-5 mt-5">
            {articleContent19.title}
          </h2>

          <img
            loading="lazy"
            src={article19}
            alt=""
            className="w-[40vw] max-md:w-[80vw]"
          />

          <div className=" w-full flex flex-col justify-center ">
            {articleContent19.content.map((section, index) => (
              <div key={index} className=" ">
                {section.subtitle && (
                  <h3 className="text-2xl font-semibold mb-0">
                    {section.subtitle}
                  </h3>
                )}
                <p className="text-gray-600  font-Minion text-lg mb-5">
                  {section.text}
                </p>
                {(section.point113 || section.point213 || section.point313) && (
                  <ul className="text-lg text-gray-600 list-outside list-disc ml-6 font-Minion">
                    {section.point113 && <li>{section.point113}</li>}
                    {section.point213 && <li>{section.point213}</li>}
                    {section.point313 && <li>{section.point313}</li>}
                  </ul>
                )}
                <div>
                  {section.image8 && (
                    <img
                      loading="lazy"
                      src={section.image8}
                      alt=""
                      className="p-5"
                    />
                  )}
                </div>
                <div>
                  {section.image9 && (
                    <img
                      loading="lazy"
                      src={section.image9}
                      alt=""
                      className="p-5"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
