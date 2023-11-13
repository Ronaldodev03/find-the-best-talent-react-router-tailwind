import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";
const ReadyStart = () => {
  const navigate = useNavigate();
  return (
    <section className="paddingX outterContainer relative overflow-hidden bg-primaryLight py-[5.1875rem]">
      <div className=" flex flex-col items-center gap-[1.5rem] md:flex-row md:justify-between lg:px-[5.9375rem]">
        <motion.h2
          variants={fadeIn("right", "tween", 0.5, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=" text-center text-[2rem] font-bold leading-8 text-secondaryDarkerGreen  lg:text-5xl lg:leading-[3rem]"
        >
          Ready to get started?
        </motion.h2>

        <motion.button
          onClick={() => navigate("/contact")}
          variants={fadeIn("left", "tween", 0.5, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="  rounded-3xl border-2 border-solid border-secondaryDarkerGreen px-8 py-[0.625rem] text-secondaryDarkerGreen ease-in-out hover:bg-secondaryDarkerGreen hover:text-white hover:duration-300"
        >
          contact us
        </motion.button>
      </div>
      {/* bg-img*/}
      <div className=" bgImgReadyStart h-[12.5rem] w-[12.5rem]"></div>
    </section>
  );
};

export default ReadyStart;
