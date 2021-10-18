import React from 'react'
import NavBar from "../components/NavBar";
import Image from "next/image";
import GetInvolved from "../public/getInvolved.gif";
import Link from "next/link";
import { sanityClient } from "../sanity";
import SwiperWOLinks from '../components/SwiperWOLinks'
import Head from 'next/head'


export default function getInvolved({ getInvolved }) {

  const {title, description, subTitle, images} = getInvolved
    return (
      <div>
        <Head>
          <title>Get Involved | Pawprint</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavBar />
        <div id="figuresSVG">
          <div className="min-h-screen grid md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col   h-full justify-center mx-auto">
              <div className="text-5xl lg:text-7xl 2xl:text-9xl font-bold ">
                Get involved
              </div>
              <div className="text-3xl md:text-4xl ">Hi there.</div>
              <div className="text-lg md:text-xl lg:text-2xl font-light">
                Here you can find our google forms etc.
              </div>
              <div className="grid grid-cols-2 gap-4 w-full pt-8">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfHD5IisKGjxXaz-Pl_atGsRgRs7e3I7Mc-FD8LagmrQ27z0Q/viewform?usp=sf_link">
                  <a className="button1 bouncy uppercase text-sm  sm:text-base">
                    Join the Team
                  </a>
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScDEYjbdbqWNgbrxxo-5jsYcZ9xNCQCsrc5vOkj7X-4Rtiiug/viewform?usp=sf_link">
                  <a className="button1 bouncy uppercase text-sm sm:text-base">
                    Submit your Work
                  </a>
                </Link>
              </div>
            </div>
            <div className="overflow-x-hidden max-w-xs md:max-w-md lg:max-w-lg mx-auto w-full h-full md:h-auto">
              <SwiperWOLinks images={images} />
            </div>
          </div>
        </div>
      </div>
    );
}

export const getServerSideProps = async ({ params }) => {
  //  title,
  //   subTitle,
  //   description,
  // export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == "getInvolved"][0]{
    title,
    subTitle,
    description,
    "images": images[].asset->{
                        _id,
                        url
                    }
  }`;

  const getInvolved = await sanityClient.fetch(query);

  return {
    props: {
      getInvolved,
    },
  };
};
