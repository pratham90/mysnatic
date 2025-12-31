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
            BLOGS
          </h1>
        </div>
      </section>
  
      
      <Footer />
    </main>
  );
};

export default page;
