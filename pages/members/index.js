import React from "react";
import NavBar from "../../components/NavBar";
import MembersSectionHeader from "../../components/MembersSectionHeader";
import Authors from '../../components/Authors'
import { sanityClient } from "../../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function index({ authors }) {
  console.log(authors);
    const information = {
      title: "Special Thanks Writers!",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem architecto enim asperiores dignissimos officiis quod! Veniam tenetur perspiciatis expedita ab ad corporis, sapiente aspernatur cupiditate animi vel dolorum atque!",
    };
  return (
    <div>
      <NavBar />
      <div id="confettiSVG" className="min-h-screen">
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

