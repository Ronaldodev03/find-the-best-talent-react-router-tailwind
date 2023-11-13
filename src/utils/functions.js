import { redirect } from "react-router-dom";

export async function submitDataForm(data) {
  console.log(data);

  /* -------------------FETCH TO BACKEND---------------------- */

  return redirect("/success");
}
