import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "../../../utils/motion";
import DeliveringResultsCard from "../components/DeliveringResultsCard";
import { deliveringResults } from "../../../data";

const DeliveringResults = () => {
  return (
    <section className=" relative overflow-hidden bg-secondaryDarkGreen pb-[10.25rem] pt-[8.75rem] md:pb-[6.25rem] md:pt-[6.25rem] lg:pb-[9.4375rem] lg:pt-[8.75rem]">
      {/* title */}
      <div className=" paddingX">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* title */}
          <h2 className="  text-center text-[clamp(2rem,3.5vw+0.25rem,3rem)] font-bold leading-10 text-white lg:text-5xl lg:leading-[3rem]  ">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-secondaryBlue">success stories.</span>
          </h2>
        </motion.div>
      </div>

      {/* bg-img-01*/}
      <div className=" bgImgHomeDelivering h-[6.25rem] w-[9.1875rem]"></div>

      {/* cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="paddingX pt-[5.25rem] lg:flex lg:gap-9 lg:pt-[5.75rem]"
      >
        {deliveringResults.map((data, index) => (
          <div key={index} className=" pb-[5.25rem] last:pb-0 lg:pb-0">
            <DeliveringResultsCard data={data} index={index} />
          </div>
        ))}
      </motion.div>

      {/* bg-img-02*/}
      <div className=" bgImgHomeDelivering02 h-[12.5rem] w-[12.5rem]"></div>
    </section>
  );
};

export default DeliveringResults;
