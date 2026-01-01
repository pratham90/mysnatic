import Image from "next/image";
import Navbar from "@/components/Navbar";
import "../globals.css";
import Footer from "@/components/Footer";
import Link from "next/link"
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
          <h1
            className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            BLOGS
          </h1>
        </div>
      </section>
    {/* Blogs Section */}
    <section className="w-full bg-white">
    
      
      <div className="max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 ">
        {/* Title and Description */}
        <div className="text-center  mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold color-primary mb-4">
            Blogs
          </h2>
          <p className="text-gray-700 text-center md:text-lg max-w-3xl mx-auto ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisl ex. Mauris faucibus elit id nibh volutpat finibus.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Blog Card 1 */}
          <div className="relative w-full h-96 md:h-[450px] rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src="/homeBanner.jpg"
              alt="How Sports Marketing Is Shifting From Sponsorship to Storytelling"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 leading-tight">
                How Sports Marketing Is Shifting From Sponsorship to Storytelling
              </h3>
              <a
                href="/blog"
                className="inline-block color-secondary text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:opacity-90 transition-opacity w-fit"
              >
                READ HERE
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="relative w-full h-96 md:h-[450px] rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src="/homeBanner.jpg"
              alt="India's Next Sports Revolution: Beyond Cricket"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 leading-tight">
                India&apos;s Next Sports Revolution: Beyond Cricket
              </h3>
              <a
                href="/blog"
                className="inline-block color-secondary text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:opacity-90 transition-opacity w-fit"
              >
                READ HERE
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="relative w-full h-96 md:h-[450px] rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src="/homeBanner.jpg"
              alt="From Stadiums to Screens: The Rise of Digital Fan Engagement"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 leading-tight">
                From Stadiums to Screens: The Rise of Digital Fan Engagement
              </h3>
              <a
                href="/blog"
                className="inline-block color-secondary text-white px-6 py-3 rounded-lg font-medium text-sm md:text-base hover:opacity-90 transition-opacity w-fit"
              >
                READ HERE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Next Focus Section */}
    <section className="w-full bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Title and Graphic */}
          <div className="flex flex-col justify-start py-15 gap-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 md:mb-12 text-center lg:text-left">
              Our next focus
            </h2>
            {/* Abstract Graphic */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-md h-full">
                <svg 
                  className="w-full h-full" 
                  viewBox="0 0 256 256" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Black curved block (rendered first so it appears behind blue) */}
                  <path
                    d="
                      M160 24
                      A104 104 0 0 1 232 96
                      L200 112
                      A64 64 0 0 0 160 64
                      Z
                    "
                    fill="#000000"
                  />

                  {/* Blue C-shaped ring (rendered second so it appears in front) */}
                  <path
                    d="
                      M128 16
                      A112 112 0 1 0 240 128
                      L192 128
                      A64 64 0 1 1 128 64
                      Z
                    "
                    fill="#0D267A"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Content Blocks */}
          <div className="bg-blue-50 py-8 md:py-12 lg:py-16 px-6 md:px-10 lg:px-12">
            {/* Content Block 1 */}
            <div className="pb-2 md:pb-3 border-b border-gray-400">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 leading-tight">
                  WHY EVERY BRAND NEEDS A SPORTS STRATEGY — EVEN IF IT&apos;S NOT IN SPORTS
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                  Add a short overview of your plans for the coming year
                </p>
                <div className="flex justify-center md:justify-end">
                  <Link
                    href="/detailed-blog"
                    className="inline-block bg-black text-white px-3 md:px-5 py-2 md:py-3 rounded-xl font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
                  >
                    READ HERE
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Block 2 */}
            <div className="py-2 md:py-3 border-b border-gray-400">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 leading-tight">
                  THE POWER OF PURPOSE IN SPORTS BRANDING
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                  Add a short overview of your plans for the coming year
                </p>
                <div className="flex justify-center md:justify-end">
                <Link
                    href="/detailed-blog"
                    className="inline-block bg-black text-white px-3 md:px-5 py-2 md:py-3 rounded-xl font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
                  >
                    READ HERE
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Block 3 */}
            <div className="pt-2 md:pt-3">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 leading-tight">
                  SUPPORTING DIVERSITY
                </h3>
                <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-6">
                  Add a short overview of your plans for the coming year
                </p>
                <div className="flex justify-center md:justify-end">
                <Link
                    href="/detailed-blog"
                    className="inline-block bg-black text-white px-3 md:px-5 py-2 md:py-3 rounded-xl font-medium text-sm md:text-base hover:opacity-90 transition-opacity"
                  >
                    READ HERE
                  </Link>
                </div>
              </div>
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
