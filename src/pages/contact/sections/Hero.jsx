import { TitleText } from "../../../components/CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { contact } from "../../../data";
import ContactCard from "../components/ContactCard";
import { useActionData } from "react-router-dom";
import { fadeIn } from "../../../utils/motion";
import { Form } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef();
  const errors = useActionData();
  return (
    <div className="outterContainer relative overflow-hidden bg-primaryDark pb-[5.5rem] pt-20 md:pb-[7rem] md:pt-[7.625rem] lg:flex lg:gap-[3rem] lg:pb-[7.5rem] lg:pt-[8.125rem]">
      {/* content */}
      <section className="paddingX relative text-center lg:justify-between lg:gap-[10.25rem]  lg:pr-0 lg:text-left ">
        {/* title */}
        <TitleText
          title={
            <h1 className=" relative z-10 text-[clamp(2.5rem,5vw+1rem,4rem)] font-bold leading-[clamp(2.5rem,5vw+1rem,4rem)] text-white md:text-[4rem] md:leading-[3.5rem] lg:leading-[6.25rem] ">
              Contact{" "}
              <span className=" block pt-4 text-[2rem] leading-[3rem] text-primaryLight">
                Ask us about
              </span>
            </h1>
          }
        />

        {/* cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className=" pt-10 md:pt-6 lg:pt-8"
        >
          {contact.map((data, index) => (
            <div
              key={index}
              className=" pb-10 last:relative  last:pb-0 md:pb-2"
            >
              <ContactCard data={data} index={index} />
            </div>
          ))}
        </motion.div>
        {/* bg-img-01*/}
        <div className="bgImgContactHero02 hidden h-[12.5rem] w-[12.5rem] md:block lg:hidden xl:block"></div>
      </section>

      {/*form*/}
      <Form
        ref={ref}
        className="paddingX lg:flex-1 lg:pl-0"
        method="post"
        noValidate
      >
        <FormComponent errors={errors} />
        <motion.button
          variants={fadeIn("left", "tween", 0.5, 0.8)}
          initial="hidden"
          whileInView="show"
          type="submit"
          viewport={{ once: true, amount: 0.25 }}
          className=" mt-6 rounded-3xl border-2 border-solid border-secondaryDarkerGreen bg-white px-8 py-[0.625rem] text-secondaryDarkerGreen"
        >
          submit
        </motion.button>
      </Form>

      {/* bg-img-02*/}
      <div className=" bgImgContactHero h-[14.0625rem] w-[12.5rem]"></div>
    </div>
  );
};

export default Hero;
