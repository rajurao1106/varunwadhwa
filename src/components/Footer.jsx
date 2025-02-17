import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll"; // Import for smooth scrolling
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import for page navigation
import instagram from "../assets/Footer/instagram.png";
import youtube from "../assets/Footer/youtube.png";
import linkedin from "../assets/Footer/linkedin.png";
import facebook from "../assets/Footer/facebook.png";
import whatsapp from "../assets/Footer/whatsapp.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  // Function to navigate to home and scroll to the Articles section
  const NavigateAndScrollArticles = () => {
    navigate("/"); // Navigate to the homepage
    setTimeout(() => {
      scroller.scrollTo("articles", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };
  const NavigateAndCommunity = () => {
    navigate("/"); // Navigate to the homepage
    setTimeout(() => {
      scroller.scrollTo("community", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };
  const NavigateAndSpeaking = () => {
    navigate("/"); // Navigate to the homepage
    setTimeout(() => {
      scroller.scrollTo("speaking", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };
  const NavigateAndConsulting = () => {
    navigate("/"); // Navigate to the homepage
    setTimeout(() => {
      scroller.scrollTo("consult", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-5 p-3 w-full  flex flex-col justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-[90%] mt-10">
        {/* About Section */}

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-white mb-4">Services</h2>
          <p className="text-sm cursor-pointer mb-1">Speaking</p>
          <p className="text-sm cursor-pointer mb-1">Books</p>
          <p className="text-sm cursor-pointer mb-1">Consulting</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <RouterLink
            to="/books"
            className="text-sm cursor-pointer mb-1 hover:underline"
          >
            Books
          </RouterLink>
          <RouterLink
            to="/author"
            className="text-sm cursor-pointer mb-1 hover:underline"
          >
            About
          </RouterLink>
          <RouterLink
            to="/articles"
            className="text-sm cursor-pointer mb-1 hover:underline"
          >
            Articles
          </RouterLink>{" "}
          {/* Using span to trigger navigation and scroll */}
          <RouterLink
            to="/community"
            className="text-sm cursor-pointer mb-1 hover:underline"
          >
            Biy Community
          </RouterLink>
          <RouterLink
            to="/speaking"
            className="text-sm cursor-pointer hover:underline"
          >
            Speaking
          </RouterLink>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-sm">Have any questions? Reach out to us:</p>
          <p className="mt-2">
            <a
              href="mailto:info@varunwadhwa.com"
              className="text-sm hover:underline"
            >
              info@varunwadhwa.com
            </a>
          </p>
          <p className="mt-2 text-sm">Delhi, India</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4 ">
            <a
              href="https://www.instagram.com/authorvarunwadhwa/following/"
              className=" text-3xl hover:text-pink-700"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/authorvarunwadhwa/"
              className=" text-3xl hover:text-blue-500"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://wa.me/+918130955774"
              className=" text-3xl hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/varunwadhwa13/"
              className=" text-3xl hover:text-blue-700"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@biyclub2178"
              className=" text-3xl hover:text-red-500"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 max-md:p-0 w-[90%]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mt-5 md:mt-0">
            &copy; 2024 varunwadhwa. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-5 md:mt-0">
            Design and Developed By <a>Butterfly Effect</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
