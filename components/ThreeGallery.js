import React from "react";
import MediumNewsBox from "./MediumNewsBox";
import SameSizeMedium from "./SameSizeMediumNewsBox";
export default function ThreeGrid({ posts }) {
  return (
    <>
      {posts.length > 0 && (
        <div className="max-w-7xl border py-8">
          <div className="col-span-4 grid xl:grid-cols-4 gap-8">
            <div className="col-span-4 flex ">
              <div className="grid grid-cols-4 gap-10 xl:gap-0  border-r border-l ">
                {posts.map((post, key) => (
                  <SameSizeMedium key={key} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
