import Navbar from "@/components/Navbar"
import Image from "next/image"
import Footer from "@/components/Footer"
import "../globals.css"
import Link from "next/link"

const page = () => {
  return (
    <main className="flex flex-col min-h-screen gap-8 md:gap-12 lg:gap-16 bg-white overflow-x-hidden">
    
 <section className="relative w-full h-80 md:h-110 flex items-center justify-center">
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
        <div className="relative z-20 w-full max-w-[1350px]  px-4 md:px-5 lg:px-8 flex flex-col gap-6 md:items-start items-center justify-center ">
          <h1 className="text-white font-bold font-mokoto text-3xl sm:text-left text-center sm:text-4xl md:text-5xl lg:text-6xl mt-8 tracking-widest leading-tight">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="text-xl flex gap-10" >
          <p >Author</p>
          <span>Published on</span>
          </div>
        </div>
      </section>
          
          <section className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
           
            <div className="text-sm text-gray-700 mb-4 text-center md:text-left">
             <Link href="/"> Home</Link> &gt; <Link href="/news">topic1</Link> &gt; <span className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            
        
            <div className="mb-6 text-center md:text-left">
              <span className="text-sm sm:text-base color-primary font-medium">Mysnatic Sports</span>
              <span className="text-sm sm:text-base text-gray-700"> - 5 min read</span>
            </div>
            
            <div className="mb-6">
              <div className="space-y-4 text-black sm:text-lg leading-relaxed">
                <p style={{textAlign: 'justify'}}>
              oluptates aliquam dicta corrupti provident! Rerum, repudiandae! Voluptatum, mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe modi laudantium pariatur explicabo quisquam. Nostrum, necessitatibus. Unde id cumque natus neque nisi ducimus similique? Quod repudiandae nostrum, odit, rem, rerum nemo iusto quaerat earum commodi nesciunt asperiores perspiciatis doloremque. Fugiat magni laboriosam doloremque porro eaque quibusdam omnis! Sapiente facilis saepe eos voluptas. Ad hic earum dolorem temporibus sequi qui dolores deleniti quis cupiditate quos distinctio, eius, debitis corporis tempore officia tempora dolore dolor deserunt. Nulla rerum tempora tempore iste enim expedita cum saepe ipsa voluptate, maiores aspernatur culpa dolores nihil similique, optio et voluptatum reprehenderit quia. Expedita repellendus, doloribus quos molestias deserunt fugit cupiditate doloremque facilis sunt corporis dolore quaerat, id repellat, voluptatum rem accusantium omnis quae. Doloribus maiores asperiores minima porro laboriosam perferendis sunt. Eaque repellendus quis perferendis nobis earum dolorem magni culpa, itaque, cupiditate doloribus odit eos accusantium, sit enim magnam natus! Est quae quas explicabo quam fuga accusamus consequuntur rerum iste quibusdam hic! Deleniti, repudiandae exercitationem ad corrupti rem rerum eum nostrum impedit fugiat velit ea delectus consectetur reiciendis quo sunt non ex quos nihil? Soluta necessitatibus, facere totam atque nemo voluptas minus molestias, nesciunt voluptatibus ipsam dolore iure dignissimos cum nihil quidem vel natus placeat fugiat.
               </p>
               </div>
               </div>
            <div className="relative w-full  h-80 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/homeBanner.jpg"
                alt="Article Banner"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            
          
            <div className="">
              <div className="space-y-4 text-black sm:text-lg leading-relaxed">
                <p style={{textAlign: 'justify'}}>
              oluptates aliquam dicta corrupti provident! Rerum, repudiandae! Voluptatum, mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe modi laudantium pariatur explicabo quisquam. Nostrum, necessitatibus. Unde id cumque natus neque nisi ducimus similique? Quod repudiandae nostrum, odit, rem, rerum nemo iusto quaerat earum commodi nesciunt asperiores perspiciatis doloremque. Fugiat magni laboriosam doloremque porro eaque quibusdam omnis! Sapiente facilis saepe eos voluptas. Ad hic earum dolorem temporibus sequi qui dolores deleniti quis cupiditate quos distinctio, eius, debitis corporis tempore officia tempora dolore dolor deserunt. Nulla rerum tempora tempore iste enim expedita cum saepe ipsa voluptate, maiores aspernatur culpa dolores nihil similique, optio et voluptatum reprehenderit quia. Expedita repellendus, doloribus quos molestias deserunt fugit cupiditate doloremque facilis sunt corporis dolore quaerat, id repellat, voluptatum rem accusantium omnis quae. Doloribus maiores asperiores minima porro laboriosam perferendis sunt. Eaque repellendus quis perferendis nobis earum dolorem magni culpa, itaque, cupiditate doloribus odit eos accusantium, sit enim magnam natus! Est quae quas explicabo quam fuga accusamus consequuntur rerum iste quibusdam hic! Deleniti, repudiandae exercitationem ad corrupti rem rerum eum nostrum impedit fugiat velit ea delectus consectetur reiciendis quo sunt non ex quos nihil? Soluta necessitatibus, facere totam atque nemo voluptas minus molestias, nesciunt voluptatibus ipsam dolore iure dignissimos cum nihil quidem vel natus placeat fugiat.
               </p>

              </div>
            </div>
          </section>
          
          <Footer />
          </main>
  )
}

export default page

