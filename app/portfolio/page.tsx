"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "../globals.css"
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const page = () => {
  const swiperRef = useRef<SwiperType | null>(null);
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
              <h1 className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight font-mokoto">PORTFOLIO</h1>
            </div>
          </section>
       
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6">
          <p className="max-w-337 color-primary text-xl md:text-3xl lg:text-4xl mb-8 text-center md:text-left">Uttar Pradesh Pro Volleyball League</p>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.portfolio-pagination'
            }}
            loop={true}
            speed={800}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="portfolio-carousel"
          >
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 items-start text-black">
                <div className="space-y-4 text-center md:text-left">
                  <p>Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem quibusdam at repudiandae cupiditate facere velit molestias ut sed culpa. amet consectetur adipisicing elit. Facilis nisi natus eaque nostrum, dignissimos deserunt sed ipsum enim non id? ur adipisicing elit. Iste voluptatem impedit, soluta voluptate consequuntur sit alias non explicabo optio consectetur perferendis. </p>
                  <p>Lorem ipsum, dceat rerum Lorem ipsum dolor ssitatibus cupiditate? Iusto. illum, voluptatem qui. Ullam molestias voluptas nam saepe eaque quis!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate recusandae inventore unde neque consequatur incidunt officia  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate impedit rem, ut id rerum amet autem enim. Pariatur, quasi earum.cumque autem reiciendis. Maiores, fugiat? Fuga officiis nihil fugiat cupiditate adipisci, quos iste sit.</p>
                  <div className="flex gap-4 justify-center md:justify-start mt-2">
                  <FaInstagram size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaFacebook size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                <FaXTwitter size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaYoutube size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaWhatsapp size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                  </div>
                </div>
                <div className="flex justify-center md:justify-end text-center md:text-left">
                  <Image
                    src="/homeBanner.jpg"
                    alt="Home Banner"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-125 lg:h-100 rounded-tr-[50px] rounded-bl-[50px] z-0"  
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 items-start text-black">
                <div className="space-y-4 text-center md:text-left">
                  <p>Second slide content: Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem quibusdam at repudiandae cupiditate facere velit molestias ut sed culpa. amet consectetur adipisicing elit. Facilis nisi natus eaque nostrum, dignissimos deserunt sed ipsum enim non id? ur adipisicing elit. Iste voluptatem impedit, soluta voluptate consequuntur sit alias non explicabo optio consectetur perferendis. </p>
                  <p>Lorem ipsum, dceat rerum Lorem ipsum dolor ssitatibus cupiditate? Iusto. illum, voluptatem qui. Ullam molestias voluptas nam saepe eaque quis!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate recusandae inventore unde neque consequatur incidunt officia  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate impedit rem, ut id rerum amet autem enim. Pariatur, quasi earum.cumque autem reiciendis. Maiores, fugiat? Fuga officiis nihil fugiat cupiditate adipisci, quos iste sit.</p>
                  <div className="flex gap-4 justify-center md:justify-start mt-2">
                  <FaInstagram size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaFacebook size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                <FaXTwitter size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaYoutube size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaWhatsapp size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                  </div>
                </div>
                <div className="flex justify-center md:justify-end text-center md:text-left">
                  <Image
                    src="/homeBanner.jpg"
                    alt="Home Banner"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-125 lg:h-100 rounded-tr-[50px] rounded-bl-[50px] z-0"  
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 items-start text-black">
                <div className="space-y-4 text-center md:text-left">
                  <p>Third slide content: Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem quibusdam at repudiandae cupiditate facere velit molestias ut sed culpa. amet consectetur adipisicing elit. Facilis nisi natus eaque nostrum, dignissimos deserunt sed ipsum enim non id? ur adipisicing elit. Iste voluptatem impedit, soluta voluptate consequuntur sit alias non explicabo optio consectetur perferendis. </p>
                  <p>Lorem ipsum, dceat rerum Lorem ipsum dolor ssitatibus cupiditate? Iusto. illum, voluptatem qui. Ullam molestias voluptas nam saepe eaque quis!</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate recusandae inventore unde neque consequatur incidunt officia  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate impedit rem, ut id rerum amet autem enim. Pariatur, quasi earum.cumque autem reiciendis. Maiores, fugiat? Fuga officiis nihil fugiat cupiditate adipisci, quos iste sit.</p>
                  <div className="flex gap-4 justify-center md:justify-start mt-2">
                  <FaInstagram size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaFacebook size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                <FaXTwitter size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaYoutube size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
               <FaWhatsapp size={31} className="text bg-white rounded-full p-1 text-[#0c0c0c] "  />
                  </div>
                </div>
                <div className="flex justify-center md:justify-end text-center md:text-left">
                  <Image
                    src="/homeBanner.jpg"
                    alt="Home Banner"
                    width={100}
                    height={100}
                    className="object-cover w-full md:h-125 lg:h-100 rounded-tr-[50px] rounded-bl-[50px] z-0"  
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Custom Navigation Controls at Bottom */}
          <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#0D267A] text-[#0D267A] hover:bg-[#0D267A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="portfolio-pagination"></div>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#0D267A] text-[#0D267A] hover:bg-[#0D267A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          <style jsx global>{`
            .portfolio-pagination {
              position: relative !important;
              bottom: auto !important;
              left: auto !important;
              transform: none !important;
              width: auto !important;
              display: flex;
              justify-content: center;
              gap: 8px;
            }
            .portfolio-pagination .swiper-pagination-bullet {
              background: #0D267A;
              opacity: 0.5;
              width: 10px;
              height: 10px;
              margin: 0 !important;
            }
            .portfolio-pagination .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 5px;
            }
            @media (max-width: 768px) {
              .portfolio-pagination .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
              }
              .portfolio-pagination .swiper-pagination-bullet-active {
                width: 20px;
              }
            }
          `}</style>
        </section>

               <LogoCarousel logos={[{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" }]} />
          <Footer />
          </main>
  )
}

export default page
