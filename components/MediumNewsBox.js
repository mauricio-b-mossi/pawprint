import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Link from "next/link";

export default function MediumNewsBox({ post }) {

  const { title, category, mainImage, publishedAt, author, slug, description } = post;

  const imageProps = useNextSanityImage(sanityClient, mainImage);
  
  return (
    <div className="col-span-3 md:col-span-1 px-2 flex-grow-0">
      <div className="grid gap-3">
        {/* <Link href={"/article/" + slug.current}>
          <a>
            <Image
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </a>
        </Link> */}
        <Link href={"/article/" + slug.current}>
          <a>
            <div className="relative h-40">
              <Image {...imageProps} layout="fill" objectFit="cover" />
            </div>
          </a>
        </Link>
        <div className="font-semibold font-serif text-lg lg:text-xl  flex justify-start items-center hover:text-red-600">
          <Link href={"/article/" + slug.current}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div className=" text-sm  grid grid-cols-2 gap-2 items-center">
            <p className="text-blue-700 font-sans uppercase font-semibold">
              {category}
              <span className="uppercase text-gray-400 font-serif text-sm  ml-2">
                {publishedAt.substring(5, 10).replace("-", ".")}
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center col-span-3 pt-4">
            <p className="text-sm">{description.substring(0, 130)}...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
