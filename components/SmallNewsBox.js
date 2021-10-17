import React from 'react'
import Link from 'next/link'

export default function SmallNewsBox({ post }) {
  
  const {publishedAt, title, slug, author, category} = post;

  return (
    <div className="border-b mx-auto max-w-xs md:max-w-none flex flex-col my-auto items-center justify-center h-full">
      <div className="grid grid-cols-3 justify-between">
        <div className=" text-sm grid grid-cols-2 gap-2 items-center">
          <p className="text-blue-700 font-sans uppercase font-semibold">
            {category}
            <span className="uppercase text-gray-400 font-serif text-sm sm:text-base ml-2">
              {publishedAt.substring(5, 10).replace("-", ".")}
            </span>
          </p>
        </div>
  
        {/* remove text-sm */}
        <div className="text-sm flex justify-center items-center col-span-3 pt-4 font-semibold hover:text-red-600">
          <Link href={"/article/" + slug.current}>
            <a>
              <h1>{title}</h1>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
