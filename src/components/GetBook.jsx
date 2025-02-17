import React from 'react';
import { Link } from 'react-scroll';

export default function GetBook() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[70%] flex flex-col justify-center items-center bg-gray-50 gap-8 p-10 max-lg:w-[90%] max-md:w-[95%] max-sm:p-5">
        <h1 className="text-3xl font-europa font-bold max-lg:text-2xl max-md:text-2xl text-center">
          Step 1: Get Your Copy of Sailing Through Life…
        </h1>
        <div className="flex gap-3 max-sm:justify-center">
          <a
            href="https://www.amazon.in/Sailing-Through-Lessons-Young-Adults/dp/8197380635/ref=sr_1_1?crid=28CB6ALJYMLZ1&dib=eyJ2IjoiMSJ9.wVGhqaeSBFnm8-sPrvUXlrUqsZFQlq1LR22INLJsKl8.mth9Q5JgupzFUO_AINMdtNVaGVqaT4LszXRZVi-Yn30&dib_tag=se&keywords=Sailing+Through+Life+by+varun+wadhwa&qid=1729324532&sprefix=sailing+through+life+by+varun+wadhwa+%2Caps%2C193&sr=8-1"
            className="bg-pink-600 text-white px-5 font-semibold hover:bg-pink-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative font-europa p-2 max-md:text-sm max-sm:w-[48%] text-center"
          >
            Amazon
          </a>
          {/* <a
            href=""
            className="bg-pink-600 text-white px-5 font-semibold hover:bg-pink-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative font-europa p-2 max-md:text-sm max-sm:w-[48%] text-center"
          >
            Barnes & Noble
          </a> */}
          {/* <a
            href=""
            className="bg-pink-600 text-white px-5 font-semibold hover:bg-pink-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative font-europa p-2 max-md:text-sm max-sm:w-[48%] text-center"
          >
            Audible
          </a> */}
          <a
            href="https://amzn.in/d/eersVMk"
            className="bg-pink-600 text-white px-5 font-semibold hover:bg-pink-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative font-europa p-2 max-md:text-sm max-sm:w-[48%] text-center"
          >
            Kindle
          </a>
          {/* <a
            href=""
            className="bg-pink-600 text-white px-5 font-semibold hover:bg-pink-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:shadow-md relative font-europa p-2 max-md:text-sm max-sm:w-[48%] text-center"
          >
            iBooks
          </a> */}
        </div>
        {/* <p className="text-center max-sm:text-sm">
          Outside the United States?{' '}
          <Link className="underline">Click here for international editions.</Link>
        </p> */}
      </div>
    </section>
  );
}
