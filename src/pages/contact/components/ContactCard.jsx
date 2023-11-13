/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
const ContactCard = ({ data, index }) => {
  const { img, content } = data;

  const imgKeys = Object.keys(data.img);
  const firstImgKey = imgKeys[0];

  return (
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5 + 0.2, 0.75)}
      className=" flex flex-row items-center gap-4 md:gap-[1.4375rem]  "
    >
      <div className=" h-[4.5rem] min-w-[4.5rem]">
        <img
          src={img[firstImgKey]}
          alt="icon"
          width={72}
          height={72}
          className="h-full object-contain"
        />
      </div>
      <div>
        <p className=" pr-12 text-left text-[0.9375rem] font-semibold leading-[1.5625rem] text-white">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactCard;
