import { RegisterOptions } from "react-hook-form";
import { ContactFormValues } from "@/types/common";

export const contactValidationRules: {
  [K in keyof ContactFormValues]: RegisterOptions<ContactFormValues, K>;
} = {
  name: { required: "Name is required" },
  phone: {
    required: "Phone number is required",
    minLength: { value: 8, message: "Phone number is too short" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i,
      message: "A valid email is required",
    },
  },
  message: {
    required: "Message is required",
    minLength: { value: 10, message: "Message is too short" },
  },
};
