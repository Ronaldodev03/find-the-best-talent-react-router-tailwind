/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { Link } from "react-router-dom";

const ClientListItem = ({ data, index }) => {
  const { img, link } = data;

  const imgKeys = Object.keys(data.img);
  const firstImgKey = imgKeys[0];
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.2 + 0.3, 0.75)}>
      <Link to={link} target="_blank">
        <img src={img[firstImgKey]} alt="logo client" width={150} height={30} />
      </Link>
    </motion.div>
  );
};

export default ClientListItem;
