import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Content from './Content';
import Link from 'next/link'
import Information from '../public/information.png'



const Members = ({ member }) => {

  const { position, author } = member
  
  const {name, bio, image, slug} = author
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      //   initial={{ borderRadius: 10 }}
      className="flex flex-col items-center justify-content"
    >
      <motion.div
        layout
        className="relative flex justify-center items-center p-8 md:p-16 rounded-lg"
      >
        {/* <div className="absolute top-6 right-6 md:top-12 md:right-12">
          <Image
            src={Information}
            width="24"
            height="24"
            onClick={toggleOpen}
          />
        </div> */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 md:w-52 md:h-52 relative">
            <Image
              className="rounded-full cursor-pointer "
              src={image.asset.url}
              alt=""
              width="300"
              height="300"
              priority={true}
              onClick={toggleOpen}
            />
          </div>

          {/* TODO: Add this "md:hidden" to make responsive again */}
          <AnimatePresence>
            <div className="block p-2">{isOpen && <Content text={bio} />}</div>
          </AnimatePresence>
          <Link href={"/member/" + slug.current}>
            <a>
              <h1 className="font-black pt-3 hover:underline">{name}</h1>
            </a>
          </Link>
          <h3 className="font-light">{position}</h3>
        </div>
        {/* TODO: HIDDING TO THE SIDE OPEN */}
        {/* <AnimatePresence>
          <div className="hidden md:block p-8">
            {isOpen && <Content text={biography} />}
          </div>
        </AnimatePresence> */}
      </motion.div>
    </motion.div>
  );
};

export default Members;
