import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action = (store) => async () => {
  console.log(store);
  return null;
};

const CheckoutForm = () => {
  return <h1 className="checkout"></h1>;
};

export default CheckoutForm;
