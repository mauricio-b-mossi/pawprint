import React from "react";
import Image from "next/image";
import Burger from "../public/menu.svg";
import Logo from "../public/pawprint.png";
import Search from "../public/searchIcon.svg";
import Link from 'next/link'

export default function Header({handleClick}) {
  return (
    <div className="border-b shadow-2xl">
      {/* MAIN HEADER */}
      <div className="grid grid-cols-3 align-center justify-between p-4">
        <div className="grid grid-cols-2 gap-10 mx-auto">
          <Image
            onClick={handleClick}
            className="cursor-pointer"
            src={Burger}
            width={30}
            height={30}
          />
          <Link href="/search">
            <a className="flex justify-center items-center">
              <Image
                className="cursor-pointer"
                src={Search}
                width={30}
                height={30}
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Logo} width={200} height={100} />
        </div>
      </div>

      {/* MAIN END */}
      {/* <div className="flex justify-center items-center mx-auto pb-4">
        <div className="grid grid-cols-4 justify-center items-center gap-12 font-semibold uppercase">
          <div className="w-full mx-auto flex justify-center items-center border-b-2 border-white hover:border-blue-700 hover:text-blue-700">
            <h3>Business</h3>
          </div>
          <div className="w-full mx-auto flex justify-center items-center border-b-2 border-white hover:border-blue-700 hover:text-blue-700">
            <h3>Life</h3>
          </div>
          <div className="w-full mx-auto flex justify-center items-center border-b-2 border-white hover:border-blue-700 hover:text-blue-700">
            <h3>News</h3>
          </div>
          <div className="w-full mx-auto flex justify-center items-center border-b-2 border-white hover:border-blue-700 hover:text-blue-700">
            <h3>Reviews</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}
