import React, { useState, useEffect } from "react";
// import NewsGallery from '../components/NewsGallery'
import TopicGallery from "./TopicGallery";

export default function GenericNewsGrid({ posts,  header }) {

  return (
    <div className="max-w-7xl">
        <div className="grid xl:grid-cols-5">
          <div className="col-span-4 xl:col-span-1 border-l flex xl:flex-col items-center justify-around xl:justify-start px-4 xl:px-0 xl:w-full ">
            <div className="font-black font-serif xl:pb-20 pb-2 w-full">
              <h1 className="text-2xl">{header}</h1>
            </div>
          </div>
          <TopicGallery post={posts} />
      </div>
    </div>
  );
}
