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
        <h1
          className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          ABOUT
        </h1>
      </div>
    </section>

   
    <section className="w-full max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold color-primary mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            In the fast-evolving world of sports, attention is the real currency and we know exactly how to capture it. At <span className="font-bold">Mysnatic Sports</span>, we architect experiences that make people feel, engage, and remember.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Born from a passion for sport and a belief in the power of storytelling, Mysnatic Sports stands at the intersection of sports, <span className="font-bold">marketing, and innovation, creating</span> measurable value for <span className="font-bold">brands, leagues, and organizations</span> across India.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We are a next-generation <span className="font-bold">sports marketing and consulting agency</span> driven by data, creativity, and cultural insight. Our work goes beyond contracts and campaigns, it&apos;s about <span className="font-bold">building ecosystems</span> where sport thrives as a business, a culture, and a community.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-tl-xl rounded-bl-xl rounded-br-xl overflow-hidden">
          <Image
            src="/homeBanner.jpg"
            alt="Sports"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>

    
    <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
        <Image
          src="/homeBanner.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1a3a]/90 z-10" />
      </div>
      
     
      
      
      <div className="relative z-20 max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Our Mission */}
          <div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
                To build impactful partnerships and narratives that drive fan engagement, brand loyalty, and growth for India&apos;s sports ecosystem.
              </p>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                We aim to:
              </p>
              <ul className="space-y-3 text-gray-200 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Empower emerging sports and leagues to reach their audience effectively.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Create <span className="font-bold italic">digital-first campaigns</span> that make fans part of the story.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Help brands find authentic connections through sport.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span>Deliver measurable outcomes — not just visibility.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Vision */}
          <div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                To be the most trusted and transformative sports marketing agency in India — where every brand we touch becomes part of a meaningful sporting journey.
              </p>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                We envision a sports ecosystem where brands, fans, and athletes coexist in synergy united by experiences that transcend the scoreboard.
              </p>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                We want Indian sports marketing to evolve from being transactional to being transformational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="w-full max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 py-12 md:py-16 lg:py-20 relative">
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold color-primary mb-6 text-center md:text-left">
          Our Story
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
          Mysnatic Sports started with a simple question — what if sports marketing could be smarter, more emotional, and truly measurable?
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
          From our first brand activation to multi-league collaborations, every project has been driven by one core principle — <span className="font-bold italic">&quot;Play with purpose.&quot;</span> We&apos;ve built a reputation for turning ideas into integrated strategies, blending creativity with analytics, and emotion with execution.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left">
          Our team comes from diverse backgrounds — marketing strategists, designers, storytellers, athletes, and data minds, all united by a love for sport and the art of engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src="/homeBanner.jpg"
            alt="Football"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src="/homeBanner.jpg"
            alt="Cricket"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden">
          <Image
            src="/homeBanner.jpg"
            alt="Badminton"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>

    {/* Founder's Note Section */}
    <section className="w-full py-0">
      <div className="max-w-[1350px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[450px] overflow-visible" >
          {/* Right Column - Image */}
          <div className="relative w-full h-full bg-white flex items-center justify-center overflow-visible">
            {/* Mobile/Small Screen: Simple Image */}
            <div className="relative w-full h-[350px] md:hidden">
              <Image
                src="/homeBanner.jpg"
                alt="Founder"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
            {/* Medium/Large Screen: Image with Borders */}
            <div className="hidden md:block relative w-full max-w-md h-[550px] border-t-2 border-r-2 border-white overflow-visible">
              {/* Dark blue border (left, top, and bottom) */}
              <div className="absolute left-0 top-0 w-8 lg:w-12 h-full color-secondary z-10" />
              <div className="absolute left-0 top-0 w-full h-16 lg:h-20 color-secondary z-10" />
              <div className="absolute left-0 bottom-0 w-full h-16 lg:h-20 color-secondary z-10" />
              
              {/* Image with padding to show borders */}
              <div className="absolute inset-0 pt-16 lg:pt-20 pb-16 lg:pb-20  pr-0 z-20">
                <div className="relative w-full h-full -mr-12 lg:-mr-16 translate-x-6 lg:translate-x-8">
                  <Image
                    src="/homeBanner.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className=" px-6 md:px-8 lg:px-12  text-black py-12 md:py-16 lg:py-20 flex flex-col justify-center relative">
            {/* Subtle dotted pattern at very top edge */}
            <div className="absolute top-0 left-0 right-0 h-1 opacity-40">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '10px 10px'
              }} />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold color-primary mb-6">
                Founder&apos;s Note
              </h2>
              
              <p className=" text-base md:text-lg leading-relaxed mb-6 italic">
                &quot;Sports have the power to inspire, connect, and transform, but only when it&apos;s told the right way.&quot;
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6">
                When I started <span className="font-bold">Mysnatic Sports</span>, I didn&apos;t just want to create another agency, I wanted to build a movement that redefines how India sees sports marketing. A space where bold ideas meet smart execution, where ideas inspire change, strategies spark growth, and every partnership creates value that lasts beyond the final whistle.
              </p>
              
              <p className=" text-base md:text-lg leading-relaxed mb-6">
                Being part of India&apos;s evolving sports ecosystem has taught me one thing: <span className="font-bold">opportunity doesn&apos;t wait, it&apos;s created.</span>
              </p>
              
              <p className=" text-base md:text-lg leading-relaxed mb-8">
                At Mysnatic, we believe in creating those opportunities for brands, for leagues, for local talent, and for the fans who make it all possible. We&apos;re young, ambitious, and hungry to shape what&apos;s next for Indian sport, not just to participate in it.
              </p>
              
              <div className="text-center md:text-left">
                <p className=" font-semibold text-lg md:text-xl mb-1">— Deepak Rai</p>
                <p className=" text-base">
                  Founder & Managing Director, Mysnatic Sports
                </p>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>

    {/* How We Work and Three Pillars Section */}
    <section className="w-full max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Left Column - How We Work */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold color-primary mb-6">
            How We Work
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            We believe in combining the <span className="font-bold">strategy of a consulting firm</span>, the <span className="font-bold">energy of a creative agency</span>, and the <span className="font-bold">discipline of a sports brand</span>.
          </p>
        </div>

        {/* Right Column - Three Pillars */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#162542] mb-6 md:mb-8 text-center md:text-left">
            Our process is built on three pillars:
          </h2>
          <div className="space-y-6 md:space-y-8">
            {/* Insight */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start color-secondary rounded-xl p-4 md:p-5">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/homeBanner.jpg"
                  alt="Insight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">1. Insight</h3>
                <p className="text-gray-200 text-base md:text-lg">
                  Understanding the audience, sport, and brand DNA.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start color-secondary rounded-xl p-4 md:p-5">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/homeBanner.jpg"
                  alt="Innovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">2. Innovation</h3>
                <p className="text-gray-200 text-base md:text-lg">
                  Designing campaigns that stand out and stand for something.
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start color-secondary rounded-xl p-4 md:p-5">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/homeBanner.jpg"
                  alt="Impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">3. Impact</h3>
                <p className="text-gray-200 text-base md:text-lg">
                  Delivering measurable results — from engagement to revenue growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Culture & People Section */}
    <section className="w-full color-secondary py-12 md:py-16 lg:py-20">
      <div className="max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/homeBanner.jpg"
              alt="Culture & People"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Culture & People
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
              We are thinkers, creators, strategists, and dreamers. Our team is bonded
              by an <span className="font-bold text-white">obsession for sport and innovation</span>.
            </p>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              We believe in <span className="font-bold text-white">hustle, respect, and endless learning</span>.
              Every day is an opportunity to push boundaries, challenge norms, and create
              something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Let's Build the Next Big Sports Story Section */}
    <section className="w-full max-w-[1350px] mx-auto px-4 md:px-5 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Let&apos;s Build the Next Big Sports Story.
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Ready to create impact? Let&apos;s collaborate, innovate, and elevate your brand
          through sport.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact-us"
          className="w-full sm:w-auto px-8 py-3 md:py-4 color-secondary text-white rounded-lg font-medium text-base md:text-lg hover:bg-[#0d1f4a] transition-colors text-center"
        >
          Get in Touch
        </a>
        <a
          href="/services"
          className="w-full sm:w-auto px-8 py-3 md:py-4 color-secondary text-white rounded-lg font-medium text-base md:text-lg hover:bg-[#0d1f4a] transition-colors text-center"
        >
          Explore our services
        </a>
      </div>
    </section>

  

    <Footer />
  </main>
  )
}

export default page
