import { textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { directors } from "../../../data";
import DirectorsCard from "../components/DirectorsCard";
const Directors = () => {
  return (
    <section className="paddingX relative flex flex-col overflow-hidden bg-secondaryDarkGreen pb-[7.25rem] pt-[5.5rem] md:pb-[8rem] md:pt-[6.25rem]  lg:pb-[10.5rem] lg:pt-[8.75rem]">
      {/* title */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <h2 className=" text-center text-[clamp(2rem,3.5vw+0.25rem,3rem)] font-bold leading-10 text-white  lg:text-5xl lg:leading-[3rem]  ">
          Meet the directors
        </h2>
      </motion.div>

      {/* bg-img-01 */}
      <div className=" bgImgAboutDirectors h-[12.5rem] w-[12.5rem]"></div>

      {/* cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" grid grid-cols-1 gap-[3.25rem] pt-12 md:grid-cols-2 md:gap-x-[0.6875rem] md:gap-y-[4.75rem] lg:grid-cols-3 lg:gap-x-[1.875rem] lg:gap-y-[4.75rem] lg:pt-16"
      >
        {directors.map((data, index) => (
          <div key={index} className=" //bg-secondaryDarkerGreen relative  ">
            <DirectorsCard data={data} index={index} />
          </div>
        ))}
      </motion.div>
      {/* bg-img-02*/}
      <div className=" bgImgAboutDirectors02 h-[6.25rem] w-[9.1875rem]"></div>
    </section>
  );
};

export default Directors;
