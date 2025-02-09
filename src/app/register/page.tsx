/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    // console.log(data);

    try {
      const res = await registerUser(data);
      if (res.success) {
        toast.success(res.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Failed to register");
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl font-bold mb-5">
        Register <span className="text-teal-500">Now</span>
      </h1>
      <div className="items-center">
        <div className="w-[40%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="User Name"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded "
                required
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
              >
                Register
              </button>
            </div>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link className="text-teal-500 hover:underline" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
