/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
const BuildCard = ({ data, index }) => {
  const { img, title, content } = data;

  const imgKeys = Object.keys(data.img);
  const firstImgKey = imgKeys[0];

  return (
    <motion.article
      variants={fadeIn("left", "spring", index * 0.5 + 0.2, 0.75)}
      className="paddingX flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-[1.4375rem] md:text-left lg:pl-0"
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
        <h3 className=" pb-2 text-lg font-bold text-primaryLight md:pb-4">
          {title}
        </h3>
        <p className=" text-[0.9375rem] font-semibold leading-[1.5625rem] text-white">
          {content}
        </p>
      </div>
    </motion.article>
  );
};

export default BuildCard;
