import React from "react";
import Image from "next/image";
import MadTrump from "../public/madTrump.jpg";
import SmallNewsBox from "./SmallNewsBox";
import MediumNewsBox from "./MediumNewsBox";
import LargeNewsBox from "./LargeNewsBox";

export default function NewsGallery({ post }) {
  
  const largeNewsBox = post.slice(0, 1)

  const mediumNewsBox = post.slice(1, 4)

  const smallNewsBox = post.slice(4, 12)


  return (
    // lg:p-4 2xl:p-20
    // <div className="grid xl:grid-cols-4 gap-8">
    <div className="col-span-4 grid xl:grid-cols-4 gap-8">
      <div className="col-span-3 flex ">
        <div className="grid grid-cols-3 gap-10 lg:gap-20 border-r border-l ">
          {largeNewsBox.map((post, key) => (
            <LargeNewsBox key={key} post={post} />
          ))}
          {mediumNewsBox.map((post, key) => (
            <MediumNewsBox key={key} post={post} />
          ))}
        </div>
      </div>
      {/* xl:order-first */}
      <div className="col-span-3  xl:col-span-1 h-full xl:flex">
        <div className="flex  justify-center items-center lg:justify-self-auto  lg:items-stretch lg:border-r ">
          <div className="grid xl:grid-cols-1 gap-8 xl:gap-0 justify-center items-center max-w-lg ">
            {smallNewsBox.map((post, key) => (
              <SmallNewsBox key={key} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
