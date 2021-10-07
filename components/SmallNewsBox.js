import React from 'react'

export default function SmallNewsBox({ post }) {
  
  const {publishedAt, title} = post;

  return (
  
      <div className="border-t max-w-xs md:max-w-none flex-col py-4">
        <div className="grid grid-cols-3 justify-between">
          <div className="uppercase text-gray-400 font-serif">
            {publishedAt.substring(5, 10).replace("-", ".")}
          </div>
          <div className="col-span-2 transition-all ease-in-out hover:opacity-50">
            <p>Mauricio Mossi</p>
          </div>
          <div className="flex justify-center items-center col-span-3 pt-4 font-semibold hover:text-red-600">
            <p>{title}</p>
          </div>
        </div>
      </div>
  );
}
