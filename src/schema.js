// Here goes the schema for the form
import * as yup from "yup";
export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),

  phone: yup
    .string()
    .required("phone number is required")
    .min(10, "Phone number must be 10 char long"),

  size: yup.string().oneOf(["small", "med", "lg", "xl"]),
  sauce: yup.string().required("must choose one"),

  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  threeCheese: yup.boolean(),
  extraCheese: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  pineapple: yup.boolean(),

  textarea: yup.string(),
});
