import React from 'react'
import NavBar from '../components/NavBar'
import SearchComponent from '../components/SearchComponent'
import { sanityClient } from "../sanity";

export default function search({ posts}) {
    return (
      <div>
        <NavBar />
          <SearchComponent postList={posts} />
      </div>
    );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    title,
    "category": categories[]->title[0],
    publishedAt,
    description,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
