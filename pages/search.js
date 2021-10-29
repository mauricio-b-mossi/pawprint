import React from 'react'
import NavBar from '../components/NavBar'
import SearchComponent from '../components/SearchComponent'
import { sanityClient } from "../sanity";
import Head from 'next/head'

export default function search({ posts}) {
    return (
      <div>
        <Head>
          <title>Search | Pawprint</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="min-h-screen">
          <NavBar />
          <SearchComponent postList={posts} />
        </div>
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
