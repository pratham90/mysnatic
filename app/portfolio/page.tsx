import Navbar from "@/components/Navbar";
import Image from "next/image";
import "../globals.css"
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
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
              <h1 className="text-white font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl tracking-widest leading-tight" style={{fontFamily: 'Orbitron, sans-serif'}}>PORTFOLIO</h1>
            </div>
          </section>
       
        <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6">
          <p className="max-w-337 color-primary text-xl md:text-3xl lg:text-4xl mb-8 text-center md:text-left">Uttar Pradesh Pro Volleyball League</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-5 items-start text-black">
            <div className="space-y-4 text-center md:text-left">
              <p>Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorem quibusdam at repudiandae cupiditate facere velit molestias ut sed culpa. amet consectetur adipisicing elit. Facilis nisi natus eaque nostrum, dignissimos deserunt sed ipsum enim non id? ur adipisicing elit. Iste voluptatem impedit, soluta voluptate consequuntur sit alias non explicabo optio consectetur perferendis. </p>
              <p>Lorem ipsum, dceat rerum Lorem ipsum dolor ssitatibus cupiditate? Iusto. illum, voluptatem qui. Ullam molestias voluptas nam saepe eaque quis!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate recusandae inventore unde neque consequatur incidunt officia  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate impedit rem, ut id rerum amet autem enim. Pariatur, quasi earum.cumque autem reiciendis. Maiores, fugiat? Fuga officiis nihil fugiat cupiditate adipisci, quos iste sit.</p>
              <div className="flex gap-4 justify-center md:justify-start mt-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7 text-blue-700"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-blue-700"
                >
                  <svg
                    className="w-7 h-7 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
                  </svg>
                </a>
                <a href="#" aria-label="X" className="hover:text-blue-500">
                  <svg
                    className="w-7 h-7 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:text-blue-700"
                >
                  <svg
                    className="w-7 h-7 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 0 0-1.94 1.94A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 0 0 1.94-1.94A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="hover:text-blue-500"
                >
                  <svg
                    className="w-7 h-7 text-blue-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.3 4.77a1 1 0 0 0 1.22 1.22l4.77-1.3A12 12 0 1 0 20.52 3.48zm-8.52 17a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.29-6.71a1 1 0 0 0-1.42 0l-1.29 1.29a7.07 7.07 0 0 1-3.29-3.29l1.29-1.29a1 1 0 0 0 0-1.42l-2-2a1 1 0 0 0-1.42 0A5 5 0 0 0 7 12a5 5 0 0 0 5 5 5 5 0 0 0 3.54-1.46z" />
                  </svg>
                </a>
              </div>
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

               <LogoCarousel logos={[{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" },{ src: "/homeBanner.jpg", alt: "Portfolio image" }]} />
          <Footer />
          </main>
  )
}

export default page
