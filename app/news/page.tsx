import Image from "next/image"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import "../globals.css"
const page = () => {
  return (
  <main className="flex flex-col min-h-screen gap-8 md:gap-12 lg:gap-16 bg-white overflow-x-hidden">
    
      <section className="relative w-full h-80 md:h-110  flex items-center justify-center">
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
                <h1 className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight font-mokoto">MEDIA & NEWS</h1>
              </div>
            </section>
            
      <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-sm text-gray-700 mb-6 md:mb-8"><Link href="/">Home</Link> &gt; <span className="font-medium text-black">News</span></div>
        <div className="flex flex-col gap-5 bg-[#fffafa]">
          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b border-gray-200 py-6 px-2 sm:px-4  transition-colors "
            >
              <div className="flex-1 flex flex-col sm:flex-row items-center  sm:items-start gap-3 sm:gap-10 w-full">
                <span className="text-base sm:text-base md:text-2xl lg:text-3xl color-primary font-medium whitespace-nowrap text-center md:text-left ">Mysnatic Sports - <span className="text-gray-700">5 min read</span></span>
                <div className="flex flex-col w-full px-6 sm:px-0 text-center md:text-left">
                  <div className="font-bold text-base sm:text-lg md:text-2xl lg:text-3xl text-black leading-snug">lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla ornare eget felis..</div>
                  <div className="text-sm sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-1">lorem ipsum dolor sit amet, consectetur adipiscing elit. nulla ornare eget felis.</div>
                </div>
              </div>
              <Link
                href="/Detailed_news"
                className="mt-3 sm:mt-0 text-sm sm:text-lg md:text-xl text-gray-700 font-medium flex items-center gap-1 transition-colors text group whitespace-nowrap"
              >
                read more <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default page
