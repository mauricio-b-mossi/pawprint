import React, { useState, useEffect } from "react";
// import NewsGallery from '../components/NewsGallery'
import TopicGallery from "./TopicGallery";
import Link from 'next/link'

export default function GenericNewsGrid({ posts,  header, link }) {

  return (
    <div className="max-w-7xl border py-8">
      <div className="grid xl:grid-cols-5">
        <div className="col-span-4 xl:col-span-1 border-l flex xl:flex-col items-center justify-around xl:justify-start px-4 xl:px-0 xl:w-full ">
          <div className="font-black font-sans xl:pb-20 pb-2 w-full">
            <Link href={link}>
              <a>
                <h1 className="text-2xl hover:underline px-4">{header}</h1>
              </a>
            </Link>
          </div>
        </div>
        <TopicGallery post={posts} />
      </div>
    </div>
  );
}
