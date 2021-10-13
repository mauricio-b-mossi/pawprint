import React from 'react'
import NewsGallery from '../components/NewsGallery'

export default function TopicNewsGrid({ posts}) {
    return (
      <div className="grid xl:grid-cols-5 lg:p-4 2xl:p-20 ">
        <div className="cols-span-1">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-2xl  font-black font-serif">Headlines</h1>
          </div>
        </div>
        <NewsGallery post={posts} />
      </div>
    );
}
