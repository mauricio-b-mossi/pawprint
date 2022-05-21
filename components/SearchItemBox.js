
import Pawprint from '../public/pawprint.png'
import React from "react";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Image from "next/image";
import Link from 'next/link';

export default function SearchItemBox({ post }) {
  const { title, category, publishedAt, description, mainImage, slug } = post;
  
  // const category = categories[0]

  const imageProps = useNextSanityImage(sanityClient, mainImage);
  return (
    <div className="grid grid-cols-3   sm:h-auto max-w-2xl gap-4 border-t border-b py-4 bg-white">
      <div className="col-span-2 grid">
        <div className=" text-sm grid grid-cols-2 gap-2 items-center">
          <p className="text-blue-700 font-sans uppercase font-semibold">
            {category}
            <span className="uppercase text-gray-400 font-serif text-sm sm:text-base ml-2">
              {publishedAt.substring(5, 10).replace("-", ".")}
            </span>
          </p>
        </div>
        <div className="font-semibold font-serif text-lg sm:text-2xl flex justify-start items-center hover:text-red-600">
          <Link href={"/article/" + slug.current}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        </div>
        <div>
          <p className="text-sm sm:text-base">
            {description.substring(0, 130)}...
          </p>
        </div>
      </div>
      <div className="block my-auto">
        <Link href={"/article/" + slug.current}>
          <a>

                {imageProps?.src ? 
                <Image
                  {...imageProps}
                  layout="responsive"
                  sizes="(max-width: 465.83px) 100vw, 800px"
                />
                  :
                <Image
                  src={Pawprint}
                  layout="responsive"
                  sizes="(max-width: 465.83px) 100vw, 800px"
                />
                }

          </a>
        </Link>
      </div>
    </div>
  );
}
