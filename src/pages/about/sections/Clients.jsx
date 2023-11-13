import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";
import { staggerContainer } from "../../../utils/motion";
import { clients } from "../../../data";
import ClientListItem from "../components/ClientListItem";
const Clients = () => {
  return (
    <section className=" outterContainer relative overflow-hidden bg-secondaryDarkerGreen py-[5.5rem] md:py-[6.25rem]">
      <motion.h2
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" pb-16 text-center text-[2rem] font-bold leading-8 text-white md:pb-12 lg:text-5xl lg:leading-[3rem]"
      >
        Some of our clients
      </motion.h2>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="  flex flex-col items-center gap-[3.4375rem] md:flex-row md:justify-between md:gap-[2.4375rem] md:px-10 lg:px-20 xl:px-[10.3125rem]"
      >
        {clients.map((data, index) => (
          <li key={index}>
            <ClientListItem data={data} index={index} />
          </li>
        ))}
      </motion.ul>
      {/* bg-img*/}
      <div className=" bgImgAboutClients h-[12.5rem] w-[12.5rem]"></div>
    </section>
  );
};

export default Clients;
