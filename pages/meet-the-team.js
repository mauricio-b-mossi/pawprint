import React from "react";
import NavBar from "../components/NavBar";
import MembersSectionHeader from "../components/MembersSectionHeader";
import Members from "../components/Members";
import { sanityClient } from "../sanity";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function meetTheTeam({ members }) {
  const information = {
    title: "Meet pawprint executives",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem architecto enim asperiores dignissimos officiis quod! Veniam tenetur perspiciatis expedita ab ad corporis, sapiente aspernatur cupiditate animi vel dolorum atque!",
  };
  // console.log(members);
  return (
    <div>
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
