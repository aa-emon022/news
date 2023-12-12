import React from "react";
import Image from "next/image";
import NewRequest from "@/allApi/newsRequest/newRequest";

async function HomeComponent() {
  const newsList = await NewRequest();

  return (
    <section className=" mt-[10px] lg:mt-[20px]">
      <div className="relative top-[40px]  ">
      <h1 className="text-white text-center text-3xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 py-4">
  News-list
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12 xl:px-16 mt-4">
          {newsList.map((items, index) => (
            <div key={index} className="shadow-2xl h-[360px] p-4">
              <div>
                <h1 className="text-xl font-semibold">{items.title}</h1>
                <Image src={items.img} alt={items.title} width={400} height={300} />
                <p className="mt-2">{items.short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
