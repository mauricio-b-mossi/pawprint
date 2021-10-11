import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Content from './Content';



const Members = ({ member }) => {

  const {name, position, biography, mainImage} = member
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      layout
      onClick={toggleOpen}
      //   initial={{ borderRadius: 10 }}
      className="flex flex-col items-center justify-content"
    >
      <motion.div
        layout
        className="relative flex justify-center items-center p-8 md:p-16 cursor-pointer rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 md:w-52 md:h-52">
            <Image
              className="rounded-full"
              src={mainImage.asset.url}
              alt=""
              width="300"
              height="300"
              priority={true}
            />
          </div>
          {/* TODO: Add this "md:hidden" to make responsive again */}
          <AnimatePresence>
            <div className="block p-2">
              {isOpen && <Content text={biography} />}
            </div>
          </AnimatePresence>

          <h1 className="font-black pt-3">{name}</h1>
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
