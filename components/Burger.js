import React from 'react'
import Image from "next/image";
import Cancel from "../public/cancel.svg";
import Logo from "../public/pawprint.png";
import Search from "../public/searchIcon.svg";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Burger({handleClick}) {
    return (
      <>
        <div className="flex-col shadow-2xl min-h-screen bg-white p-4  sm:max-w-lg flex-grow">
          <div className="flex justify-between pb-8 border-b">
            <Link href="/search">
              <a className="my-auto">
                <Image
                  className="cursor-pointer"
                  src={Search}
                  width={30}
                  height={30}
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={Logo} width={150} height={75} />
              </a>
            </Link>
            <div className="my-auto">
              <Image
                onClick={handleClick}
                className="cursor-pointer"
                src={Cancel}
                width={30}
                height={30}
              />
            </div>
          </div>
          {/* Links */}
          <div className="flex-col font-semibold text-xl pt-4">
            <div className="py-2 sm:py-4">
              <div>
                <Link href="/">
                  <a className="hover:text-red-600">News</a>
                </Link>
              </div>
              <div>
                <Link href="/arts">
                  <a className="hover:text-red-600">Arts</a>
                </Link>
              </div>
              <div>
                <Link href="/sports">
                  <a className="hover:text-red-600">Sports</a>
                </Link>
              </div>
              <div>
                <Link href="/pop-culture">
                  <a className="hover:text-red-600">Pop culture</a>
                </Link>
              </div>
              <div>
                <Link href="/food-and-travel">
                  <a className="hover:text-red-600">Food and Travel</a>
                </Link>
              </div>
            </div>
            <div className="py-2 sm:py-4">
              <div>
                <Link href="/student-work">
                  <a className="hover:text-red-600">Student Work</a>
                </Link>
              </div>
              <div>
                <Link href="/get-to-know-abc">
                  <a className="hover:text-red-600">Get to Know ABC</a>
                </Link>
              </div>
              <div>
                <Link href="/community-updates">
                  <a className="hover:text-red-600">Community updates</a>
                </Link>
              </div>
              <div>
                <Link href="/special-editions">
                  <a className="hover:text-red-600">Special Editions</a>
                </Link>
              </div>
            </div>
            <div className="py-2 sm:py-4">
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">About</a>
                </Link>
              </div>
              <div>
                <Link href="/contact-us">
                  <a className="hover:text-red-600">Contact us</a>
                </Link>
              </div>
              <div>
                <Link href="/get-involved">
                  <a className="hover:text-red-600">Get involved</a>
                </Link>
              </div>
              <div>
                <Link href="/meet-the-team">
                  <a className="hover:text-red-600">Meet the team</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden sm:block flex-grow min-h-screen"
          onClick={handleClick}
        />
      </>
    );
}
