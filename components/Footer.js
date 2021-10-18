import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from '../public/blackSmallArrow.svg'

export default function Footer() {
  return (
    <div className="bg-blue-900 text-white over overflow-x-hidden flex justify-center items-center  ">
      <div className="max-w-7xl border-r border-l border-gray-500">
        {/* Links */}
        <div className="text-md lg:text-xl  font-bold font-serif flex tracking-tighter pb-4 px-4">
          <Link href="/news">
            <a>
              <h8 className="p-1 lg:pr-12 border-r border-gray-500 ">News</h8>
            </a>
          </Link>
          <Link href="/arts">
            <a>
              <h8 className="p-1 lg:pr-12 border-r border-gray-500">Arts</h8>
            </a>
          </Link>
          <Link href="/sports">
            <a>
              <h8 className="p-1 lg:pr-12 border-r border-gray-500">Sports</h8>
            </a>
          </Link>
          <Link href="/pop-culture">
            <a>
              <h8 className="p-1 lg:pr-12 border-r border-gray-500">Culture</h8>
            </a>
          </Link>
          <Link href="/food-and-travel">
            <a>
              <h8 className="p-1 lg:pr-12">Lifestyle</h8>
            </a>
          </Link>
        </div>
        {/* Mail */}
        <div className="grid grid-cols-12 xl:border-t border-gray-500">
          <div className="col-span-12 xl:col-span-3 w-full  border-b border-t xl:border-t-0 border-gray-500 py-2 pb-12">
            <div className="max-w-xs px-4">
              <h8 className="font-bold font-sans tracking-tight">
                Sign up for the Guardian Today email
              </h8>
              <p className="text-sm py-1 border-t-2 border-blue-300 leading-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="w-56">
                <input
                  className="py-1 w-36 bg-opacity-50 border-t border-l border-b pl-2 bg-gray-700 border-gray-500 placeholder-gray-500 rounded-l-full"
                  type="text"
                  placeholder="Email address"
                />
                <button className="bg-white w-20 text-black py-1 px-2 border  rounded-r-full font-semibold hover:bg-red-700 hover:text-white hover:border-r hover:border-red-800">
                  Sign up
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* Links */}
          <div className="px-4 col-span-6 xl:col-span-3 xl:border-l xl:border-gray-500">
            <div className="flex flex-col font-medium font-sans">
              <Link href="/contact-us">
                <a>
                  <h8 className="py-1 hover:text-red-700">Contact Us</h8>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <h8 className="py-1 hover:text-red-700">About</h8>
                </a>
              </Link>
              <Link href="/get-involved">
                <a>
                  <h8 className="py-1 hover:text-red-700">Get Involved</h8>
                </a>
              </Link>
              <Link href="/meet-the-team">
                <a>
                  <h8 className="py-1 hover:text-red-700">Meet the team</h8>
                </a>
              </Link>
            </div>
          </div>
          {/* Second */}
          <div className="grid lg:grid-cols-2 col-span-6 font-medium font-sans border-l border-gray-500 px-2">
            <div className="flex-grow flex flex-col ">
              <Link href="/topics">
                <a>
                  <h8 className="py-1 hover:text-red-700">All topics</h8>
                </a>
              </Link>
              <Link href="/members">
                <a>
                  <h8 className="py-1 hover:text-red-700">All writers</h8>
                </a>
              </Link>
              <Link href="https://www.instagram.com/thepawprintabc/">
                <a>
                  <h8 className="py-1 hover:text-red-700">Instagram</h8>
                </a>
              </Link>
              <Link href="/special-editions">
                <a>
                  <h8 className="py-1 hover:text-red-700">Special Editions</h8>
                </a>
              </Link>
              <Link href="/newsletters">
                <a>
                  <h8 className="py-1 hover:text-red-700 pb-2">Newsletters</h8>
                </a>
              </Link>
            </div>
            <div className="flex flex-col w-full lg:border-l lg:border-gray-500">
              <h8 className="text-xl font-bold font-serif text-red-700  border-gray-500 border-t xl:border-t-0">
                Support Pawprint
              </h8>
              <p>Available for everyone, funded by readers</p>
              <div className="grid md:grid-cols-2 gap-2 justify-between items-center py-2">
                <Link href="#">
                  <a>
                    <div className="rounded-full bg-red-700 px-2 flex items-center w-36 group ">
                      <h8 className="px-2">Contribute</h8>
                      <Image
                        src={Arrow}
                        width="20"
                        height="20"
                        className="transform ease-in-out duration-75 group-hover:scale-110"
                      />
                    </div>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <div className="rounded-full bg-red-700 px-2 flex items-center w-36 group ">
                      <h8 className="px-2">Contribute</h8>
                      <Image
                        src={Arrow}
                        width="20"
                        height="20"
                        className="transform ease-in-out duration-75 group-hover:scale-110"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
