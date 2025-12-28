import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="/homeBanner.jpg" alt="MYSNATIC SPORTS" className="h-14 mb-4" />
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
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
                  </svg>
                </a>
                <a href="#" aria-label="X" className="hover:text-blue-500">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.77a1 1 0 0 0 1.22 1.22l4.77-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71a1 1 0 0 0-1.42 0l-1.29 1.29a7.07 7.07 0 0 1-3.29-3.29l1.29-1.29a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0A5 5 0 0 0 7 12a5 5 0 0 0 5 5 5 5 0 0 0 3.54-1.46z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <a href="#" className="hover:text-blue-500">
            HOME
          </a>
          <a href="#" className="text-blue-500 font-semibold">
            ABOUT US
          </a>
          <a href="#" className="hover:text-blue-500">
            SERVICE
          </a>
          <a href="#" className="hover:text-blue-500">
            PORTFOLIO
          </a>
          <a href="#" className="hover:text-blue-500">
            NEWS
          </a>
          <a href="#" className="hover:text-blue-500">
            BLOGS
          </a>
          <a href="#" className="hover:text-blue-500">
            CONTACT US
          </a>
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
