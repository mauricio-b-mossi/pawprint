import React from "react";
import NavBar from "../components/NavBar";
import MembersSectionHeader from "../components/MembersSectionHeader";
import Members from "../components/Members";
import { sanityClient } from "../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Head from 'next/head'
import Link from 'next/link'

export default function meetTheTeam({ members }) {
  const page = " page!"
  const link = "Get Involved"
  const bodyText =
    "This is ABC Paw Print\'s organizing team, we are a group of passionate students with diverse interests! Click on the icons to learn a little bit more about each member. If you're interested in joining the team, please check the ";
  const information = {
    title: "Meet pawprint executives",
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
  // console.log(members);
  return (
    <div>
      <Head>
        <title>Meet the team | Pawprint</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div id="sectionGradient" className="min-h-screen  text-white">
        <MembersSectionHeader information={information} />
        <div className="relative flex flex-col justify-center items-center md:flex-row">
          <AnimateSharedLayout>
            <motion.div
              layout
              className="grid lg:grid-cols-2 xl:grid-cols-3 h-full flex-grow "
            >
              {members &&
                members.map((member, index) => (
                  <Members member={member} key={index} />
                ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const membersQuery = `*[_type == "members"] | order(order){
  "author": author->{name, slug, image{asset->{url}}, bio},
    position,
    
  }`;
  const members = await sanityClient.fetch(membersQuery);

  return {
    props: {
      members,
    },
  };
};
