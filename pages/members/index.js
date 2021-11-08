import React from "react";
import NavBar from "../../components/NavBar";
import MembersSectionHeader from "../../components/MembersSectionHeader";
import Authors from '../../components/Authors'
import { sanityClient } from "../../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Head from 'next/head'
import Link from 'next/link'

export default function index({ authors }) {

    const page = " page!";
    const link = "Get Involved";
    const bodyText =
      "Special thanks to all the writers that make Paw Print possible. If you're interested in becoming a Paw Print writer, please check the ";
    const information = {
      title: "Special Thanks Writers!",
      description: (
        <span>
          {bodyText}
          <Link href="/get-involved">
            <a className="font-bold">{link}</a>
          </Link>
          {page}
        </span>
      ),
    };

  return (
    <div>
      <Head>
        <title>Writers | Pawprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div id="redDottedSVG" className="min-h-screen">
        <MembersSectionHeader information={information} />
        <div className="relative flex flex-col justify-center items-center md:flex-row">
          <AnimateSharedLayout>
            <motion.div
              layout
              className="grid lg:grid-cols-2 xl:grid-cols-3 h-full flex-grow "
            >
              {authors &&
                authors.map((author, index) => (
                  <Authors author={author} key={index} />
                ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
    const membersQuery = `*[_type == "author"] {
      name,
      status,
      slug,
      image{asset->{url}},
      bio
  }`;
  const authors = await sanityClient.fetch(membersQuery);

  return {
    props: {
      authors,
    },
  };
};

