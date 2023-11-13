import { Link, Outlet } from "react-router-dom";
import { close, hamburger, logo } from "../assets";
import Footer from "./Footer";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setOpenMenu((value) => !value);
  return (
    <motion.div>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          {/* page transition animation */}
          <PageTransition />
        </motion.div>

        {/* content */}
        <div className="//grid  //place-content-center min-h-screen bg-secondaryDarkestGreen">
          <div className=" outterContainer  flex flex-col bg-primaryDark">
            <header className="paddingXNav paddingTopNav outterContainer relative w-full">
              <nav className=" flex w-full items-center justify-between ">
                <div className="//lg:mr-20 h-auto w-[clamp(8rem,14vw+1rem,10rem)] lsm:mr-12 lg:mr-20 lg:w-40">
                  <img src={logo} alt="logo" width={160} height={40} />
                </div>
                <ul
                  className={`z-30 hidden w-full items-center text-lg font-semibold text-white lsm:flex lsm:gap-10`}
                >
                  <li
                    className={`${
                      location.pathname === "/" && "text-primaryLight"
                    } duration-300 ease-in-out hover:text-primaryLight`}
                  >
                    <Link to="/">home</Link>
                  </li>
                  <li
                    className={`${
                      location.pathname === "/about" && "text-primaryLight"
                    } duration-300 ease-in-out hover:text-primaryLight`}
                  >
                    <Link to="/about">about</Link>
                  </li>
                  <li className="ml-auto">
                    <Link
                      className={` 
                     ${
                       location.pathname === "/contact"
                         ? " rounded-3xl border-2 border-solid border-primaryLight px-8 py-[0.625rem] text-primaryLight "
                         : " rounded-3xl border-2 border-solid px-8 py-[0.625rem] duration-300 ease-in-out hover:border-white hover:bg-white hover:text-black "
                     }`}
                      to="/contact"
                    >
                      contact us
                    </Link>
                  </li>
                </ul>

                {/* hamburger-icon / close-icon */}
                <div>
                  {!openMenu ? (
                    <motion.div
                      initial={{ opacity: 0, rotate: "90deg" }}
                      animate={{ opacity: 1, rotate: "0deg" }}
                      transition={{ duration: 0.3, ease: easeInOut }}
                      className=" relative z-40 lsm:hidden"
                    >
                      <img
                        src={hamburger}
                        alt="icon menu"
                        onClick={toggleMenu}
                        width={20}
                        height={17}
                        className="cursor-pointer"
                      />
                    </motion.div>
                  ) : (
                    <div>
                      <motion.div
                        initial={{ opacity: 0, rotate: "90deg" }}
                        animate={{ opacity: 1, rotate: "0deg" }}
                        transition={{ duration: 0.3, ease: easeInOut }}
                        className="relative z-40 lsm:hidden"
                      >
                        <img
                          src={close}
                          alt="icon menu"
                          onClick={toggleMenu}
                          width={20}
                          height={17}
                          className="cursor-pointer lsm:hidden"
                        />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Mobile Menu */}
                {/* Overlay */}
                {openMenu ? (
                  <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black/50 "></div>
                ) : (
                  ""
                )}

                {/* Side drawer menu */}
                <div
                  className={`${
                    openMenu ? "right-0" : "right-[-100%]"
                  } fixed top-0  z-30 h-screen w-[min(70%,25rem)] overflow-hidden overflow-y-auto bg-secondaryDarkBlue duration-500`}
                >
                  <nav className=" relative">
                    <ul className="absolute top-0 flex flex-col gap-[1.5rem] pl-[3rem] pt-[7rem] text-white">
                      <li
                        className={`${
                          location.pathname === "/" && "text-primaryLight"
                        } duration-300 ease-in-out hover:text-primaryLight`}
                        onClick={toggleMenu}
                      >
                        <Link to="/">home</Link>
                      </li>
                      <li
                        onClick={toggleMenu}
                        className={`${
                          location.pathname === "/about" && "text-primaryLight"
                        } duration-300 ease-in-out hover:text-primaryLight`}
                      >
                        <Link to="/about">about</Link>
                      </li>
                      <li
                        onClick={toggleMenu}
                        className=" mt-[0.75rem] rounded-3xl border-2 border-solid px-8 py-[0.625rem] duration-300 ease-in-out hover:bg-white hover:text-black"
                      >
                        <Link to="/contact">contact us</Link>
                      </li>
                    </ul>
                    {/* bg-img*/}
                    <div className=" bgImgMenu h-[12.5rem] w-[12.5rem] "></div>
                  </nav>
                </div>
              </nav>
            </header>

            <main className="flex-1">
              <Outlet />
            </main>

            <footer className="paddingX z-10 w-full bg-secondaryDarkestGreen text-white ">
              <Footer />
            </footer>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Layout;
