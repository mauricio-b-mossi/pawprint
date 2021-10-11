import React from "react";
import NavBar from "./NavBar";
import Swiper from "./SwiperComponent";
import CardSwiper from "./CardSwiper";

export default function Category() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Swiper />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  const post = await sanityClient.fetch(
    `
    *[slug.current == $slug][0]{
       title,
       "author": author->{name,slug},
       "category": categories[]->title[0],
        publishedAt,
     description,
     body,
     mainImage{
                     asset->{
                         _id,
                         url
                     }
                 }
    }
  `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
};
