import React from 'react'
import NavBar from "../components/NavBar";
import Image from "next/image";
import Logo from '../public/pawprint.png'
import Head from 'next/head'


export default function about() {
    return (
      <div>
        <Head>
          <title>About | Pawprint</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavBar />
        {/* Main section */}

        <div id="figuresSVG" className="grid md:grid-cols-3 min-h-screen">
          <div className="md:col-span-3 min-h-screen grid md:grid-cols-3">
            <div className="flex justify-center items-center">
              <h1 className="font-serif text-3xl md:text-5xl ">About</h1>
            </div>
            <div className="flex justify-center items-center px-20 sm:px-28 md:px-0 lg:px-12 ">
              <Image src={Logo} responsive />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-serif text-3xl md:text-5xl italic ">About</h1>
            </div>
          </div>

          <div className="grid md:col-span-3 md:grid-cols-3 px-4 items-center justify-center min-h-screen">
            <div className="hidden md:block"></div>
            <div className="col-span-3 md:col-auto flex flex-col text-center max-w-sm md:max-w-none">
              <h1 className="font-serif text-3xl lg:text-5xl  py-4 border-b uppercase ">
                About us
              </h1>
              <div className="py-8 text-sm md:text-base  font-serif">
                <p>
                  The Paw Print is the student-run newspaper of ABC. It provides
                  a forum for students, faculty, and members of the local ABC
                  community to share their research, artwork, travel
                  experiences, political opinions, and much more. Letters to the
                  editor and guest columnists are encouraged but are subject to
                  editing for reasons of clarity, space, accuracy, and good
                  taste
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className="col-span-3 md:col-auto flex flex-col text-center max-w-sm md:max-w-none">
              <h1 className="font-serif text-3xl lg:text-5xl  py-4 border-b uppercase ">
                Mission Statement
              </h1>
              <div className="py-8 text-sm md:text-base  font-serif">
                <p>
                  “Our mission is to provide the most reliable, accurate, and
                  interesting information to the students, faculty, staff, and
                  surrounding community of the ABC. We hope to awaken in the
                  students the habit of reading through interesting and relevant
                  information created by someone they can relate to, developing
                  as well, a sense of belongingness.”
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
}
