import React from 'react'
import Image from 'next/image'
import MadTrump from '../public/madTrump.jpg'
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Link from "next/link";

export default function TeacherCard({ teachers }) {

  console.log(teachers);

  const { position, author } = teachers;

  const {bio, image, slug, name } = author;

  const imageProps = useNextSanityImage(sanityClient, image);


    return (
      <div className="col-span-3 md:col-span-1 px-2 max-w-xs">
        <div className="grid gap-3">
          <Link href={"/article/" + slug.current}>
            <a>
              <Image
                src={image.asset.url}
                layout="responsive"
                width="100"
                height="100"
                // sizes="(max-width: 800px) 100vw, 800px"
              />
            </a>
          </Link>
          <div className="font-semibold font-serif text-2xl flex justify-start items-center hover:text-red-600">
            <Link href={"/article/" + slug.current}>
              <a>
                <h1>{name}</h1>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-3 justify-between">
            <div className=" text-sm grid grid-cols-2 gap-2 items-center">
              <p className="text-blue-700 font-sans uppercase font-semibold">
                {position}
                <span className="uppercase text-gray-400 font-serif text-sm sm:text-base ml-2">
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center col-span-3 pt-4">
              <p className="text-sm sm:text-base">
                {bio.substring(0, 130)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
