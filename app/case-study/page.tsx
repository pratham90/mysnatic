import Image from "next/image";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
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
        <h1 className="text-white font-bold font-mokoto text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight">
          CASE STUDY
        </h1>
      </div>
    </section>

    {/* Case Study Section */}
    <section className="w-full bg-white ">
      <div className="max-w-[1350px] mx-auto relative">
        {/* Case Study 1 - Image Left, Text Right */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-1 md:order-1">
              <Image
                src="/homeBanner.jpg"
                alt="Case Study 1"
                fill
                className="object-cover rounded-tr-4xl rounded-br-4xl  "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                Case Study 1
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#1a1a1a] leading-relaxed">
                <p>
                  At <strong>Mysnatic Sports</strong>, we believe that great <strong>marketing</strong> isn&apos;t just about reach—it&apos;s about impact. Our approach combines <strong>innovation</strong> with authentic storytelling, helping <strong>brands</strong> connect with audiences in meaningful ways.
                </p>
                <p>
                  Through strategic partnerships with leading <strong>leagues</strong> and <strong>organizations</strong>, we create campaigns that resonate. Whether it&apos;s amplifying athlete stories or building community engagement, our work transforms how sports marketing connects with fans.
                </p>
              </div>
              <button className="bg-[#007bff] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#0056b3] transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/* Case Study 2 - Text Left, Image Right */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                Case Study 2
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#1a1a1a] leading-relaxed">
                <p>
                  At <strong>Mysnatic Sports</strong>, we believe that great <strong>marketing</strong> isn&apos;t just about reach—it&apos;s about impact. Our approach combines <strong>innovation</strong> with authentic storytelling, helping <strong>brands</strong> connect with audiences in meaningful ways.
                </p>
                <p>
                  Through strategic partnerships with leading <strong>leagues</strong> and <strong>organizations</strong>, we create campaigns that resonate. Whether it&apos;s amplifying athlete stories or building community engagement, our work transforms how sports marketing connects with fans.
                </p>
              </div>
              <button className="bg-[#007bff] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#0056b3] transition-colors">
                READ MORE
              </button>
            </div>
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/homeBanner.jpg"
                alt="Case Study 2"
                fill
                className="object-cover rounded-tl-4xl rounded-bl-4xl "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Case Study 3 - Image Left, Text Right */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-1 md:order-1">
              <Image
                src="/homeBanner.jpg"
                alt="Case Study 3"
                fill
                className="object-cover rounded-tr-4xl rounded-br-4xl "
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                Case Study 3
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#1a1a1a] leading-relaxed">
                <p>
                  At <strong>Mysnatic Sports</strong>, we believe that great <strong>marketing</strong> isn&apos;t just about reach—it&apos;s about impact. Our approach combines <strong>innovation</strong> with authentic storytelling, helping <strong>brands</strong> connect with audiences in meaningful ways.
                </p>
                <p>
                  Through strategic partnerships with leading <strong>leagues</strong> and <strong>organizations</strong>, we create campaigns that resonate. Whether it&apos;s amplifying athlete stories or building community engagement, our work transforms how sports marketing connects with fans.
                </p>
              </div>
              <button className="bg-[#007bff] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#0056b3] transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </main>
  )
}

export default page
