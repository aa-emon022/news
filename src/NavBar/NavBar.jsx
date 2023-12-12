"use client";
import Link from "next/link";
import { useState, React } from "react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const pathname = usePathname();
  const [data, setData] = useState(false);

  const BarHandle = () => {
    setData(!data);
  };
 
  return (
    <section className="  ">
      <div className="hidden md:flex  md:flex-wrap md:justify-center md:items-center md:h-[6rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  w-full fixed z-10">
        <ul className="  flex  flex-wrap text-center gap-[4rem] text-[1.7rem]">
          <li className=" ">
            <Link
              className={pathname === `/home` ? "text-[#FFA500]" : "text-blue-400"}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              className={pathname === "/about" ? "text-[#FFA500]" : "text-blue-400"}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              className={pathname === "/blog" ? "text-[#FFA500]" : "text-blue-400"}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="">
            <Link
              className={pathname === "/contact" ? "text-[#FFA500]" : "text-blue-400"}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
       
      </div>
      <button onClick={BarHandle}>
          <FontAwesomeIcon className="text-[30px] h-[2rem] flex  md:hidden pl-[2rem] pt-[1rem] w-full" icon={faBars} />
        </button>
      {
        data && (<div>

{" "}
<ul className=" flex flex-wrap justify-center items-center gap-3 text-[1.6rem] pb-4">
  <li className=" ">
    <Link
      className={pathname === `/home` ? "text-[#FFA500]" : "text-blue-400" }
      href="/"
    >
      Home
    </Link>
  </li>
  <li className="">
    <Link
      className={pathname === "/about" ? "text-[#FFA500]" : "text-blue-400"}
      href="/about"
    >
      About
    </Link>
  </li>
  <li className="">
    <Link
      className={pathname === "/blog" ? "text-[#FFA500]" : "text-blue-400"}
      href="/blog"
    >
      Blog
    </Link>
  </li>
  <li className="">
    <Link
      className={pathname === "/contact" ? "text-[#FFA500]" : "text-blue-400"}
      href="/contact"
    >
      Contact
    </Link>
  </li>
</ul>
</div>)
      }
    </section>
  );
}

export default NavBar;
