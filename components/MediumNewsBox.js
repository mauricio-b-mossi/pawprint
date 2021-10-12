import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Link from "next/link";

export default function MediumNewsBox({ post }) {

  const { title, categories, mainImage, publishedAt, author, slug, description } = post;

  const imageProps = useNextSanityImage(sanityClient, mainImage);
  
  return (
    <div className="col-span-3 md:col-span-1 px-2">
      <div className="grid gap-3">
        <Link href={"/article/" + slug.current}>
          <a>
            <Image
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </a>
        </Link>
        <div className="font-semibold font-serif text-2xl flex justify-start items-center hover:text-red-600">
          <Link href={"/article/" + slug.current}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div className="uppercase text-gray-400 font-serif">
            {publishedAt.substring(5, 10).replace("-", ".")}
          </div>
          <div className="col-span-2 transition-all ease-in-out hover:underline">
            <Link href={"/member/" + author.slug.current}>
              <a>
                <p>{author.name}</p>
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center col-span-3 pt-4">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
