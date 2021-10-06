import React from "react";
import Image from "next/image";
import MadTrump from "../public/madTrump.jpg";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";

export default function MediumNewsBox({ post }) {

  const { title, categories, mainImage, publishedAt, author, slug, description } = post;

  const imageProps = useNextSanityImage(sanityClient, mainImage);
  
  return (
    <div className="col-span-3 md:col-span-1 px-2">
      <div className="grid gap-3">
        <Image
          {...imageProps}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
        />
        <div className="font-semibold font-serif text-2xl flex justify-start items-center hover:text-red-600">
          <h1>{title}</h1>
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div className="uppercase text-gray-400 font-serif">
            {publishedAt.substring(5, 10).replace("-", ".")}
          </div>
          <div className="col-span-2 transition-all ease-in-out hover:opacity-50">
            <p>Mauricio Mossi</p>
          </div>
          <div className="flex justify-center items-center col-span-3 pt-4">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
