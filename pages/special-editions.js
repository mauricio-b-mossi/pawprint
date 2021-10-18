import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import ComingSoog from '../public/soon.gif'
import Head from 'next/head'

export default function SpecialEditions() {
    return (
      <div>
        <Head>
          <title>Special Editions | Pawprint</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavBar />
        <div
          id="figuresSVG"
          className="min-h-screen flex justify-center items-center"
        >
          <Image src={ComingSoog} objectFit="contain" />
        </div>
      </div>
    );
}
