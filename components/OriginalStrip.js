import React from 'react'
import Eyes from "../public/eyes.svg";
import Image from "next/image";
import Link from "next/link";
import Send from "../public/send.svg";

export default function OriginalStrip() {
    return (
      <div className="flex w-full ">
        <div className="hidden lg:block bg-yellow-200 p-4 flex-grow"></div>
        <div className="bg-yellow-300 w-full max-w-7xl p-4 flex-grow">
          <div className="flex justify-start items-center">
            <div className="p-4 grid grid-cols-5 text-black ">
              <div className="col-span-4">
                <h1 className="text-xl sm:text-3xl  font-serif  font-semibold tracking-normal py-2">
                  Student Work
                </h1>
                <p className="text-sm sm:text-base max-w-4xl">
                  Impressive student work. Here we highlight all the amazing
                  projects or schoolwork ABC students make!
                </p>
              </div>
              <div className="flex justify-center items-center col-span-1">
                <Link href="/get-involved">
                  <a>
                    <Image
                      src={Send}
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
        <div className="hidden lg:block bg-yellow-200 p-4 flex-grow"></div>
      </div>
    );
}
