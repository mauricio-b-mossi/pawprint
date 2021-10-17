import React from 'react'
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Image from "next/image";
import MadTrump from "../public/madTrump.jpg";
import Link from "next/link";

export default function Card({ data }) {

    
  const { title, description, image, slug } = data

  
  const imageProps = useNextSanityImage(sanityClient, image);
  
  return (
    <Link href={"/topics/" + slug.current}>
      <a>
        <div className="grid grid-cols-3 sm:h-auto max-w-2xl gap-4 border-t border-b py-4 bg-white">
          <div className="col-span-2 grid">
            <div className="font-semibold font-serif text-md sm:text-lg flex justify-start items-center hover:text-red-600">
     
                  <h1 className="text-blue-700 font-sans uppercase font-semibold">
                    {title}
                  </h1>
               
            </div>
            <div>
              <p className="text-sm sm:text-base">
                {description.substring(0, 130)}
              </p>
            </div>
          </div>
          <div className="block my-auto h-40">
            <Image {...imageProps} width={160} height={160} />
          </div>
        </div>
      </a>
    </Link>
  );
}
