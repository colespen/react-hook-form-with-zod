import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z
  .object({
    firstName: z.string().min(1, { message: "Firstname is required" }),
    lastName: z.string().min(1, { message: "Lastname is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.literal(true, {
      // every schema can have error map, used to customize err msg
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

type ValidationSchema = z.infer<typeof validationSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form className="px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-[#444351] focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-[#444351] focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-[#d1d1d1]"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-[#444351] focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-[#444351] focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline placeholder:text-slate-400"
            id="password"
            type="password"
          />
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-[#d1d1d1]"
            htmlFor="c_password"
          >
            Confirm Password
          </label>
          <input
            className="bg-[#242424] w-full px-3 py-2 text-sm leading-tight text-[#d1d1d1] border-2 border-[#444351] focus:border-slate-600 rounded appearance-none focus:outline-none focus:shadow-outline"
            id="c_password"
            type="password"
          />
        </div>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="terms" className="bg-[#242424]" />
        <label
          htmlFor="terms"
          className="ml-2 mb-2 text-sm font-bold text-[#d1d1d1]"
        >
          Accept Terms & Conditions
        </label>
      </div>
      <div className="mb-6 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register Account
        </button>
      </div>
      <hr className="mb-6 border-t-2 border-slate-600" />
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          href="#"
        >
          Already have an account? Login!
        </a>
      </div>
    </form>
  );
};

export default Form;
