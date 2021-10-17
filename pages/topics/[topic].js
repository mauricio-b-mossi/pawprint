import React from 'react'
import MembersSectionHeader from '../../components/MembersSectionHeader'
import NavBar from '../../components/NavBar'
import { useRouter } from "next/router";
import { sanityClient } from "../../sanity";
import Image from "next/image";
import SearchItemBox from "../../components/SearchItemBox";

export default function Category({ category }) {
    
    const { title, image, description, posts } = category;

    const information = {
      title: "Meet pawprint executives",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem architecto enim asperiores dignissimos officiis quod! Veniam tenetur perspiciatis expedita ab ad corporis, sapiente aspernatur cupiditate animi vel dolorum atque!",
    };
    return (
      <div id="figuresSVG" className="min-h-screen ">
        <NavBar />
        <div className="w-full flex flex-col justify-center items-center pb-8">
          <div className="py-8">
            <div className="w-40 h-40 md:w-52 md:h-52 ">
              <Image
                className="rounded-full"
                src={image.asset.url}
                alt=""
                width="300"
                height="300"
                priority={true}
              />
            </div>
          </div>
          <div className="prose text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {posts.map((post, key) => (
            <SearchItemBox key={key} post={post} />
          ))}
        </div>
        {/* <MembersSectionHeader information={information} /> */}
      </div>
    );
}

export const getServerSideProps = async (context) => {

    const slug = context.params.topic;
    
    console.log(slug);

  const category = await sanityClient.fetch(
    `*[_type == "category" && slug.current == $slug][0]{
     title,
    description,
  image{
                    asset->{
                        _id,
                        url
                    }
                },
  "posts": *[_type == "post" && categories[0]._ref == ^._id]{
         title,
    "category": categories[]->title[0],
    publishedAt,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
    description,
    slug
  }
}`, {slug}
  );

  return {
    props: {
      category,
    },
  };
};

