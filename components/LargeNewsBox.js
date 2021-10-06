import React from 'react'
import Image from "next/image";
import MadTrump from "../public/madTrump.jpg";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";

export default function LargeNewsBox({ post }) {
  const {
    title,
    categories,
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
            <Image
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
          {/* New grid */}
          <div className="grid col-span-2 md:col-span-1 xl:col-span-3 lg:col-span-2 lg:grid-cols-2">
            <div className="capitalize  font-semibold font-serif text-2xl flex justify-center items-center hover:text-red-600">
              <h1>{title}</h1>
            </div>
            <div className="lg:border-l  px-0 lg:px-4 col-span-1">
              <div className="grid grid-cols-3 justify-between">
                <div className="uppercase text-gray-400 font-serif ">
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

          {/* <div className="flex justify-center  text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            corrupti deserunt magni minus odit nihil, est harum nam porro et
            debitis laudantium exercitationem ratione velit omnis dolores, qui
            culpa tempore.
          </div>
          <s className="border-l  px-4">
            <div className="grid grid-cols-3 justify-between">
              <div className="">10.04</div>
              <div className="col-span-2 transition-all ease-in-out hover:opacity-50">
                Mauricio Mossi
              </div>
              <div className="flex justify-center items-center col-span-3 pt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                sapiente illo porro explicabo deserunt nemo, quisquam maiores
                animi alias eos distinctio ex esse facilis quas ipsum sed
                recusandae pariatur maxime!
              </div>
            </div>
          </s> */}
        </div>
      </div>
    );
}
