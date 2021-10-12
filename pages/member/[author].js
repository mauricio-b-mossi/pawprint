import React from 'react'
import NavBar from '../../components/NavBar'
import { useRouter } from "next/router";
import { sanityClient } from "../../sanity";
import Image from 'next/image';
import SearchItemBox from '../../components/SearchItemBox';

export default function Author({ member }) {

    const {bio, image, name, posts} = member
    console.log('====================================');
    console.log(member);
    console.log('====================================');
    
    return (
      <div id="figuresSVG" className="min-h-screen">
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
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
                    {posts.map((post, key) => <SearchItemBox key={key} post={post} />)}
        </div>
      </div>
    );
}

export const getServerSideProps = async ( context ) => {

    const slug = context.params.author;

//     {
//     "id": "38018275-6d7b-4bd1-adce-2f0ed41198b3"
// }

  const member = await sanityClient.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
     name,
    bio,
  image{
                    asset->{
                        _id,
                        url
                    }
                },
  "posts": *[_type == "post" && author._ref == ^._id]{
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
}`,
    { slug }
  );
    

  return {
    props: {
      member
    },
  };
};
