"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "@/providers/AuthProvider";
import Swal from "sweetalert2";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Login = () => {
  const { signInWithUser, signInWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // Email/Password Login
  const onSubmit = (data) => {
    signInWithUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Login Successful 🎉",
          text: "Welcome back!",
          icon: "success",
        }).then(() => {
          router.push("/"); // redirect to home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed ❌",
          text: error.message,
          icon: "error",
        });
      });
  };

  // Google Login
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: "Google Login Success 🎉",
          text: "Welcome!",
          icon: "success",
        }).then(() => {
          router.push("/"); // redirect to home
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed ❌",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="w-full border p-3 rounded-lg outline-none"
          />

          {/* Password */}
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter password"
            className="w-full border p-3 rounded-lg outline-none"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg mt-4 hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl" />
          Sign In With Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
