import React from 'react';
import Navbar from './Navbar';

export default function BookHere() {
  const consultingVideos = [
    {
      id: 1,
      title: 'Consulting Video 1',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // replace with actual video URL
      ctaText: 'Book Consult',
      desc: "description",
      ctaLink: '/consulting/video1'
    },
    {
      id: 2,
      title: 'Consulting Video 2',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // replace with actual video URL
      ctaText: 'Book Consult',
      desc: "description",
      ctaLink: '/consulting/video2'
    },
    
  ];

  return (
    <div className='consult'>
      <Navbar/>
      
      {/* Book a Consultation Section */}
      <section className="">
        <div className="flex justify-center items-center flex-col mx-auto px-4 sm:px-6 lg:px-8 font-europa">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Book a Consultation
          </h2>

          <div className="flex flex-col w-[50%] max-md:w-[90%] gap-12">
            {/* Consult Info */}
            

            {/* Consult Form */}
            <div className=" p-8 rounded-lg shadow-lg ">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                    Consultation Topic
                  </label>
                  <select
        id="topics"
        name="topics"
        
        
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a topic</option>
        <option value="topic1">Public Speaking</option>
        <option value="topic2">Consulting</option>
      </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Provide additional details for your consultation..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
