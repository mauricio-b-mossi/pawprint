import React from 'react'
import Image from "next/image";
import MadTrump from "../public/madTrump.jpg";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Link from 'next/link'

export default function LargeNewsBox({ post }) {
  const {
    title,
    category,
    mainImage,
    publishedAt,
    author,
    slug,
    description,
  } = post;

  const imageProps = useNextSanityImage(sanityClient, mainImage);
    return (
      <div className="col-span-3 px-4 ">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href={"/article/" + slug.current}>
              <a>
                <Image
                  {...imageProps}
                  layout="responsive"
                  sizes="(max-width: 465.83px) 100vw, 800px"
                />
              </a>
            </Link>
          </div>
          {/* New grid */}
          <div className="grid col-span-2 md:col-span-1 xl:col-span-3 lg:col-span-2 lg:grid-cols-2">
            <div className="lg:hidden capitalize flex items-center w-full font-semibold font-serif col-span-3 text-lg lg:text-xl xl:text-2xl  hover:text-red-600 lg:py-4">
              <Link href={"/article/" + slug.current}>
                <a>
                  <h1>{title}</h1>
                </a>
              </Link>
            </div>
            <div className=" hidden lg:flex justify-center items-center  pt-4">
              <p className="text-sm sm:text-base">
                {description.substring(0, 130)}...
              </p>
            </div>
            <div className="lg:border-l  px-0 lg:px-4 col-span-1">
              <div className="grid grid-cols-3 justify-between">
                <div className=" text-sm sm:text-base grid grid-cols-2 gap-2 items-center">
                  <p className="text-blue-700 font-sans uppercase font-semibold">
                    {category}
                    <span className="uppercase text-gray-400 font-serif  ml-2">
                      {publishedAt.substring(5, 10).replace("-", ".")}
                    </span>
                  </p>
                </div>
                {/* <div className="uppercase text-gray-400 font-serif ">
                  {publishedAt.substring(5, 10).replace("-", ".")}
                </div>
                <div className="col-span-2 transition-all ease-in-out hover:underline">
                  <Link href={"/member/" + author.slug.current}>
                    <a>
                      <p>{author.name}</p>
                    </a>
                  </Link>
                </div> */}
                <div className="lg:hidden flex justify-center items-center  pt-4 col-span-3">
                  <p className="text-sm ">
                    {description.substring(0, 130)}...
                  </p>
                </div>
                <div className="hidden lg:flex capitalize  font-semibold font-serif col-span-3 text-lg lg:text-xl xl:text-2xl  hover:text-red-600 py-4">
                  <Link href={"/article/" + slug.current}>
                    <a>
                      <h1>{title}</h1>
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
