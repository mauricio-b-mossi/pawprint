import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

            {author?.bio ? 
            <Image
              className="rounded-full cursor-pointer "
              src={author?.image.asset.url ?? pawprint}
              alt=""
              width="299"
              height="299"
              priority={true}
              onClick={toggleOpen}
            /> : 
            <Image
              className="rounded-full"
              src={author?.image.asset.url ?? pawprint}
              alt=""
              width="299"
              height="299"
              priority={true}
            />
          }

            
          </div>

          {/* If there is no bio do not let tap */}
          <AnimatePresence>
            <div className="block p-2">{isOpen && <Content text={author?.bio} />}</div>
          </AnimatePresence>
          {author?.name ?
          <Link href={"/members/" + author?.slug.current}>
            <a>
              <h1 className="font-black pt-3 hover:underline">{author?.name ?? "Vacant"}</h1>
            </a>
          </Link> :
            <a>
              <h1 className="font-black pt-3">{author?.name ?? "Vacant"}</h1>
            </a>
          }

          <h3 className="font-light">{position ?? ""}</h3>
        </div>
      </motion.div>
    </motion.div>
  )

//  return <div/>
   
};

export default Members;
