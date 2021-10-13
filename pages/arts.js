import React from "react";
import NavBar from "../components/NavBar";
import Swiper from "../components/SwiperComponent";
import CardSwiper from "../components/CardSwiper";
import { sanityClient } from "../sanity";

export default function Arts({ posts }) {

  const { title, description, images } = posts

  return (
    <div>
      <NavBar />
      <Swiper images={ images }/>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "category" && title == "Art" ][0] | order(_createdAt desc){
    title,
    description,
    images[]{
     asset->{
                        _id,
                        url
                    }
  },
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

