import { redirect } from "react-router-dom";
import { submitDataForm } from "../utils/functions";

export async function action({ request }) {
  const formData = await request.formData();

  // A way of getting the data.
  const data = Object.fromEntries(formData);
  // console.log(data);
  const email = formData.get("email");

  // Validation for required fields
  const errors = [];

  Object.entries(data).forEach(([fieldName, value]) => {
    if (value.trim() === "") {
      errors.push(`${fieldName} is required`);
    } else {
      errors.push("valid");
    }
  });

  // Validation for email
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  if (!regex.test(email)) {
    errors.push("invalid email");
  } else {
    errors.push("valid");
  }

  if (errors.every((error) => error === "valid")) {
    submitDataForm(data);
    return redirect("/success");
  }
  return errors;
}
