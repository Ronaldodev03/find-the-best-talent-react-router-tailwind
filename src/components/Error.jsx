/* eslint-disable react/prop-types */
const Error = ({ children }) => {
  return (
    <div className="paddingX relative z-10 text-center text-[clamp(0.875rem,3.5vw,1.5rem)] ">
      <h1 className=" my-[max(5rem,30vh)] rounded-md bg-red-600 p-3 text-center text-[clamp(0.875rem,3.5vw,1.5rem)] font-extrabold leading-5 dark:text-white md:leading-normal">
        {children}
      </h1>
    </div>
  );
};

export default Error;
