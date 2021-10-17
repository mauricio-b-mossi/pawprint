import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NewsGallery from '../components/NewsGallery'
import NavBar from "../components/NavBar";
import { sanityClient } from "../sanity";
import MainNewsGrid from '../components/MainNewsGrid'
import GenericNewsGrid from '../components/GenericNewsGrid'
import { useEffect, useState } from "react"
import Section from "../components/Section"

export default function Home({ posts, weather }) {

  
  return (
    <div>
      <NavBar />
      {/* <MainNewsGrid posts={ posts } /> */}
      <div className="flex flex-col justify-center items-center">
        {/* <NewsGallery post={posts} /> */}
        <MainNewsGrid posts={posts} weather={weather} header={"Headlines"} />
        <Section />
        <GenericNewsGrid posts={posts} header={"Art"} />
        <GenericNewsGrid posts={posts} header={"Sports"} />
        <GenericNewsGrid posts={posts} header={"Culture"} />
        <GenericNewsGrid posts={posts} header={"Lifestyle"} />
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