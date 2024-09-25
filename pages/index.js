import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import NewsGallery from "../components/NewsGallery";
import NavBar from "../components/NavBar";
import { sanityClient } from "../sanity";
import MainNewsGrid from "../components/MainNewsGrid";
import GenericNewsGrid from "../components/GenericNewsGrid";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import YellowSectionStrip from "../components/YellowSectionStrip";
import GreenSectionStrip from "../components/GreenSectionStrip";
import RedSectionStrip from "../components/RedSectionStrip";
import BlueSectionStrip from "../components/BlueSectionStrip";
import OrangeSectionStrip from "../components/OrangeSectionStrip";
import img from "../public/pawprint.png";

export default function Home({
  News,
  Home,
  Arts,
  Sports,
  Pop,
  Food,
  SectionHome,
  weather,
}) {
  return (
    <div>
      <Head>
        <title>News, Arts, Sports, and more.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="The Paw Print" />
        <meta
          property="og:description"
          content="The Paw Print is the student-run newspaper of ABC. It provides a forum for students, faculty, and members of the local ABC community to share their research, artwork, travel experiences, political opinions, and much more."
        />
        <meta property="og:image" content="https://github.com/mauricio-b-mossi/pawprint/blob/main/public/pawprint.png?raw=true" />
      </Head>
      <NavBar />
      {/* <MainNewsGrid posts={ posts } /> */}
      <div className="flex flex-col justify-center items-center">
        {/* <NewsGallery post={posts} /> */}
        <MainNewsGrid posts={Home} weather={weather} header={"Headlines"} />
        <BlueSectionStrip />
        <GenericNewsGrid posts={News} header={"News"} link={"/news"} />
        <Section data={SectionHome} />
        <YellowSectionStrip />
        <GenericNewsGrid posts={Arts} header={"Art"} link={"/arts"} />
        <RedSectionStrip />
        <GenericNewsGrid posts={Sports} header={"Sports"} link={"/sports"} />
        <OrangeSectionStrip />
        <GenericNewsGrid
          posts={Pop}
          header={"Pop Culture"}
          link={"/pop-culture"}
        />
        <GreenSectionStrip />
        <GenericNewsGrid
          posts={Food}
          header={"Food and Travel"}
          link={"/food-and-travel"}
        />
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const home = `*[_type == "post"][0...12] | order(_createdAt desc){
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
    slug,
  }`;
  const section = `*[_type == "section" && section == "home"][0]{
      title,
      body,
      image{asset->{url}}
    }`;

  const news = `*[_type == "post" && subject == "news"][0...12] | order(_createdAt desc){
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

  const arts = `*[_type == "post" && subject == "arts"][0...12] | order(_createdAt desc){
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

  const sports = `*[_type == "post" && subject == "sports"][0...12] | order(_createdAt desc){
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

  const pop = `*[_type == "post" && subject == "pop"][0...12] | order(_createdAt desc){
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

  const food = `*[_type == "post" && subject == "food"][0...12] | order(_createdAt desc){
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

  const weather = await request.json();

  const News = await sanityClient.fetch(news);
  const Arts = await sanityClient.fetch(arts);
  const Sports = await sanityClient.fetch(sports);
  const Pop = await sanityClient.fetch(pop);
  const Food = await sanityClient.fetch(food);
  const Home = await sanityClient.fetch(home);
  const SectionHome = await sanityClient.fetch(section);

  return {
    props: {
      News,
      Arts,
      Sports,
      Pop,
      Food,
      Home,
      SectionHome,
      weather,
    },
  };
};
