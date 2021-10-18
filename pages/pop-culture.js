import React from "react";
import GenericNewsGrid from "../components/GenericNewsGrid";
import NavBar from "../components/NavBar";
import SectionItem from "../components/Section";
import ThreeGrid from "../components/ThreeGallery";
import { sanityClient } from "../sanity";

export default function PopCulture({ Pop, Section }) {
  const Main = Pop.slice(0, 12);
  const Rest = Pop.slice(12);
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <GenericNewsGrid posts={Main} header={"Culture"} link={"/pop-culture"} />
        <SectionItem data={ Section }/>
        <ThreeGrid posts={Rest} />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {

  const pop = `*[_type == "post" && subject == "pop"] | order(_createdAt desc){
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

    const section = `*[_type == "section" && section == "pop"][0]{
      title,
      body,
      image{asset->{url}}
    }`;

    const Section = await sanityClient.fetch(section);

  const Pop = await sanityClient.fetch(pop);

  return {
    props: {
      Pop,
      Section
    },
  };
};
