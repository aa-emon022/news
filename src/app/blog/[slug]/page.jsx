"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Moment from "react-moment";
import Footer from '@/footer/footer'
export default function page({ params }) {
  const [showMore, setShowMore] = useState(false);
  const id = params.slug;
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
      );
      let json = await res.json();
      setData(json?.postDetails);
    })();
  }, [id]);
  const toggleText = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className=" relative top-[100px]">
        <div>
          <h1 className="text-center text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 py-6">
            post-list
          </h1>
          <div className="shadow-2xl mx-4 md:mx-auto md:w-[800px] lg:w-[1000px] xl:w-[1200px] mt-[10px]">
            <div className="md:flex">
              <div className="md:w-2/3">
                <h1 className="text-xl md:text-3xl lg:text-4xl mb-4">{data.title}</h1>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={400}
                  height={300}
                />

                <p>
                  {data && data.content && (
                    <>
                      <div>
                        {showMore ? data.content : data.content.slice(0, 510)}
                        {!showMore && <p>...</p>}
                      </div>
                      <div>
                        <div className="flex flex-col" >
                        <button
                          onClick={toggleText}
                          className="text-blue-500 hover:underline"
                        >
                          {showMore ? "Read Less" : "Read More"}
                        </button></div>
                        <div>
                        <div className="md:w-1/3   ">
                <div className="border-2 border-indigo-700 bg-pink-200 py-2 px-4 mt-4 md:mt-0">
                  <div className="text-sm md:text-base">
                    <span>Date At: </span>
                    <Moment date={data.updated_at} format="YYYY/MM/DD" />
                  </div>
                </div>
              </div>
                        </div>
                      </div>
                    </>
                  )}
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[150px]">
        <Footer/>
      </section>
    </>
  );
}
