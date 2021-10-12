import React from "react";
import NavBar from "../components/NavBar";
import MembersSectionHeader from "../components/MembersSectionHeader";
import Members from '../components/Members'
import { sanityClient } from "../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function meetTheTeam({ members }) {
  // console.log(members);
  return (
    <div>
      <NavBar />
      <div id="sectionGradient" className="min-h-screen  text-white">
        <MembersSectionHeader />
        <div className="relative flex flex-col justify-center items-center md:flex-row">
          <AnimateSharedLayout>
            <motion.div
                          layout
                          className="grid lg:grid-cols-2 xl:grid-cols-3 h-full flex-grow "
              // className="flex justify-center"
            >
              {members &&
                members.map((member, index) => (
                  <Members member={member} key={index} />
                ))}
            </motion.div>
          </AnimateSharedLayout>
          {/* Individual card */}
          {/* Second */}
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
