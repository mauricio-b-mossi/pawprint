import React from "react";
import GenericNewsGrid from "../components/GenericNewsGrid";
import NavBar from "../components/NavBar";
import SectionItem from "../components/Section";
import ThreeGrid from "../components/ThreeGallery";
import { sanityClient } from "../sanity";
import Head from 'next/head'

export default function FoodAndTravel({ Food, Section }) {
  const Main = Food.slice(0, 12);
  const Rest = Food.slice(12);
  return (
    <div>
      <Head>
        <title>Food and Travel | Pawprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <GenericNewsGrid
          posts={Main}
          header={"Lifestyle"}
          link={"/food-and-travel"}
        />
        <SectionItem data={Section} />
        <ThreeGrid posts={Rest} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {

  const food = `*[_type == "post" && subject == "food"] | order(_createdAt desc){
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

  const section = `*[_type == "section" && section == "food"][0]{
      title,
      body,
      image{asset->{url}}
    }`;

  const Section = await sanityClient.fetch(section);

  const Food = await sanityClient.fetch(food);

  return {
    props: {
      Food,
      Section
    },
  };
};
