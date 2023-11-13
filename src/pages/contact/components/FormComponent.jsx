/* eslint-disable react/prop-types */
import { formInputs } from "../../../data";
const FormComponent = ({ errors }) => {
  return (
    <div className="pt-8 lg:pt-0">
      {formInputs.map((input, index) => (
        <div key={index}>
          <input
            type={input.type}
            className={`${
              (errors && errors[index] !== "valid") ||
              (errors &&
                errors[errors.length - 1] === "invalid email" &&
                input.name === "email")
                ? "border-b-solid block  w-full appearance-none border-b border-primaryLight bg-primaryDark pb-4  pl-4 pt-6 text-[0.9375rem]  font-semibold leading-[1.5625rem] tracking-[-0.0071875rem] text-white placeholder-primaryLight/60 outline-none"
                : " border-b-solid block w-full appearance-none border-b border-white bg-primaryDark pb-4  pl-4 pt-6 text-[0.9375rem]  font-semibold leading-[1.5625rem] tracking-[-0.0071875rem] text-white placeholder-white/60 outline-none "
            }`}
            placeholder={input.placeholder}
            name={input.name}
          />
          {errors && errors[index] !== "valid" && (
            <p className="pl-4 pt-2 text-[0.625rem] font-bold italic text-primaryLight ">
              this field is required
            </p>
          )}
          {input.name === "email" &&
            errors &&
            errors[index] === "valid" &&
            errors[errors.length - 1] === "invalid email" && (
              <p className="pl-4 pt-2 text-[0.625rem] font-bold italic text-primaryLight ">
                Invalid Email
              </p>
            )}
        </div>
      ))}
    </div>
  );
};
export default FormComponent;
