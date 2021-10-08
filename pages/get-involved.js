import React from 'react'
import NavBar from "../components/NavBar";
import Image from "next/image";
import GetInvolved from "../public/getInvolved.gif";
import Link from "next/link";


export default function getInvolved() {
    return (
      <div>
        <NavBar />
        <div id="sectionWavesRed">
          <div className="min-h-screen flex md:grid md:grid-cols-2 justify-center items-center sm:bg-red-600">
            <div className="flex flex-col  text-white h-full justify-center mx-auto">
              <div className="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-white">
                Get involved
              </div>
              <div className="text-3xl md:text-4xl ">Hi there.</div>
              <div className="text-lg md:text-xl lg:text-2xl font-light">
                Here you can find our google forms etc.
              </div>
              <div className="grid grid-cols-2 gap-4 w-full py-8">
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
            <div>
              <Image src={GetInvolved} layout="responsive" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center bg-red-600">
          <iframe
            className="overflow-y-hidden"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfHD5IisKGjxXaz-Pl_atGsRgRs7e3I7Mc-FD8LagmrQ27z0Q/viewform?embedded=true"
            width="640"
            height="1989"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div> */}
      </div>
    );
}
