import { TitleText } from "../../../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Hero = () => {
  return (
    <section className="outterContainer relative overflow-hidden bg-primaryDark pt-20 md:pt-[7.5rem]">
      {/* content */}
      <section className=" paddingX text-center lg:flex lg:justify-between lg:gap-[8.5rem] lg:text-left ">
        {/* title */}
        <TitleText
          title={
            <h1 className=" text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold leading-[clamp(2.5rem,5vw+1rem,4rem)] text-white md:text-[4rem] md:leading-[3.5rem] lg:text-[clamp(3rem,6vw+1rem,6.25rem)] lg:leading-[6.25rem] ">
              Find the{" "}
              <span className=" block whitespace-nowrap ">
                best <span className="text-primaryLight">talent</span>
              </span>
            </h1>
          }
        />

        {/* paragraph */}
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" lg:relative "
        >
          <p className=" mx-auto max-w-[28.5625rem] pb-[12.3125rem] pt-[1.125rem] text-[0.9375rem] font-semibold leading-7 text-white  md:pb-[15.9375rem] lg:max-w-max lg:pt-[4.9375rem] lg:text-[1.125rem]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>

          {/* top line */}
          <div className="absolute left-0 top-0 hidden h-[0.25rem] w-[3.125rem] bg-secondaryBlue lg:block"></div>
        </motion.div>
      </section>

      {/* bg-img-01 */}
      <div className=" bgImgHomeHero01 h-[12.5rem] w-[12.5rem]"></div>

      {/* bg-img-02 */}
      <div className="paddingXBg  ">
        <div className="relative">
          <div className=" bgImgHomeHero02 h-[6.25rem] w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
