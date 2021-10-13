import React from 'react'
import NavBar from "../components/NavBar";
import MembersSectionHeader from "../components/MembersSectionHeader"
import TeacherCard from '../components/TeacherCard'
import { sanityClient } from "../sanity";


export default function GetToKnowABC({teachers}) {

    console.log(teachers);

    const information = {
      title: "Get to know the ABC",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorem architecto enim asperiores dignissimos officiis quod! Veniam tenetur perspiciatis expedita ab ad corporis, sapiente aspernatur cupiditate animi vel dolorum atque!",
    };
    return (
      <div>
        <NavBar />
        <div id="confettiSVG" className="min-h-screen  text-black">
          <MembersSectionHeader information={information} />
          {teachers &&
            teachers.map((teacher, index) => (
              <TeacherCard teachers={teacher} key={index} />
            ))}
        </div>
      </div>
    );
}

export const getServerSideProps = async ({ params }) => {
  const membersQuery = `*[_type == "members"] | order(order){
  "author": author->{name, slug, image{asset->{url}}, bio},
    position,
    
  }`;
  const teachers = await sanityClient.fetch(membersQuery);

  return {
    props: {
      teachers,
    },
  };
};
