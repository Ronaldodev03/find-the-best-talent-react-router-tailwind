/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const DeliveringResultsCard = ({ data, index }) => {
  const { name, role, comment, img } = data;

  const imgKeys = Object.keys(data.img);
  const firstImgKey = imgKeys[0];

  return (
    <motion.article
      variants={fadeIn("left", "spring", index * 0.5 + 0.2, 0.75)}
      className=" relative flex flex-col items-center   text-center text-white lg:h-full lg:justify-between"
    >
      <p className="z-10 pb-4 text-[0.9375rem] font-semibold leading-[1.5625rem] lg:pb-[1.5rem]">
        {comment}
      </p>
      <h3 className=" text-lg font-bold text-secondaryBlue">{name}</h3>
      <h4 className=" pb-4 text-[0.8125rem] font-medium italic leading-[1.125rem] lg:pb-[2rem]">
        {role}
      </h4>
      <div>
        <img
          src={img[firstImgKey]}
          alt="icon"
          width={62}
          height={62}
          className="h-full rounded-full border-2 border-solid border-white object-contain"
        />
      </div>

      {/* bg-img-quotes*/}
      <div className=" bgImgHomeDeliveringQuotes h-[3.5rem] w-[4.1875rem]"></div>
    </motion.article>
  );
};

export default DeliveringResultsCard;
