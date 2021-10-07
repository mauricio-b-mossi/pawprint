import React, { useState, useEffect } from "react";
import SearchItemBox from "./SearchItemBox";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../sanity";
import Image from "next/image";
import NoResult from "../public/noresult.svg";

export default function SearchComponent({ postList }) {
    const [search, setSearch] = useState("");
    const [isNull, setIsNull] = useState(false)

  const handleChange = (e) => {
    setSearch(e.target.value);
    };
    

    useEffect(() => {
        if (postList.some((post) => post.title.toLowerCase().includes(search.toLowerCase()))) {
        setIsNull(false)
      } else setIsNull(true)
  }, [search])

  return (
    <div className="grid gap-4 justify-center items-center">
      <div className="w-screen sm:w-auto py-8">
        <input
          className="border-2 border-gray-400 py-2 px-4 w-full  md:w-2xl"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      {isNull ? (
        <div className="block md:px-60">
          <Image
            src={NoResult}
            layout="responsive"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      ) : (
        postList
          .filter((post) => {
            if (search == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post, key) => <SearchItemBox key={key} post={post} />)
      )}
    </div>
  );
}
