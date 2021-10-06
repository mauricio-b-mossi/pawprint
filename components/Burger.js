import React from 'react'
import Image from "next/image";
import Cancel from "../public/cancel.svg";
import Logo from "../public/pawprint.png";
import Search from "../public/searchIcon.svg";
import { motion } from "framer-motion";
import Link from 'next/link';


export default function Burger({handleClick}) {
    return (
      <>
        <div className="flex-col shadow-2xl min-h-screen bg-white py-8 lg:py-20  px-8  sm:max-w-lg flex-grow">
          <div className="flex justify-between pb-8 border-b">
            <div>
              <Image src={Search} width={30} height={30} />
            </div>
            <Image src={Logo} width={150} height={75} />
            <div>
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
          <div className="flex-col font-semibold text-xl pt-8">
            <div className="py-2 sm:py-4 lg:py-8">
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Subscribe</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Back Issues</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Donate</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Store</a>
                </Link>
              </div>
            </div>
            <div className="py-2 sm:py-4 lg:py-8">
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Subscribe</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Back Issues</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Donate</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Store</a>
                </Link>
              </div>
            </div>
            <div className="py-2 sm:py-4 lg:py-8">
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Subscribe</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Back Issues</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Donate</a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a className="hover:text-red-600">Store</a>
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
