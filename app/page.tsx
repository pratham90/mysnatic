          <a href="/assets/fonts/mokoto.regular.ttf" download target="_blank" className="text-blue-400 underline mt-2 block">Test: Download Mokoto Font File</a>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link"
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6";


const Home = () => {
  return (
  <main className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
      
      <section className="relative w-full flex-1 flex items-end  justify-start pt-20 pb-5 min-h-110 md:min-h-143">
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
        <div className="relative  z-20 w-full mb-8 max-w-337 mx-auto px-4 md:px-5 lg:px-8 pt-20 flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-white font-bold text-3xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight font-mokoto">Where Talent Becomes <br className="hidden sm:block"/> Legacy</h1>

          <p className="text-gray-200 text-base md:text-lg max-w-xl text-center md:text-left">
          Mysnatic transforms athletes, teams, and sports properties into global powerhouses—on and off the field.
          <p className="text-[#EC5B19]">Trusted by top leagues, athletes, and brands across India.</p>
          </p>
          
          <div className="flex flex-col w-full sm:flex-row sm:items-center items-center justify-between gap-4 mt-2">
           <div className="flex gap-3 items-center justify-center flex-wrap">
            <Link href="/" className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0a1a3a] transition font-medium text-base ">Start Your Journey</Link>
            <Link href="/services" className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0a1a3a] transition font-medium text-base">Explore Our Services</Link>
           </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
             <FaInstagram size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                           <FaFacebook size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                            <FaXTwitter size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                           <FaYoutube size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                           <FaWhatsapp size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full pt-19 px-4  flex flex-col items-center  md:items:start bg-white">
        <div className="max-w-337 w-full flex flex-col md:items-start items-center px-5">
          <h2 className="text-3xl md:text-6xl  mb-2 md:text-left text-center text-black">
            <span className="text-[#2563eb]">WHO</span> WE ARE ?
            <p className="text-lg md:text-xl mt-2 mb-3">Redefining Sports. Reimagining Careers.</p>
          </h2>
          <p className="text-gray-700 md:text-left text-center  mb-1 text-sm md:text-xl">
            We believe, every moment in sport is an opportunity to inspire, engage, and build lasting connections.
          </p>
          <p className="text-gray-700 md:text-left text-center  mb-1 text-sm md:text-xl">
          Mysnatic isn’t just a sports management company—it’s a movement.
          We are strategists, storytellers, and innovators turning raw talent into global icons and transforming leagues into unforgettable experiences.
          </p>
          <p className="text-gray-700 md:text-left text-center  mb-1 text-sm md:text-xl">
          From grassroots athletes to professional teams, we build journeys that inspire, engage, and elevate.
          </p>
          <Link href="/about-us" className="mt-2 mb-8 text-lg font-medium text-black underline underline-offset-4 text transition">Discover Our Story</Link>
        </div>
        <div className="w-full max-w-337 mt-20 sm:px-4 px-2">
          <h3 className="text-3xl md:text-5xl lg:text-5xl  mb-10 md:text-left text-center text-black">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-3 mb-5">
           
            <div className="relative w-full h-80 md:h-160 rounded-lg overflow-hidden group flex items-end justify-start bg-blue-900 md:row-span-1 md:col-span-1">
              <Image src="/homeBanner.jpg" alt="Athlete Management" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
              <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Athlete Management</span>
            </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:col-span-2 h-full">
             
              <div className="relative w-full sm:h-50 h-55 md:h-80 rounded-lg overflow-hidden group flex items-end justify-start bg-gray-800 row-span-1 col-span-2">
                <Image src="/homeBanner.jpg" alt="Content, Digital & Storytelling" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Content, Digital & Storytelling</span>
              </div>
               <div className="relative w-full sm:h-45 h-55 md:h-76 rounded-lg overflow-hidden group flex items-end justify-start bg-[#b91c1c] row-span-1 col-span-1">
                <Image src="/homeBanner.jpg" alt="Strategic Advisory" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c]/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Strategic Advisory for Leagues, Teams & Federations</span>
              </div>
              <div className="relative w-full sm:h-45 h-55 md:h-76 rounded-lg overflow-hidden group flex items-end justify-start bg-[#f59e42] row-span-1 col-span-1">
                <Image src="/homeBanner.jpg" alt="Licensing, Merchandising & IP Development" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f59e42]/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Licensing, Merchandising & IP Development</span>
              </div>
            </div>
           
            <div className="col-span-1  md:col-start-2 md:col-span-2 flex md:justify-end">
              <div className="relative w-full md:max-w-xl sm:h-50 h-60 md:h-80 rounded-lg overflow-hidden group flex items-end justify-start bg-green-900">
                <Image src="/homeBanner.jpg" alt="Event Activation & Experiential Marketing" fill className="object-cover group-hover:scale-105 transition-transform duration-300 " />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent z-10" />
                <div className="relative z-20 flex flex-col md:flex-row md:items-center p-4 w-full">
                  <span className="text-white font-medium text-base md:text-lg">Event Activation & Experiential Marketing</span>
                  <a href="#" className="mt-2 md:mt-0 md:ml-4 px-4 py-1 bg-green-700/80 text-green-100 rounded-full text-xs md:text-sm font-medium border border-green-200 hover:bg-green-800 transition w-max">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
