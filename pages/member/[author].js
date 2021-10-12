import React from 'react'
import NavBar from '../../components/NavBar'

export default function Author({member}) {
    return (
        <div>
            <NavBar />
            
        </div>
    )
}

export const getServerSideProps = async ({ context }) => {

    const slug = context.params.slug;

  const membersQuery = `*[_type == "members" && name == $slug]| order(order){
    name,
    position,
    biography,
    mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
  }`;
  const member = await sanityClient.fetch(membersQuery);

  return {
    props: {
      member,
    },
  };
};
