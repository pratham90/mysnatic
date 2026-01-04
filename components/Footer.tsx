import React from "react";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="MYSNATIC SPORTS" className="h-17 mb-4" />
            <p className="text-gray-300 text-sm max-w-xs">
              Our in-depth domain knowledge and collective experience make us
              specialists in sports marketing, entertainment and brand
              licensing.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-start">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75C2.25 5.507 3.257 4.5 4.5 4.5h15c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75l9.75 7.5 9.75-7.5"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-lg">Contact Info</span>
              </div>
              <p className="text-gray-300 text-sm">+918949-198352</p>
              <p className="text-gray-300 text-sm">+918949-198352</p>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 mt-2">
                <span className="text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0-9.75 7.5-9.75-7.5"
                    />
                  </svg>
                </span>
                <span className="font-semibold text-lg">Email address</span>
              </div>
              <p className="text-gray-300 text-sm">Example@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 17.362a9 9 0 1 1 1.414-1.414l5.657 5.657a1 1 0 0 1-1.414 1.414l-5.657-5.657z"
                  />
                </svg>
              </span>
              <span className="font-semibold text-lg">Address</span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel nisl ex.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2 underline underline-offset-4">
                Follow us on
              </h3>
              <div className="flex gap-4 justify-center md:justify-start mt-2">
                <FaInstagram size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaFacebook size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                <FaXTwitter size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaYoutube size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaWhatsapp size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <Link href="/" className="hover:text-blue-500">
            HOME
          </Link>
          <Link href="/about-us" className="hover:text-blue-500 font-semibold">
            ABOUT US
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            SERVICE
          </Link>
          <Link href="/portfolio" className="hover:text-blue-500">
            PORTFOLIO
          </Link>
          <Link href="/news" className="hover:text-blue-500">
            NEWS
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            BLOGS
          </Link>
          <Link href="/contact-us" className="hover:text-blue-500">
            CONTACT US
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400">
          <span>All right reserved. @MysnaticSports</span>
          <span className="mt-2 md:mt-0">Design and developed by Astex</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
