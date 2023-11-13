const NotFound = () => {
  return (
    <div className=" relative ">
      <div className="paddingX ">
        <h1 className=" relative z-10 my-[max(5rem,30vh)] rounded-md bg-secondaryDarkerGreen p-3 text-center text-[clamp(0.875rem,3.5vw,1.5rem)] font-extrabold leading-5 dark:text-white md:leading-normal">
          ERROR: 404 NOT FOUND
        </h1>
      </div>

      {/* bg-img*/}
      <div className="paddingXBg  ">
        <div className="relative">
          <div className=" bgImgHomeHero02 h-[6.25rem] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
