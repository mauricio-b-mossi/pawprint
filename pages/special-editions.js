import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import ComingSoog from '../public/soon.gif'

export default function SpecialEditions() {
    return (
      <div>
        <NavBar />
        <div id="figuresSVG" className="min-h-screen flex justify-center items-center">
          <Image src={ComingSoog}  objectFit='contain'/>
        </div>
      </div>
    );
}
