import * as Lucide from "lucide-react";
import { Plus, BadgeCheck } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

function AccordionItem({ content }) {
  const [open, setOpen] = useState(false);
  const Icon = Lucide[content.icon];
  const ref = useRef(null);

  const container = {
    hidden: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 60,
        damping: 25,
        mass: 0.8,
      },
    },
  };

  const animatedChild = {
    hidden: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div className="flex flex-col gap-5 rounded-2xl bg-violet-950 px-4 py-4 text-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >
        <Icon size={25} />
        <span className="text-xl">{content.title}</span>
        <Plus className="ms-auto rounded-full bg-violet-600 p-1" size={30} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: ref.current ? ref.current.scrollHeight : "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-violet-950 text-white"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="open"
              exit="hidden"
              className="p-3"
            >
              {content.desc && (
                <motion.p variants={animatedChild} className="mb-5">
                  {content.desc}
                </motion.p>
              )}

              {content.subtitle && (
                <motion.span
                  variants={animatedChild}
                  className="mb-3 flex items-center gap-2 text-lg"
                >
                  <BadgeCheck size={20} color="#7f22fe" /> {content.subtitle}
                </motion.span>
              )}

              <motion.ul
                variants={container}
                className="flex flex-col items-baseline gap-3 pb-5"
              >
                {content.list.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={animatedChild}
                    className="flex w-full border-b-1 border-violet-800 pb-1"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AccordionItem;
