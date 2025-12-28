import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
  <main className="relative min-h-screen flex flex-col bg-white overflow-x-hidden">
      
      <section className="relative w-full flex-1 flex items-center justify-start pt-20 pb-5 min-h-110 md:min-h-153">
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
        <div className="relative z-20 w-full max-w-337 mx-auto px-4 md:px-5 lg:px-8  flex flex-col gap-6 items-center md:items-start">
          <h1 className="text-white font-bold text-3xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight" style={{fontFamily: 'Orbitron, sans-serif'}}>FUELING THE FUTURE<br className="hidden sm:block"/> OF SPORTS</h1>
          <p className="text-gray-200 text-base md:text-lg max-w-xl text-center md:text-left">
            We are a next-generation sports marketing agency empowering brands, leagues, and events through creativity, strategy, and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <a href="#" className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-[#0a1a3a] transition font-medium text-base">Explore Our Work</a>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17" cy="7" r="1.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-blue-400 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-400 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-blue-400 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.77a1 1 0 0 0 1.22 1.22l4.77-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71a1 1 0 0 0-1.42 0l-1.29 1.29a7.07 7.07 0 0 1-3.29-3.29l1.29-1.29a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0A5 5 0 0 0 7 12a5 5 0 0 0 5 5 5 5 0 0 0 3.54-1.46z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full pt-12 px-4  flex flex-col items-center  md:items:start bg-white">
        <div className="max-w-337 w-full flex flex-col md:items-start items-center px-5">
          <h2 className="text-2xl md:text-5xl font-semibold mb-2 md:text-left text-center text-gray-400">
            <span className="text-[#2563eb]">Mysnatic</span> Sports
          </h2>
          <p className="text-gray-700 md:text-left text-center max-w-2xl mb-1 text-sm md:text-base">
            We believe, every moment in sport is an opportunity to inspire, engage, and build lasting connections.
          </p>
          <p className="text-gray-700 md:text-left text-center max-w-2xl mb-1 text-sm md:text-base">
            We merge <span className="font-semibold">creativity with strategy, emotion with analytics, and passion with purpose</span> — helping brands amplify their presence and leave a mark that lasts beyond the game.
          </p>
          <p className="text-gray-700 md:text-left text-center max-w-2xl mb-1 text-sm md:text-base">
            From sponsorship management to digital storytelling, from live activations to influencer-driven content — Mysnatic Sports is not just a marketing agency, it’s <span className="italic font-semibold">a movement shaping India’s new sports economy.</span>
          </p>
          <a href="#" className="mt-2 mb-8 text-sm font-medium text-black underline underline-offset-4 hover:text-[#2563eb] transition">Read more →</a>
        </div>
        <div className="w-full max-w-337 mt-4 sm:px-4 px-2">
          <h3 className="text-xl md:text-4xl lg:text-5xl font-semibold mb-6 md:text-left text-center text-gray-400">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr ">
           
            <div className="relative w-full h-80 md:h-134 rounded-lg overflow-hidden group flex items-end justify-start bg-blue-900 md:row-span-1 md:col-span-1">
              <Image src="/homeBanner.jpg" alt="Athlete Management" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
              <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Athlete Management</span>
            </div>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:col-span-2 h-full">
             
              <div className="relative w-full sm:h-50 h-55 md:h-60 rounded-lg overflow-hidden group flex items-end justify-start bg-gray-800 row-span-1 col-span-2">
                <Image src="/homeBanner.jpg" alt="Content, Digital & Storytelling" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Content, Digital & Storytelling</span>
              </div>
               <div className="relative w-full sm:h-45 h-55 md:h-65 rounded-lg overflow-hidden group flex items-end justify-start bg-[#b91c1c] row-span-1 col-span-1">
                <Image src="/homeBanner.jpg" alt="Strategic Advisory" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c]/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Strategic Advisory for Leagues, Teams & Federations</span>
              </div>
              <div className="relative w-full sm:h-45 h-55 md:h-65 rounded-lg overflow-hidden group flex items-end justify-start bg-[#f59e42] row-span-1 col-span-1">
                <Image src="/homeBanner.jpg" alt="Licensing, Merchandising & IP Development" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f59e42]/80 to-transparent z-10" />
                <span className="relative z-20 text-white font-medium text-base md:text-lg p-4">Licensing, Merchandising & IP Development</span>
              </div>
            </div>
           
            <div className="relative w-full md:max-w-4xl sm:h-50 h-60 md:h-60 rounded-lg overflow-hidden group flex items-end justify-start bg-green-900 md:col-start-2 md:col-span-2">
              <Image src="/homeBanner.jpg" alt="Event Activation & Experiential Marketing" fill className="object-cover group-hover:scale-105 transition-transform duration-300 " />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent z-10" />
              <div className="relative z-20 flex flex-col md:flex-row md:items-center p-4 w-full">
                <span className="text-white font-medium text-base md:text-lg">Event Activation & Experiential Marketing</span>
                <a href="#" className="mt-2 md:mt-0 md:ml-4 px-4 py-1 bg-green-700/80 text-green-100 rounded-full text-xs md:text-sm font-medium border border-green-200 hover:bg-green-800 transition w-max">Learn more</a>
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
