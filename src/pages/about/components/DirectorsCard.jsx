/* eslint-disable react/prop-types */
import { easeInOut, motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const DirectorsCard = ({ data, index }) => {
  const { message, name, role, img, linkFacebook, linkTwitter } = data;
  const imgKeys = Object.keys(data.img);
  const firstImgKey = imgKeys[0];
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible((visible) => !visible);
  };
  return (
    <motion.article
      variants={fadeIn("left", "spring", index * 0.2 + 0.3, 0.75)}
      className={`relative h-full ${
        !isVisible ? "bg-secondaryDarkerGreen" : "bg-secondaryDarkestGreen"
      } `}
    >
      {!isVisible ? (
        <div className=" flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className={`flex flex-col items-center pb-[3.5rem]  pt-[2rem] text-center  text-white`}
          >
            <div className="w-24 pb-4">
              <img
                src={img[firstImgKey]}
                alt="icon"
                width={96}
                height={96}
                className="  h-full  rounded-full border-2 border-solid border-white object-contain"
              />
            </div>
            <h3 className=" text-lg font-bold text-secondaryBlue">{name}</h3>
            <h4 className="  text-[0.9375rem] font-medium italic leading-[1.125rem]">
              {role}
            </h4>
          </motion.div>
          {/* SVG */}
          <div
            onClick={toggleVisible}
            className=" absolute bottom-[-1.75rem] cursor-pointer  "
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 13">
                <circle
                  className=" duration-300 ease-in-out hover:fill-secondaryBlue"
                  id="Oval"
                  cx="28"
                  cy="28"
                  r="28"
                  fill="#F67E7E"
                />
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 20H26V26H20V30H26V36H30V30H36V26H30V20Z"
                  fill="#012F34"
                />
              </g>
            </svg>{" "}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, rotate: "180deg" }}
          animate={{ opacity: 1, rotate: "0deg" }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className={` flex h-full flex-col items-center justify-between  pb-[3.9375rem] pt-[2.1875rem] text-center text-white`}
        >
          <h3 className=" pb-[0.5rem] text-lg font-bold text-secondaryBlue">
            {name}
          </h3>
          <h4 className=" w-[14.6875rem] pb-6 text-[0.9375rem] font-semibold leading-[1.5625rem] lg:pb-[2rem]">
            {message}
          </h4>

          {/* SVG socials */}
          <div className=" flex gap-5">
            <Link className="group" target="_blank" to={linkFacebook}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  className="duration-300 ease-in-out group-hover:fill-primaryLight"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </Link>
            <Link className="group" target="_blank" to={linkTwitter}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  fill="#FFF"
                  className="duration-300 ease-in-out group-hover:fill-primaryLight"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </Link>{" "}
          </div>

          {/* SVG */}
          <div
            onClick={toggleVisible}
            className=" absolute bottom-[-1.75rem] cursor-pointer "
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 13">
                <circle
                  className="duration-300 ease-in-out hover:fill-primaryLight"
                  id="Oval"
                  cx="28"
                  cy="28"
                  r="28"
                  fill="#79C8C7"
                />
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.0711 23.7573L32.2426 20.9289L28 25.1716L23.7574 20.9289L20.9289 23.7573L25.1716 28L20.9289 32.2426L23.7574 35.0711L28 30.8284L32.2426 35.0711L35.0711 32.2426L30.8284 28L35.0711 23.7573Z"
                  fill="#012F34"
                />
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
};

export default DirectorsCard;
