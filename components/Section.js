import React from 'react'
import Image from 'next/image'
import MadTrump from "../public/madTrump.jpg";

export default function Section({data}) {
    return (
      <div className="w-full p-4 h-60 relative bg-black flex justify-start items-center">
        <Image
          src={MadTrump}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute p-4 text-white ">
          <h1 className="text-lg sm:text-3xl  font-serif  font-semibold tracking-normal py-2">
            Where dreams become reality
          </h1>
          <p className="text-sm sm:text-base max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere
            fuga iste quas asperiores dolore modi nisi, ad maxime hic saepe
            voluptatibus quam suscipit repudiandae ullam veniam libero, in sunt!
          </p>
        </div>
      </div>
    );
}
