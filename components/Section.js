import React from 'react'
import Image from 'next/image'
import MadTrump from "../public/madTrump.jpg";

export default function Section({ data }) {
  
  return (
    <>
      {data.image && (
        <div className="w-full group  p-4 h-60 relative bg-black flex justify-start items-center">
          <Image
            src={data.image.asset.url}
            layout="fill"
            objectFit="cover"
            className="opacity-50 transform ease-in-out duration-300 group-hover:scale-110"
          />
          <div className="absolute p-4 text-white ">
            <h1 className="text-lg   sm:text-3xl  font-serif  font-semibold tracking-normal py-2">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base max-w-4xl">{data.body}</p>
          </div>
        </div>
      )}
    </>
  );
}
