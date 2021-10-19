import React from "react";
import GenericNewsGrid from "../components/GenericNewsGrid";
import NavBar from "../components/NavBar";
import SectionItem from "../components/Section";
import ThreeGrid from "../components/ThreeGallery";
import { sanityClient } from "../sanity";
import Head from 'next/head'
import RedSectionStrip from '../components/RedSectionStrip'

export default function PopCulture({ Sports, Section }) {
  const Main = Sports.slice(0, 12);
  const Rest = Sports.slice(12);
  return (
    <div>
      <NavBar />
      <Head>
        <title>Sports | Pawprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <RedSectionStrip />
        <GenericNewsGrid posts={Main} header={"Sports"} link={"/sports"} />
        <SectionItem data={Section} />
        <ThreeGrid posts={Rest} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {

  const sports = `*[_type == "post" && subject == "sports"] | order(_createdAt desc){
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

    const section = `*[_type == "section" && section == "sports"][0]{
      title,
      body,
      image{asset->{url}}
    }`;

    const Section = await sanityClient.fetch(section);

  const Sports = await sanityClient.fetch(sports);

  return {
    props: {
      Sports,
      Section
    },
  };
};
