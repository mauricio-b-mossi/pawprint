import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import NewsGallery from '../components/NewsGallery'
import NavBar from "../components/NavBar";
import { sanityClient } from "../sanity";
import Section from '../components/Section'

export default function Home({ posts }) {
  console.log("====================================");
  console.log(posts);
  console.log("====================================");

  return (
    <div>
      <NavBar />
      <NewsGallery post={posts} />
    </div>
  );
}


export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "post"][0...12] | order(_createdAt desc){
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

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};