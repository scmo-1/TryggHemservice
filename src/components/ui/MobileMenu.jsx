import React from "react";
import { motion } from "motion/react";

function MobileMenu({ open, setOpen, content }) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const animatedItem = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={open ? { y: 0 } : { y: "-100%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className="fixed top-0 right-0 left-0 z-20 bg-violet-600 p-10 pt-30 text-white"
    >
      <nav className="flex flex-col">
        <motion.ul
          variants={container}
          initial="hidden"
          animate={open ? "show" : "hidden"}
          className="flex flex-col gap-5 overflow-hidden"
        >
          {content.links.map((item) => (
            <motion.li
              variants={animatedItem}
              key={item.title}
              className="text-3xl"
            >
              <a href={item.link} onClick={() => setOpen(false)}>
                {item.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.div>
  );
}

export default MobileMenu;
