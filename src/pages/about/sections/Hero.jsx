import { TitleText } from "../../../components/CustomTexts";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Hero = () => {
  return (
    <section className="outterContainer relative overflow-hidden bg-primaryDark pb-[6.75rem] pt-20 md:pb-[7rem] md:pt-[7.625rem] lg:pb-[7.5rem] lg:pt-[8.125rem]">
      {/* content */}
      <section className=" paddingX text-center lg:flex lg:justify-between lg:gap-[10.25rem] lg:text-left ">
        {/* title */}
        <TitleText
          title={
            <h1 className=" text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold leading-[clamp(2.5rem,5vw+1rem,4rem)] text-white md:text-[4rem] md:leading-[3.5rem] lg:leading-[6.25rem] ">
              About
            </h1>
          }
        />

        {/* paragraph */}
        <motion.div
          variants={fadeIn("left", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" lg:relative "
        >
          <p className="mx-auto  max-w-[28.5625rem] pt-4 text-[0.9375rem] font-semibold leading-7 text-white md:pt-6 lg:w-[45.625rem] lg:max-w-max lg:pt-[2.5rem] lg:text-[1.125rem]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
          {/* top line */}
          <div className="absolute left-0 top-0 hidden h-[0.25rem] w-[3.125rem] bg-primaryLight lg:block"></div>
        </motion.div>
      </section>

      {/* bg-img*/}
      <div className=" bgImgAboutHero h-[12.5rem] w-[12.5rem]"></div>
    </section>
  );
};

export default Hero;
