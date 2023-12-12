import React from "react";
import Image from "next/image";
import ListRequest from "@/allApi/listRequest/listRequest";
import HomeComponent from '@/homeComponent/homeComponent';
import Footer from "@/footer/footer";


async function page() {
  const PostList = await ListRequest();
 
  return (
    <>
        <section className="  relative sm:top-[70px] md:top-[100px] lg:top-[100px] ">
        <div >
          <h1 className="text-white text-center text-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 py-4">post-list</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12 xl:px-16 mt-4">
            {PostList.map((item, index) => (
              <div key={index} className="shadow-2xl h-[380px] p-4">
                <div>
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <Image src={item.img} alt={item.title} width={400} height={300} />
                  <p className="mt-2">{item.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <HomeComponent />
        
      </section>
      <section>
      <div className=" relative top-[150px]">
        <Footer/>
        </div>
      </section>
      
     
   
    </>
  
  );
}

export default page;
