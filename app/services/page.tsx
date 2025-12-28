"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import "../globals.css";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";

// MarqueeImageRow: horizontally scrolling images, pause on hover
const images = [
  "/homeBanner.jpg",
  "/homeBanner.jpg",
  "/homeBanner.jpg",
  "/homeBanner.jpg",
  "/homeBanner.jpg",
];

const MarqueeImageRow = () => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Pause animation on hover
  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = isHovered ? "paused" : "running";
    }
  }, [isHovered]);

  return (
    <div
      className="overflow-hidden w-full h-30 md:h-32 lg:h-80 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={marqueeRef}
        className="flex items-center gap-5 animate-marquee"
        style={{
          width: 'max-content',
          animation: 'marquee 15s linear infinite',
        }}
      >
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0"
          >
            <Image
              src={src}
              alt="scrolling-img"
              fill
              className="object-contain rounded-xl h-full"
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

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
            SERVICES
          </h1>
        </div>
      </section>

      <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 items-start text-black">
          <div className="space-y-4 text-center md:text-left">
            <p className="max-w-337 color-primary text-xl md:text-3xl lg:text-4xl text-center md:text-left tracking-wider">
              Sponsorship Management
            </p>
            <p>
              Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem
              quibusdam at repudiandae cupiditate facere velit molestias ut sed
              culpa. amet consectetur adipisicing elit. Facilis nisi natus eaque
              nostrum, dignissimos deserunt sed ipsum enim non id? ur
              adipisicing elit. Iste voluptatem impedit, soluta voluptate
              consequuntur sit alias non explicabo optio consectetur
              perferendis.{" "}
            </p>
            <p>
              Lorem ipsum, d. Ullam molestias voluptas nam saepe eaque quis!
            </p>
            <p>
              Lorecidunt officia Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate impedit rem, ut id rerum amet autem
              enim. Pariatur, quasi earum.cumque autem reiciendis. Maiores,
              fugiat? Fuga officiis nihil fugiat cupiditate adipisci, quos iste
              sit.
            </p>
          </div>
          <div className="flex justify-center md:justify-end text-center md:text-left">
            <Image
              src="/homeBanner.jpg"
              alt="Home Banner"
              width={100}
              height={100}
              className="object-cover w-full md:h-125 lg:h-100 rounded-tr-4xl z-0"
            />
          </div>
        </div>
      </section>

      <LogoCarousel
        logos={[
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
          { src: "/homeBanner.jpg", alt: "Portfolio image" },
        ]}
      />
      {/* Marquee-like auto-scrolling image section */}
      <section className="relative w-full max-w-[1350px]  mx-auto px-4  sm:px-6">
        <MarqueeImageRow />
      </section>
      <Footer />
    </main>
  );
};

export default page;
