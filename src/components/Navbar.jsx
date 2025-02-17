import React, { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref for the mobile menu

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const NavigateAndScrollHome = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('home', { smooth: true, duration: 500, offset: -250 });
    }, 100);
  };

  const NavigateAndScrollArticles = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('articles', { smooth: true, duration: 500, offset: -50 });
    }, 100);
  };

  // Add similar functions for other sections...

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up
    };
  }, [menuRef]);

  return (
    <header className="w-full z-20">
      <div className="container mx-auto flex font-europa justify-between items-center w-[80%] max-sm:w-[95%] py-8 max-sm:py-4 max-sm:px-4">
        
        <ScrollLink
          to="home"
          onClick={NavigateAndScrollHome} 
          smooth={true}
          offset={-250}
          duration={500}
          className="cursor-pointer text-lg font-bold flex justify-center items-center gap-3"
        >
          VARUN WADHWA
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 max-sm:space-x-4 text-md justify-center items-center">
        <RouterLink to="/books" className=" hover:text-purple-500 cursor-pointer">
            Books
          </RouterLink>
          <RouterLink to="/articles" className=" hover:text-purple-500 cursor-pointer">
          Articles
          </RouterLink>
          <RouterLink to="/community" className=" hover:text-purple-500 cursor-pointer">
            BIY Community
          </RouterLink>
          <RouterLink to="/speaking"
            className=" hover:text-purple-500 cursor-pointer"
            
          >
             Speaking
          </RouterLink>
          
          <RouterLink to="/consult"
            className=" hover:text-purple-500 cursor-pointer"
            
          >
             Consulting
          </RouterLink>
          
          
          <RouterLink to="/author" className=" hover:text-purple-500 cursor-pointer">
            About
          </RouterLink>
          {/* Add other links as needed */}
        </div>

        <RouterLink to={'/book-here'} className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded max-md:hidden">
          Consult Now
        </RouterLink>

        {/* Mobile Menu Button */}
        <div className="sm:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed z-30 top-0 right-0 w-[75%] h-screen shadow-lg bg-white flex flex-col items-center justify-start transition-transform duration-300 ease-in-out transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full flex justify-end p-4 pr-6">
          <AiOutlineClose size={25} onClick={handleNav} className="cursor-pointer" />
        </div>
          
        <div className="flex flex-col justify-center w-full mt-10 font-europa">
        <RouterLink to="/books" className="text-gray-600 cursor-pointer text-center text-2xl p-2" onClick={handleNav}>
            Books
          </RouterLink>
          <RouterLink to="/author" className="text-gray-600 cursor-pointer text-center text-2xl p-2" onClick={handleNav}>
            About
          </RouterLink>
          <RouterLink to="/articles" className="text-gray-600 cursor-pointer text-center text-2xl p-2" onClick={() => { handleNav(); NavigateAndScrollArticles(); }}>
            Articles
          </RouterLink>
          <RouterLink to="/community"  className="text-gray-600 cursor-pointer text-center text-2xl p-2">
            BIY Community
          </RouterLink>
          <RouterLink to="/speaking"  className="text-gray-600 cursor-pointer text-center text-2xl p-2">
            Speaking
          </RouterLink>
          <RouterLink to="/consult"  className="text-gray-600 cursor-pointer text-center text-2xl p-2">
            Consulting
          </RouterLink>
          <RouterLink to="/book-here" className="bg-blue-500 text-white cursor-pointer text-center text-2xl p-2 rounded">
          Consult Now
          </RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
