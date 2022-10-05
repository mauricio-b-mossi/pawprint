import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Content from './Content';
import Link from 'next/link'
import pawprint from '../public/pawprint.png'



const Members = ({ member }) => {

  const { position, author } = member
  
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <motion.div
      layout
      className="flex flex-col items-center justify-content"
    >
      <motion.div
        layout
        className="relative flex justify-center items-center p-8 md:p-16 rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 md:w-52 md:h-52 relative">
            <Image
              className="rounded-full cursor-pointer "
              src={author?.image.asset.url ? author.image.asset.url : pawprint}
              alt=""
              width="300"
              height="300"
              priority={true}
              
              onClick={author?.bio ? toggleOpen : console.log("Empty Bio")}
            />
          </div>

          {/* If there is no bio do not let tap */}
          <AnimatePresence>
            <div className="block p-2">{isOpen && <Content text={author?.bio} />}</div>
          </AnimatePresence>
          <Link href={"/members/" + author?.slug.current}>
            <a>
              <h1 className="font-black pt-3 hover:underline">{author?.name ? author.name : "Vacant"}</h1>
            </a>
          </Link>
          <h3 className="font-light">{position ? position : ""}</h3>
        </div>
      </motion.div>
    </motion.div>
  )

//  return <div/>
   
};

export default Members;
