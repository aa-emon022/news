import React from "react";
import NewRequest from "@/allApi/newsRequest/newRequest";
import Link from "next/link";
import Footer from "@/footer/footer";

async function Page() {
  const blogItems = await NewRequest();

  return (
    <>
      <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col flex-wrap justify-center items-center">
          <div className="mx-4 md:mx-auto max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] relative md:top-[130px] lg:top-[130px]">
            {blogItems.map((post, index) => (
              <div key={index} className="mt-4 md:mt-6">
                <h1 className="border-2 w-[90%] md:w-[400px] overflow-hidden text-white px-4 py-2">
                  <Link href={`/blog/${post.id}`}>
                    <span className="text-[#E6E31A]">{index}</span> - {post.title}
                  </Link>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Page;
