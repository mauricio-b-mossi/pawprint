import React from 'react'
import GenericNewsGrid from '../components/GenericNewsGrid';
import NavBar from '../components/NavBar'
import SectionItem from '../components/Section';
import ThreeGrid from '../components/ThreeGallery';
import { sanityClient } from '../sanity';
import Head from 'next/head'
import BlueSectionStrip from '../components/BlueSectionStrip';


export default function news({ News, Section }) {
    
    const Main = News.slice(0, 12);
    const Rest = News.slice(12)
    return (
      <div>
        <NavBar />
        <Head>
          <title>News | Pawprint</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="flex flex-col justify-center items-center">
          <BlueSectionStrip />
          <GenericNewsGrid posts={Main} header={"News"} link={"/news"} />
          <SectionItem data={Section} />
          <ThreeGrid posts={Rest} />
        </div>
      </div>
    );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {

  const news = `*[_type == "post" && subject == "news"] | order(_createdAt desc){
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

     const section = `*[_type == "section" && section == "news"][0]{
      title,
      body,
      image{asset->{url}}
    }`;


    const News = await sanityClient.fetch(news);
    const Section = await sanityClient.fetch(section);
    
  return {
    props: {
      News,
      Section
    },
  };
};
