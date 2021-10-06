import React, { useEffect, useState } from 'react'
import Header from './Header'
import { motion } from "framer-motion";
import Burger from '../components/Burger'
const variants = {
  open: {
    x: 0,
    transition: {
        type: 'tween',
        default: { duration: 0.5 },
    },
  },
  closed: { x: "-100%" },
};

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        console.log(isOpen);
    }, [isOpen])

    const handleClick = () => {
        setIsOpen(current=> !current)
    }

    const handleOuterClick = () => {
      if (isOpen) {
        setIsOpen((current) => !current);
      }
    };

    return (
      <div
        // onClick={handleOuterClick}
        className="sticky top-0 z-10 bg-white"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="min-h-screen absolute top-0  z-20 w-full flex "
        >
          <Burger handleClick={handleClick} />
        </motion.div>
        <Header handleClick={handleClick} />
      </div>
    );
}
