import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NewsGallery from '../components/NewsGallery'
import NavBar from "../components/NavBar";
import { sanityClient } from "../sanity";
import Section from '../components/Section'
import TopicNewsGrid from '../components/TopicNewsGrid'
import { useEffect, useState } from "react"

export default function Home({ posts, weather }) {

  
  return (
    <div>
      <NavBar />
      {/* <TopicNewsGrid posts={ posts } /> */}
      <div className="flex justify-center items-center">
        <div className="max-w-7xl ">
          {/* <NewsGallery post={posts} /> */}
          <TopicNewsGrid posts={ posts } weather={ weather } />
        </div>
      </div>
    </div>
  );
}


export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "post"][0...12] | order(_createdAt desc){
    title,
    categories,
    publishedAt,
     "category": categories[]->title[0],
     "author": author->{name, slug},
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
    description,
    slug
  }`;
  // q=48.8567,2.3508
  const request = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=8af103308d3441abb4933538211410&q=13.6769,-89.2797"
  );

  const weather = await request.json()

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
      weather
    },
  };
};