import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import Error from "./Error";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.message);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Error>{error.statusText || error.message || "error"}</Error>

      {/* bg-img*/}
      <div className="paddingXBg  ">
        <div className="relative">
          <div className=" bgImgHomeHero02 h-[6.25rem] w-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
