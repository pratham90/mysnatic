import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import { BsArrowLeft } from 'react-icons/bs';

const page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <section className="relative w-full h-80 md:h-120 flex items-end justify-center">
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
        <div className="relative z-20 w-full max-w-[1350px]  px-4 md:px-5 lg:px-8 flex flex-col mb-12 gap-6 items-center justify-center ">
          <h1 className="text-white font-bold font-mokoto text-3xl sm:text-left text-center sm:text-4xl md:text-5xl lg:text-6xl mt-8 tracking-widest leading-tight">
            HOW SPORTS MAKRKETINGIS SHIFTING FROM SPONSORSHIP TO STORYTELLING
          </h1>
        </div>
      </section>

  
      <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      
        <div className="max-w-[1350px] mx-auto relative">
  

          <div className="px-4 md:px-8 lg:px-0">
         
            <h1 className="text-2xl md:text-3xl lg:text-4xl color-primary mb-6 md:mb-8 text-center md:text-left leading-tight">
              Why engagement beats exposure, and how brands must now play on emotion, not just logos.
            </h1>

         
            <div className="space-y-4 md:space-y-5 mb-6 md:mb-8 text-center md:text-left">
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                Sports marketing has evolved far beyond slapping a logo on a jersey. Today&apos;s brands understand that fans don&apos;t just watch sports—they feel them. The shift is from exposure to connection, from visibility to belonging. It&apos;s about stories of passion, perseverance, and the moments that unite us, not just the products we sell.
            
                Modern sports marketing isn&apos;t about showing up—it&apos;s about participating. Audiences want to see your values in action. They want to know how your brand empowers athletes, supports communities, and stands for something bigger than sales. The campaigns that win aren&apos;t the loudest; they&apos;re the ones that resonate.
             
                Sports marketing has evolved far beyond slapping a logo on a jersey. Today&apos;s brands understand that fans don&apos;t just watch sports—they feel them. The shift is from exposure to connection, from visibility to belonging. It&apos;s about stories of passion, perseverance, and the moments that unite us, not just the products we sell.
            
                Look at Nike&apos;s &quot;You Can&apos;t Stop Us&quot; or Dream11&apos;s fan humor—these brands sell emotion, not features. They understand that storytelling builds memory, and memory builds loyalty. In a world where attention is scarce, the brands that make us feel something are the ones we remember.
              </p>
            </div>

         
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-6 md:mb-8 rounded-lg overflow-hidden">
              <Image
                src="/homeBanner.jpg"
                alt="Soccer ball and cleats on grass"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

          
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
                At Mysnatic Sports, we believe the most powerful campaigns come when data meets emotion—when brand strategy transforms into something fans feel, not just see. Because in the new era of sports marketing, <strong className="font-bold">logos don&apos;t inspire movements—stories do</strong>.
              </p>
            </div>

         
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 pb-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <h3 className="text-lg md:text-xl font-semibold text-black text-center md:text-left">
                  Find this insightful? Share this!
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                 
                
                  {/* Instagram Icon - Blue square with rounded corners and camera outline */}
                  <a
                    href="#"
                    aria-label="Share on Instagram"
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  {/* Facebook Icon - Blue circle with white 'f' */}
                  <a
                    href="#"
                    aria-label="Share on Facebook"
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white font-bold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Twitter/X Icon - Blue circle with white bird/X logo */}
                  <a
                    href="#"
                    aria-label="Share on Twitter/X"
                    className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
               
                </div>
             
               </div>
               <div >
                <Link href="/blog">
        <BsArrowLeft className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-extrabold hover:scale-110 transition cursor-pointer' />
        </Link>
        </div>
              </div>
            </div>
          
      </section>

      <Footer />
    </main>
  );
};

export default page;
