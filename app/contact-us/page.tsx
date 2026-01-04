import Image from "next/image";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <section className="relative w-full h-80 md:h-110 flex items-center justify-center">
        <Navbar />
        <Image
          src="/homeBanner.jpg"
          alt="Home Banner"
          fill
          className="object-cover z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a3a]/80 to-[#0a1a3a]/60 z-10" />
        <div className="relative z-20 w-full max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 flex flex-col gap-6 items-center justify-center">
          <h1 className="text-white font-bold font-mokoto text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12">
            <p className="color-primary text-sm md:text-4xl font-medium mb-2">
              CONTACT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl  text-[#1a1a1a] mb-4">
              GET IN TOUCH WITH US
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Questions? We&apos;re just a message away.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Phone Card */}
            <div className="color-secondary rounded-lg p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2">Phone</h3>
              <p className="text-white text-sm md:text-base">+91-00000 00000</p>
            </div>

            {/* Email Card */}
            <div className="color-secondary rounded-lg p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2">Email</h3>
              <p className="text-white text-sm md:text-base">contact@gmail.com</p>
            </div>

            {/* Office Card */}
            <div className="color-secondary rounded-lg p-6 md:p-8 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2">Office</h3>
              <p className="text-white text-sm md:text-base">1/24 xyz, India</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12 md:mb-16 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-64 md:h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.78323487002!2d75.7677229759967!3d26.81246847670915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91d4f3b7f7d%3A0x6e6542e2e1e3e3e3!2sSanganer%2C%20Jaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Message Us Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Form */}
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1a3a] mb-2 text-center md:text-left">
                Message Us
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8 text-center md:text-left">
                Questions? We&apos;re just a message away.
              </p>
              <form className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {/* First Name */}
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#e0f2fe] text-black px-4 py-3 md:py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#0a1a3a] text-sm md:text-base"
                  />
                  {/* Last Name */}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#e0f2fe] text-black px-4 py-3 md:py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#0a1a3a] text-sm md:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#e0f2fe] text-black px-4 py-3 md:py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#0a1a3a] text-sm md:text-base"
                  />
                  {/* Phone */}
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-[#e0f2fe] text-black px-4 py-3 md:py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#0a1a3a] text-sm md:text-base"
                  />
                </div>
                {/* Message */}
                <textarea
                  placeholder="Type Message..."
                  rows={6}
                  className="w-full bg-[#e0f2fe] text-black px-4 py-3 md:py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#0a1a3a] resize-none text-sm md:text-base"
                />
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1B52FF] text-white px-6 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#0d1f3a] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Column - Image */}
            <div className="w-full hidden lg:block">
              <div className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/homeBanner.jpg"
                  alt="Soccer cleats on grass field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;
