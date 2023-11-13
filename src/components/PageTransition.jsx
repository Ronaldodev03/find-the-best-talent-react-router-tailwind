/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const variantsIn = {
    initial: { scaleY: 0 },
    animate: { scaleY: 0 },
    exit: { scaleY: 1 },
  };

  return (
    <div>
      <motion.div
        className=" slide-out z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className=" slide-in z-50 bg-secondaryDarkGreen"
        variants={variantsIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className=" slide-in z-50 bg-secondaryDarkerGreen"
        variants={variantsIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />

      <motion.div
        className=" slide-in  z-50"
        variants={variantsIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />
      {children}
    </div>
  );
};

export default PageTransition;
