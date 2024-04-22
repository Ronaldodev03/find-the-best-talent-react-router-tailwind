import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { build } from "../../../data";

import BuildCard from "../components/BuildCard";

const Build = () => {
  return (
    <section className=" outterContainer relative flex flex-col overflow-hidden bg-secondaryDarkerGreen py-16 md:py-[6.25rem] lg:flex-row lg:gap-[clamp(1rem,8.5vw+0.25rem,7.8125rem)] lg:py-[8.75rem]">
      {/* title */}
      <div className=" paddingX text-left lg:pr-0 ">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative  "
        >
          {/* title */}
          <h2 className=" w-[15rem] pt-8 text-[clamp(2rem,3.5vw+0.25rem,3rem)] font-bold leading-10 text-white lsm:w-[27.8125rem] lg:text-5xl lg:leading-[3rem]  ">
            Build & manage distributed teams like no one else.
          </h2>

          {/* top line */}
          <div className="absolute  left-0 top-0 h-[0.25rem] w-[3.125rem] bg-primaryLight"></div>
        </motion.div>
      </div>

      {/* bg-img */}
      <div className=" bgImgHomeBuild h-[15.25rem] w-[12.5rem]"></div>

      {/* cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" pt-14 lg:pt-8"
      >
        {build.map((data, index) => (
          <div key={index} className=" pb-12  last:relative last:pb-0">
            <BuildCard data={data} index={index} />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Build;
