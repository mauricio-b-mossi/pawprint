import React from "react";
import { sanityClient } from "../../sanity";
import NavBar from "../../components/NavBar";
import MadTrump from "../../public/madTrump.jpg";
import Image from "next/image";
import Card from "../../components/Card";
import MembersSectionHeader from "../../components/MembersSectionHeader";
import Head from 'next/head'

export default function index({ categories }) {

    const information = {
      title: "Meet pawprint executives",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem architecto enim asperiores dignissimos officiis quod! Veniam tenetur perspiciatis expedita ab ad corporis, sapiente aspernatur cupiditate animi vel dolorum atque!",
    };

  return (
    <div id="figuresSVG" className="min-h-screen ">
      <Head>
        <title>Topics | Pawprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div className="text-black py-8">
        <MembersSectionHeader information={information} />
      </div>
      <div className="grid justify-center items-center gap-4">
        {categories &&
          categories.map((member, index) => <Card data={member} key={index} />)}
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "category"]| order(_createdAt desc){
  title,
  description,
  slug,
  image{asset->{url, _id}}
}`;

  const categories = await sanityClient.fetch(query);

  return {
    props: {
      categories,
    },
  };
};
