import React from "react";
import Eyes from "../public/eyes.svg";
import Image from "next/image";
import Link from "next/link";
import Van from "../public/van.png";

export default function ColorSectionStrip() {
  return (
    <div className="flex w-full ">
      <div className="hidden lg:block bg-orange-200 p-4 flex-grow"></div>
      <div className="bg-orange-300 w-full max-w-7xl p-4 flex-grow">
        <div className="flex justify-start items-center">
          <div className="p-4 grid grid-cols-5 text-black mx-auto">
            <div className="col-span-4">
              <h1 className="text-xl sm:text-3xl  font-serif  font-semibold tracking-normal py-2">
                Pop culture
              </h1>
              <p className="text-sm sm:text-base max-w-4xl">
                Articles and reviews of books, movies, videogames, series, and
                music.
              </p>
            </div>
            <div className="flex justify-center items-center col-span-1">
              <Link href="/get-involved">
                <a>
                  <Image
                    src={Van}
                    width="75"
                    height="75"
                    className="transform ease-in-out duration-300 hover:rotate-720"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-orange-200 p-4 flex-grow"></div>
    </div>
  );
}
