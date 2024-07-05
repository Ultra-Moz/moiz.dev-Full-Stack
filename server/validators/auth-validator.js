const { z } = require("zod");

const signUpScheme = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(255, { message: "Name must be not more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters" })
    .max(1024, { message: "Password must be not more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(8, { message: "Phone number must be atleast 8 characters" })
    .max(20, { message: "Phone number must be not more than 20 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email address" })
    .min(3, { message: "Email must be atleast 3 characters" })
    .max(255, { message: "Email must be not more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters" })
    .max(1024, { message: "Password must be not more than 255 characters" }),
});

module.exports = { signUpScheme, loginSchema };
