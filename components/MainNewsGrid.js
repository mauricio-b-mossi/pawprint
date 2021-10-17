import React, { useState, useEffect } from "react";
// import NewsGallery from '../components/NewsGallery'
import TopicGallery from "./TopicGallery";
import DateWidget from "./DateWidget";
import WeatherWidget from "./WeatherWidget";

export default function MainNewsGrid({ posts, weather, header }) {

  return (
    <div className="max-w-7xl py-8">
      <div className="lg:pt-4 2xl:pt-20 ">
        <div className="grid xl:grid-cols-5 border-t">
          <div className="col-span-4 xl:col-span-1 border-l flex xl:flex-col items-center justify-around xl:justify-start px-4 xl:px-0 xl:w-full ">
            <div className="font-black font-serif xl:pb-20 pb-2 w-full">
              <h1 className="text-2xl">{header}</h1>
              <DateWidget />
            </div>
            <WeatherWidget weather={weather} />
          </div>
          <TopicGallery post={posts} />
        </div>
      </div>
    </div>
  );
}
