import React from "react";
import NavBar from "../../components/NavBar";
import { sanityClient } from "../../sanity";
import Image from "next/image";
import Insta from "../../public/instaIcon.svg";
import Share from "../../public/shareIcon.svg";
import Email from "../../public/emailIcon.svg";
import { useNextSanityImage } from "next-sanity-image";
import BlockContent from "@sanity/block-content-to-react";
import Link from 'next/link'

export default function Slug({ post }) {
  const { title, category, mainImage, publishedAt, author, description, body} =
    post;

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  const imageProps = useNextSanityImage(sanityClient, mainImage);
  return (
    <div>
      <NavBar />
      {/* Post */}
      <div className="min-h-screen p-8">
        {/* Data */}
        <div className="grid md:grid-cols-2 md:gap-4">
          <div className="uppercase text-black font-serif border-t border-black pb-2 ">
            {publishedAt.substring(0, 10).replace("-", ".").replace("-", ".")}
          </div>
          <div>
            <p className="text-blue-700 font-sans uppercase font-semibold border-t border-black pb-2 ">
              {category}
            </p>
          </div>
          <div className="flex justify-around items-center border-t border-b border-black p-2 md:col-span-2">
            <Link href="https://www.instagram.com/thepawprintabc/">
              <a>
                <Image src={Insta} width="20" height="20" />
              </a>
            </Link>
            <Link href="mailto:thepawprint@abc-net.edu.sv">
              <a>
                <Image src={Email} width="20" height="20" />
              </a>
            </Link>
            <Link href="https://twitter.com/share?url=<URL>&text=<TEXT>via=<USERNAME>">
              <a>
                <Image src={Share} width="20" height="20" />
              </a>
            </Link>
          </div>
        </div>
        {/* Head */}
        <div className="grid lg:grid-cols-2  w-full lg:py-8">
          <div className="max-w-lg py-4 lg:flex lg:flex-col lg:justify-center ">
            <div className="capitalize font-semibold font-serif  text-2xl md:text-4xl my-4">
              <h3>{title}</h3>
            </div>
            <div className="uppercase my-4 md:text-xl">
              <h8>By</h8>
              <br />
              <Link href={"/member/" + author.slug.current}>
                <a>
                  <h8 className="hover:underline">{author.name}</h8>
                </a>
              </Link>
            </div>
            <div>
              <p className="text-base my-4 md:text-lg">{description}</p>
            </div>
          </div>
          <div>
            <Image
              {...imageProps}
              layout="responsive"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>
        {/* Article */}
        <div className="prose mx-auto break-words">
          <BlockContent
            blocks={body}
            serializers={serializers}
            imageOptions={{ fit: "max" }}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
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

//    "author": author->{name,slug},
//     "category": categories[]->title[0],
//     publishedAt,
//     description,
//     body,
//     mainImage{
//                     asset->{
//                         _id,
//                         url
//                     }
//                 }
//             },
